import { useState, useRef, useEffect } from 'react'
import styles from './ShaderCanvas.module.css'

export default function ShaderCanvas({ onReadyChange }) {
  const canvasRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [renderer, setRenderer] = useState('waiting')
  const disposeRef = useRef(() => { })
  const unmountedRef = useRef(false)
  const idleIdRef = useRef(undefined)
  const timerIdRef = useRef(undefined)
  const onReadyChangeRef = useRef(onReadyChange)

  useEffect(() => { onReadyChangeRef.current = onReadyChange })

  useEffect(() => {
    unmountedRef.current = false

    function setState(state) {
      setRenderer(state)
      const isReady = state === 'galacean-watercolor'
      setReady(isReady)
      onReadyChangeRef.current?.(isReady)
    }

    async function start() {
      if (unmountedRef.current) return
      setState('loading')
      try {
        const { mountWatercolor } = await import('../../effects/watercolor.js')
        if (unmountedRef.current) return
        disposeRef.current = mountWatercolor(canvasRef.current, setState)
      } catch (error) {
        if (unmountedRef.current) return
        setState('static-error')
        console.error('Watercolor module failed to load:', error)
      }
    }

    function scheduleStart() {
      if ('requestIdleCallback' in window) {
        idleIdRef.current = requestIdleCallback(start, { timeout: 2000 })
      } else {
        timerIdRef.current = setTimeout(start, 0)
      }
    }

    // The static homepage and its resources take priority over the optional engine.
    if (document.readyState === 'complete') scheduleStart()
    else window.addEventListener('load', scheduleStart, { once: true })

    return () => {
      unmountedRef.current = true
      window.removeEventListener('load', scheduleStart)
      if (idleIdRef.current !== undefined) cancelIdleCallback(idleIdRef.current)
      clearTimeout(timerIdRef.current)
      disposeRef.current()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`${styles['shader-canvas']} ${ready ? styles.ready : ''}`}
      data-renderer={renderer}
      aria-hidden="true"
    ></canvas>
  )
}

import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './HeroCursor.module.css'

export default function HeroCursor() {
  const anchorRef = useRef(null)
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [mounted, setMounted] = useState(false)
  const cleanupRef = useRef(() => { })

  useEffect(() => {
    const hero = anchorRef.current.parentElement
    const finePointer = window.matchMedia('(min-width: 701px) and (hover: hover) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const activeClass = 'seeconf-hero-cursor-active'
    let visible = false
    let frameId = 0
    let lastFrame = 0
    let pointerX = 0
    let pointerY = 0
    let ringX = 0
    let ringY = 0

    setMounted(true)

    const hide = () => {
      visible = false
      hero.classList.remove(activeClass)
      cursorRef.current?.classList.remove('is-visible')
      cancelAnimationFrame(frameId)
      frameId = 0
      lastFrame = 0
    }

    const isOverHero = () => {
      const target = document.elementFromPoint(pointerX, pointerY)
      return target !== null && hero.contains(target)
    }

    const draw = (now) => {
      if (!isOverHero()) {
        hide()
        return
      }
      const dt = lastFrame ? (now - lastFrame) / 1000 : 0
      const follow = 1 - Math.exp(-11 * dt)
      lastFrame = now
      ringX += (pointerX - ringX) * follow
      ringY += (pointerY - ringY) * follow
      dotRef.current.style.transform = `translate3d(${pointerX - 2}px, ${pointerY - 2}px, 0)`
      ringRef.current.style.transform = `translate3d(${ringX - 24}px, ${ringY - 24}px, 0)`
      frameId = requestAnimationFrame(draw)
    }

    const onPointer = (event) => {
      if (!cursorRef.current) return
      if (event.pointerType !== 'mouse' || !finePointer.matches || reducedMotion.matches || document.hidden) {
        hide()
        return
      }
      pointerX = event.clientX
      pointerY = event.clientY
      if (!isOverHero()) {
        hide()
        return
      }
      if (!visible) {
        visible = true
        ringX = pointerX
        ringY = pointerY
        hero.classList.add(activeClass)
        cursorRef.current.classList.add('is-visible')
        draw(performance.now())
      }
    }

    const onViewportChange = () => {
      if (visible && !isOverHero()) hide()
    }
    const onVisibilityChange = () => {
      if (document.hidden) hide()
    }

    window.addEventListener('pointermove', onPointer, { passive: true })
    window.addEventListener('pointerover', onPointer, { passive: true })
    window.addEventListener('pointerdown', onPointer, { passive: true })
    window.addEventListener('scroll', onViewportChange, { passive: true, capture: true })
    window.addEventListener('resize', onViewportChange, { passive: true })
    window.addEventListener('blur', hide)
    document.addEventListener('pointerleave', hide)
    document.addEventListener('visibilitychange', onVisibilityChange)
    finePointer.addEventListener('change', hide)
    reducedMotion.addEventListener('change', hide)

    cleanupRef.current = () => {
      hide()
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('pointerover', onPointer)
      window.removeEventListener('pointerdown', onPointer)
      window.removeEventListener('scroll', onViewportChange, true)
      window.removeEventListener('resize', onViewportChange)
      window.removeEventListener('blur', hide)
      document.removeEventListener('pointerleave', hide)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      finePointer.removeEventListener('change', hide)
      reducedMotion.removeEventListener('change', hide)
    }

    return () => cleanupRef.current()
  }, [])

  return (
    <>
      <span ref={anchorRef} hidden aria-hidden="true"></span>
      {mounted && createPortal(
        <div ref={cursorRef} className={styles['hero-cursor']} aria-hidden="true">
          <i ref={dotRef} className={styles['hero-cursor-dot']}></i>
          <span ref={ringRef} className={styles['hero-cursor-ring']}></span>
        </div>,
        document.body
      )}
    </>
  )
}

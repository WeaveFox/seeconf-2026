import { useState, useRef, useEffect } from 'react'
import styles from './TransitionOutIn.module.css'

/**
 * 复刻 Vue <Transition mode="out-in"> 的行为：
 * 1. trigger 变化时，先保留旧 content 并淡出（leaving）
 * 2. 淡出完成后，切换到新 content 并淡入（entering）
 * 3. 淡入完成后，回到空闲状态（idle）
 *
 * 关键：仅在淡出阶段冻结旧内容，其余阶段直接渲染最新 children，
 * 这样 children 自身的更新（如展开/折叠）不受过渡组件影响。
 */
export default function TransitionOutIn({ trigger, children, duration = 200, className = '' }) {
  const [display, setDisplay] = useState({ content: children, phase: 'idle' })
  const prevTriggerRef = useRef(trigger)
  const timersRef = useRef([])

  useEffect(() => {
    if (trigger !== prevTriggerRef.current) {
      prevTriggerRef.current = trigger

      // Phase 1: 保留旧内容，淡出
      setDisplay(d => ({ content: d.content, phase: 'leaving' }))

      const t1 = setTimeout(() => {
        // Phase 2: 切换到新内容，淡入
        setDisplay({ content: children, phase: 'entering' })

        const t2 = setTimeout(() => {
          // Phase 3: 空闲
          setDisplay(d => ({ content: d.content, phase: 'idle' }))
        }, duration)

        timersRef.current.push(t2)
      }, duration)

      timersRef.current.push(t1)
    }

    return () => {
      timersRef.current.forEach(clearTimeout)
      timersRef.current = []
    }
  }, [trigger, duration]) // eslint-disable-line react-hooks/exhaustive-deps

  // trigger 在本次渲染中刚变化（effect 还没来得及更新 ref），
  // 或者正处于淡出阶段 → 冻结旧内容；否则直接渲染最新 children
  const triggerChanged = trigger !== prevTriggerRef.current
  const showFrozen = display.phase === 'leaving' || triggerChanged
  const displayContent = showFrozen ? display.content : children

  const phaseClass =
    display.phase === 'leaving' ? styles.leaving :
      display.phase === 'entering' ? styles.entering : ''

  return (
    <div className={`${className} ${phaseClass}`.trim()}>
      {displayContent}
    </div>
  )
}

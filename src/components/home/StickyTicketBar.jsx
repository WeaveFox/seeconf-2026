import { useState, useMemo, useEffect } from 'react'
import { ticketBuyUrl, getActiveTicketTier, getCountdown, getUrgencyLevel, pad2 } from '../../data.js'
import styles from './StickyTicketBar.module.css'

const emptyCountdown = { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }

export default function StickyTicketBar() {
  const [activeTier, setActiveTier] = useState(() => getActiveTicketTier())
  const [countdown, setCountdown] = useState(emptyCountdown)
  const [visible, setVisible] = useState(false)

  const urgencyLevel = useMemo(() => activeTier ? getUrgencyLevel(activeTier.endDate) : 'none', [activeTier])
  const showCountdown = useMemo(() => !!activeTier && urgencyLevel !== 'none', [activeTier, urgencyLevel])
  const isUrgent = useMemo(() => urgencyLevel === 'high' || urgencyLevel === 'critical', [urgencyLevel])
  const urgencyClass = styles[`urgency-${urgencyLevel}`] || ''

  const countdownText = useMemo(() => {
    const c = countdown
    if (c.days > 0) return `${c.days}天 ${pad2(c.hours)}:${pad2(c.minutes)}:${pad2(c.seconds)}`
    return `${pad2(c.hours)}:${pad2(c.minutes)}:${pad2(c.seconds)}`
  }, [countdown])

  useEffect(() => {
    const updateCountdown = () => {
      const tier = getActiveTicketTier()
      setActiveTier(tier)
      setCountdown(tier ? getCountdown(tier.endDate) : emptyCountdown)
    }

    updateCountdown()
    const countdownTimer = setInterval(updateCountdown, 1000)

    const checkScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight
      const footer = document.querySelector('footer')
      const footerTop = footer ? footer.offsetTop : Infinity
      setVisible(scrollY > heroHeight * 0.8 && scrollY + window.innerHeight < footerTop)
    }

    const scrollHandler = () => {
      requestAnimationFrame(checkScroll)
    }
    window.addEventListener('scroll', scrollHandler, { passive: true })
    checkScroll()

    return () => {
      clearInterval(countdownTimer)
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const shouldShow = visible && activeTier

  return (
    <div className={`${styles['sticky-ticket-bar']} ${shouldShow ? styles.show : ''} ${urgencyClass}`}>
      <div className={styles['bar-inner']}>
        <div className={styles['bar-info']}>
          {activeTier?.badge && <span className={styles['bar-badge']}>{activeTier.badge}</span>}
          <span className={styles['bar-tier-name']}>{activeTier?.name}</span>
          <span className={styles['bar-price']}>¥{activeTier?.price}</span>
          {activeTier?.originalPrice && <span className={styles['bar-price-strike']}>¥{activeTier.originalPrice}</span>}
          {showCountdown && (
            <span className={styles['bar-countdown']}>
              <span className={styles['bar-countdown-label']}>仅剩</span>
              <span className={styles['bar-countdown-time']}>{countdownText}</span>
            </span>
          )}
        </div>
        <a
          href={ticketBuyUrl}
          target="_blank"
          rel="noopener"
          className={`${styles['bar-buy-btn']} ${isUrgent ? styles.urgent : ''}`}
        >
          立即购票<span className={styles['bar-arrow']}>↗</span>
        </a>
      </div>
    </div>
  )
}

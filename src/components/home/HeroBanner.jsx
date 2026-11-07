import { useState, useMemo, useEffect, useRef } from 'react'
import { conferenceInfo, ticketBuyUrl, getActiveTicketTier, getCountdown, getUrgencyLevel, pad2 } from '../../data.js'
import ShaderCanvas from './ShaderCanvas.jsx'
import HeroCursor from './HeroCursor.jsx'
import styles from './HeroBanner.module.css'

const titleParts = [conferenceInfo.title.slice(0, 6), conferenceInfo.title.slice(6)]
const emptyCountdown = { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }

export default function HeroBanner() {
  const [watercolorReady, setWatercolorReady] = useState(false)
  const [enableWatercolor, setEnableWatercolor] = useState(false)
  const mobileMediaRef = useRef(null)
  const [activeTier, setActiveTier] = useState(() => getActiveTicketTier())
  const [countdown, setCountdown] = useState(emptyCountdown)
  const countdownTimerRef = useRef(null)

  const updateWatercolor = () => {
    const enable = !mobileMediaRef.current.matches
    setEnableWatercolor(enable)
    if (!enable) setWatercolorReady(false)
  }

  const urgencyLevel = useMemo(() => activeTier ? getUrgencyLevel(activeTier.endDate) : 'none', [activeTier])
  const showCountdown = useMemo(() => !!activeTier && urgencyLevel !== 'none', [activeTier, urgencyLevel])
  const isUrgent = useMemo(() => urgencyLevel === 'high' || urgencyLevel === 'critical', [urgencyLevel])
  const urgencyClass = styles[`urgency-${urgencyLevel}`] || ''

  const updateCountdown = () => {
    const tier = getActiveTicketTier()
    setActiveTier(tier)
    setCountdown(tier ? getCountdown(tier.endDate) : emptyCountdown)
  }

  const scrollTo = (anchor) => {
    const el = document.getElementById(anchor)
    if (el) el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  }

  const onControlContextMenu = (event) => {
    if (event.pointerType === 'touch' || matchMedia('(hover: none) and (pointer: coarse)').matches) {
      event.preventDefault()
    }
  }

  useEffect(() => {
    mobileMediaRef.current = window.matchMedia('(max-width: 768px), (pointer: coarse)')
    updateWatercolor()
    mobileMediaRef.current.addEventListener('change', updateWatercolor)
    updateCountdown()
    countdownTimerRef.current = setInterval(updateCountdown, 1000)

    return () => {
      mobileMediaRef.current?.removeEventListener('change', updateWatercolor)
      clearInterval(countdownTimerRef.current)
    }
  }, [])

  return (
    <section id="hero" className={`${styles.hero} ${watercolorReady ? 'hero-watercolor-ready' : ''}`}>
      {enableWatercolor && <ShaderCanvas onReadyChange={(isReady) => setWatercolorReady(isReady)} />}
      {enableWatercolor && <HeroCursor />}
      {enableWatercolor && <div className={styles['hero-interaction']} aria-hidden="true" />}
      {/* Main hero text */}
      <div className={styles['hero-title']}>
        <h1><span className={styles['h1-word']}>SEE</span> <span className={styles['h1-word']}>Conf</span></h1>
        <div className={styles['hero-text-body']}>
          <p className={styles['hero-name']}>
            {titleParts.map((part, i) => (
              <span key={i} className={styles['hero-name-part']}>{part}</span>
            ))}
          </p>
          <p className={styles['hero-description']}>{conferenceInfo.slogan}</p>
        </div>
        <div className={styles['hero-cta']}>
          <a
            className={`${styles['hero-buy-btn']} ${urgencyClass}`}
            href={ticketBuyUrl}
            target="_blank"
            rel="noopener"
            onContextMenu={onControlContextMenu}
          >
            <span className={styles['btn-label']}>立即购票<span className={styles['btn-arrow']}>↗</span></span>
            {showCountdown && (
              <span className={styles['btn-sub']}>
                <span className={styles['countdown-dot']}></span>早鸟票&nbsp;<b className={styles['btn-price']}>¥{activeTier.price}</b>&nbsp;{activeTier.originalPrice && <s className={styles['btn-price-strike']}>¥{activeTier.originalPrice}</s>}&nbsp;·&nbsp;仅剩&nbsp;{countdown.days > 0 && <span>{countdown.days}&nbsp;天&nbsp;</span>}{pad2(countdown.hours)}:{pad2(countdown.minutes)}:{pad2(countdown.seconds)}
              </span>
            )}
          </a>
          <p className={styles['hero-date']}><span className={styles['date-loc']}>杭州 · 蚂蚁 A 空间</span><span className={styles['date-sep']}> / </span>{conferenceInfo.date}</p>
        </div>
      </div>

      <button className={styles['hero-scroll-hint']} data-hero-scroll type="button" onClick={() => scrollTo('agenda')} onContextMenu={onControlContextMenu}>
        <span>向下滚动探索</span>
        <span className={styles['scroll-arrow']} aria-hidden="true" />
      </button>
    </section>
  )
}

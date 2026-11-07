import { useState, useRef, useMemo, useEffect } from 'react'
import { navItems, conferenceInfo, pastConferences, ticketBuyUrl, getActiveTicketTier, getUrgencyLevel } from '../../data.js'
import styles from './TheNavbar.module.css'

export default function TheNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [pastFirstScreen, setPastFirstScreen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [pastDropdownOpen, setPastDropdownOpen] = useState(false)
  const scrollTimerRef = useRef(null)
  const isAutoScrollingRef = useRef(false)
  const navbarRef = useRef(null)

  // 票务紧迫度（当前未在模板中使用，保留以备恢复购票按钮）
  const activeTier = useMemo(() => getActiveTicketTier(), [])
  const isUrgent = useMemo(() => {
    const tier = activeTier
    if (!tier) return false
    const level = getUrgencyLevel(tier.endDate)
    return level === 'high' || level === 'critical'
  }, [activeTier])

  const scrollTo = (anchor) => {
    const el = document.getElementById(anchor)
    if (el) {
      isAutoScrollingRef.current = true
      el.scrollIntoView({ behavior: 'smooth' })
      history.replaceState(null, '', `#${anchor}`)
      setTimeout(() => { isAutoScrollingRef.current = false }, 800)
    }
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    const updateHashByScroll = () => {
      const sections = navItems.map(item => ({ id: item.anchor, el: document.getElementById(item.anchor) }))
      const viewportCenter = window.scrollY + window.innerHeight / 2
      let closest = null
      let closestDist = Infinity
      for (const s of sections) {
        if (!s.el) continue
        const top = s.el.offsetTop
        const bottom = top + s.el.offsetHeight
        if (viewportCenter >= top && viewportCenter <= bottom) {
          closest = s.id
          break
        }
        const dist = Math.min(Math.abs(top - viewportCenter), Math.abs(bottom - viewportCenter))
        if (dist < closestDist) {
          closestDist = dist
          closest = s.id
        }
      }
      if (closest && window.location.hash !== `#${closest}`) {
        history.replaceState(null, '', `#${closest}`)
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
      setPastFirstScreen(window.scrollY > window.innerHeight * 0.8)
      if (!isAutoScrollingRef.current) {
        clearTimeout(scrollTimerRef.current)
        scrollTimerRef.current = setTimeout(updateHashByScroll, 100)
      }
    }

    const closePastDropdown = () => {
      setPastDropdownOpen(false)
    }

    const handleOutsideClick = (e) => {
      setMobileMenuOpen(prev => {
        if (prev && navbarRef.current && !navbarRef.current.contains(e.target)) {
          return false
        }
        return prev
      })
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', closePastDropdown)
    document.addEventListener('click', handleOutsideClick)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', closePastDropdown)
      document.removeEventListener('click', handleOutsideClick)
      clearTimeout(scrollTimerRef.current)
    }
  }, [])

  return (
    <header ref={navbarRef} className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles['navbar-inner']}>
        <div className={styles.logo}>
          <img className={styles['logo-img']} src="https://mdn.alipayobjects.com/huamei_m96plz/afts/img/9_q5Rp7HjuMAAAAAQSAAAAgADiiDAQFr/original" alt="SEE Conf 2026" />
        </div>

        <nav className={`${styles['nav-links']} ${mobileMenuOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <a key={item.anchor} onClick={() => scrollTo(item.anchor)} className={styles['nav-link']}>
              {item.label}
            </a>
          ))}

          {/* 往届回顾下拉 */}
          <div
            className={styles['nav-dropdown']}
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setPastDropdownOpen(true)}
            onMouseLeave={() => setPastDropdownOpen(false)}
          >
            <span className={`${styles['nav-link']} ${styles['dropdown-trigger']}`} onClick={() => setPastDropdownOpen(prev => !prev)}>
              往届回顾
              <svg className={`${styles['dropdown-arrow']} ${pastDropdownOpen ? styles.open : ''}`} viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
            <div className={`${styles['dropdown-menu']} ${pastDropdownOpen ? styles.show : ''}`}>
              {pastConferences.map((conf) => (
                <a key={conf.year} className={styles['dropdown-item']} href={conf.url} target="_blank" rel="noopener">
                  {conf.year}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* <a className={`${styles['nav-buy-btn']} ${pastFirstScreen ? styles.show : ''} ${isUrgent ? styles.urgent : ''}`} href={ticketBuyUrl} target="_blank" rel="noopener">立即购票<span className={styles['nav-btn-arrow']}>↗</span></a> */}

        <button className={styles['mobile-toggle']} onClick={() => setMobileMenuOpen(prev => !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* <a className={`${styles['nav-buy-btn-mobile']} ${pastFirstScreen ? styles.show : ''} ${isUrgent ? styles.urgent : ''}`} href={ticketBuyUrl} target="_blank" rel="noopener">立即购票<span className={styles['nav-btn-arrow']}>↗</span></a> */}
      </div>
    </header>
  )
}

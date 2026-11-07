import { useState, useEffect } from 'react'
import { specialGuests } from '../../data.js'
import styles from './SpecialGuestsSection.module.css'

export default function SpecialGuestsSection() {
  // 跟踪当前栅格列数，移动端 2 列、平板 3 列、桌面 4 列
  const [cols, setCols] = useState(4)

  const updateCols = () => {
    const w = window.innerWidth
    setCols(w <= 1024 ? (w <= 768 ? 2 : 3) : 4)
  }

  useEffect(() => {
    updateCols()
    window.addEventListener('resize', updateCols)
    return () => window.removeEventListener('resize', updateCols)
  }, [])

  const isBlueAvatar = (index) => {
    const row = Math.floor(index / cols)
    const col = index % cols
    return (row + col) % 2 === 0
  }

  const getAvatar = (index) => {
    const guest = specialGuests[index]
    return (isBlueAvatar(index) ? guest.avatarBlue : guest.avatarRed) || guest.avatarBlue || guest.avatarRed
  }

  return (
    <section id="guests" className={styles.guests}>
      <div className="container">
        <div className={styles['section-header']}>
          <span className={styles['section-tag']}>GUESTS / 2026</span>
          <h2 className={`section-title ${styles['section-title']}`}>特邀嘉宾</h2>
        </div>

        <div className={styles['guests-grid']}>
          {specialGuests.map((guest, index) => (
            <div
              key={index}
              className={`${styles['guest-card']} ${isBlueAvatar(index) ? styles['guest-card--blue'] : styles['guest-card--red']}`}
            >
              <img
                className={styles['guest-avatar']}
                src={getAvatar(index)}
                alt="特邀嘉宾头像"
              />
              <p className={styles['guest-name']}>
                <span>{guest.name}</span>
                <span className={styles['guest-nickname']}>{guest.nickname}</span>
              </p>
              <p className={styles['guest-bio']}>{guest.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

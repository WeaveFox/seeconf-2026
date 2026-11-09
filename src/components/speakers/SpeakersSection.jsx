import { useState, useEffect, useMemo } from 'react'
import { agendaData, sessions } from '../../data.js'
import styles from './SpeakersSection.module.css'

// 从 sessions 构建 track 信息映射
const trackInfo = sessions.reduce((acc, s) => {
  acc[s.id] = {
    label: s.id === 'main' ? s.name : s.subtitle,
    color: s.color,
  }
  return acc
}, {})

// 去掉多讲者标题中的「花名：」前缀
function cleanTitle(title) {
  const idx = title.indexOf('：')
  return idx >= 0 ? title.substring(idx + 1).trim() : title.trim()
}

// 从「姓名（花名）」中解析出姓名和花名
function parseName(raw) {
  const match = raw.match(/（(.+?)）/);
  if (match) {
    return { name: raw.replace(/（.+?）/, '').trim(), nickname: match[1] }
  }
  return { name: raw.trim(), nickname: '' }
}

// 从 agendaData 中提取所有分享者（含多讲者拆分）
function extractAllSpeakers() {
  const speakers = []
  for (const session of sessions) {
    const items = agendaData[session.id]
    if (!items) continue
    const track = trackInfo[session.id]
    for (const item of items) {
      if (!item.speaker) continue
      const isMulti = Array.isArray(item.avatarBlue)
      if (isMulti) {
        const names = item.speaker.split('、')
        const titles = item.speakerTitle.split(' / ')
        for (let i = 0; i < names.length; i++) {
          const parsed = parseName(names[i])
          speakers.push({
            name: parsed.name,
            nickname: parsed.nickname,
            speakerTitle: cleanTitle(titles[i] || ''),
            avatarBlue: item.avatarBlue[i] || '',
            avatarRed: item.avatarRed[i] || item.avatarBlue[i] || '',
          })
        }
      } else {
        const parsed = parseName(item.speaker)
        speakers.push({
          name: parsed.name,
          nickname: parsed.nickname,
          speakerTitle: item.speakerTitle,
          avatarBlue: item.avatarBlue || '',
          avatarRed: item.avatarRed || item.avatarBlue || '',
        })
      }
    }
  }
  return speakers
}

export default function SpeakersSection() {
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

  const allSpeakers = useMemo(() => extractAllSpeakers(), [])

  const isBlueAvatar = (index) => {
    const row = Math.floor(index / cols)
    const col = index % cols
    return (row + col) % 2 === 0
  }

  const getAvatar = (speaker, index) => {
    return (isBlueAvatar(index) ? speaker.avatarBlue : speaker.avatarRed) || speaker.avatarBlue || speaker.avatarRed
  }

  return (
    <section id="speakers" className={styles.speakers}>
      <div className="container">
        <div className={styles['section-header']}>
          <span className={styles['section-tag']}>SPEAKERS / 2026</span>
          <h2 className={`section-title ${styles['section-title']}`}>分享嘉宾</h2>
        </div>

        <div className={styles['speakers-grid']}>
          {allSpeakers.map((speaker, index) => {
            const avatar = getAvatar(speaker, index)
            const blue = isBlueAvatar(index)
            return (
              <div
                key={index}
                className={`${styles['speaker-card']} ${blue ? styles['speaker-card--blue'] : styles['speaker-card--red']}`}
              >
                {avatar ? (
                  <img
                    className={styles['speaker-avatar']}
                    src={avatar}
                    alt="分享嘉宾头像"
                  />
                ) : (
                  <div className={`${styles['speaker-avatar-placeholder']} ${blue ? styles['placeholder--blue'] : styles['placeholder--red']}`}>
                    {speaker.name.charAt(0)}
                  </div>
                )}
                <p className={styles['speaker-name']}>
                  <span>{speaker.name}</span>
                  {speaker.nickname && (
                    <span className={styles['speaker-nickname']}>{speaker.nickname}</span>
                  )}
                </p>
                <p className={styles['speaker-bio']}>{speaker.speakerTitle}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

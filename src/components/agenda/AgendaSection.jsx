import { useState, useMemo, useEffect } from 'react'
import { sessions, agendaData } from '../../data.js'
import styles from './AgendaSection.module.css'
import TransitionOutIn from './TransitionOutIn.jsx'

const avatarRed = 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/IKJ3RJtJL_QAAAAAQmAAAAgADiiDAQFr/original'
const avatarBlue = 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/iL5aSretd-wAAAAAQbAAAAgADiiDAQFr/original'

const mainCardBg = 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/YnoYS6mJZPQAAAAASrAAAAgADiiDAQFr/original'
const topicCardBg1 = 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/HJEzSZLc6v8AAAAASeAAAAgADiiDAQFr/original'
const topicCardBg2 = 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/h4MnT4QBTVcAAAAAREAAAAgADiiDAQFr/original'

const getCardBg = (index) => {
  if (index === 0) return mainCardBg
  return (index - 1) % 2 === 0 ? topicCardBg1 : topicCardBg2
}

const checkAvatarVal = (v) => Array.isArray(v) ? v.length > 0 : !!v

const hasAvatar = (item) => checkAvatarVal(item.avatarBlue) || checkAvatarVal(item.avatarRed)

const hasSpeaker = (item) => item.speaker || hasAvatar(item)

const isBreak = (item) => /茶歇/.test(item.title || '')

const isLongDesc = (item) => item.description && item.description.length >= 100

export default function AgendaSection() {
  const [activeSession, setActiveSession] = useState('main')
  const [expandedItems, setExpandedItems] = useState(new Set())

  const globalOffset = useMemo(() => {
    let count = 0
    for (const session of sessions) {
      if (session.id === activeSession) break
      for (const item of (agendaData[session.id] || [])) {
        if (!isBreak(item)) count++
      }
    }
    return count
  }, [activeSession])

  const currentAgenda = useMemo(() => agendaData[activeSession] || [], [activeSession])

  const currentSession = useMemo(() => sessions.find(s => s.id === activeSession) || {}, [activeSession])

  // 茶歇条目不参与红蓝交替计数，其余条目均参与（含无演讲者节点）
  const speakerIndexMap = useMemo(() => {
    const map = []
    let count = 0
    for (const item of currentAgenda) {
      map.push(count)
      if (!isBreak(item)) count++
    }
    return map
  }, [currentAgenda])

  const getAvatarList = (item, localIndex) => {
    const speakerOffset = globalOffset + speakerIndexMap[localIndex]
    const blueVal = item.avatarBlue
    const redVal = item.avatarRed
    const blueArr = Array.isArray(blueVal) ? blueVal : (blueVal ? [blueVal] : [])
    const redArr = Array.isArray(redVal) ? redVal : (redVal ? [redVal] : [])
    const maxLen = Math.max(blueArr.length, redArr.length)
    if (maxLen === 0) {
      return [speakerOffset % 2 === 0 ? avatarBlue : avatarRed]
    }
    // 多分享者头像交替蓝红色
    const result = []
    for (let i = 0; i < maxLen; i++) {
      const isBlue = (speakerOffset + i) % 2 === 0
      if (isBlue) {
        result.push(blueArr[i] || redArr[i] || avatarBlue)
      } else {
        result.push(redArr[i] || blueArr[i] || avatarRed)
      }
    }
    return result
  }

  const getBadgeClass = (localIndex) => {
    const item = currentAgenda[localIndex]
    if (isBreak(item)) return 'badge-break'
    return (globalOffset + speakerIndexMap[localIndex]) % 2 === 0 ? 'badge-blue' : 'badge-red'
  }

  const selectSession = (id) => {
    setActiveSession(id)
    if (history.replaceState) {
      history.replaceState(null, '', `#agenda-${id}`)
    }
  }

  const itemKey = (index) => `${activeSession}-${index}`

  const isExpanded = (index) => expandedItems.has(itemKey(index))

  const toggleExpand = (index) => {
    const key = itemKey(index)
    setExpandedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(key)) {
        newSet.delete(key)
      } else {
        newSet.add(key)
      }
      return newSet
    })
  }

  const getGlowColor = (localIndex, avatarIdx = 0) => {
    const speakerOffset = globalOffset + speakerIndexMap[localIndex]
    const isBlue = (speakerOffset + avatarIdx) % 2 === 0
    return isBlue ? 'rgba(15, 131, 211, 0.28)' : 'rgba(243, 88, 76, 0.28)'
  }

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith('#agenda-')) {
        const id = hash.slice(7)
        if (sessions.some(s => s.id === id)) {
          setActiveSession(id)
          const el = document.getElementById(`agenda-${id}`)
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const hasSessionInfo = currentSession.description || (currentSession.producers && currentSession.producers.length > 0)

  return (
    <section id="agenda" className={styles.agenda}>
      <div className="container">
        <div className={styles['section-header']}>
          <span className={styles['section-tag']}>AGENDA / 2026</span>
          <h2 className={`section-title ${styles['section-title']}`}>会议议程</h2>
        </div>

        {/* 专题卡片（5张平铺） */}
        <div className={styles['session-cards']}>
          {sessions.map((session, index) => (
            <div
              key={session.id}
              id={`agenda-${session.id}`}
              className={`${styles['session-card']} ${activeSession === session.id ? styles.active : ''}`}
              style={{ '--card-bg': `url(${getCardBg(index)})` }}
              onClick={() => selectSession(session.id)}
            >
              <div className={styles['session-card-overlay']}>
                <p className={styles['session-type']}>{session.name}</p>
                <h3 className={styles['session-subtitle']}>{session.subtitle}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* 专题描述 + 出品人信息 */}
        <TransitionOutIn trigger={activeSession} className={styles['session-info']}>
          {hasSessionInfo && (
            <div className={styles['session-info-body']}>
              <div className={styles['session-info-producers']}>
                <h3 className={styles['session-info-title']}>出品人</h3>
                <div className={styles['session-info-producers-list']}>
                  {currentSession.producers?.map((producer, pi) => (
                    <div key={pi} className={styles['producer-item']}>
                      {(producer.avatarBlue || producer.avatarRed) && (
                        <img
                          className={styles['producer-avatar']}
                          style={{ '--glow-color': pi % 2 === 0 ? 'rgba(15, 131, 211, 0.28)' : 'rgba(243, 88, 76, 0.28)' }}
                          src={(pi % 2 === 0 ? producer.avatarBlue : producer.avatarRed) || producer.avatarBlue || producer.avatarRed}
                          alt="出品人头像"
                        />
                      )}
                      <div className={styles['producer-meta']}>
                        <strong>{producer.name}</strong>
                        <span>{producer.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {currentSession.description && (
                <div className={styles['session-info-content']}>
                  <p className={styles['session-info-desc']}>{currentSession.description}</p>
                </div>
              )}
            </div>
          )}
        </TransitionOutIn>

        {/* 纵向 timeline 议程列表 */}
        <TransitionOutIn trigger={activeSession} className={styles.timeline}>
          {currentAgenda.length > 0 && (
            <>
              <div className={styles['timeline-line']}></div>
              {currentAgenda.map((item, index) => (
                <div
                  key={index}
                  className={`${styles['timeline-item']} ${isLongDesc(item) ? styles['has-desc'] : ''}`}
                >
                  <span className={`${styles['timeline-badge']} ${styles[getBadgeClass(index)]}`}></span>
                  {item.time && (
                    <div className={styles['timeline-time-col']}>
                      <p className={styles['timeline-time']}>{item.time}</p>
                    </div>
                  )}
                  <div className={styles['timeline-content']}>
                    <h3 className={styles['timeline-title']}>{item.title}</h3>
                    {item.participants && (
                      <dl className={styles['timeline-participants']}>
                        {item.participants.map(({ role, names }) => (
                          <div key={role}>
                            <dt>{role}</dt>
                            <dd>{names}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                    {item.description && (
                      <p
                        className={`${styles['timeline-desc']} ${isExpanded(index) ? styles.expanded : ''} ${!isLongDesc(item) ? styles['no-clamp'] : ''}`}
                      >{item.description}</p>
                    )}
                    {isLongDesc(item) && (
                      <button className={styles['desc-toggle']} onClick={() => toggleExpand(index)}>
                        {isExpanded(index) ? '收起' : '详情'}
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          style={{ transform: isExpanded(index) ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {hasSpeaker(item) && (
                    <div className={styles['timeline-guest']}>
                      {hasAvatar(item) && (
                        <div className={styles['guest-avatars']}>
                          {getAvatarList(item, index).map((avatarUrl, avatarIdx) => (
                            <img
                              key={avatarIdx}
                              className={styles['guest-avatar']}
                              style={{ '--glow-color': getGlowColor(index, avatarIdx) }}
                              src={avatarUrl}
                              alt="嘉宾头像"
                            />
                          ))}
                        </div>
                      )}
                      {item.speaker && !item.participants && (
                        <div className={styles['guest-meta']}>
                          <strong>{item.speaker}</strong>
                          {item.speakerTitle && <span>{item.speakerTitle}</span>}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </TransitionOutIn>
      </div>
    </section>
  )
}

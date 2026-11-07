import { useState, useEffect } from 'react'
import styles from './GuideSection.module.css'

const mapDesktop = 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/0qPGRJO8Ge0AAAAAgCAAAAgADiiDAQFr/original'
const mapMobile = 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/8yoKTYkxXoMAAAAAccAAAAgADiiDAQFr/original'

const transportInfo = [
  {
    iconType: 'metro',
    title: '地铁',
    list: [
      '3 号线 • 古墩路站C口',
      '地下通道向南 500 米 3 号口',
      'A 空间 2 号楼 1 楼大厅',
    ],
  },
  {
    iconType: 'taxi',
    title: '乘车',
    list: [
      '蚂蚁 A 空间 2 号门',
      '或接送客平台访客区停车场',
    ],
  },
  {
    iconType: 'car',
    title: '自驾',
    list: [
      '美帆广场',
      '建议优先选择公共交通'
    ]
  },
]

export default function GuideSection() {
  const [isMobile, setIsMobile] = useState(false)

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  useEffect(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="guide" className={styles.guide}>
      <div className={`container ${styles.guideContainer}`}>
        <div className={styles['section-header']}>
          <span className={styles['section-tag']}>GUIDE / 2026</span>
          <h2 className={`section-title ${styles['section-title']}`}>参会指南</h2>
        </div>

        <div className={styles['guide-layout']}>
          <div className={styles['guide-left']}>
            <div className={styles['guide-left-inner']}>
              <p className={styles['guide-time']}>9:00-9:20</p>
              <p className={styles['guide-reminder']}>打印访客证 · 领取大会出行牌</p>
              <h2 className={styles['guide-hero-title']}>相聚，<br />现场见</h2>
            </div>
          </div>

          <div className={styles['guide-right']}>
            <a href="https://ditu.amap.com/ssr/place/B0GKN4522Z?id=B0GKN4522Z&maxHeight=800&mapOverviewRectPadding=%5Bobject%20Object%5D&fixedCloseButton=true&onlyShowSearchBar=true&hideDivider=true&fillInputFromParamsField=name&name=%E8%9A%82%E8%9A%81A%E7%A9%BA%E9%97%B4" target="_blank" rel="noopener">
              <img src={isMobile ? mapMobile : mapDesktop} alt="蚂蚁A空间地图" className={styles['guide-map']} />
            </a>
          </div>
        </div>

        <div className={styles['transport-grid']}>
          {transportInfo.map((item) => (
            <div key={item.title} className={styles['transport-card']}>
              <div className={styles['transport-header']}>
                <span className={styles['transport-icon']}>
                  {item.iconType === 'metro' ? (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="3" width="14" height="13" rx="3" />
                      <line x1="5" y1="9" x2="19" y2="9" />
                      <line x1="12" y1="3" x2="12" y2="9" />
                      <circle cx="9" cy="13" r="0.5" fill="currentColor" stroke="none" />
                      <circle cx="15" cy="13" r="0.5" fill="currentColor" stroke="none" />
                      <path d="M7 16l-2 4" />
                      <path d="M17 16l2 4" />
                    </svg>
                  ) : item.iconType === 'taxi' ? (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 2h4" />
                      <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
                      <path d="M7 14h.01" />
                      <path d="M17 14h.01" />
                      <rect width="18" height="8" x="3" y="10" rx="2" />
                      <path d="M5 18v2" />
                      <path d="M19 18v2" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                      <circle cx="7" cy="17" r="2" />
                      <path d="M9 17h6" />
                      <circle cx="17" cy="17" r="2" />
                    </svg>
                  )}
                </span>
                <h3 className={styles['transport-title']}>{item.title}</h3>
              </div>
              <p className={styles['transport-desc']}>{item.desc}</p>
              {item.list && (
                <ul className={styles['transport-list']}>
                  {item.list.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

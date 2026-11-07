import { exhibitions } from '../../data.js'
import styles from './ExpoSection.module.css'

export default function ExpoSection() {
  return (
    <section id="expo" className={styles.expo}>
      <div className="container">
        <div className={styles['section-header']}>
          <span className={styles['section-tag']}>EXHIBITION / 2026</span>
          <h2 className={`section-title ${styles['section-title']}`}>特色展台</h2>
        </div>

        <div className={styles['expo-grid']}>
          {exhibitions.map((item, index) => {
            const className = styles['expo-card']
            const content = (
              <div className={styles['expo-card-overlay']}>
                <div className={styles['expo-card-top']}>
                  <div className={styles['expo-brand']}>
                    <span className={styles['expo-icon']}>
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={item.name}
                          className={styles['expo-logo']}
                          style={item.logoHeight ? { height: `${item.logoHeight}px` } : null}
                        />
                      ) : (
                        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="" />
                        </svg>
                      )}
                    </span>
                    <h3 className={styles['expo-name']}>{item.name}</h3>
                  </div>
                  {item.link && (
                    <span className={styles['expo-arrow']} aria-label="查看更多">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </span>
                  )}
                </div>
                <p className={styles['expo-desc']}>{item.description}</p>
              </div>
            )
            return item.link ? (
              <a key={index} href={item.link} target="_blank" rel="noopener" className={className}>
                {content}
              </a>
            ) : (
              <div key={index} className={className}>
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

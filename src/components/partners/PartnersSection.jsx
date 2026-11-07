import { partners } from '../../data.js'
import styles from './PartnersSection.module.css'

const duplicatedPartners = [...partners, ...partners]

export default function PartnersSection() {
  return (
    <section id="partners" className={styles.partners}>
      <div className="container">
        <div className={styles['section-header']}>
          <span className={styles['section-tag']}>PARTNERS / 2026</span>
          <h2 className={`section-title ${styles['section-title']}`}>合作伙伴</h2>
        </div>
      </div>

      <div className={styles.marquee}>
        <div className={styles['marquee-track']}>
          {duplicatedPartners.map((partner, index) => {
            const className = `${styles['partner-card']}${partner.hideName ? ` ${styles['partner-card--wide']}` : ''}`
            const content = (
              <>
                <div className={styles['partner-logo']}>
                  <img src={partner.logo} alt={partner.name} />
                </div>
                {!partner.hideName && <p className={styles['partner-name']}>{partner.name}</p>}
              </>
            )
            return partner.link ? (
              <a key={index} href={partner.link} target="_blank" rel="noopener" className={className}>
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

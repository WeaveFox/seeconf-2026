import { bandPerformance } from '../../data.js'
import styles from './BandSection.module.css'

export default function BandSection() {
  const { tag, title, description, photo, bands } = bandPerformance

  return (
    <section id="band" className={styles.band}>
      <div className="container">
        <div className={styles['section-header']}>
          <span className={styles['section-tag']}>{tag}</span>
          <h2 className={`section-title ${styles['section-title']}`}>{title}</h2>
        </div>

        <p className={styles['band-desc']} dangerouslySetInnerHTML={{ __html: description }} />

        <div className={styles['band-photo-wrap']}>
          <img src={photo} alt="乐队大联欢 演出阵容" className={styles['band-photo']} />
        </div>

        <div className={styles['band-logos']}>
          {bands.map((band, i) => (
            <div key={i} className={styles['band-logo-item']}>
              <div className={styles['band-logo-img-wrap']}>
                <img src={band.logo} alt={band.name} className={styles['band-logo']} style={band.scale ? { maxWidth: `${band.scale * 100}%` } : null} />
              </div>
              <p className={styles['band-logo-name']}><b>{band.name}</b></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

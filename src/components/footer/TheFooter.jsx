import styles from './TheFooter.module.css'

const scrollTo = (anchor) => {
  const el = document.getElementById(anchor)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    history.replaceState(null, '', `#${anchor}`)
  }
}

const navColumns = [
  {
    title: '快速导航',
    links: [
      { label: '会议议程', anchor: 'agenda' },
      { label: '分享嘉宾', anchor: 'speakers' },
      { label: '特邀嘉宾', anchor: 'guests' },
      { label: '特色展台', anchor: 'expo' },
      { label: '音乐派对', anchor: 'band' },
      { label: '参会指南', anchor: 'guide' },
      { label: '合作伙伴', anchor: 'partners' },
    ],
  },
]

export default function TheFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-bg']}>
        <div className={styles['footer-glow']}></div>
      </div>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles['footer-main']}>
          <div className={styles['footer-brand']}>
            <h4 className={styles['col-title']}>关于大会</h4>
            <div className={styles['brand-desc']}>
              <p>SEE Conf（蚂蚁终端体验科技大会）由蚂蚁终端技术委员会主办，是一场融合前沿分享、技术展台与沉浸式互动的科技盛会。</p>
              <p>SEE 是 Seeking Experience &amp; Engineering 的缩写，意为探索用户体验与卓越工程实践。在这里，我们期待与业界同行共同分享和交流体验科技的最新进展，探讨切磋 AI 时代体验科技的未来发展，共同让生态繁荣共赢。</p>
            </div>
            <div className={styles['brand-social']}>
              <a href="https://github.com/antgroup/SEEConf" target="_blank" rel="noopener" className={styles['social-link']} title="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href="javascript:void(0)" className={`${styles['social-link']} ${styles['wechat-link']}`} title="微信公众号">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M9.5 4C5.36 4 2 6.69 2 10c0 1.89 1.08 3.56 2.78 4.66L4 17l2.5-1.5c.63.15 1.29.25 1.97.28C8.16 14.7 8 14.12 8 13.5c0-2.77 2.69-5 6-5 .3 0 .59.03.88.07C14.23 6.06 12.08 4 9.5 4zm-2 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM14 9c-3.31 0-6 2.24-6 5s2.69 5 6 5c.62 0 1.22-.08 1.78-.23L18 20l-.5-1.5c1.42-.92 2.5-2.29 2.5-3.9 0-2.76-2.69-5-6-5zm-2 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <div className={styles['wechat-qr']}>
                  <img src="https://mdn.alipayobjects.com/huamei_m96plz/afts/img/-sP3QJDy3WoAAAAAQDAAAAgADiiDAQFr/original" alt="微信二维码" />
                </div>
              </a>
              <a href="https://www.yuque.com/seeconf/2026" target="_blank" rel="noopener" className={styles['social-link']} title="语雀">
                <img src="https://mdn.alipayobjects.com/huamei_m96plz/afts/img/-YBTSqKakegAAAAAQCAAAAgADiiDAQFr/original" alt="语雀" width="20" height="20" style={{ objectFit: 'contain' }} />
              </a>
            </div>
          </div>

          {navColumns.map((col) => (
            <div key={col.title} className={styles['footer-col']}>
              <h4 className={styles['col-title']}>{col.title}</h4>
              <ul className={styles['col-links']}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a onClick={() => scrollTo(link.anchor)}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles['footer-bottom']}>
          <div className={styles['bottom-left']}>
            <p className={styles.copyright}>© 2026 蚂蚁集团 版权所有</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

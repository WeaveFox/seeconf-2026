<script setup>
import { conferenceInfo } from '../data.js'

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
      // { label: '分享嘉宾', anchor: 'speakers' },
      { label: '会议议程', anchor: 'agenda' },
      { label: '特邀嘉宾', anchor: 'guests' },
      { label: '特色展台', anchor: 'expo' },
      { label: '参会指南', anchor: 'guide' },
      { label: '合作伙伴', anchor: 'partners' },
    ],
  },
]
</script>

<template>
  <footer class="footer">
    <div class="footer-bg">
      <div class="footer-glow"></div>
    </div>
    <div class="container">
      <div class="footer-main">
        <div class="footer-brand">
          <h4 class="col-title">关于大会</h4>
          <div class="brand-desc">
            <p>SEE Conf（蚂蚁终端体验科技大会）由蚂蚁终端技术委员会主办，是一场融合前沿分享、技术展台与沉浸式互动的科技盛会。</p>
            <p>SEE 是 Seeking Experience & Engineering 的缩写，意为探索用户体验与卓越工程实践。在这里，我们期待与业界同行共同分享和交流体验科技的最新进展，探讨切磋 AI 时代体验科技的未来发展，共同让生态繁荣共赢。</p>
          </div>
          <div class="brand-social">
            <a href="https://github.com/antgroup/SEEConf" target="_blank" rel="noopener" class="social-link" title="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="javascript:void(0)" class="social-link wechat-link" title="微信公众号">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M9.5 4C5.36 4 2 6.69 2 10c0 1.89 1.08 3.56 2.78 4.66L4 17l2.5-1.5c.63.15 1.29.25 1.97.28C8.16 14.7 8 14.12 8 13.5c0-2.77 2.69-5 6-5 .3 0 .59.03.88.07C14.23 6.06 12.08 4 9.5 4zm-2 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM14 9c-3.31 0-6 2.24-6 5s2.69 5 6 5c.62 0 1.22-.08 1.78-.23L18 20l-.5-1.5c1.42-.92 2.5-2.29 2.5-3.9 0-2.76-2.69-5-6-5zm-2 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <div class="wechat-qr">
                <img src="https://mdn.alipayobjects.com/huamei_m96plz/afts/img/-sP3QJDy3WoAAAAAQDAAAAgADiiDAQFr/original" alt="微信二维码" />
              </div>
            </a>
            <a href="https://www.yuque.com/seeconf/2026" target="_blank" rel="noopener" class="social-link" title="语雀">
              <img src="https://mdn.alipayobjects.com/huamei_m96plz/afts/img/-YBTSqKakegAAAAAQCAAAAgADiiDAQFr/original" alt="语雀" width="20" height="20" style="object-fit: contain;" />
            </a>
          </div>
        </div>

        <div v-for="col in navColumns" :key="col.title" class="footer-col">
          <h4 class="col-title">{{ col.title }}</h4>
          <ul class="col-links">
            <li v-for="link in col.links" :key="link.label">
              <a @click="scrollTo(link.anchor)">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="bottom-left">
          <p class="copyright">© 2026 蚂蚁集团 版权所有</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  padding: 62px 0 32px;
  background: #fff;
  overflow: hidden;
}

.footer-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.footer-glow {
  display: none;
}

.container {
  position: relative;
  z-index: 1;
}

.footer-main {
  display: grid;
  grid-template-columns: auto auto;
  gap: 40px;
  justify-content: space-between;
  margin-bottom: 48px;
}

.footer-brand {
  max-width: 760px;
}

.brand-desc {
  font-size: 13px;
  color: rgba(18, 18, 18, 0.5);
  line-height: 2.4;
  margin-top: 16px;
  margin-bottom: 20px;
}

.brand-desc p {
  margin: 0;
}

.brand-desc p + p {
  margin-top: 16px;
}

.brand-social {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid rgba(18, 18, 18, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #121212;
  transition: all 0.3s;
}

.social-link:hover {
  background: rgba(18, 18, 18, 0.06);
  color: #121212;
  transform: translateY(-2px);
}

.wechat-link {
  position: relative;
}

.wechat-qr {
  position: absolute;
  bottom: calc(100% + 16px);
  left: 50%;
  transform: translateX(-50%) scale(0.85);
  width: 160px;
  padding: 12px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 10;
}

.wechat-qr::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #fff;
}

.wechat-qr img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  display: block;
}

.wechat-qr-text {
  margin-top: 8px;
  font-size: 12px;
  color: #333;
  text-align: center;
  line-height: 1;
}

.wechat-link:hover .wechat-qr {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
}

.footer-col .col-title,
.footer-brand .col-title {
  font-size: 16px;
  font-weight: 700;
  color: #121212;
  margin-bottom: 16px;
}

.col-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.col-links a {
  font-size: 13px;
  color: rgba(18, 18, 18, 0.5);
  cursor: pointer;
  transition: color 0.2s;
}

.col-links a:hover {
  color: #121212;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid rgba(18, 18, 18, 0.08);
}

.bottom-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.copyright {
  font-size: 12px;
  color: rgba(18, 18, 18, 0.4);
}

.icp {
  font-size: 12px;
  color: rgba(18, 18, 18, 0.3);
}

.bottom-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.bottom-link {
  font-size: 12px;
  color: rgba(18, 18, 18, 0.5);
  cursor: pointer;
  transition: color 0.2s;
}

.bottom-link:hover {
  color: #121212;
}

.bottom-divider {
  font-size: 12px;
  color: rgba(18, 18, 18, 0.2);
}

@media (max-width: 768px) {
  .container {
    padding: 0 24px;
  }
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    justify-content: normal;
  }
  .footer-brand {
    grid-column: 1 / -1;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
</style>

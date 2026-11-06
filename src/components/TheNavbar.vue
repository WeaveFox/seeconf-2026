<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { navItems, conferenceInfo, pastConferences, ticketBuyUrl, getActiveTicketTier, getUrgencyLevel } from '../data.js'

const scrolled = ref(false)
const pastFirstScreen = ref(false)
const mobileMenuOpen = ref(false)
const pastDropdownOpen = ref(false)
let scrollTimer = null
let isAutoScrolling = false

// 票务紧迫度
const activeTier = computed(() => getActiveTicketTier())
const isUrgent = computed(() => {
  const tier = activeTier.value
  if (!tier) return false
  const level = getUrgencyLevel(tier.endDate)
  return level === 'high' || level === 'critical'
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 60
  pastFirstScreen.value = window.scrollY > window.innerHeight * 0.8
  if (!isAutoScrolling) {
    clearTimeout(scrollTimer)
    scrollTimer = setTimeout(updateHashByScroll, 100)
  }
}

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

const scrollTo = (anchor) => {
  const el = document.getElementById(anchor)
  if (el) {
    isAutoScrolling = true
    el.scrollIntoView({ behavior: 'smooth' })
    history.replaceState(null, '', `#${anchor}`)
    setTimeout(() => { isAutoScrolling = false }, 800)
  }
  mobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closePastDropdown = () => {
  pastDropdownOpen.value = false
}

// 点击导航栏外部时收起移动端菜单
const navbarRef = ref(null)
const handleOutsideClick = (e) => {
  if (mobileMenuOpen.value && navbarRef.value && !navbarRef.value.contains(e.target)) {
    mobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', closePastDropdown)
  document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', closePastDropdown)
  document.removeEventListener('click', handleOutsideClick)
})
</script>

<template>
  <header ref="navbarRef" class="navbar" :class="{ scrolled }">
    <div class="navbar-inner">
      <div class="logo">
        <img class="logo-img" src="https://mdn.alipayobjects.com/huamei_m96plz/afts/img/9_q5Rp7HjuMAAAAAQSAAAAgADiiDAQFr/original" alt="SEE Conf 2026" />
      </div>

      <nav class="nav-links" :class="{ open: mobileMenuOpen }">
        <a
          v-for="item in navItems"
          :key="item.anchor"
          @click="scrollTo(item.anchor)"
          class="nav-link"
        >
          {{ item.label }}
        </a>

        <!-- 往届回顾下拉 -->
        <div
          class="nav-dropdown"
          @click.stop
          @mouseenter="pastDropdownOpen = true"
          @mouseleave="pastDropdownOpen = false"
        >
          <span class="nav-link dropdown-trigger" @click="pastDropdownOpen = !pastDropdownOpen">
            往届回顾
            <svg class="dropdown-arrow" :class="{ open: pastDropdownOpen }" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
          <div class="dropdown-menu" :class="{ show: pastDropdownOpen }">
            <a
              v-for="conf in pastConferences"
              :key="conf.year"
              class="dropdown-item"
              :href="conf.url"
              target="_blank"
              rel="noopener"
            >
              {{ conf.year }}
            </a>
          </div>
        </div>
      </nav>

      <!-- <a
        class="nav-buy-btn"
        :class="{ show: pastFirstScreen, urgent: isUrgent }"
        :href="ticketBuyUrl"
        target="_blank"
        rel="noopener"
      >立即购票<span class="nav-btn-arrow">↗</span></a> -->

      <button class="mobile-toggle" @click="mobileMenuOpen = !mobileMenuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- <a
        class="nav-buy-btn-mobile"
        :class="{ show: pastFirstScreen, urgent: isUrgent }"
        :href="ticketBuyUrl"
        target="_blank"
        rel="noopener"
      >立即购票<span class="nav-btn-arrow">↗</span></a> -->
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--header-height);
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.navbar::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 200px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 0.2) 65%, transparent 100%);
  pointer-events: none;
}

/* Hero area (unscrolled) — dark text on light watercolor background */
.navbar .nav-link {
  color: rgba(0, 0, 0, 0.72);
}

.navbar .nav-link:hover {
  color: #000;
}

.navbar .dropdown-menu {
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.navbar .dropdown-item {
  color: rgba(0, 0, 0, 0.72);
}

.navbar .dropdown-item:hover {
  color: #000;
  background: rgba(0, 0, 0, 0.04);
}

.navbar .mobile-toggle span {
  background: #1a1a1a;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px);
  box-shadow: none;
}

.navbar-inner {
  height: 100%;
  padding: 0 10%;
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo-img {
  height: 32px;
  width: auto;
  object-fit: contain;
  user-select: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-left: auto;
}

.nav-link {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
  transition: color 0.2s;
  white-space: nowrap;
  position: relative;
}

.nav-link:hover {
  color: #000;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #0fbce3, #cf2820);
  transform: scaleX(0);
  transition: transform 0.3s;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.nav-dropdown {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.dropdown-trigger {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.dropdown-arrow {
  transition: transform 0.3s;
}

.dropdown-arrow.open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
  min-width: 80px;
  padding: 8px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease;
  z-index: 20;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(4px);
}

.dropdown-item {
  display: block;
  padding: 10px 16px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.72);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.dropdown-item:hover {
  color: #000;
  background: rgba(0, 0, 0, 0.04);
}

.nav-buy-btn {
  max-width: 0;
  margin-left: 0;
  padding: 0;
  overflow: hidden;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: #1a1a1a;
  border-radius: 48px;
  white-space: nowrap;
  text-decoration: none;
  opacity: 0;
  pointer-events: none;
  transition: max-width 0.3s ease, margin-left 0.3s ease, padding 0.3s ease, opacity 0.3s ease;
}

.nav-buy-btn.show {
  max-width: 200px;
  margin-left: 20px;
  padding: 7px 22px;
  opacity: 1;
  pointer-events: auto;
}

.nav-buy-btn:hover {
  background: #333;
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.nav-buy-btn.urgent {
  background: #f3584c;
}

.nav-buy-btn.urgent:hover {
  background: #e84a3e;
  box-shadow: 0 4px 16px rgba(243, 88, 76, 0.35);
}

.nav-btn-arrow {
  margin-left: 2px;
  font-size: 12px;
}

/* 移动端购票按钮（汉堡旁），桌面端隐藏 */
.nav-buy-btn-mobile {
  display: none;
}

.mobile-toggle {
  margin-left: 16px;
  display: none;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  padding: 4px;
}

.mobile-toggle span {
  width: 24px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .navbar-inner {
    padding: 0 16px;
  }

  .navbar::after {
    display: none;
  }

  .logo-img {
    height: 22px;
  }

  .nav-links {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(24px) saturate(1.4);
    -webkit-backdrop-filter: blur(24px) saturate(1.4);
    padding: 0;
    max-height: 0;
    overflow: hidden;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
    transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), padding 0.35s ease;
  }

  .nav-links.open {
    max-height: 600px;
    padding: 12px 16px 20px;
    overflow-y: auto;
  }

  .nav-link {
    width: 100%;
    padding: 14px 16px;
    text-align: left;
    border-radius: 12px;
    font-size: 15px;
    transition: background 0.2s;
  }

  .nav-link::after {
    display: none;
  }

  .nav-link:hover, .nav-link:active {
    background: rgba(0, 0, 0, 0.04);
  }

  .nav-dropdown {
    width: 100%;
    flex-direction: column;
  }

  .dropdown-trigger {
    width: 100%;
    justify-content: flex-start;
    padding: 14px 16px;
    border-radius: 12px;
    font-size: 15px;
    transition: background 0.2s;
  }

  .dropdown-trigger:hover {
    background: rgba(0, 0, 0, 0.04);
  }

  .dropdown-arrow {
    display: none;
  }

  .navbar .dropdown-menu {
    position: static;
    transform: none;
    min-width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    background: transparent;
    border: none;
    box-shadow: none;
    padding: 8px 0 4px 16px;
    opacity: 1;
    visibility: visible;
    max-height: none;
    overflow: visible;
    transition: none;
  }

  .navbar .dropdown-menu.show {
    max-height: none;
  }

  .navbar .dropdown-item {
    display: inline-block;
    padding: 6px 14px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    background: rgba(0, 0, 0, 0.04);
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .navbar .dropdown-item:hover {
    color: rgba(0, 0, 0, 0.85);
    background: rgba(0, 0, 0, 0.08);
  }

  .mobile-toggle {
    display: flex;
    margin-left: auto;
  }

  .nav-buy-btn {
    display: none;
  }

  .nav-buy-btn-mobile {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    max-width: 0;
    margin-left: 0;
    padding: 0;
    overflow: hidden;
    font-size: 13px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.72);
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 48px;
    white-space: nowrap;
    text-decoration: none;
    opacity: 0;
    pointer-events: none;
    transition: max-width 0.3s ease, margin-left 0.3s ease, padding 0.3s ease, opacity 0.3s ease;
  }

  .nav-buy-btn-mobile.show {
    max-width: 120px;
    margin-left: 8px;
    padding: 4px 12px;
    opacity: 1;
    pointer-events: auto;
  }

  .nav-buy-btn-mobile:hover {
    color: #000;
    border-color: rgba(0, 0, 0, 0.2);
  }

  .nav-buy-btn-mobile.urgent {
    color: #f3584c;
    border-color: rgba(243, 88, 76, 0.28);
  }

  .nav-buy-btn-mobile.urgent:hover {
    color: #e84a3e;
    border-color: rgba(243, 88, 76, 0.4);
  }
}
</style>

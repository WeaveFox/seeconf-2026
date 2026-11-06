<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ticketBuyUrl, getActiveTicketTier, getCountdown, getUrgencyLevel, pad2 } from '../data.js'

const activeTier = ref(getActiveTicketTier())
const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 })
const visible = ref(false)
let countdownTimer = null
let scrollHandler = null

const urgencyLevel = computed(() => activeTier.value ? getUrgencyLevel(activeTier.value.endDate) : 'none')
const showCountdown = computed(() => !!activeTier.value && urgencyLevel.value !== 'none')
const isUrgent = computed(() => urgencyLevel.value === 'high' || urgencyLevel.value === 'critical')

const countdownText = computed(() => {
  const c = countdown.value
  if (c.days > 0) return `${c.days}天 ${pad2(c.hours)}:${pad2(c.minutes)}:${pad2(c.seconds)}`
  return `${pad2(c.hours)}:${pad2(c.minutes)}:${pad2(c.seconds)}`
})

const updateCountdown = () => {
  activeTier.value = getActiveTicketTier()
  countdown.value = activeTier.value
    ? getCountdown(activeTier.value.endDate)
    : { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }
}

const checkScroll = () => {
  const scrollY = window.scrollY
  const heroHeight = window.innerHeight
  const footer = document.querySelector('.footer')
  const footerTop = footer ? footer.offsetTop : Infinity
  visible.value = scrollY > heroHeight * 0.8 && scrollY + window.innerHeight < footerTop
}

onMounted(() => {
  updateCountdown()
  countdownTimer = setInterval(updateCountdown, 1000)
  scrollHandler = () => {
    requestAnimationFrame(checkScroll)
  }
  window.addEventListener('scroll', scrollHandler, { passive: true })
  checkScroll()
})

onUnmounted(() => {
  clearInterval(countdownTimer)
  window.removeEventListener('scroll', scrollHandler)
})
</script>

<template>
  <Transition name="ticket-slide">
    <div
      v-if="visible && activeTier"
      class="sticky-ticket-bar"
      :class="`urgency-${urgencyLevel}`"
    >
      <div class="bar-inner">
        <div class="bar-info">
          <span class="bar-badge" v-if="activeTier.badge">{{ activeTier.badge }}</span>
          <span class="bar-tier-name">{{ activeTier.name }}</span>
          <span class="bar-price">¥{{ activeTier.price }}</span>
          <template v-if="activeTier.originalPrice">
            <span class="bar-price-strike">¥{{ activeTier.originalPrice }}</span>
          </template>
          <span class="bar-countdown" v-if="showCountdown">
            <span class="bar-countdown-label">仅剩</span>
            <span class="bar-countdown-time">{{ countdownText }}</span>
          </span>
        </div>
        <a
          :href="ticketBuyUrl"
          target="_blank"
          rel="noopener"
          class="bar-buy-btn"
          :class="{ urgent: isUrgent }"
        >
          立即购票<span class="bar-arrow">↗</span>
        </a>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.sticky-ticket-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  border-top: 1px solid rgba(18, 18, 18, 0.08);
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.08);
}

.urgency-critical {
  border-top-color: rgba(243, 88, 76, 0.25);
  box-shadow: 0 -4px 24px rgba(243, 88, 76, 0.1);
}

.bar-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.bar-info {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  white-space: nowrap;
}

.bar-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 20px;
  background: rgba(243, 88, 76, 0.12);
  color: #f3584c;
  line-height: 1.6;
}

.urgency-critical .bar-badge {
  background: rgba(243, 88, 76, 0.2);
  animation: badge-blink 1s ease-in-out infinite;
}

.urgency-high .bar-badge {
  background: rgba(243, 88, 76, 0.16);
}

@keyframes badge-blink {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.6; }
}

.bar-tier-name {
  font-weight: 600;
  color: rgba(18, 18, 18, 0.72);
}

.bar-price {
  font-weight: 700;
  font-size: 18px;
  color: #f3584c;
}

.bar-price-strike {
  font-size: 13px;
  font-weight: 400;
  color: rgba(18, 18, 18, 0.35);
  text-decoration: line-through;
}

.bar-countdown {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-left: 4px;
  font-size: 13px;
  color: rgba(18, 18, 18, 0.6);
}

.bar-countdown-label {
  font-weight: 500;
}

.bar-countdown-time {
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: rgba(18, 18, 18, 0.72);
}

.urgency-critical .bar-countdown-time,
.urgency-high .bar-countdown-time {
  color: #f3584c;
}

/* ——— 购票按钮 ——— */
.bar-buy-btn {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 9px 28px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: #121212;
  border-radius: 48px;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.3s;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  user-select: none;
}

.bar-buy-btn.urgent {
  background: #f3584c;
  animation: bar-buy-pulse 2.4s ease-in-out infinite;
}

@keyframes bar-buy-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(243, 88, 76, 0.4); }
  50%      { box-shadow: 0 0 0 6px rgba(243, 88, 76, 0); }
}

@media (hover: hover) and (pointer: fine) {
  .bar-buy-btn:hover {
    transform: translateY(-1px);
    background: #333;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
  .bar-buy-btn.urgent:hover {
    animation: none;
    background: #e84a3e;
    box-shadow: 0 4px 16px rgba(243, 88, 76, 0.35);
  }
}

@media (hover: none) and (pointer: coarse) {
  .bar-buy-btn:active {
    transform: scale(0.97);
  }
}

.bar-arrow {
  font-size: 12px;
  margin-left: 4px;
}

/* ——— 出现/消失过渡 ——— */
.ticket-slide-enter-active {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
}
.ticket-slide-leave-active {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.ticket-slide-enter-from,
.ticket-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* ——— 移动端 ——— */
@media (max-width: 768px) {
  .bar-inner {
    padding: 10px 16px;
    gap: 12px;
  }
  .bar-info {
    font-size: 13px;
    gap: 7px;
  }
  .bar-badge {
    padding: 1px 7px;
    font-size: 10px;
  }
  .bar-tier-name {
    display: none;
  }
  .bar-price {
    font-size: 16px;
  }
  .bar-countdown {
    font-size: 11px;
    margin-left: 0;
  }
  .bar-buy-btn {
    padding: 5px 14px;
    font-size: 12px;
    flex-shrink: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .bar-buy-btn.urgent { animation: none; }
  .urgency-critical .bar-badge { animation: none; }
}
</style>

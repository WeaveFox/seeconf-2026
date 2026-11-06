<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { conferenceInfo, ticketBuyUrl, getActiveTicketTier, getCountdown, getUrgencyLevel, pad2 } from '../data.js'
import ShaderCanvas from './ShaderCanvas.vue'
import HeroCursor from './HeroCursor.vue'

const watercolorReady = ref(false)

// 票务倒计时
const activeTier = ref(getActiveTicketTier())
const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 })
let countdownTimer = null

const urgencyLevel = computed(() => activeTier.value ? getUrgencyLevel(activeTier.value.endDate) : 'none')
const showCountdown = computed(() => !!activeTier.value && urgencyLevel.value !== 'none')
const isUrgent = computed(() => urgencyLevel.value === 'high' || urgencyLevel.value === 'critical')

const updateCountdown = () => {
  activeTier.value = getActiveTicketTier()
  countdown.value = activeTier.value
    ? getCountdown(activeTier.value.endDate)
    : { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }
}

const scrollTo = (anchor) => {
  const el = document.getElementById(anchor)
  if (el) el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
}

const onControlContextMenu = (event) => {
  if (event.pointerType === 'touch' || matchMedia('(hover: none) and (pointer: coarse)').matches) {
    event.preventDefault()
  }
}

const titleParts = [conferenceInfo.title.slice(0, 6), conferenceInfo.title.slice(6)]

onMounted(() => {
  updateCountdown()
  countdownTimer = setInterval(updateCountdown, 1000)
})
onUnmounted(() => {
  clearInterval(countdownTimer)
})
</script>

<template>
  <section id="hero" class="hero" :class="{ 'hero-watercolor-ready': watercolorReady }">
    <ShaderCanvas @ready-change="watercolorReady = $event" />
    <HeroCursor />
    <div class="hero-interaction" aria-hidden="true"></div>
    <!-- Main hero text -->
    <div class="hero-title">
      <h1><span class="h1-word">SEE</span> <span class="h1-word">Conf</span></h1>
      <div class="hero-text-body">
        <p class="hero-name">
          <span v-for="(part, i) in titleParts" :key="i" class="hero-name-part">{{ part }}</span>
        </p>
        <p class="hero-description">{{ conferenceInfo.slogan }}</p>
      </div>
      <div class="hero-cta">
        <a class="hero-buy-btn" :class="`urgency-${urgencyLevel}`" :href="ticketBuyUrl" target="_blank" rel="noopener" @contextmenu="onControlContextMenu"><span class="btn-label">立即购票<span class="btn-arrow">↗</span></span><span class="btn-sub" v-if="showCountdown"><span class="countdown-dot"></span>早鸟票&nbsp;<b class="btn-price">¥{{ activeTier.price }}</b>&nbsp;<s class="btn-price-strike" v-if="activeTier.originalPrice">¥{{ activeTier.originalPrice }}</s>&nbsp;·&nbsp;仅剩&nbsp;<span v-if="countdown.days > 0">{{ countdown.days }}&nbsp;天&nbsp;</span>{{ pad2(countdown.hours) }}:{{ pad2(countdown.minutes) }}:{{ pad2(countdown.seconds) }}</span></a>
        <p class="hero-date"><span class="date-loc">杭州 · 蚂蚁 A 空间</span><span class="date-sep"> / </span>{{ conferenceInfo.date }}</p>
      </div>
    </div>

    <button class="hero-scroll-hint" data-hero-scroll type="button" @click="scrollTo('agenda')" @contextmenu="onControlContextMenu">
      <span>向下滚动探索</span>
      <span class="scroll-arrow" aria-hidden="true"></span>
    </button>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  background: #f6f6f6 url('https://mdn.alipayobjects.com/huamei_m96plz/afts/img/Yqq2SbdCWdQAAAAAZRAAAAgADiiDAQFr/original') center / cover no-repeat;
}

/* Keep the scroll control outside the surface that consumes touch panning. */
.hero-interaction {
  position: absolute;
  inset: 0;
  z-index: 2;
}

/* Hero title group — left-positioned, matching the reference page */
.hero-title {
  position: absolute;
  z-index: 3;
  left: 10%;
  top: 26%;
  pointer-events: none;
}

.hero-title h1 {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-synthesis: none;
  font-size: clamp(80px, 12.3vw, 244px);
  line-height: 1;
  letter-spacing: -0.2vw;
  margin: 0;
  white-space: nowrap;
  color: #121212;
}

.hero-text-body {
  display: block;
  width: fit-content;
}

.hero-name {
  font-size: clamp(24px, 3.6vw, 70px);
  font-weight: 600;
  letter-spacing: 0.1vw;
  line-height: 1.4;
  margin: 22px 0 8px;
  white-space: nowrap;
  color: #121212;
}

.hero-description {
  font-size: clamp(11px, 1.35vw, 27px);
  font-weight: 500;
  line-height: 1.6;
  margin: 0;
  text-align: justify;
  text-align-last: justify;
  color: #000;
}

.hero-cta {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin-top: 38px;
  pointer-events: none;
}

.hero-buy-btn {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 12px 34px 10px;
  vertical-align: middle;
  font-size: clamp(15px, 1.3vw, 20px);
  font-weight: 400;
  color: #fff;
  border: 1px solid #121212;
  border-radius: 48px;
  background: #121212;
  transition: all 0.3s;
  pointer-events: auto;
}

.btn-label {
  display: inline-flex;
  align-items: center;
  line-height: 1.4;
}

.btn-sub {
  display: inline-flex;
  align-items: center;
  font-size: 0.65em;
  font-weight: 400;
  opacity: 0.65;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  line-height: 1.3;
}

.btn-price {
  opacity: 1;
  font-weight: 700;
}

.btn-price-strike {
  opacity: 0.4;
  font-weight: 400;
  text-decoration: line-through;
}

.hero-buy-btn,
.hero-scroll-hint {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}

@media (hover: hover) and (pointer: fine) {
  .hero-buy-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
}

/* ——— 倒计时红点（按钮内） ——— */
.countdown-dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #f3584c;
  margin-right: 5px;
  flex-shrink: 0;
  animation: dot-pulse-hero 1.5s ease-in-out infinite;
}

.urgency-critical .countdown-dot {
  animation-duration: 0.8s;
}

@keyframes dot-pulse-hero {
  0%, 100% { opacity: 0.35; transform: scale(0.8); }
  50%      { opacity: 1; transform: scale(1.15); }
}

.btn-arrow {
  font-size: 1.4em;
  line-height: 0;
  margin-left: 8px;
  position: relative;
  top: 2px;
}

.hero-date {
  font-size: clamp(11px, 0.9vw, 14px);
  font-weight: 500;
  letter-spacing: 0.05vw;
  color: rgba(18, 18, 18, 0.5);
  margin: 0;
  text-align: center;
  margin-top: 12px;
}

.hero-scroll-hint {
  position: absolute;
  bottom: max(14px, env(safe-area-inset-bottom));
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 144px;
  padding: 10px 20px;
  border: 0;
  background: transparent;
  font: inherit;
  line-height: 1.6;
  cursor: pointer;
  z-index: 10;
  color: rgba(18, 18, 18, 0.4);
  font-size: 12px;
}

@media (hover: none) and (pointer: coarse) {
  .hero-watercolor-ready .hero-interaction,
  .hero-watercolor-ready .hero-buy-btn { touch-action: pinch-zoom; }
  .hero-scroll-hint { touch-action: pan-y pinch-zoom; }
}

.hero-scroll-hint:focus-visible {
  outline: 2px solid #0f83d3;
  outline-offset: 2px;
  border-radius: 12px;
}

.scroll-arrow {
  width: 20px;
  height: 32px;
  border: 1px solid rgba(18, 18, 18, 0.15);
  border-radius: 12px;
  position: relative;
}

.scroll-arrow::after {
  content: '';
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  border-radius: 2px;
  background: rgba(18, 18, 18, 0.35);
  animation: scroll-down 1.5s infinite;
}

@keyframes scroll-down {
  0% { opacity: 0; transform: translate(-50%, 0); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translate(-50%, 12px); }
}

@media (max-width: 768px) {
  .hero-title {
    left: 8%;
    top: 20%;
  }
  .hero-title h1 {
    font-size: clamp(100px, 34vw, 220px);
    letter-spacing: -0.5vw;
  }
  .h1-word {
    display: block;
  }
  .hero-name {
    font-size: clamp(30px, 9vw, 56px);
    letter-spacing: 0.15vw;
    margin: 24px 0 10px;
  }
  .hero-name-part {
    display: block;
  }
  .hero-text-body {
    max-width: calc(6 * clamp(30px, 9vw, 56px) + 0.5vw);
  }
  .hero-description {
    font-size: clamp(12px, 3.2vw, 16px);
    letter-spacing: 0.05vw;
    text-align: left;
    text-align-last: left;
    line-height: 1.7;
    white-space: nowrap;
  }
  .hero-buy-btn {
    font-size: clamp(14px, 2vw, 22px);
    padding: 10px 20px 8px;
  }
  .hero-date {
    font-size: clamp(10px, 1vw, 12px);
    white-space: nowrap;
  }
}

@media (max-width: 768px) and (max-height: 740px) {
  .hero-title { top: max(80px, 14svh); }
  .hero-title h1 { font-size: min(34vw, 16svh); }
  .hero-name {
    font-size: min(9vw, 4.2svh);
    margin: 3svh 0 1svh;
  }
  .hero-description { font-size: min(3.2vw, 1.8svh); }
  .hero-cta { margin-top: 3svh; }
  .hero-buy-btn { padding: 8px 20px 6px; }
  .hero-date { margin-top: 8px; }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-arrow::after { animation: none; }
  .countdown-dot { animation: none; }
}

@media (max-width: 480px) {
  .hero {
    background: #f6f6f6 url('https://mdn.alipayobjects.com/huamei_m96plz/afts/img/ysraQ5_7UM4AAAAAUKAAAAgADiiDAQFr/original') center / cover no-repeat;
  }
}
</style>

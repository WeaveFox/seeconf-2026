<script setup>
import { ref, computed } from 'vue'
import { sessions, agendaData } from '../data.js'

const activeSession = ref('main')

const avatarRed = 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/IKJ3RJtJL_QAAAAAQmAAAAgADiiDAQFr/original'
const avatarBlue = 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/iL5aSretd-wAAAAAQbAAAAgADiiDAQFr/original'

const mainCardBg = 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/YnoYS6mJZPQAAAAASrAAAAgADiiDAQFr/original'
const topicCardBg1 = 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/HJEzSZLc6v8AAAAASeAAAAgADiiDAQFr/original'
const topicCardBg2 = 'https://mdn.alipayobjects.com/huamei_m96plz/afts/img/h4MnT4QBTVcAAAAAREAAAAgADiiDAQFr/original'

const getCardBg = (index) => {
  if (index === 0) return mainCardBg
  return (index - 1) % 2 === 0 ? topicCardBg1 : topicCardBg2
}

const hasAvatar = (item) => {
  const check = (v) => Array.isArray(v) ? v.length > 0 : !!v
  return check(item.avatarBlue) || check(item.avatarRed)
}

const hasSpeaker = (item) => item.speaker || hasAvatar(item)

const globalOffset = computed(() => {
  let count = 0
  for (const session of sessions) {
    if (session.id === activeSession.value) break
    for (const item of (agendaData[session.id] || [])) {
      if (hasSpeaker(item)) count++
    }
  }
  return count
})

const currentAgenda = computed(() => {
  return agendaData[activeSession.value] || []
})

// 没有头像的条目不参与红蓝交替计数
const speakerIndexMap = computed(() => {
  const map = []
  let count = 0
  for (const item of currentAgenda.value) {
    map.push(count)
    if (hasSpeaker(item)) count++
  }
  return map
})

const getAvatarList = (item, localIndex) => {
  const speakerOffset = globalOffset.value + speakerIndexMap.value[localIndex]
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
  const item = currentAgenda.value[localIndex]
  if (!hasSpeaker(item)) return 'badge-break'
  return (globalOffset.value + speakerIndexMap.value[localIndex]) % 2 === 0 ? 'badge-blue' : 'badge-red'
}

const selectSession = (id) => {
  activeSession.value = id
}

const isLongDesc = (item) => item.description && item.description.length >= 100

const expandedItems = ref(new Set())
const itemKey = (index) => `${activeSession.value}-${index}`

const isExpanded = (index) => expandedItems.value.has(itemKey(index))

const toggleExpand = (index) => {
  const key = itemKey(index)
  const newSet = new Set(expandedItems.value)
  if (newSet.has(key)) {
    newSet.delete(key)
  } else {
    newSet.add(key)
  }
  expandedItems.value = newSet
}
</script>

<template>
  <section id="agenda" class="agenda">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">AGENDA / 2026</span>
        <h2 class="section-title">会议议程</h2>
      </div>

      <!-- 专题卡片（5张平铺） -->
      <div class="session-cards">
        <div
          v-for="(session, index) in sessions"
          :key="session.id"
          class="session-card"
          :class="{ active: activeSession === session.id }"
          :style="{ '--card-bg': `url(${getCardBg(index)})` }"
          @click="selectSession(session.id)"
        >
          <div class="session-card-overlay">
            <p class="session-type">{{ session.name }}</p>
            <h3 class="session-subtitle">{{ session.subtitle }}</h3>
            <p class="session-producers">
              <span class="producers-label">出品人</span>
              <span class="producers-names">{{ session.producers.join(' / ') }}</span>
            </p>
          </div>
        </div>
      </div>

      <!-- 纵向 timeline 议程列表 -->
      <div v-if="currentAgenda.length" class="timeline">
        <div class="timeline-line"></div>
        <div
          v-for="(item, index) in currentAgenda"
          :key="index"
          class="timeline-item"
          :class="{ 'has-desc': isLongDesc(item) }"
        >
          <span class="timeline-badge" :class="getBadgeClass(index)"></span>
          <div v-if="item.time" class="timeline-time-col">
            <p class="timeline-time">{{ item.time }}</p>
          </div>
          <div class="timeline-content">
            <h3 class="timeline-title">{{ item.title }}</h3>
            <p
              v-if="item.description"
              class="timeline-desc"
              :class="{ expanded: isExpanded(index), 'no-clamp': !isLongDesc(item) }"
            >{{ item.description }}</p>
            <button
              v-if="isLongDesc(item)"
              class="desc-toggle"
              @click="toggleExpand(index)"
            >
              {{ isExpanded(index) ? '收起' : '详情' }}
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                :style="{ transform: isExpanded(index) ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
          <div v-if="hasSpeaker(item)" class="timeline-guest">
            <div v-if="hasAvatar(item)" class="guest-avatars">
              <img
                v-for="(avatarUrl, avatarIdx) in getAvatarList(item, index)"
                :key="avatarIdx"
                class="guest-avatar"
                :src="avatarUrl"
                alt="嘉宾头像"
              />
            </div>
            <div class="guest-meta">
              <strong>{{ item.speaker }}</strong>
              <span v-if="item.speakerTitle">{{ item.speakerTitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.agenda {
  padding: 42px 0;
  background: #fff;
}

.section-header {
  text-align: left;
  margin-bottom: 16px;
}

.section-tag {
  display: block;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--color-text);
  margin-bottom: 12px;
}

.section-title {
  font-size: 60px;
  font-weight: 900;
  color: var(--color-text);
  line-height: 1.2;
  text-align: left;
}

/* 专题卡片（5张平铺） */
.session-cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 48px;
}

.session-card {
  aspect-ratio: 3 / 4;
  border-radius: 20px;
  background-image: var(--card-bg);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.session-card:hover {
  transform: translateY(-3px);
}

.session-card.active {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  transform: translateY(-3px);
}

.session-card-overlay {
  width: 100%;
  height: 100%;
  padding: 20px 16px 52px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(2px);
  transition: background 0.3s, backdrop-filter 0.3s;
}

.session-card.active .session-card-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.25) 55%, rgba(0, 0, 0, 0) 100%);
  backdrop-filter: none;
}

.session-card:hover:not(.active) .session-card-overlay {
  background: rgba(255, 255, 255, 0.65);
}

.session-card.active .session-type,
.session-card.active .session-subtitle,
.session-card.active .session-producers {
  color: #fff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.session-card.active .producers-label {
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
}

.session-card.active .producers-names {
  color: #fff;
}

.session-type {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-secondary);
  margin: 0 0 6px;
}

.session-subtitle {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 10px;
  line-height: 1.3;
}

.session-producers {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
}

.producers-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-secondary);
  background: rgba(0, 0, 0, 0.06);
  padding: 2px 6px;
  border-radius: 4px;
  flex-shrink: 0;
}

.producers-names {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-secondary);
}

/* 纵向 timeline */
.timeline {
  position: relative;
  padding: 24px 40px 24px 72px;
  border: 1px solid #d0d0d0;
  border-radius: 20px;
}

.timeline-line {
  position: absolute;
  left: 36px;
  top: 40px;
  bottom: 40px;
  width: 0;
  border-left: 1px dashed #c0c0c0;
}

.timeline-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 8px 0;
}

.timeline-item.has-desc {
  padding: 14px 0;
}

.timeline-item:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.timeline-badge {
  position: absolute;
  left: -41px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  z-index: 1;
}

.badge-blue {
  background: #00ebfa;
  box-shadow: 0 0 0 4px rgba(0, 235, 250, 0.12);
}

.badge-red {
  background: #f90b0d;
  box-shadow: 0 0 0 4px rgba(249, 11, 13, 0.12);
}

.badge-break {
  background: #d5e99f;
  box-shadow: 0 0 0 4px rgba(213, 233, 159, 0.25);
}

.timeline-content {
  flex: 1;
}

.timeline-time-col {
  flex-shrink: 0;
  width: 120px;
}

.timeline-time {
  font-size: 16px;
  font-weight: 600;
  color: #888;
  margin: 0;
}

.timeline-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 4px;
}

.timeline-desc {
  font-size: 14px;
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: -webkit-line-clamp 0.3s, line-clamp 0.3s;
}

.timeline-desc.no-clamp {
  -webkit-line-clamp: none;
  line-clamp: none;
  overflow: visible;
}

.timeline-desc.expanded {
  -webkit-line-clamp: 99;
  line-clamp: 99;
}

.desc-toggle {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 6px;
  padding: 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-secondary);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
}

.desc-toggle:hover {
  color: var(--color-text);
}

.timeline-guest {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 34px;
}

.guest-avatars {
  display: flex;
  flex-shrink: 0;
}

.guest-avatar {
  width: 160px;
  height: auto;
  border-radius: 16px;
  object-fit: contain;
  flex-shrink: 0;
  position: relative;
}

.guest-avatars .guest-avatar:not(:only-child) {
  width: 130px;
}

.guest-avatars .guest-avatar:not(:first-child) {
  margin-left: -30px;
}

.guest-meta {
  display: flex;
  flex-direction: column;
  width: 160px;
}

.guest-meta strong {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 4px;
}

.guest-meta span {
  font-size: 14px;
  color: var(--color-text-secondary);
  display: block;
  max-width: 100%;
}

@media (max-width: 1024px) {
  .session-cards { grid-template-columns: repeat(3, 1fr); }
  .session-card { aspect-ratio: 1; }
  .session-card-overlay { padding: 16px 12px 32px; }
  .session-type { font-size: 18px; }
  .session-subtitle { font-size: 24px; }
  .producers-label { font-size: 15px; padding: 2px 6px; }
  .producers-names { font-size: 16px; }
}

@media (max-width: 768px) {
  .agenda { padding: 60px 0; }
  .section-title { font-size: 40px; }
  .session-cards {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
  .session-card {
    aspect-ratio: auto;
    border-radius: 10px;
    background-image: none;
    border: 1px solid #e0e0e0;
  }
  .session-card:hover {
    transform: none;
  }
  .session-card.active {
    box-shadow: none;
    transform: none;
    border-color: #1a1a1a;
    background: #1a1a1a;
  }
  .session-card.active .session-card-overlay {
    background: none;
    backdrop-filter: none;
  }
  .session-card-overlay {
    padding: 10px 8px;
    background: none;
    backdrop-filter: none;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .session-type { display: none; }
  .session-producers { display: none; }
  .session-subtitle {
    font-size: 14px;
    margin: 0;
    color: var(--color-text);
    text-align: center;
  }
  .session-card.active .session-subtitle {
    color: #fff;
    text-shadow: none;
  }
  .timeline {
    padding: 16px 16px 16px 48px;
  }
  .timeline-line {
    left: 24px;
    top: 20px;
    bottom: 20px;
  }
  .timeline-badge {
    left: -28px;
    width: 10px;
    height: 10px;
  }
  .badge-blue, .badge-red {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.06);
  }
  .timeline-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .timeline-time-col {
    width: auto;
  }
  .timeline-time {
    font-size: 13px;
  }
  .timeline-title {
    font-size: 16px;
    margin-bottom: 2px;
  }
  .timeline-desc {
    font-size: 13px;
    line-height: 1.5;
  }
  .desc-toggle {
    font-size: 12px;
  }
  .timeline-guest {
    width: 100%;
    gap: 16px;
  }
  .guest-avatar {
    width: 120px;
    border-radius: 12px;
  }
  .guest-avatars .guest-avatar:not(:only-child) {
    width: 95px;
  }
  .guest-avatars .guest-avatar:not(:first-child) {
    margin-left: -20px;
  }
  .guest-meta {
    width: auto;
  }
  .guest-meta strong {
    font-size: 16px;
  }
  .guest-meta span {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .section-title { font-size: 30px; }
  .session-cards {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }
  .session-card { border-radius: 8px; }
  .session-card-overlay { padding: 8px 6px; }
  .session-subtitle { font-size: 12px; }
  .session-card.active {
    box-shadow: none;
  }
  .timeline {
    padding: 12px 12px 12px 40px;
  }
  .timeline-line {
    left: 20px;
  }
  .timeline-badge {
    left: -24px;
    width: 8px;
    height: 8px;
  }
  .timeline-time { font-size: 12px; }
  .timeline-title { font-size: 14px; }
  .timeline-desc { font-size: 12px; }
  .guest-avatar { width: 90px; border-radius: 10px; }
  .guest-avatars .guest-avatar:not(:only-child) { width: 72px; }
  .guest-avatars .guest-avatar:not(:first-child) { margin-left: -15px; }
  .guest-meta strong { font-size: 14px; }
  .guest-meta span { font-size: 11px; }
}
</style>

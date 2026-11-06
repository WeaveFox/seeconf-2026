<script setup>
import { useHead } from '@unhead/vue'
import TheNavbar from './components/TheNavbar.vue'
import HeroBanner from './components/HeroBanner.vue'
import StickyTicketBar from './components/StickyTicketBar.vue'
import AgendaSection from './components/AgendaSection.vue'
import SpeakersSection from './components/SpeakersSection.vue'
import SpecialGuestsSection from './components/SpecialGuestsSection.vue'
import ExpoSection from './components/ExpoSection.vue'
import PartnersSection from './components/PartnersSection.vue'
import GuideSection from './components/GuideSection.vue'
import TheFooter from './components/TheFooter.vue'

useHead({
  htmlAttrs: { lang: 'zh-CN' },
})
</script>

<template>
  <div class="app">
    <TheNavbar />
    <main>
      <HeroBanner />
      <!-- <SpeakersSection /> -->
      <AgendaSection />
      <div class="section-divider"></div>
      <SpecialGuestsSection />
      <div class="section-divider"></div>
      <ExpoSection />
      <div class="section-divider"></div>
      <GuideSection />
      <div class="section-divider"></div>
      <PartnersSection />
      <div class="section-divider"></div>
    </main>
    <TheFooter />
    <StickyTicketBar />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  min-height: 100vh;
}

.section-divider {
  width: 100%;
  height: 18px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 20px 6px rgba(255, 255, 255, 0.9), 0 0 40px 12px rgba(220, 220, 220, 0.3);
  filter: blur(1px);
}
</style>

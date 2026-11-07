import TheNavbar from './components/home/TheNavbar.jsx'
import HeroBanner from './components/home/HeroBanner.jsx'
import StickyTicketBar from './components/home/StickyTicketBar.jsx'
import AgendaSection from './components/agenda/AgendaSection.jsx'
import SpecialGuestsSection from './components/guests/SpecialGuestsSection.jsx'
import ExpoSection from './components/expo/ExpoSection.jsx'
import PartnersSection from './components/partners/PartnersSection.jsx'
import GuideSection from './components/guide/GuideSection.jsx'
import TheFooter from './components/footer/TheFooter.jsx'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <TheNavbar />
      <main>
        <HeroBanner />
        <AgendaSection />
        <div className={styles['section-divider']}></div>
        <SpecialGuestsSection />
        <div className={styles['section-divider']}></div>
        <ExpoSection />
        <div className={styles['section-divider']}></div>
        <GuideSection />
        <div className={styles['section-divider']}></div>
        <PartnersSection />
        <div className={styles['section-divider']}></div>
      </main>
      <TheFooter />
      <StickyTicketBar />
    </div>
  )
}

import { useState } from 'react'
import { faqs } from '../../data.js'
import styles from './FAQSection.module.css'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className={styles.faq}>
      <div className={`container ${styles.faqContainer}`}>
        <div className={styles['section-header']}>
          <span className={styles['section-tag']}>FAQ / 2026</span>
          <h2 className={`section-title ${styles['section-title']}`}>常见问题</h2>
        </div>

        <div className={styles['faq-list']}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            const questionId = `faq-question-${index}`
            const answerId = `faq-answer-${index}`

            return (
              <div key={item.question} className={styles['faq-item']}>
                <button
                  id={questionId}
                  type="button"
                  className={styles['faq-question']}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`${styles['faq-icon']} ${isOpen ? styles.open : ''}`}
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path className={styles['faq-icon-vertical']} d="M12 5v14" />
                  </svg>
                </button>
                <div
                  id={answerId}
                  className={`${styles['faq-answer']} ${isOpen ? styles.open : ''}`}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <div className={styles['faq-answer-inner']}>
                    <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

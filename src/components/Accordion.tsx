"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/faq";
import styles from "./Accordion.module.css";

interface AccordionProps {
  items: FAQItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.accordion}>
      {items.map((item, i) => (
        <div key={i} className={styles.item}>
          <button
            className={styles.header}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            aria-controls={`accordion-content-${i}`}
          >
            <span className={styles.question}>{item.question}</span>
            <span className={`${styles.icon} ${openIndex === i ? styles.iconOpen : ""}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>
          <div
            id={`accordion-content-${i}`}
            className={`${styles.content} ${openIndex === i ? styles.contentOpen : ""}`}
          >
            <p className={styles.answer}>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { contactFAQ } from "@/lib/faq";
import { siteUrl } from "@/lib/helpers";
import ContactForm from "@/components/ContactForm";
import Accordion from "@/components/Accordion";
import RevealOnScroll from "@/components/RevealOnScroll";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact — Get in Touch",
  description:
    "Get in touch with the Graid team. Product support, creator questions, enterprise licensing, or DMCA notices — we respond within 24 hours.",
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: "Contact Graid",
    description: "Get in touch. We respond within 24 hours.",
    url: `${siteUrl}/contact`,
  },
};

const contactInfo = [
  { label: "General support", email: "support@graid.market", description: "Product questions, refunds, and account issues." },
  { label: "Creator support", email: "creators@graid.market", description: "Listing help, payouts, and creator account questions." },
  { label: "Enterprise", email: "enterprise@graid.market", description: "Bulk licensing, custom commissions, and partnerships." },
  { label: "DMCA / Copyright", email: "dmca@graid.market", description: "Copyright infringement reports and takedown requests." },
];

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Contact</p>
          <h1 className={styles.title}>Get in touch</h1>
          <p className={styles.subtitle}>
            Questions, feedback, or need help? We respond to every email within
            24 hours, Monday through Friday.
          </p>
        </div>

        <div className={styles.split}>
          <div className={styles.infoCol}>
            <div className={styles.infoCards}>
              {contactInfo.map((info) => (
                <div key={info.label} className={styles.infoCard}>
                  <h3 className={styles.infoLabel}>{info.label}</h3>
                  <a href={`mailto:${info.email}`} className={styles.infoEmail}>
                    {info.email}
                  </a>
                  <p className={styles.infoDesc}>{info.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.responsePromise}>
              <div className={styles.responseIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h3 className={styles.responseTitle}>24-hour response promise</h3>
                <p className={styles.responseText}>
                  Every email gets a response within 24 hours. Urgent issues are
                  prioritized within 4 hours.
                </p>
              </div>
            </div>

            <Link href="/blog" className={styles.faqLink}>
              Looking for quick answers? Check our blog →
            </Link>
          </div>

          <div className={styles.formCol}>
            <ContactForm />
          </div>
        </div>

        <RevealOnScroll>
          <div className={styles.faqSection}>
            <h2 className={styles.faqTitle}>Common questions</h2>
            <p className={styles.faqSubtitle}>
              Quick answers to the most common questions we receive.
            </p>
            <Accordion items={contactFAQ} />
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}

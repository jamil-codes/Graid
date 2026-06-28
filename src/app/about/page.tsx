import ImageWithLoader from "@/components/ImageWithLoader";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/helpers";
import Button from "@/components/Button";
import RevealOnScroll from "@/components/RevealOnScroll";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About — Built for Builders",
  description:
    "Graid is a marketplace for premium digital assets. We exist to give creators a fair platform and give builders access to quality-graded, production-ready assets.",
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: "About Graid — Built for Builders",
    description: "The story behind the marketplace for premium digital assets.",
    url: `${siteUrl}/about`,
  },
};

const values = [
  {
    title: "Quality over quantity",
    description:
      "Every product on Graid is reviewed before it goes live. We'd rather have 100 excellent assets than 10,000 mediocre ones.",
    icon: "M12 2l2.4 5.6L20 8l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-.4z",
  },
  {
    title: "Creators come first",
    description:
      "Fair revenue shares, transparent pricing, no hidden fees. If creators don't win, we don't win.",
    icon: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  },
  {
    title: "Ship, don't settle",
    description:
      "We build for builders. Our tools and assets exist to help you ship faster without cutting corners.",
    icon: "M5 12h14M12 5l7 7-7 7",
  },
  {
    title: "Radical transparency",
    description:
      "Clear licensing, honest reviews, open communication. No dark patterns, no hidden terms.",
    icon: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  },
];

const milestones = [
  { date: "Jan 2023", title: "Beta launch", description: "Graid goes live in private beta with 50 creators and 200 assets." },
  { date: "Apr 2023", title: "First 100 creators", description: "Reached 100 verified creators on the platform." },
  { date: "Aug 2023", title: "1,000 assets", description: "Crossed 1,000 quality-graded digital assets in the marketplace." },
  { date: "Dec 2023", title: "Public launch", description: "Graid opens to the public. 500 creators and 3,000 assets." },
  { date: "Mar 2024", title: "10k assets milestone", description: "Crossed 10,000 assets. Introduced collections and creator profiles." },
  { date: "Sep 2024", title: "Pro plan launch", description: "Launched the Pro creator plan with advanced analytics and featured placement." },
  { date: "Jan 2025", title: "12,400+ assets", description: "12,400+ assets from 3,800 creators. 98% of reviews are 5 stars." },
  { date: "Jun 2025", title: "The next chapter", description: "Introducing motion packs, code snippets, and expanded Figma offerings." },
];

const team = [
  { name: "Kai Andersson", role: "Founder & CEO", avatar: "https://picsum.photos/seed/kaiandersson/200/200" },
  { name: "Maya Chen", role: "Head of Product", avatar: "https://picsum.photos/seed/mayachen/200/200" },
  { name: "Dimitri Volkov", role: "Lead Engineer", avatar: "https://picsum.photos/seed/dimitrivolkov/200/200" },
  { name: "Luna Park", role: "Head of Community", avatar: "https://picsum.photos/seed/lunapark/200/200" },
];

export default function AboutPage() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Graid",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: "Marketplace for premium digital assets, built for builders.",
    foundingDate: "2023-01",
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orgJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>About Graid</p>
          <h1 className={styles.heroTitle}>
            We exist to give builders
            <br />
            <span className={styles.accent}>quality-graded assets.</span>
          </h1>
          <p className={styles.heroText}>
            Graid was born from a simple frustration: finding good digital assets
            shouldn't be a gamble. Every template, kit, and icon set should be
            production-ready, properly licensed, and fairly priced. We built the
            marketplace we wished existed.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <RevealOnScroll>
            <div className={styles.mission}>
              <p className={styles.missionLabel}>Our mission</p>
              <p className={styles.missionText}>
                To build the most trusted marketplace for digital assets — where
                creators are rewarded fairly for their craft, and builders can
                find production-ready work without wasting hours filtering through
                mediocrity. We believe quality compounds: great assets lead to
                great products, which lead to more great assets. Our job is to
                keep that flywheel spinning.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <RevealOnScroll>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>What we stand for</span>
              <h2 className={styles.sectionTitle}>Our values</h2>
            </div>
          </RevealOnScroll>
          <div className={styles.valuesGrid}>
            {values.map((value, i) => (
              <RevealOnScroll key={value.title} delay={i * 100}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={value.icon} />
                    </svg>
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDesc}>{value.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <RevealOnScroll>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Our journey</span>
              <h2 className={styles.sectionTitle}>Milestones</h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className={styles.timeline}>
              {milestones.map((m, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <span className={styles.timelineDate}>{m.date}</span>
                    <h3 className={styles.timelineTitle}>{m.title}</h3>
                    <p className={styles.timelineDesc}>{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <RevealOnScroll>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>The people</span>
              <h2 className={styles.sectionTitle}>Meet the team</h2>
            </div>
          </RevealOnScroll>
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <RevealOnScroll key={member.name} delay={i * 100}>
                <div className={styles.teamCard}>
                  <ImageWithLoader
                    src={member.avatar}
                    alt={member.name}
                    width={120}
                    height={120}
                    className={styles.teamAvatar}
                  />
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tight">
        <div className="container">
          <RevealOnScroll>
            <div className={styles.cta}>
              <h2 className={styles.ctaTitle}>Join us.</h2>
              <p className={styles.ctaText}>
                Whether you're a creator looking to sell or a builder looking for
                quality assets — Graid is your marketplace.
              </p>
              <div className={styles.ctaActions}>
                <Button href="/pricing" size="lg">Start selling</Button>
                <Button href="/marketplace" size="lg" variant="ghost">Browse assets</Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}

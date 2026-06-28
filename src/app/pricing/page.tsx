import type { Metadata } from "next";
import { pricingFAQ } from "@/lib/faq";
import { siteUrl } from "@/lib/helpers";
import Button from "@/components/Button";
import Accordion from "@/components/Accordion";
import RevealOnScroll from "@/components/RevealOnScroll";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Pricing — Creator Plans",
  description:
    "Start selling on Graid. Free plan lists 3 products with 80% revenue share. Pro plan ($19/mo) offers unlimited listings, 90% revenue share, analytics, and featured placement.",
  alternates: { canonical: `${siteUrl}/pricing` },
  openGraph: {
    title: "Graid Pricing — Creator Plans",
    description: "Sell your digital work on Graid. Free and Pro plans available.",
    url: `${siteUrl}/pricing`,
  },
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started selling on Graid. List your first 3 products for free.",
    features: [
      "List up to 3 products",
      "80% revenue share",
      "Standard placement",
      "Community support",
      "Basic product analytics",
    ],
    cta: "Start free",
    href: "/contact",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "Everything you need to grow your digital product business.",
    features: [
      "Unlimited product listings",
      "90% revenue share",
      "Advanced analytics dashboard",
      "Featured placement on homepage",
      "Verified badge on profile",
      "Priority support",
      "Custom storefront URL",
      "Early access to new features",
    ],
    cta: "Start Pro trial",
    href: "/contact",
    popular: true,
  },
];

const comparisonFeatures = [
  { feature: "Product listings", free: "3 products", pro: "Unlimited" },
  { feature: "Revenue share", free: "80%", pro: "90%" },
  { feature: "Analytics", free: "Basic", pro: "Advanced dashboard" },
  { feature: "Featured placement", free: "—", pro: "Included" },
  { feature: "Verified badge", free: "—", pro: "Included" },
  { feature: "Support level", free: "Community", pro: "Priority" },
  { feature: "Custom storefront", free: "—", pro: "Included" },
  { feature: "Early access", free: "—", pro: "Included" },
];

export default function PricingPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Pricing</p>
          <h1 className={styles.title}>Sell your work. Keep more of it.</h1>
          <p className={styles.subtitle}>
            No hidden fees. No surprises. Just a fair revenue share and the tools
            you need to grow. Start free, upgrade when you're ready.
          </p>
          <div className={styles.guarantee}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-mint)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>30-day money-back guarantee on Pro plans</span>
          </div>
        </div>

        {/* Plans */}
        <div className={styles.plans}>
          {plans.map((plan, i) => (
            <RevealOnScroll key={plan.name} delay={i * 100}>
              <div className={`${styles.plan} ${plan.popular ? styles.planPopular : ""}`}>
                {plan.popular && <span className={styles.popularBadge}>Most popular</span>}
                <div className={styles.planHeader}>
                  <h2 className={styles.planName}>{plan.name}</h2>
                  <p className={styles.planDesc}>{plan.description}</p>
                </div>
                <div className={styles.priceRow}>
                  <span className={styles.planPrice}>{plan.price}</span>
                  <span className={styles.planPeriod}>{plan.period}</span>
                </div>
                <Button
                  href={plan.href}
                  variant={plan.popular ? "primary" : "ghost"}
                  size="lg"
                  className={styles.planCta}
                >
                  {plan.cta}
                </Button>
                <ul className={styles.featureList}>
                  {plan.features.map((feature) => (
                    <li key={feature} className={styles.featureItem}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={plan.popular ? "var(--color-electric)" : "var(--color-mint)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Comparison table */}
        <RevealOnScroll>
          <div className={styles.comparisonSection}>
            <h2 className={styles.comparisonTitle}>Compare plans</h2>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.tableHeaderFeature}>Feature</th>
                    <th className={styles.tableHeaderPlan}>Free</th>
                    <th className={`${styles.tableHeaderPlan} ${styles.tableHeaderPro}`}>Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row) => (
                    <tr key={row.feature} className={styles.tableRow}>
                      <td className={styles.tableCellFeature}>{row.feature}</td>
                      <td className={styles.tableCell}>{row.free}</td>
                      <td className={`${styles.tableCell} ${styles.tableCellPro}`}>{row.pro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </RevealOnScroll>

        {/* FAQ */}
        <RevealOnScroll>
          <div className={styles.faqSection}>
            <h2 className={styles.faqTitle}>Frequently asked questions</h2>
            <p className={styles.faqSubtitle}>
              Everything you need to know about selling on Graid.
            </p>
            <Accordion items={pricingFAQ} />
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}

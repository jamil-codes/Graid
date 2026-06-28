import type { Metadata } from "next";
import { siteUrl } from "@/lib/helpers";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Graid Privacy Policy — data collection, cookies, third-party services, user rights, and contact for data requests.",
  alternates: { canonical: `${siteUrl}/legal/privacy` },
  openGraph: {
    title: "Graid Privacy Policy",
    description: "How we collect, use, and protect your data.",
    url: `${siteUrl}/legal/privacy`,
  },
};

const sections = [
  {
    id: "overview",
    title: "1. Overview",
    paragraphs: [
      "This Privacy Policy describes how Graid (\"we,\" \"us,\" or \"our\") collects, uses, and discloses your personal information when you visit, use, or transact on graid.market (the \"Service\"). This policy applies to all users of the Service, including buyers, creators, and visitors.",
      "We are committed to protecting your privacy and being transparent about how your data is used. By using the Service, you consent to the data practices described in this Privacy Policy.",
    ],
  },
  {
    id: "collection",
    title: "2. Data Collection",
    paragraphs: [
      "We collect the following types of personal information:",
      "Account information: When you register for an account, we collect your name, email address, username, and password. If you are a creator, we also collect your payment details (processed by Stripe or PayPal), location, and profile information.",
      "Transaction data: When you make a purchase, we collect your billing address, payment method (last four digits only), and transaction history. We do not store full credit card numbers — payment processing is handled by Stripe.",
      "Usage data: We automatically collect information about how you interact with the Service, including your IP address, browser type, device information, pages visited, time spent on pages, and referral URLs. This data is used to improve the Service and detect fraud.",
      "Communication data: When you contact us, we collect the information you provide in your communications, including emails, support tickets, and form submissions.",
      "Cookies and similar technologies: We use cookies and similar technologies to remember your preferences, authenticate your session, analyze traffic, and personalize content. See Section 3 below for more details.",
    ],
  },
  {
    id: "cookies",
    title: "3. Cookies and Tracking",
    paragraphs: [
      "We use the following categories of cookies:",
      "Essential cookies: Required for the Service to function properly. These include session cookies, authentication tokens, and security cookies. These cannot be disabled.",
      "Preference cookies: Remember your settings, such as theme (dark/light), language, and display preferences. These enhance your experience but are not essential for the Service to function.",
      "Analytics cookies: Help us understand how visitors interact with the Service so we can improve it. We use privacy-focused analytics that do not track individuals across other websites.",
      "You can manage or disable non-essential cookies through your browser settings. Disabling certain cookies may affect the functionality of the Service.",
    ],
  },
  {
    id: "use",
    title: "4. How We Use Your Data",
    paragraphs: [
      "We use your personal information for the following purposes:",
      "To provide and maintain the Service, including processing transactions, managing accounts, and delivering purchased products.",
      "To communicate with you about your account, transactions, updates to the Service, and promotional content (only if you have opted in).",
      "To detect, prevent, and address fraud, abuse, and security issues on the Service.",
      "To analyze usage patterns and improve the Service's features, performance, and user experience.",
      "To comply with legal obligations and respond to lawful requests from authorities.",
    ],
  },
  {
    id: "third-party",
    title: "5. Third-Party Services",
    paragraphs: [
      "We use the following third-party services that may have access to your personal information:",
      "Stripe: Processes all payments on the Service. Stripe is PCI DSS Level 1 certified and handles all credit card information. Graid does not store full credit card details. See Stripe's privacy policy at stripe.com/privacy.",
      "PayPal: Processes creator payouts. PayPal handles all payout-related financial data. See PayPal's privacy policy at paypal.com/us/webapps/mpp/ua/privacy-full.",
      "Google Analytics: We use privacy-focused analytics to understand aggregate usage patterns. We have configured analytics to anonymize IP addresses and do not use it for cross-site tracking.",
      "Email service provider: We use a third-party email service to send transactional and marketing emails. The provider has access to email addresses but not to other personal data.",
      "Cloud hosting: The Service is hosted on a cloud infrastructure provider that may have access to server logs containing IP addresses and timestamps.",
      "Each third-party service has its own privacy policy governing how it uses your data. We encourage you to review these policies. Graid is not responsible for the privacy practices of third-party services.",
    ],
  },
  {
    id: "sharing",
    title: "6. Data Sharing",
    paragraphs: [
      "We do not sell your personal information to third parties. We share your data only in the following circumstances:",
      "With creators: When you purchase a product, we share your name and email address with the creator so they can deliver the product and provide support.",
      "With service providers: We share data with third-party services that help us operate the Service, as described in Section 5.",
      "For legal compliance: We may disclose your data if required by law, court order, or government regulation, or if we believe in good faith that disclosure is necessary to protect our rights, safety, or property.",
      "In connection with a business transfer: If Graid is acquired, merged, or sells its assets, your data may be transferred as part of that transaction. We will notify you before your data is transferred under different ownership.",
    ],
  },
  {
    id: "rights",
    title: "7. Your Rights",
    paragraphs: [
      "Depending on your jurisdiction, you may have the following rights regarding your personal data:",
      "Access: You have the right to request a copy of the personal data we hold about you.",
      "Correction: You have the right to request correction of inaccurate or incomplete personal data.",
      "Deletion: You have the right to request deletion of your personal data, subject to legal retention requirements and legitimate business interests.",
      "Portability: You have the right to receive your personal data in a structured, machine-readable format and to transmit that data to another service.",
      "Objection: You have the right to object to the processing of your personal data for direct marketing or other purposes based on legitimate interests.",
      "Withdrawal of consent: Where we process your data based on consent, you may withdraw that consent at any time.",
      "To exercise any of these rights, email privacy@graid.market. We will respond to your request within 30 days. We may require verification of your identity before processing your request.",
    ],
  },
  {
    id: "security",
    title: "8. Data Security",
    paragraphs: [
      "We implement reasonable technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. These measures include encryption in transit (TLS) and at rest, access controls, and regular security reviews.",
      "However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security. If a data breach occurs that affects your personal data, we will notify you and the relevant authorities in accordance with applicable law.",
    ],
  },
  {
    id: "retention",
    title: "9. Data Retention",
    paragraphs: [
      "We retain your personal data for as long as your account is active or as needed to provide the Service. After account closure, we retain transaction data for a minimum of 7 years to comply with tax and legal requirements. Usage data is anonymized or deleted after 24 months.",
      "You may request deletion of your account and associated data at any time by emailing privacy@graid.market. Certain data may be retained to comply with legal obligations or to protect against fraud.",
    ],
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    paragraphs: [
      "The Service is not intended for individuals under 18 years old. We do not knowingly collect personal data from children. If you believe we have collected data from a child under 18, please contact us at privacy@graid.market, and we will delete it promptly.",
    ],
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. If we make material changes, we will notify registered users by email at least 30 days before the changes take effect. The \"Last updated\" date at the top of this page indicates when the policy was last revised.",
      "We encourage you to review this Privacy Policy periodically to stay informed about how we handle your data.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact for Data Requests",
    paragraphs: [
      "If you have questions about this Privacy Policy or wish to exercise your data rights, contact us at:",
      "Email: privacy@graid.market",
      "Mailing address: Graid Inc., 100 Market Street, Suite 400, San Francisco, CA 94105, USA",
      "We are committed to resolving any privacy-related concerns promptly and transparently.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.content}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>Legal</p>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.lastUpdated}>Last updated: June 1, 2025</p>
          </header>

          <nav className={styles.toc} aria-label="Table of contents">
            <p className={styles.tocTitle}>On this page</p>
            <ul className={styles.tocList}>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className={styles.tocLink}>
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.sections}>
            {sections.map((section) => (
              <section key={section.id} id={section.id} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                {section.paragraphs.map((para, i) => (
                  <p key={i} className={styles.paragraph}>
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className={styles.contact}>
            <p>Questions about your privacy? Email <a href="mailto:privacy@graid.market" className={styles.contactLink}>privacy@graid.market</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

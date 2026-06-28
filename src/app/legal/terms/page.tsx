import type { Metadata } from "next";
import { siteUrl } from "@/lib/helpers";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Graid Terms of Service — account rules, product listings, license types, payment terms, refund policy, DMCA, and prohibited content.",
  alternates: { canonical: `${siteUrl}/legal/terms` },
  openGraph: {
    title: "Graid Terms of Service",
    description: "Account rules, product listings, licenses, payments, refunds, and DMCA.",
    url: `${siteUrl}/legal/terms`,
  },
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing or using Graid (the \"Service\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, you may not access or use the Service. These Terms constitute a legally binding agreement between you and Graid (\"we,\" \"us,\" or \"our\").",
      "You represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms. If you are accessing the Service on behalf of a company or organization, you represent that you have authority to bind that entity to these Terms.",
    ],
  },
  {
    id: "accounts",
    title: "2. Account Rules",
    paragraphs: [
      "To access certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.",
      "You are responsible for maintaining the security of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other security breach. We will not be liable for any loss or damage arising from your failure to comply with these requirements.",
      "You may not create multiple accounts to circumvent platform restrictions, manipulate ratings or reviews, or engage in any fraudulent activity. One person or entity may maintain one creator account and one buyer account.",
    ],
  },
  {
    id: "listings",
    title: "3. Product Listings",
    paragraphs: [
      "Creators may list digital assets for sale on the Service. All listings are subject to review by Graid before publication. We reserve the right to reject, remove, or modify any listing that does not meet our quality standards or that violates these Terms.",
      "Creators are solely responsible for the content of their listings, including accuracy of descriptions, correctness of file formats and sizes, and compliance with all applicable laws. Creators must own or have proper authorization for all content included in their products.",
      "Graid reserves the right to set minimum quality standards for listings, including but not limited to file quality, documentation completeness, and overall presentation. Listings that do not meet these standards may be rejected or removed.",
    ],
  },
  {
    id: "licenses",
    title: "4. License Types",
    paragraphs: [
      "Products sold on Graid are offered under three license types:",
      "Personal License: Grants the purchaser the right to use the product for personal, non-commercial projects only. This license does not permit use in client work, commercial products, or redistribution. One license covers one individual user.",
      "Commercial License: Grants the purchaser the right to use the product in commercial projects, including client work and products offered for sale. This license does not permit redistribution of the source files. One license covers one individual or one team of up to five people.",
      "Extended License: Grants the purchaser the right to use the product in unlimited commercial projects, including redistribution as part of a larger product (e.g., a theme or template that includes the licensed asset). This license covers one organization and its contractors.",
      "Unless otherwise specified by the creator in the product description, all products are sold with the default license type indicated on the product page. Creators may offer custom license terms, which must be agreed upon in writing before purchase.",
    ],
  },
  {
    id: "payments",
    title: "5. Payment Terms",
    paragraphs: [
      "All payments are processed through Stripe, a PCI DSS Level 1 certified payment processor. Graid does not store credit card information on its servers.",
      "For buyers: Payment is due at the time of purchase. Prices are listed in US Dollars (USD). Taxes may be added based on your jurisdiction and will be displayed at checkout before payment is processed.",
      "For creators: Revenue share is calculated as a percentage of each sale. Free plan creators receive 80% of the sale price. Pro plan creators receive 90% of the sale price. Payouts are processed monthly via PayPal or bank transfer, with a minimum payout threshold of $50. Earnings below $50 roll over to the next payout cycle.",
      "Graid reserves the right to withhold payment for any transaction that is under investigation for fraud, chargeback, or violation of these Terms. Withheld payments will be released upon resolution of the investigation if no violation is found.",
    ],
  },
  {
    id: "refunds",
    title: "6. Refund Policy",
    paragraphs: [
      "Buyers may request a refund within 14 days of purchase if the product does not work as described, is materially different from its listing, or if the buyer is otherwise dissatisfied with the purchase.",
      "To request a refund, email support@graid.market with your order number and the reason for the refund. Refunds are processed within 5 business days of approval and are returned to the original payment method.",
      "Refunds will not be granted for: (a) products that have been downloaded and used in a completed project, (b) change of mind after 14 days, (c) products purchased with the wrong license type (contact us to upgrade instead), or (d) products that were accurately described but did not meet the buyer's expectations beyond the listed features.",
      "Pro plan subscription fees are refundable within 30 days of the initial purchase. Subsequent renewals are non-refundable but may be canceled at any time to prevent future charges.",
    ],
  },
  {
    id: "dmca",
    title: "7. DMCA and Copyright",
    paragraphs: [
      "Graid respects the intellectual property rights of others and expects users of the Service to do the same. We respond to notices of alleged copyright infringement that comply with the Digital Millennium Copyright Act (DMCA).",
      "If you believe that content on Graid infringes your copyright, please send a DMCA notice to dmca@graid.market with the following information: (a) identification of the copyrighted work claimed to have been infringed, (b) identification of the allegedly infringing material on Graid, (c) your contact information, (d) a statement that you have a good faith belief that the use is not authorized, and (e) a statement, under penalty of perjury, that the information is accurate and that you are authorized to act on behalf of the copyright owner.",
      "Upon receipt of a valid DMCA notice, we will remove the allegedly infringing content within 48 hours and notify the creator. Creators may file a counter-notice if they believe the content was removed in error. Repeat infringers will have their accounts terminated.",
    ],
  },
  {
    id: "prohibited",
    title: "8. Prohibited Content",
    paragraphs: [
      "The following types of content are strictly prohibited on Graid:",
      "Content that infringes the intellectual property rights of any third party, including but not limited to copyrighted material, trademarks, and trade secrets.",
      "Content that is illegal, defamatory, harassing, hateful, or that promotes violence, discrimination, or harm against any individual or group.",
      "Content that contains malware, viruses, or any code designed to disrupt, damage, or gain unauthorized access to systems or data.",
      "Content that constitutes spam, is misleading, or that attempts to manipulate search rankings, reviews, or the marketplace's algorithms.",
      "Content that involves the personal data of third parties without their consent, or that violates any applicable data protection laws.",
      "Graid reserves the right to remove any prohibited content immediately and without notice. Accounts associated with prohibited content may be suspended or terminated at our sole discretion.",
    ],
  },
  {
    id: "termination",
    title: "9. Account Suspension and Termination",
    paragraphs: [
      "Graid may suspend or terminate your account at any time for violation of these Terms, for fraudulent activity, or for any conduct that we determine may harm the Service or other users.",
      "You may terminate your account at any time by contacting support@graid.market. Upon termination, your listings will be removed from the Service, and any pending payouts will be processed according to the payment terms in Section 5.",
      "Termination does not affect licenses granted to buyers for products purchased before termination. Buyers retain the right to use purchased products according to the license terms under which they were acquired.",
    ],
  },
  {
    id: "disclaimer",
    title: "10. Disclaimer of Warranties",
    paragraphs: [
      "The Service and all products listed on Graid are provided \"as is\" and \"as available\" without warranties of any kind, either express or implied. Graid does not warrant that the Service will be uninterrupted, error-free, or secure, or that any product will meet your specific requirements.",
      "Graid acts as a platform for creators to sell their products. We do not create, own, or control the products listed on the Service. Creators are solely responsible for the quality, functionality, and legality of their products.",
    ],
  },
  {
    id: "changes",
    title: "11. Changes to Terms",
    paragraphs: [
      "We may modify these Terms at any time. If we make material changes, we will notify registered users by email at least 30 days before the changes take effect. Continued use of the Service after the effective date constitutes acceptance of the updated Terms.",
      "The \"Last updated\" date at the top of this page indicates when these Terms were last revised. We encourage you to review these Terms periodically.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.content}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>Legal</p>
            <h1 className={styles.title}>Terms of Service</h1>
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
            <p>Questions about these terms? Email <a href="mailto:support@graid.market" className={styles.contactLink}>support@graid.market</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

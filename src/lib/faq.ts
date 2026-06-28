export interface FAQItem {
    question: string;
    answer: string;
}

export const pricingFAQ: FAQItem[] = [
    {
        question: "What's the difference between the Free and Pro plans?",
        answer:
            "Free lets you list up to 3 products with an 80% revenue share. Pro ($19/month) removes the listing cap, raises your revenue share to 90%, adds analytics, and gets you featured placement eligibility and a verified badge on your profile.",
    },
    {
        question: "Can I switch plans at any time?",
        answer:
            "Yes. Upgrades take effect immediately and are prorated. Downgrades kick in at the end of your current billing cycle, so you keep Pro features until then.",
    },
    {
        question: "How does the revenue share work?",
        answer:
            "When a buyer purchases your product, Graid takes a cut. Free plan creators keep 80% of each sale. Pro creators keep 90%. That's the only deduction — no hidden fees, no payment processing surcharges.",
    },
    {
        question: "When and how do I get paid?",
        answer:
            "Payouts process monthly via PayPal or bank transfer. You need a minimum balance of $50 to trigger a payout. Anything below $50 rolls to the next month.",
    },
    {
        question: "Do I keep the copyright to my work?",
        answer:
            "Yes, always. You retain full copyright and ownership of everything you create. Graid is a distribution platform — buyers get a license to use your work, not ownership of it.",
    },
    {
        question: "What happens to my products if I cancel?",
        answer:
            "Your products stay live. Canceling Pro moves you to Free, so your revenue share drops to 80% and you lose Pro features. You can upgrade again at any time.",
    },
    {
        question: "Is there a money-back guarantee?",
        answer:
            "Yes. If you're not happy with Pro within 30 days, email support@graid.market and we'll refund your subscription. No questions asked.",
    },
    {
        question: "Can I offer my products for free?",
        answer:
            "Yes, both Free and Pro plans allow $0 listings. A lot of creators use free products to build an audience and drive traffic to paid ones.",
    },
    {
        question: "Are there any transaction fees on top of the revenue share?",
        answer:
            "No. The revenue share (20% on Free, 10% on Pro) is the only fee. Payment processing is covered by Graid. What you see in your dashboard is what you earn.",
    },
    {
        question: "How does featured placement work?",
        answer:
            "Featured placement is a Pro benefit. Each month we select high-quality Pro products for the homepage and category pages. Selection is based on quality, review scores, and relevance — you can't pay for placement.",
    },
];

export const contactFAQ: FAQItem[] = [
    {
        question: "How long does it take to get a support response?",
        answer:
            "We respond to all support emails within 24 hours, Monday through Friday. Payment failures and account access issues are prioritized and typically get a response within 4 hours.",
    },
    {
        question: "How do I get a refund for something I purchased?",
        answer:
            "If a product doesn't work as described or you're unsatisfied with your purchase, request a refund within 14 days of purchase. Email support@graid.market with your order number and what went wrong.",
    },
    {
        question: "Can I use purchased assets in client projects?",
        answer:
            "With a Commercial or Extended license, yes. The Personal license is for personal, non-commercial use only. Check the license type on each product page before purchasing — it's listed clearly.",
    },
    {
        question: "How do I get verified?",
        answer:
            "Verified status is available to Pro plan creators with at least 5 products and a 4.5+ average rating. Our team reviews manually to make sure quality standards are met.",
    },
    {
        question: "Do you offer enterprise or custom licensing?",
        answer:
            "Yes. For enterprise licensing, bulk purchases, or custom asset commissions, email enterprise@graid.market. We'll connect you with the right creator or set up a custom agreement.",
    },
    {
        question: "What file formats can I upload?",
        answer:
            "Anything. Common formats include Figma, Sketch, PSD, AI, SVG, PNG, HTML, CSS, JS, TS, Lottie JSON, and Blender. Each product page lists the included formats clearly.",
    },
    {
        question: "How do I report copyright infringement?",
        answer:
            "Email dmca@graid.market with proof of ownership. We review all DMCA notices within 48 hours and remove infringing content immediately on verification.",
    },
    {
        question: "Is my payment information secure?",
        answer:
            "Yes. All payments go through Stripe, which is PCI DSS Level 1 certified. We don't store credit card information on our servers.",
    },
];

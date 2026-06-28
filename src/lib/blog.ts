import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
    {
        id: "b1",
        slug: "why-great-web-templates-sell",
        title: "Why great web templates sell",
        excerpt:
            "Not all templates are created equal. The gap between 2,000 copies sold and 20 copies sold comes down to a few specific things — and most of them have nothing to do with how the template looks.",
        category: "Marketplace",
        author: "Elena Voss",
        authorAvatar: "https://picsum.photos/seed/elena-voss-av/100/100",
        date: "June 12, 2025",
        readTime: "8 min read",
        // ID 20: clean laptop/desk — editorial, professional workspace
        coverImage: "https://picsum.photos/id/20/1200/600",
        featured: true,
        content: [
            {
                paragraphs: [
                    "Every week, new templates land on Graid. Some sell thousands of copies. Most don't. After two years of marketplace data, the pattern is clear: the templates that sell aren't the ones with the most features. They're the ones that solve the most specific problem for the most specific buyer.",
                    "This isn't about luck or marketing spend. There's a repeatable pattern behind every top-seller, and most of it has nothing to do with aesthetics.",
                ],
            },
            {
                heading: "Solve one problem, really well",
                paragraphs: [
                    "The best-selling template on Graid is Nova SaaS Landing — a template that does one thing: convert visitors into signups for a SaaS product. It's not a portfolio. It's not a blog. It's not a dashboard. It's a landing page, and every section exists to move the visitor toward a single action.",
                    "When someone searches for 'SaaS landing template,' they have a specific mental model of what they need. The more exactly your template matches that model, the faster they buy. Templates that try to work for everyone end up working well for no one.",
                ],
            },
            {
                heading: "Code quality matters more than design",
                paragraphs: [
                    "This surprises people. Graid is a design marketplace, so aesthetics should be the primary driver. But our data shows the correlation between review score and sales is weaker than the correlation between code quality and sales.",
                    "Buyers don't just look at the preview. They read the source. They check if the HTML is semantic, if the CSS is organized, if the JavaScript is minimal. A beautiful template with sloppy code gets refunded. A solid template with clean code builds repeat buyers.",
                ],
                list: [
                    "Semantic HTML with proper heading hierarchy",
                    "CSS organized with custom properties, not magic numbers",
                    "Responsive breakpoints tested at 375px, 768px, 1280px, and 1600px",
                    "Zero hard-coded colors — everything through tokens",
                    "Accessibility built in from the start, not added at the end",
                ],
            },
            {
                heading: "Documentation is part of the product",
                paragraphs: [
                    "The best-selling templates come with setup guides, customization notes, and clear licensing. Buyers aren't just buying files — they're buying a shortcut to a finished product. The less friction between download and deployment, the more likely they are to buy and recommend.",
                    "Nova SaaS includes a deployment guide for Vercel and Netlify. Pulse UI Kit ships with Storybook documentation. These aren't extras — they're the product.",
                ],
            },
            {
                heading: "The niches are where the real money is",
                paragraphs: [
                    "Everyone wants to build the next Nova SaaS — a broad, mass-market template. But the real opportunity is niche. A template for dental practice websites. A UI kit for fitness apps. An icon set for blockchain interfaces. Niche templates have less competition, more targeted buyers, and higher conversion rates.",
                    "A dental practice template might sell 200 copies at $49 each. That's $9,800 gross — at an 80% revenue share, the creator keeps $7,840. For a template that took a weekend to build. And it'll keep selling for years because the niche doesn't change fast.",
                ],
            },
            {
                heading: "What this means if you're creating",
                paragraphs: [
                    "Pick a specific buyer, solve a specific problem, write clean code, document it properly, price it fairly. That's the formula. It's not exciting but it's repeatable — and the marketplace compounds quality over time.",
                    "And if you're buying: look for templates that do one thing well, have readable source code, and include documentation. Those are the ones that will actually save you time.",
                ],
            },
        ],
    },
    {
        id: "b2",
        slug: "anatomy-of-a-5-star-ui-kit",
        title: "The anatomy of a 5-star UI kit",
        excerpt:
            "What makes a UI kit worth $89 instead of $19? We looked at every kit on Graid with 4.8 stars or above and found four things they all have in common.",
        category: "Design",
        author: "Aria Nakamura",
        authorAvatar: "https://picsum.photos/seed/aria-nakamura-av/100/100",
        date: "May 28, 2025",
        readTime: "10 min read",
        // ID 107: abstract grid pattern — design systems, structure
        coverImage: "https://picsum.photos/id/107/1200/600",
        featured: false,
        content: [
            {
                paragraphs: [
                    "A UI kit is not a Figma file full of components. It's a system — a set of decisions about color, spacing, typography, and interaction that, when done right, becomes invisible. The best UI kits don't just look good in a preview screenshot. They hold up under real-world use, with real content, in real products.",
                    "We looked at every kit on Graid with 4.8 stars or above to find what they share. Four things came up every time.",
                ],
            },
            {
                heading: "Token architecture first",
                paragraphs: [
                    "Every 5-star kit on Graid has a structured token hierarchy: primitive tokens (the raw values), semantic tokens (what those values mean), and component tokens (how semantic tokens apply to specific elements). This is what separates a kit that's easy to rebrand from one that requires hunting through 200 components to change a shade of blue.",
                    "Pulse UI Kit, the highest-rated kit on Graid, defines tokens at three levels. Primitive: violet-500, gray-100. Semantic: primary-action, surface-background. Component: button-primary-bg, card-border. Change a handful of semantic tokens and the entire kit updates. That's the point.",
                ],
            },
            {
                heading: "Accessibility is non-negotiable",
                paragraphs: [
                    "Every kit above 4.8 stars meets WCAG 2.1 AA. Not as a checkbox — as a foundational constraint. Color contrast ratios checked at every token level. Focus states designed, not defaulted. ARIA roles built into interactive components.",
                    "This matters because buyers are building products that need to be accessible. A kit that isn't is a liability, and increasingly, buyers know it.",
                ],
                list: [
                    "Color contrast ratios of at least 4.5:1 for body text",
                    "Visible focus indicators on all interactive elements",
                    "Keyboard navigation tested, not just specced",
                    "Screen reader labels on icon-only buttons",
                    "Reduced motion support in animation specs",
                ],
            },
            {
                heading: "Component variants that come from real products",
                paragraphs: [
                    "A 5-star kit doesn't ship a button in three sizes and four states. It ships the variants that come from actual design work: loading state, disabled state, icon-left, icon-right, full-width, destructive variant. Those variants exist because a designer needed them in a real project and couldn't find them.",
                    "The best kits also ship compound components — form fields with labels, helper text, error states, and icons all properly assembled. These are the things that actually save time in production, not isolated components sitting in a grid.",
                ],
            },
            {
                heading: "Documentation written by someone who used it",
                paragraphs: [
                    "Top-rated kits include usage guidelines — when to use a modal versus a drawer, how to combine components for common patterns, what not to do. Documentation written by someone who has actually shipped products with the kit, not someone who just designed it.",
                    "The kits that lose stars almost always mention poor documentation in negative reviews. 'Great components but no guidance on using them together' comes up constantly. Documentation is not a nice-to-have. It's part of the product.",
                ],
            },
            {
                heading: "The verdict",
                paragraphs: [
                    "Token architecture, real accessibility, component variants from actual product work, and documentation that respects the buyer's time. Get all four right and $89 is easy to justify. Miss any of them and you'll struggle to sell at $19.",
                    "The bar is high. It should be. Digital products live forever after download — quality is the only thing that compounds.",
                ],
            },
        ],
    },
    {
        id: "b3",
        slug: "pricing-your-digital-work-in-2025",
        title: "Pricing your digital work in 2025",
        excerpt:
            "Should your template be $29 or $89? We break down the pricing patterns that consistently work on Graid — backed by two years of real sales data.",
        category: "Business",
        author: "Priya Sharma",
        authorAvatar: "https://picsum.photos/seed/priya-sharma-av/100/100",
        date: "May 15, 2025",
        readTime: "7 min read",
        // ID 54: notebook/writing — business, strategy
        coverImage: "https://picsum.photos/id/54/1200/600",
        featured: false,
        content: [
            {
                paragraphs: [
                    "Pricing is the hardest decision a creator makes. Too high and you scare buyers away. Too low and you signal low quality — and leave money on the table. After two years of marketplace data, we can see the pricing patterns that actually work.",
                    "Here's what the numbers say about pricing on Graid in 2025.",
                ],
            },
            {
                heading: "Three tiers, three different buyers",
                paragraphs: [
                    "Products on Graid fall into three price tiers, each with its own buyer psychology. Understanding which tier fits your product is the single most important decision you'll make.",
                    "Tier 1 ($0–$29) is impulse territory. Buyers don't deliberate. They see it, they want it, they buy. Works best for single-purpose assets: individual icon sets, single templates, or small component packs. Volume is high, competition is too.",
                    "Tier 2 ($30–$79) is the consideration tier. Buyers read the description, check the reviews, compare alternatives. This is where UI kits, multi-page templates, and motion packs live. Lower volume than Tier 1, but significantly higher revenue per sale.",
                    "Tier 3 ($80–$149) is the investment tier. Buyers treat this as a business expense — expense it, share it with the team, and expect more. This tier fits bundles, enterprise-grade design systems, and products with commercial licenses. Lowest volume, highest revenue per sale.",
                ],
            },
            {
                heading: "Anchor pricing works",
                paragraphs: [
                    "Products with a visible crossed-out 'was' price consistently outsell identical products without one. Nova SaaS Template sells for $49 with a crossed-out $79. The perceived value isn't $49 — it's $79. Buyers feel like they're getting a deal.",
                    "This isn't a trick. Anchor pricing communicates that the product has more value than the current price. It signals confidence. The rule: don't fake it. If your product was never sold at the higher price, the anchor loses credibility fast.",
                ],
            },
            {
                heading: "Free tiers drive paid conversions",
                paragraphs: [
                    "The Free Minimal UI Kit on Graid has been downloaded 5,800 times. It's also the top referral source for Pulse UI Kit ($89). Buyers who try the free kit and like what they find come back for the paid version when they need more.",
                    "Freemium done right: give away enough to demonstrate your quality. Withhold enough to create demand. The free kit has 40 components. The paid kit has 320. The upgrade path is obvious.",
                ],
                list: [
                    "The free product should genuinely show your quality — not a watered-down version",
                    "The upgrade path should be clear and logical, not arbitrary",
                    "Link to paid alternatives directly in the free product description",
                    "Use the free product to build an email list for future launches",
                ],
            },
            {
                heading: "Bundles create perceived value",
                paragraphs: [
                    "The Startup Starter Pack bundles three products ($177 combined) for $99. It's our best-selling item by revenue. Buyers see bundles as a deal even when the individual prices are fair. Three products for less than two feels like winning.",
                    "Bundle products that complement each other — a template, a UI kit, and an icon set work better than three unrelated templates. The bundle should tell a story: 'everything you need to launch a SaaS product.'",
                ],
            },
            {
                heading: "When to raise your price",
                paragraphs: [
                    "If your product has 50+ reviews and a 4.7+ rating, you've earned a price increase. A 10–20% raise rarely affects sales volume at that point — the social proof carries the product. Some creators raise prices after hitting 100 reviews and see revenue go up with no sales dip.",
                    "The flip side: if you have fewer than 20 reviews, don't price at Tier 3. You don't have the proof to justify it. Start lower, build reviews, then raise. Patience compounds.",
                ],
            },
            {
                heading: "The bottom line",
                paragraphs: [
                    "Pricing is an ongoing experiment, not a one-time decision. Match the tier to your product type. Use anchor pricing. Consider a free tier for discoverability. Bundle complementary products. Raise prices as social proof builds. Quality products, priced right, sell themselves.",
                ],
            },
        ],
    },
];

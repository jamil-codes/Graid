import type { Product } from "./types";

export const products: Product[] = [
    {
        id: "p1",
        slug: "nova-saas-template",
        name: "Nova SaaS Landing Template",
        tagline: "Production-ready SaaS landing page with 12 sections",
        description:
            "Nova is a SaaS landing page template built for conversion, not just display. Twelve pre-designed sections — hero, features, pricing, testimonials, FAQ, and more — all in semantic HTML with CSS custom properties throughout. Swap a color token and everything updates. No JavaScript build step required.",
        whatsIncluded: [
            "12 sections with conversion-tested copy you can use immediately",
            "Light and dark mode, both complete and polished",
            "Responsive from 375px to 1600px — tested at all four breakpoints",
            "Semantic HTML with accessibility built in from the start",
            "CSS custom properties for instant rebranding",
            "Source in HTML, CSS, and JSX variants",
            "Figma file included",
            "Lifetime updates",
        ],
        category: "Templates",
        creatorId: "c1",
        price: 49,
        originalPrice: 79,
        rating: 4.9,
        reviewCount: 214,
        sales: 1820,
        badges: ["Sale", "Hot"],
        license: "Commercial",
        format: "HTML, CSS, JSX, Figma",
        fileSize: "24.3 MB",
        lastUpdated: "June 2025",
        // Preview: turned-on monitor displaying digital products (Daniel Korpai)
        previewImage:
            "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // silver iMac turned on inside room (Lee Campbell)
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&h=900&auto=format&fit=crop&q=90",
            // MacBook Pro + iMac + Magic Mouse setup (Domenico Loia)
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1400&h=900&auto=format&fit=crop&q=90",
            // grey flat screen monitor (Eftakher Alam)
            "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1400&h=900&auto=format&fit=crop&q=90",
            // man using Apple computer (Campaign Creators)
            "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: true,
        trending: true,
        createdAt: "2025-01-15",
        reviews: [
            {
                id: "r1",
                author: "Daniel Kim",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "March 2025",
                text: "Best SaaS template I've used. Code is clean, sections are well thought through, and it saved me two weeks. The dark mode alone is worth the price.",
            },
            {
                id: "r2",
                author: "Sarah Chen",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "February 2025",
                text: "Shipped our landing page in a day. The copy that comes with each section was a bonus I didn't expect — already seeing better engagement numbers.",
            },
            {
                id: "r3",
                author: "Mike Foster",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 4,
                date: "January 2025",
                text: "Solid template. The Figma file let our designer customize everything before touching code. Docking one star because I'd love more color presets out of the box.",
            },
        ],
    },
    {
        id: "p2",
        slug: "pulse-ui-kit",
        name: "Pulse UI Kit",
        tagline: "320+ components with full design tokens",
        description:
            "Pulse is a UI kit with 320+ components built on a three-layer token system — primitive, semantic, and component tokens. Change your brand color at the primitive level and it propagates through every component automatically. Covers buttons and inputs all the way up to data tables and navigation systems. Every component is documented, accessible, and tested in real products before shipping.",
        whatsIncluded: [
            "320+ components across 18 categories",
            "Three-layer design token system (primitive, semantic, component)",
            "Light and dark variants for every component",
            "WCAG 2.1 AA compliant — not just checked, actually tested",
            "Figma component library with auto-layout throughout",
            "React component code included",
            "Storybook documentation",
            "Free updates for 12 months",
        ],
        category: "UI Kits",
        creatorId: "c1",
        price: 89,
        originalPrice: 129,
        rating: 4.9,
        reviewCount: 342,
        sales: 1450,
        badges: ["Sale", "Verified"],
        license: "Commercial",
        format: "Figma, React, Storybook",
        fileSize: "48.7 MB",
        lastUpdated: "May 2025",
        // Preview: MacBook Pro displaying computer icons (Tirza van Dijk)
        previewImage:
            "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // person writing on white paper — UX process (UX Indonesia)
            "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=1400&h=900&auto=format&fit=crop&q=90",
            // silver iMac displaying color gradient (Balázs Kétyi)
            "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1400&h=900&auto=format&fit=crop&q=90",
            // yellow click pen on white paper — wireframing (Kelly Sikkema)
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: true,
        trending: false,
        createdAt: "2025-02-10",
        reviews: [
            {
                id: "r4",
                author: "Anna Petrov",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "April 2025",
                text: "The token system alone is worth 10x the price. We replaced our entire component library with Pulse and cut design-to-dev time by 60%.",
            },
            {
                id: "r5",
                author: "Chris Webb",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "March 2025",
                text: "320 components and not a single dud. Documentation is thorough, accessibility is real, and the dark mode is actually done right — not just inverted.",
            },
        ],
    },
    {
        id: "p3",
        slug: "phosphor-icon-set",
        name: "Phosphor Icon Set",
        tagline: "1,200 hand-crafted icons in 4 weights",
        description:
            "Phosphor is 1,200 icons in four weights — thin, light, regular, bold — each drawn on a 24px grid and hand-tuned for optical correctness. These aren't algorithmically scaled. Every icon was looked at and adjusted for how it reads at actual use size. SVG, PNG, icon font, and Figma library all included.",
        whatsIncluded: [
            "1,200 unique icons in 4 weights (4,800 total files)",
            "SVG, PNG, and icon font formats",
            "Figma library with smart component swapping",
            "24px grid with optical correction on every icon",
            "Regular and rounded variants",
            "New icons added monthly, lifetime updates",
        ],
        category: "Icons",
        creatorId: "c2",
        price: 39,
        rating: 4.8,
        reviewCount: 521,
        sales: 2840,
        badges: ["Hot"],
        license: "Commercial",
        format: "SVG, PNG, Font, Figma",
        fileSize: "32.1 MB",
        lastUpdated: "June 2025",
        // Preview: person holding black iPad with green plant / UI (Faizur Rehman)
        previewImage:
            "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // graphical user interface, icon (Rubaitul Azad)
            "https://images.unsplash.com/photo-1658204212985-e0126040f88f?w=1400&h=900&auto=format&fit=crop&q=90",
            // MacBook Pro displaying computer icons (Tirza van Dijk)
            "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?w=1400&h=900&auto=format&fit=crop&q=90",
            // person holding black iPad with UI (Faizur Rehman)
            "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: true,
        trending: true,
        createdAt: "2025-03-01",
        reviews: [
            {
                id: "r6",
                author: "Yuki Tanaka",
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "May 2025",
                text: "The optical correction on these is incredible — you can tell every icon was hand-tuned. The four-weight system gives me flexibility I didn't know I was missing.",
            },
            {
                id: "r7",
                author: "Ben Carter",
                avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "April 2025",
                text: "Replaced three separate icon libraries with Phosphor. Consistency across the whole set is unmatched. Monthly additions are a great bonus.",
            },
            {
                id: "r8",
                author: "Lena Hoffman",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 4,
                date: "March 2025",
                text: "Beautiful icons. Would love more finance and data-specific icons in upcoming updates.",
            },
        ],
    },
    {
        id: "p4",
        slug: "motion-ready-pack",
        name: "Motion Ready Pack",
        tagline: "80 production-ready Lottie animations",
        description:
            "Motion Ready is 80 Lottie animations built for product interfaces, not demo reels. Loading states, success and error feedback, onboarding transitions, micro-interactions, empty state illustrations — all under 10KB each and optimized for web and mobile. These are the animations that go in the build, not on the Dribbble shot.",
        whatsIncluded: [
            "80 Lottie animations in JSON, under 10KB each",
            "Loading, success, error, and onboarding categories",
            "Color-customizable via Lottie editor",
            "After Effects source files for full control",
            "React and Vue implementation examples",
            "Performance guide included",
        ],
        category: "Motion",
        creatorId: "c3",
        price: 59,
        originalPrice: 89,
        rating: 4.9,
        reviewCount: 187,
        sales: 980,
        badges: ["Sale", "New"],
        license: "Commercial",
        format: "Lottie JSON, After Effects",
        fileSize: "56.2 MB",
        lastUpdated: "June 2025",
        // Preview: black background with neon colored shapes (Mikoto Studio)
        previewImage:
            "https://images.unsplash.com/photo-1699060463533-94ceb428c67f?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // green and blue abstract background with squares (Praveen Hans)
            "https://images.unsplash.com/photo-1732032506091-6fd57cc3113e?w=1400&h=900&auto=format&fit=crop&q=90",
            // purple and white heart illustration — abstract motion (Milad Fakurian)
            "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1400&h=900&auto=format&fit=crop&q=90",
            // person using MacBook Pro on table — motion design work (Sarath P Raj)
            "https://images.unsplash.com/photo-1628494391268-c9935bc384d5?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: true,
        trending: true,
        createdAt: "2025-05-20",
        reviews: [
            {
                id: "r9",
                author: "Alex Rivera",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "June 2025",
                text: "These animations transformed our onboarding. File sizes are tiny and quality is studio-grade. Worth every penny.",
            },
            {
                id: "r10",
                author: "Mia Wallace",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "May 2025",
                text: "The success/error animations alone improved our form completion. Users actually notice — we've gotten comments about it.",
            },
        ],
    },
    {
        id: "p5",
        slug: "atlas-component-library",
        name: "Atlas Component Library",
        tagline: "60 accessible React components with TypeScript",
        description:
            "Atlas is 60 React components, fully typed in TypeScript, built accessibility-first from day one. WCAG 2.1 AA across the board — keyboard navigation, ARIA roles, focus management, all done properly. Includes 15 custom hooks, a theming system built on CSS custom properties, and zero external UI dependencies. Tree-shakeable, so you only ship what you use.",
        whatsIncluded: [
            "60 React components with complete TypeScript types",
            "WCAG 2.1 AA — keyboard nav, ARIA, focus management, all tested",
            "CSS custom property theming system",
            "15 custom hooks (useModal, useToast, useMediaQuery, and more)",
            "Tree-shakeable — import only what you need",
            "JSDoc documentation on every component",
            "Zero external UI dependencies",
        ],
        category: "Code",
        creatorId: "c4",
        price: 79,
        rating: 4.7,
        reviewCount: 156,
        sales: 720,
        badges: ["New"],
        license: "Commercial",
        format: "TypeScript, React",
        fileSize: "2.1 MB",
        lastUpdated: "June 2025",
        // Preview: monitor showing Java programming (Ilya Pavlov)
        previewImage:
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // lines of HTML codes (Florian Olivo)
            "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1400&h=900&auto=format&fit=crop&q=90",
            // MacBook with lines of code on busy desk (Christopher Gower)
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&h=900&auto=format&fit=crop&q=90",
            // computer screen with bunch of code (Chris Ried)
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: false,
        trending: false,
        createdAt: "2025-06-01",
        reviews: [
            {
                id: "r11",
                author: "Dev Patel",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "June 2025",
                text: "The accessibility work here is exceptional. Keyboard navigation, ARIA attributes, focus management — all done right. This is how component libraries should be built.",
            },
            {
                id: "r12",
                author: "Rachel Green",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 4,
                date: "June 2025",
                text: "Great components, thorough TypeScript types. Would appreciate more advanced usage examples in the docs.",
            },
        ],
    },
    {
        id: "p6",
        slug: "figma-design-system-template",
        name: "Figma Design System Template",
        tagline: "Complete design system starter for Figma",
        description:
            "A Figma design system built on atomic design — tokens feed primitives feed components feed patterns. Light and dark mode via Figma variables, not manual duplication. Includes 200+ components with variants and auto-layout, documentation pages inside Figma, and a 30-minute video walkthrough that explains not just what's there but why it's structured that way.",
        whatsIncluded: [
            "Complete token system (color, typography, spacing, elevation)",
            "Atomic design structure: atoms to molecules to organisms",
            "200+ Figma components with variants and auto-layout",
            "Documentation pages built inside Figma",
            "Light and dark mode via Figma variables",
            "Onboarding guide and 30-minute video walkthrough",
        ],
        category: "Figma",
        creatorId: "c5",
        price: 69,
        originalPrice: 99,
        rating: 4.9,
        reviewCount: 298,
        sales: 1630,
        badges: ["Sale", "Verified"],
        license: "Commercial",
        format: "Figma",
        fileSize: "18.4 MB",
        lastUpdated: "April 2025",
        // Preview: close-up of computer monitor and laptop (Zac Wolff — Figma context)
        previewImage:
            "https://images.unsplash.com/photo-1648854006531-361649aa182c?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // computer monitor on wooden desk (Faizur Rehman)
            "https://images.unsplash.com/photo-1726186029199-218e58c9fb41?w=1400&h=900&auto=format&fit=crop&q=90",
            // silver iPhone 6 on MacBook Pro (Mario Gogh)
            "https://images.unsplash.com/photo-1606161290889-77950cfb67d3?w=1400&h=900&auto=format&fit=crop&q=90",
            // laptop on wooden table (Swello)
            "https://images.unsplash.com/photo-1722503583962-fb0622b436c2?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: true,
        trending: false,
        createdAt: "2025-02-28",
        reviews: [
            {
                id: "r13",
                author: "Sophie Laurent",
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "April 2025",
                text: "Used this as the foundation for our company design system. The structure is exactly what a growing team needs — tokens, primitives, components, all organized properly.",
            },
            {
                id: "r14",
                author: "Kevin Wu",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "March 2025",
                text: "The video walkthrough was the real highlight. Aria explains not just how the system works but why it's structured the way it is. Educational and genuinely practical.",
            },
        ],
    },
    {
        id: "p7",
        slug: "eclipse-dark-dashboard",
        name: "Eclipse Dark Dashboard",
        tagline: "Admin dashboard template built for dark mode",
        description:
            "Eclipse is a dark-mode-first admin dashboard with 24 pre-built pages. Built around one question: how do you keep data readable on dark surfaces without killing contrast? Every color, elevation, and chart style was tuned for dark backgrounds specifically — not ported from a light version. Charts, tables, forms, and sidebar navigation all included.",
        whatsIncluded: [
            "24 pre-built dashboard pages",
            "Dark-mode-first color system with tested contrast ratios",
            "Chart components: line, bar, pie, heatmap",
            "Data table with sorting, filtering, and pagination",
            "Form system with validation",
            "Responsive sidebar navigation",
            "Source in HTML and React",
        ],
        category: "Templates",
        creatorId: "c6",
        price: 59,
        rating: 4.6,
        reviewCount: 112,
        sales: 540,
        badges: [],
        license: "Commercial",
        format: "HTML, React",
        fileSize: "21.8 MB",
        lastUpdated: "May 2025",
        // Preview: black monitor displaying website (Safar Safarov)
        previewImage:
            "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // computer screen with code — dark context (Chris Ried)
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1400&h=900&auto=format&fit=crop&q=90",
            // lines of HTML code on dark screen (Florian Olivo)
            "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1400&h=900&auto=format&fit=crop&q=90",
            // turned-on monitor displaying digital products (Daniel Korpai)
            "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: false,
        trending: false,
        createdAt: "2025-04-10",
        reviews: [
            {
                id: "r15",
                author: "Nora Fields",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "May 2025",
                text: "Finally a dark dashboard that isn't just inverted colors. Contrast ratios are dialed in and data is actually readable. Chart components are clean and flexible.",
            },
            {
                id: "r16",
                author: "Jake Morris",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 4,
                date: "April 2025",
                text: "Solid template, well-done dark mode. Wish there was a light variant, but for our dark-only product it's exactly what we needed.",
            },
        ],
    },
    {
        id: "p8",
        slug: "shipfast-landing",
        name: "ShipFast Landing Kit",
        tagline: "5 conversion-optimized landing page variants",
        description:
            "ShipFast is five landing page variants designed for indie products, tested in real campaigns. Each variant has a different structural approach to the above-the-fold — headline-first, social-proof-first, product-visual-first, pricing-first, and story-first. Use whichever fits your product and buyer. Comes with A/B-tested copy, email capture, pricing table, and testimonial sections.",
        whatsIncluded: [
            "5 complete landing page variants, each with a different conversion approach",
            "A/B-tested copy for every section",
            "Email capture form with validation",
            "Pricing comparison table component",
            "Animated stat counters",
            "Source in HTML and Next.js",
            "Deployment guides for Vercel and Netlify",
        ],
        category: "Templates",
        creatorId: "c7",
        price: 29,
        originalPrice: 49,
        rating: 4.8,
        reviewCount: 234,
        sales: 1340,
        badges: ["Sale"],
        license: "Commercial",
        format: "HTML, Next.js",
        fileSize: "8.7 MB",
        lastUpdated: "June 2025",
        // Preview: turned-on monitor displaying digital products (Daniel Korpai)
        previewImage:
            "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // MacBook Pro + iMac setup (Domenico Loia)
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1400&h=900&auto=format&fit=crop&q=90",
            // silver iMac turned on (Lee Campbell)
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&h=900&auto=format&fit=crop&q=90",
            // man using Apple computer (Campaign Creators)
            "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: false,
        trending: true,
        createdAt: "2025-05-05",
        reviews: [
            {
                id: "r17",
                author: "Tyler Brooks",
                avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "June 2025",
                text: "Got our SaaS landing page live in 2 hours. The included copy converted better than what I'd written myself. Priya clearly knows what works for indie products.",
            },
            {
                id: "r18",
                author: "Emma Davis",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 4,
                date: "May 2025",
                text: "Great value. The 5 variants gave us real options to test. Deployment guide made it painless.",
            },
        ],
    },
    {
        id: "p9",
        slug: "grid-system-pro",
        name: "Grid System Pro",
        tagline: "Flexible CSS grid framework with 40 layouts",
        description:
            "Grid System Pro is 40 responsive CSS grid layouts, from simple two-column splits to complex magazine-style masonry. No JavaScript, no dependencies — pure CSS with custom properties for easy customization. Every layout is tested at 375px, 768px, 1280px, and 1600px. SCSS source included.",
        whatsIncluded: [
            "40 responsive grid layouts",
            "CSS-only, zero JavaScript",
            "CSS custom properties for customization",
            "Breakpoints at 375px, 768px, 1280px, 1600px",
            "Documentation with live examples",
            "SCSS source files",
        ],
        category: "Code",
        creatorId: "c8",
        price: 25,
        rating: 4.7,
        reviewCount: 89,
        sales: 420,
        badges: [],
        license: "Personal",
        format: "CSS, SCSS",
        fileSize: "1.2 MB",
        lastUpdated: "March 2025",
        // Preview: lines of HTML codes (Florian Olivo)
        previewImage:
            "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // MacBook with code (Christopher Gower)
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&h=900&auto=format&fit=crop&q=90",
            // monitor showing Java programming (Ilya Pavlov)
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: false,
        trending: false,
        createdAt: "2025-03-15",
        reviews: [
            {
                id: "r19",
                author: "Oliver Reed",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "April 2025",
                text: "40 layouts and they all actually work. The masonry grid saved me hours of debugging. Clean, well-documented CSS.",
            },
        ],
    },
    {
        id: "p10",
        slug: "aurora-figma-website-kit",
        name: "Aurora Figma Website Kit",
        tagline: "Complete website design kit for Figma",
        description:
            "Aurora is a Figma website kit built for speed. Fifty page templates, 15 hero variants, and a complete component library — all with auto-layout so elements reflow as content changes. Agencies and freelancers use it to get from brief to mockup in hours, not days.",
        whatsIncluded: [
            "50 Figma page templates",
            "15 hero section variants",
            "Complete component library with variants",
            "Style guide with text, color, and effect styles",
            "200-icon set included",
            "Auto-layout on every element",
        ],
        category: "Figma",
        creatorId: "c5",
        price: 49,
        rating: 4.8,
        reviewCount: 176,
        sales: 890,
        badges: ["Verified"],
        license: "Commercial",
        format: "Figma",
        fileSize: "22.6 MB",
        lastUpdated: "May 2025",
        // Preview: computer monitor on wooden desk (Faizur Rehman)
        previewImage:
            "https://images.unsplash.com/photo-1726186029199-218e58c9fb41?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // silver iPhone 6 on MacBook Pro (Mario Gogh)
            "https://images.unsplash.com/photo-1606161290889-77950cfb67d3?w=1400&h=900&auto=format&fit=crop&q=90",
            // close-up of monitor and laptop (Zac Wolff)
            "https://images.unsplash.com/photo-1648854006531-361649aa182c?w=1400&h=900&auto=format&fit=crop&q=90",
            // laptop on wooden table (Swello)
            "https://images.unsplash.com/photo-1722503583962-fb0622b436c2?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: false,
        trending: false,
        createdAt: "2025-04-20",
        reviews: [
            {
                id: "r20",
                author: "Hannah Lee",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "May 2025",
                text: "As an agency designer this kit cut our mockup time in half. 50 page templates means we almost always have a starting point. Auto-layout is consistent throughout.",
            },
        ],
    },
    {
        id: "p11",
        slug: "pixel-line-icons",
        name: "Pixel Line Icons",
        tagline: "500 minimalist line icons with rounded corners",
        description:
            "500 line icons drawn on a 24px grid with a consistent 2px stroke weight throughout. Rounded corners, clean and modern. SVG and PNG at 1x, 2x, and 3x. Figma library with icon components included. Free updates for 6 months.",
        whatsIncluded: [
            "500 line icons with rounded corners",
            "2px consistent stroke weight",
            "SVG and PNG (1x, 2x, 3x)",
            "Figma library with icon components",
            "24px grid",
            "Free updates for 6 months",
        ],
        category: "Icons",
        creatorId: "c2",
        price: 19,
        originalPrice: 29,
        rating: 4.7,
        reviewCount: 312,
        sales: 1980,
        badges: ["Sale"],
        license: "Commercial",
        format: "SVG, PNG, Figma",
        fileSize: "14.3 MB",
        lastUpdated: "April 2025",
        // Preview: graphical user interface, icon (Rubaitul Azad)
        previewImage:
            "https://images.unsplash.com/photo-1658204212985-e0126040f88f?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // person holding black iPad with UI (Faizur Rehman)
            "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=1400&h=900&auto=format&fit=crop&q=90",
            // MacBook Pro displaying computer icons (Tirza van Dijk)
            "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: false,
        trending: false,
        createdAt: "2025-03-20",
        reviews: [
            {
                id: "r21",
                author: "Carlos Mendez",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "April 2025",
                text: "Clean, consistent, exactly what it says. The 2px stroke weight is perfect for modern interfaces. Great value at this price.",
            },
        ],
    },
    {
        id: "p12",
        slug: "fluid-motion-transitions",
        name: "Fluid Motion Transitions",
        tagline: "30 page transition animations for SPAs",
        description:
            "Thirty smooth page transition animations for single-page applications. Shared element transitions, route animations, modal and drawer entrances — all implemented in React, Vue, and Svelte. Includes both Framer Motion and CSS-only variants, plus a performance guide that explains what to watch out for at scale.",
        whatsIncluded: [
            "30 page transition animations",
            "React, Vue, and Svelte implementations",
            "Shared element transition recipes",
            "Modal and drawer entrance animations",
            "Framer Motion and CSS-only variants",
            "Performance optimization guide",
        ],
        category: "Motion",
        creatorId: "c3",
        price: 35,
        rating: 4.8,
        reviewCount: 94,
        sales: 610,
        badges: ["New"],
        license: "Commercial",
        format: "Lottie, React, Vue, Svelte",
        fileSize: "12.4 MB",
        lastUpdated: "June 2025",
        // Preview: green and blue abstract background with squares (Praveen Hans)
        previewImage:
            "https://images.unsplash.com/photo-1732032506091-6fd57cc3113e?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // black background with neon colored shapes (Mikoto Studio)
            "https://images.unsplash.com/photo-1699060463533-94ceb428c67f?w=1400&h=900&auto=format&fit=crop&q=90",
            // purple and white abstract (Milad Fakurian)
            "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1400&h=900&auto=format&fit=crop&q=90",
            // person using MacBook Pro — motion work (Sarath P Raj)
            "https://images.unsplash.com/photo-1628494391268-c9935bc384d5?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: false,
        trending: true,
        createdAt: "2025-06-05",
        reviews: [
            {
                id: "r22",
                author: "Victor Hughes",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "June 2025",
                text: "The shared element transitions are next-level. Our app feels so much more polished. The performance guide was genuinely helpful.",
            },
        ],
    },
    {
        id: "p13",
        slug: "mono-portfolio-template",
        name: "Mono Portfolio Template",
        tagline: "Minimal monochrome portfolio for designers",
        description:
            "Mono is a monochrome portfolio template that gets out of the way of your work. Three pages — work, about, contact — built around typography, whitespace, and large imagery. Nothing decorative, nothing that competes with the content. The design is the negative space.",
        whatsIncluded: [
            "Three-page portfolio: work, about, contact",
            "Minimal monochrome design system",
            "Large image showcase with lazy loading",
            "Contact form with validation",
            "Responsive from 375px to 1600px",
            "Source in HTML and Next.js",
        ],
        category: "Templates",
        creatorId: "c8",
        price: 19,
        rating: 4.6,
        reviewCount: 67,
        sales: 320,
        badges: [],
        license: "Personal",
        format: "HTML, Next.js",
        fileSize: "6.8 MB",
        lastUpdated: "March 2025",
        // Preview: grey flat screen monitor — clean minimal (Eftakher Alam)
        previewImage:
            "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // MacBook Pro + iMac setup (Domenico Loia)
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1400&h=900&auto=format&fit=crop&q=90",
            // silver iMac turned on (Lee Campbell)
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: false,
        trending: false,
        createdAt: "2025-03-25",
        reviews: [
            {
                id: "r23",
                author: "Iris Vogel",
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "April 2025",
                text: "Beautiful minimal template. Typography choices are excellent and the whitespace feels intentional. Exactly what a designer portfolio should be.",
            },
        ],
    },
    {
        id: "p14",
        slug: "command-ui-kit",
        name: "Command UI Kit",
        tagline: "Developer-focused UI kit with terminal aesthetic",
        description:
            "Command is a UI kit for developer tools — the kind of product where code blocks, terminals, and data-dense layouts are the primary UI, not an afterthought. 150+ components with a terminal-inspired aesthetic, 5 syntax highlighting themes, and a documentation layout system. Dark-mode native with a light variant for when you need it.",
        whatsIncluded: [
            "150+ UI components with developer-tool aesthetic",
            "Terminal and code block components",
            "5 syntax highlighting themes",
            "Documentation layout system",
            "Dark mode native, light mode variant included",
            "Figma library and React components",
        ],
        category: "UI Kits",
        creatorId: "c4",
        price: 65,
        originalPrice: 89,
        rating: 4.8,
        reviewCount: 143,
        sales: 680,
        badges: ["Sale", "New"],
        license: "Commercial",
        format: "Figma, React",
        fileSize: "28.9 MB",
        lastUpdated: "June 2025",
        // Preview: computer screen with code (Chris Ried)
        previewImage:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // lines of HTML code (Florian Olivo)
            "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1400&h=900&auto=format&fit=crop&q=90",
            // black monitor showing website — dark context (Safar Safarov)
            "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1400&h=900&auto=format&fit=crop&q=90",
            // MacBook with code on busy desk (Christopher Gower)
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: false,
        trending: true,
        createdAt: "2025-06-10",
        reviews: [
            {
                id: "r24",
                author: "Sam Park",
                avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "June 2025",
                text: "Building a developer tool? This is the kit. Terminal components are gorgeous, syntax themes are well done. Our docs site looks professional now.",
            },
        ],
    },
    {
        id: "p15",
        slug: "capsule-3d-icons",
        name: "Capsule 3D Icons",
        tagline: "120 clay-style 3D icons with Blender source files",
        description:
            "Capsule is 120 clay-style 3D icons rendered at 4K resolution. The Blender source files are included so you can change colors, adjust angles, and re-render with your own lighting. Multiple render angles per icon, transparent PNG backgrounds, and five color palette presets for Blender included.",
        whatsIncluded: [
            "120 clay-style 3D icons at 4K resolution",
            "Blender source files for full customization",
            "Multiple render angles per icon",
            "Transparent PNG backgrounds",
            "5 color palette presets for Blender",
            "Commercial license included",
        ],
        category: "Icons",
        creatorId: "c2",
        price: 45,
        rating: 4.7,
        reviewCount: 128,
        sales: 590,
        badges: [],
        license: "Commercial",
        format: "PNG, Blender",
        fileSize: "320 MB",
        lastUpdated: "April 2025",
        // Preview: graphical user interface, icon closeup (Rubaitul Azad)
        previewImage:
            "https://images.unsplash.com/photo-1658204212985-e0126040f88f?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // person holding black iPad with UI (Faizur Rehman)
            "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=1400&h=900&auto=format&fit=crop&q=90",
            // MacBook Pro displaying icons (Tirza van Dijk)
            "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: false,
        trending: false,
        createdAt: "2025-04-05",
        reviews: [
            {
                id: "r25",
                author: "Diana Frost",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "May 2025",
                text: "These 3D icons elevated our landing page instantly. The Blender files are the real value — we customized everything to match our brand in an afternoon.",
            },
        ],
    },
    {
        id: "p16",
        slug: "startup-starter-pack",
        name: "Startup Starter Pack",
        tagline: "Nova SaaS Template, Pulse UI Kit, and Phosphor Icons — bundled",
        description:
            "The Startup Starter Pack bundles Nova SaaS Template, Pulse UI Kit, and Phosphor Icon Set into one download at 40% off the combined individual price. The three products share unified design tokens, so everything works together visually without any manual reconciliation. If you're launching a startup's web presence, this is the fastest starting point on Graid.",
        whatsIncluded: [
            "Nova SaaS Landing Template (full)",
            "Pulse UI Kit — 320+ components",
            "Phosphor Icon Set — 1,200 icons",
            "Unified design tokens across all three products",
            "Setup guide for integrating the bundle",
            "40% savings versus buying individually",
        ],
        category: "Templates",
        creatorId: "c1",
        price: 99,
        originalPrice: 177,
        rating: 4.9,
        reviewCount: 87,
        sales: 420,
        badges: ["Sale", "Hot"],
        license: "Commercial",
        format: "HTML, CSS, JSX, Figma, SVG",
        fileSize: "105 MB",
        lastUpdated: "May 2025",
        // Preview: silver iMac displaying color gradient — broad design feel (Balázs Kétyi)
        previewImage:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // turned-on monitor displaying digital products (Daniel Korpai)
            "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1400&h=900&auto=format&fit=crop&q=90",
            // MacBook Pro displaying icons (Tirza van Dijk)
            "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?w=1400&h=900&auto=format&fit=crop&q=90",
            // person holding iPad with UI (Faizur Rehman)
            "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: false,
        trending: false,
        createdAt: "2025-05-01",
        reviews: [
            {
                id: "r26",
                author: "Frank Castle",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "May 2025",
                text: "Bought this for our startup launch. The unified tokens across all three products is the real value — everything just works together visually without any wrangling.",
            },
        ],
    },
    {
        id: "p17",
        slug: "free-minimal-ui-kit",
        name: "Free Minimal UI Kit",
        tagline: "40 essential components, free for personal use",
        description:
            "A free starter kit with 40 essential components — buttons, inputs, cards, navigation, and more. Built for prototypes and personal projects. If you need it for a commercial project, the upgrade is $19.",
        whatsIncluded: [
            "40 essential UI components",
            "Basic design tokens",
            "Figma file with components",
            "Personal use license",
            "Commercial upgrade available for $19",
        ],
        category: "UI Kits",
        creatorId: "c7",
        price: 0,
        rating: 4.5,
        reviewCount: 410,
        sales: 5800,
        badges: ["Free"],
        license: "Personal",
        format: "Figma",
        fileSize: "4.2 MB",
        lastUpdated: "March 2025",
        // Preview: yellow pen on white paper — wireframing/minimal (Kelly Sikkema)
        previewImage:
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // person writing on white paper — design process (UX Indonesia)
            "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=1400&h=900&auto=format&fit=crop&q=90",
            // MacBook Pro displaying icons (Tirza van Dijk)
            "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: false,
        trending: false,
        createdAt: "2025-01-20",
        reviews: [
            {
                id: "r27",
                author: "Greg Sullivan",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "March 2025",
                text: "Can't argue with free. Genuinely useful for prototyping. Clean components, well-organized Figma file.",
            },
        ],
    },
    {
        id: "p18",
        slug: "ember-portfolio-motion",
        name: "Ember Portfolio Motion",
        tagline: "25 scroll-triggered animation patterns for portfolio sites",
        description:
            "Ember is 25 scroll-triggered animation patterns built for portfolio and showcase sites. Parallax effects, reveal-on-scroll, sticky sections, horizontal scroll galleries — CSS-first with optional JavaScript enhancements via IntersectionObserver. Reduced-motion fallbacks for every single pattern, not as an afterthought.",
        whatsIncluded: [
            "25 scroll-triggered animation patterns",
            "CSS-first with optional JS enhancement",
            "Parallax, reveal, sticky, and horizontal scroll",
            "IntersectionObserver implementations",
            "Reduced-motion fallbacks on every pattern",
            "React and vanilla JS versions",
        ],
        category: "Motion",
        creatorId: "c3",
        price: 29,
        rating: 4.6,
        reviewCount: 73,
        sales: 380,
        badges: [],
        license: "Commercial",
        format: "CSS, JS, React",
        fileSize: "5.1 MB",
        lastUpdated: "April 2025",
        // Preview: purple/white abstract illustration (Milad Fakurian)
        previewImage:
            "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=450&auto=format&fit=crop&q=90",
        galleryImages: [
            // black background neon shapes (Mikoto Studio)
            "https://images.unsplash.com/photo-1699060463533-94ceb428c67f?w=1400&h=900&auto=format&fit=crop&q=90",
            // green/blue abstract background (Praveen Hans)
            "https://images.unsplash.com/photo-1732032506091-6fd57cc3113e?w=1400&h=900&auto=format&fit=crop&q=90",
        ],
        featured: false,
        trending: false,
        createdAt: "2025-04-15",
        reviews: [
            {
                id: "r28",
                author: "Tina Yang",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop&crop=faces&q=90",
                rating: 5,
                date: "May 2025",
                text: "The reduced-motion fallbacks sold me. Finally an animation pack that takes accessibility seriously. Parallax effects are smooth and performant.",
            },
        ],
    },
];

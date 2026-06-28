import type { Collection } from "./types";

export const collections: Collection[] = [
    {
        id: "col1",
        slug: "the-minimal-edit",
        name: "The Minimal Edit",
        description:
            "Templates and kits for builders who'd rather have one well-placed element than ten competing ones. Clean typography, deliberate whitespace, nothing decorative.",
        // ID 48: minimal white interior — blank canvas, spacious
        image: "https://picsum.photos/id/48/1200/600",
        productIds: ["p13", "p9", "p17", "p11"],
        accent: "var(--color-mint)",
    },
    {
        id: "col2",
        slug: "dark-ui-essentials",
        name: "Dark UI Essentials",
        description:
            "Dark mode done properly — not just a color inversion. Tuned contrast ratios, elevation systems that work on dark surfaces, and color tokens built for dark from the ground up.",
        // ID 137: dark moody texture — dark surfaces, depth
        image: "https://picsum.photos/id/137/1200/600",
        productIds: ["p7", "p14", "p1", "p6"],
        accent: "var(--color-electric)",
    },
    {
        id: "col3",
        slug: "motion-ready",
        name: "Motion Ready",
        description:
            "Animations that belong in the product, not on a demo reel. Lottie files, page transitions, and scroll effects that are performant, accessible, and actually shippable.",
        // ID 119: abstract blur/speed — motion, energy
        image: "https://picsum.photos/id/119/1200/600",
        productIds: ["p4", "p12", "p18"],
        accent: "var(--color-ember)",
    },
    {
        id: "col4",
        slug: "developer-starter-pack",
        name: "Developer Starter Pack",
        description:
            "Production-ready code, components, and layouts for developers who want to move fast without compromising on quality. All code, no fluff.",
        // ID 162: technology/code — developer tools, screens
        image: "https://picsum.photos/id/162/1200/600",
        productIds: ["p5", "p9", "p14", "p8"],
        accent: "var(--color-mint)",
    },
];

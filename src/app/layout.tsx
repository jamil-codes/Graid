import type { Metadata } from "next"
import type { Viewport } from "next"
import { Syne, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import NextTopLoader from "nextjs-toploader"

const syne = Syne({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
	variable: "--font-syne",
	display: "swap",
})

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-inter",
	display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-jetbrains",
	display: "swap",
})

const siteUrl = "https://graid.market"

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#F0F0EE" },
		{ media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
	],
	width: "device-width",
	initialScale: 1,
}

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "Graid — Premium Digital Assets, Built for Builders",
		template: "%s | Graid",
	},
	description: "Graid is a marketplace for premium digital assets — web templates, UI kits, icon sets, Figma files, motion packs, and code snippets. Built for builders.",
	keywords: ["digital marketplace", "web templates", "UI kits", "icon sets", "Figma files", "motion packs", "code snippets", "digital assets", "Graid"],
	authors: [{ name: "Graid" }],
	creator: "Graid",
	publisher: "Graid",
	openGraph: {
		type: "website",
		url: siteUrl,
		title: "Graid — Premium Digital Assets, Built for Builders",
		description: "A marketplace for premium digital assets. Web templates, UI kits, icons, Figma files, motion packs, and code snippets. Built for builders.",
		siteName: "Graid",
		images: [
			{
				url: "https://picsum.photos/seed/graid-og/1200/630",
				width: 1200,
				height: 630,
				alt: "Graid — Premium Digital Assets",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Graid — Premium Digital Assets, Built for Builders",
		description: "A marketplace for premium digital assets. Web templates, UI kits, icons, Figma files, motion packs, and code snippets.",
		images: ["https://picsum.photos/seed/graid-og/1200/630"],
	},
	alternates: {
		canonical: siteUrl,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			"index": true,
			"follow": true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
}

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('graid-theme');
    if (stored) {
      document.documentElement.setAttribute('data-theme', stored);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`

const websiteJsonLd = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"name": "Graid",
	"url": siteUrl,
	"description": "Premium digital assets marketplace — web templates, UI kits, icons, Figma files, motion packs, and code snippets.",
	"potentialAction": {
		"@type": "SearchAction",
		"target": `${siteUrl}/marketplace?q={search_term_string}`,
		"query-input": "required name=search_term_string",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
					}}
				/>
			</head>
			<body>
				<NextTopLoader color="#6B5CFF" height={3} showSpinner={false} />
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}

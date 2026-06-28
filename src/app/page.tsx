import Link from "next/link";
import type { Metadata } from "next";
import { getFeaturedProducts, getTrendingProducts, getStats, siteUrl } from "@/lib/helpers";
import { testimonials } from "@/lib/testimonials";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";
import ImageWithLoader from "@/components/ImageWithLoader";
import RevealOnScroll from "@/components/RevealOnScroll";
import Newsletter from "@/components/Newsletter/Newsletter";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Premium Digital Assets, Built for Builders",
  description:
    "Marketplace for premium digital assets. Web templates, UI kits, icons, Figma files, motion packs, and code snippets. Ship less. Ship better.",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Graid — Premium Digital Assets, Built for Builders",
    description:
      "Marketplace for premium digital assets. Web templates, UI kits, icons, Figma files, motion packs, and code snippets.",
    url: siteUrl,
  },
};

const categories = [
  { name: "Templates", icon: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z", href: "/marketplace?category=Templates" },
  { name: "UI Kits", icon: "M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z", href: "/marketplace?category=UI+Kits" },
  { name: "Icons", icon: "M12 2l2.4 5.6L20 8l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-.4z", href: "/marketplace?category=Icons" },
  { name: "Figma", icon: "M8 2h4v8H8zM12 2h2a4 4 0 010 8h-2zM12 10h2a4 4 0 010 8h-2zM8 10h4v8H8zM8 6a4 4 0 110 8 4 4 0 010-8z", href: "/marketplace?category=Figma" },
  { name: "Motion", icon: "M3 12a9 9 0 1118 0M7 12a5 5 0 0110 0M11 12a1 1 0 102 0", href: "/marketplace?category=Motion" },
  { name: "Code", icon: "M16 18l6-6-6-6M8 6l-6 6 6 6", href: "/marketplace?category=Code" },
];

const floatingCards = [
  { src: "https://picsum.photos/seed/float1/400/225", alt: "SaaS template preview", top: "10%", left: "6%", delay: "0s", duration: "18s" },
  { src: "https://picsum.photos/seed/float2/400/225", alt: "UI kit preview", top: "18%", left: "70%", delay: "2s", duration: "22s" },
  { src: "https://picsum.photos/seed/float3/400/225", alt: "Icon set preview", top: "48%", left: "4%", delay: "1s", duration: "20s" },
  { src: "https://picsum.photos/seed/float4/400/225", alt: "Figma file preview", top: "58%", left: "72%", delay: "3s", duration: "24s" },
  { src: "https://picsum.photos/seed/float5/400/225", alt: "Motion pack preview", top: "80%", left: "38%", delay: "1.5s", duration: "19s" },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const trending = getTrendingProducts();
  const stats = getStats();

  return (
    <div className={styles.page}>
      {/* Hero — clean, no bg, animated mesh */}
      <section className={styles.hero}>
        {/* Animated gradient mesh background */}
        <div className={styles.heroMesh} aria-hidden="true">
          <div className={`${styles.meshOrb} ${styles.meshOrb1}`} />
          <div className={`${styles.meshOrb} ${styles.meshOrb2}`} />
          <div className={`${styles.meshOrb} ${styles.meshOrb3}`} />
        </div>
        <div className={styles.heroGrid} aria-hidden="true" />

        {/* Floating preview cards */}
        <div className={styles.floatingCards} aria-hidden="true">
          {floatingCards.map((card, i) => (
            <div
              key={i}
              className={styles.floatingCard}
              style={{
                top: card.top,
                left: card.left,
                animationDelay: card.delay,
                animationDuration: card.duration,
              }}
            >
              <ImageWithLoader
                src={card.src}
                alt={card.alt}
                fill
                className={styles.floatingImg}
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className={styles.heroContent}>
          <RevealOnScroll>
            <span className={styles.heroEyebrow}>
              <span className={styles.heroEyebrowDot} />
              Built for builders
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <h1 className={styles.heroTitle}>
              Premium digital assets.
              <br />
              <span className={styles.heroAccent}>Built for builders.</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className={styles.heroSubtitle}>
              Web templates, UI kits, icons, Figma files, motion packs, and code
              snippets — quality-graded by creators, ready to deploy.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <div className={styles.heroCtas}>
              <Button href="/marketplace" size="lg">
                Browse the marketplace
              </Button>
              <Button href="/pricing" size="lg" variant="ghost">
                Sell your work
              </Button>
            </div>
          </RevealOnScroll>
        </div>

        <div className={styles.heroScroll} aria-hidden="true">
          <span className={styles.scrollLine} />
        </div>
      </section>

      {/* Category strip */}
      <section className={styles.categories}>
        <div className="container">
          <div className={styles.categoryGrid}>
            {categories.map((cat) => (
              <Link key={cat.name} href={cat.href} className={styles.categoryCard}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.categoryIcon}
                  aria-hidden="true"
                >
                  <path d={cat.icon} />
                </svg>
                <span className={styles.categoryName}>{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section">
        <div className="container">
          <RevealOnScroll>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.eyebrow}>Featured</span>
                <h2 className={styles.sectionTitle}>Handpicked, quality-graded</h2>
              </div>
              <Link href="/marketplace" className={styles.viewAll}>
                View all →
              </Link>
            </div>
          </RevealOnScroll>
          <div className={styles.featuredGrid}>
            {featured.map((product, i) => (
              <RevealOnScroll key={product.id} delay={i * 100}>
                <ProductCard product={product} size="large" />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className={styles.statsBand}>
        <div className="container">
          <div className={styles.statsGrid}>
            <RevealOnScroll>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{stats.assets}</span>
                <span className={styles.statLabel}>Digital assets</span>
              </div>
            </RevealOnScroll>
            <div className={styles.statDivider} aria-hidden="true" />
            <RevealOnScroll delay={100}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{stats.creators}</span>
                <span className={styles.statLabel}>Creators</span>
              </div>
            </RevealOnScroll>
            <div className={styles.statDivider} aria-hidden="true" />
            <RevealOnScroll delay={200}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{stats.reviews}</span>
                <span className={styles.statLabel}>5-star reviews</span>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="section">
        <div className="container">
          <RevealOnScroll>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.eyebrow} style={{ color: "var(--color-ember)" }}>
                  Trending now
                </span>
                <h2 className={styles.sectionTitle}>What builders are buying</h2>
              </div>
            </div>
          </RevealOnScroll>
          <div className={styles.trendingGrid}>
            {trending.map((product, i) => (
              <RevealOnScroll key={product.id} delay={i * 80}>
                <ProductCard product={product} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-alt">
        <div className="container">
          <RevealOnScroll>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.eyebrow}>Testimonials</span>
                <h2 className={styles.sectionTitle}>Trusted by builders worldwide</h2>
              </div>
            </div>
          </RevealOnScroll>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.id} delay={i * 100}>
                <figure className={styles.testimonial}>
                  <blockquote className={styles.quote}>"{t.quote}"</blockquote>
                  <figcaption className={styles.testimonialAuthor}>
                    <ImageWithLoader
                      src={t.avatar}
                      alt={t.author}
                      width={44}
                      height={44}
                      className={styles.testimonialAvatar}
                    />
                    <div>
                      <span className={styles.testimonialName}>{t.author}</span>
                      <span className={styles.testimonialRole}>{t.role}</span>
                    </div>
                  </figcaption>
                </figure>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-tight">
        <div className="container">
          <RevealOnScroll>
            <Newsletter />
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}

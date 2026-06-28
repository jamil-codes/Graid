import ImageWithLoader from "@/components/ImageWithLoader";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCreatorByUsername,
  getProductsByCreator,
  getAllCreatorUsernames,
  siteUrl,
} from "@/lib/helpers";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import CreatorTabs from "@/components/CreatorTabs";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return getAllCreatorUsernames().map((username) => ({ username }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string }>;
}): Promise<Metadata> {
  const { username } = await params;
  const creator = getCreatorByUsername(username);
  if (!creator) {
    return { title: "Creator not found" };
  }
  return {
    title: `${creator.name} — Creator Profile`,
    description: creator.bio,
    alternates: { canonical: `${siteUrl}/creators/${creator.username}` },
    openGraph: {
      title: `${creator.name} — Graid Creator`,
      description: creator.bio,
      url: `${siteUrl}/creators/${creator.username}`,
      images: [{ url: creator.avatar, width: 200, height: 200, alt: creator.name }],
    },
  };
}

export default async function CreatorPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const creator = getCreatorByUsername(username);
  if (!creator) notFound();

  const creatorProducts = getProductsByCreator(creator.id);
  const allReviews = creatorProducts.flatMap((p) => p.reviews);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: creator.name,
    url: `${siteUrl}/creators/${creator.username}`,
    image: creator.avatar,
    jobTitle: "Digital Creator",
    address: {
      "@type": "PostalAddress",
      addressLocality: creator.location,
    },
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Banner */}
      <div className={styles.banner}>
        <ImageWithLoader
          src={creator.banner}
          alt={`${creator.name} banner`}
          fill
          sizes="100vw"
          className={styles.bannerImg}
          priority
        />
        <div className={styles.bannerOverlay} />
      </div>

      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.avatarWrap}>
            <ImageWithLoader
              src={creator.avatar}
              alt={creator.name}
              width={120}
              height={120}
              className={styles.avatar}
            />
          </div>
          <div className={styles.headerInfo}>
            <div className={styles.nameRow}>
              <h1 className={styles.name}>{creator.name}</h1>
              {creator.verified && <Badge type="Verified" />}
            </div>
            <p className={styles.handle}>@{creator.username}</p>
            <p className={styles.bio}>{creator.bio}</p>
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {creator.location}
              </span>
              <span className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Joined {creator.joinedDate}
              </span>
            </div>
            <div className={styles.headerActions}>
              <Button href="/marketplace" size="sm">View products</Button>
              <Button href="/contact" size="sm" variant="ghost">Contact</Button>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{creator.productsSold.toLocaleString()}</span>
            <span className={styles.statLabel}>Products sold</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{creator.totalSales}</span>
            <span className={styles.statLabel}>Total sales</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{creator.averageRating}</span>
            <span className={styles.statLabel}>Avg. rating</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{creatorProducts.length}</span>
            <span className={styles.statLabel}>Products</span>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabsSection}>
          <CreatorTabs
            products={creatorProducts}
            bio={creator.longBio}
            reviews={allReviews}
          />
        </div>
      </div>
    </div>
  );
}

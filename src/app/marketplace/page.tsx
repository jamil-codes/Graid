import type { Metadata } from "next";
import { products } from "@/lib/products";
import { siteUrl } from "@/lib/helpers";
import MarketplaceFilters from "@/components/MarketplaceFilters";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Marketplace — Browse Digital Assets",
  description:
    "Browse premium digital assets — web templates, UI kits, icons, Figma files, motion packs, and code snippets. Filter by category, price, rating, and license.",
  alternates: { canonical: `${siteUrl}/marketplace` },
  openGraph: {
    title: "Graid Marketplace — Browse Digital Assets",
    description:
      "Premium digital assets for builders. Filter by category, price, rating, and license.",
    url: `${siteUrl}/marketplace`,
  },
};

export default async function MarketplacePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const creatorCount = new Set(products.map((p) => p.creatorId)).size;

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Marketplace</p>
          <h1 className={styles.title}>Browse all assets</h1>
          <p className={styles.subtitle}>
            {products.length} premium digital assets from {creatorCount} creators.
            Quality-graded, ready to deploy.
          </p>
        </div>
      </div>
      <div className="container">
        <MarketplaceFilters products={products} initialCategory={category} />
      </div>
    </div>
  );
}

import ImageWithLoader from "@/components/ImageWithLoader";
import Link from "next/link";
import type { Metadata } from "next";
import { collections } from "@/lib/collections";
import { getProductsByIds, siteUrl } from "@/lib/helpers";
import Button from "@/components/Button";
import RevealOnScroll from "@/components/RevealOnScroll";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Collections — Curated Digital Asset Bundles",
  description:
    "Curated collections of premium digital assets. The Minimal Edit, Dark UI Essentials, Motion Ready, and Developer Starter Pack.",
  alternates: { canonical: `${siteUrl}/collections` },
  openGraph: {
    title: "Graid Collections — Curated Asset Bundles",
    description: "Hand-picked collections of premium digital assets for builders.",
    url: `${siteUrl}/collections`,
  },
};

export default function CollectionsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Collections</p>
          <h1 className={styles.title}>Curated by category, crafted for purpose</h1>
          <p className={styles.subtitle}>
            Each collection is a hand-picked selection of assets that work together.
            Whether you're building for dark mode, shipping a startup, or adding motion
            to your product — there's a bundle for that.
          </p>
        </div>
      </div>

      <div className={styles.collections}>
        {collections.map((collection, i) => {
          const collectionProducts = getProductsByIds(collection.productIds);
          const isReversed = i % 2 === 1;
          return (
            <RevealOnScroll key={collection.id}>
              <section
                className={`${styles.collection} ${isReversed ? styles.reversed : ""}`}
              >
                <div className="container">
                  <div className={styles.collectionInner}>
                    <div className={styles.collectionImage}>
                      <ImageWithLoader
                        src={collection.image}
                        alt={collection.name}
                        fill
                        className={styles.collectionImg}
                      />
                      <div className={styles.collectionOverlay} style={{ background: `linear-gradient(135deg, ${collection.accent}33, transparent)` }} />
                    </div>
                    <div className={styles.collectionContent}>
                      <span className={styles.collectionCount}>
                        {collectionProducts.length} assets
                      </span>
                      <h2 className={styles.collectionName}>{collection.name}</h2>
                      <p className={styles.collectionDesc}>{collection.description}</p>
                      <div className={styles.collectionProducts}>
                        {collectionProducts.slice(0, 3).map((p) => (
                          <Link
                            key={p.id}
                            href={`/marketplace/${p.slug}`}
                            className={styles.miniProduct}
                          >
                            <ImageWithLoader
                              src={p.previewImage}
                              alt={p.name}
                              width={80}
                              height={45}
                              className={styles.miniImg}
                            />
                            <span className={styles.miniName}>{p.name}</span>
                          </Link>
                        ))}
                      </div>
                      <Button href={`/marketplace?category=${collectionProducts[0]?.category}`} size="lg">
                        Browse collection →
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </RevealOnScroll>
          );
        })}
      </div>
    </div>
  );
}

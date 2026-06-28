import ImageWithLoader from "@/components/ImageWithLoader";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getCreatorById,
  getRelatedProducts,
  getAllProductSlugs,
  formatPrice,
  siteUrl,
} from "@/lib/helpers";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import StarRating from "@/components/StarRating";
import ProductGallery from "@/components/ProductGallery";
import LicenseSelector from "@/components/LicenseSelector";
import ProductCard from "@/components/ProductCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Product not found" };
  }
  const creator = getCreatorById(product.creatorId);
  return {
    title: `${product.name} — ${creator?.name || "Marketplace"}`,
    description: product.tagline,
    alternates: { canonical: `${siteUrl}/marketplace/${product.slug}` },
    openGraph: {
      type: "website",
      title: `${product.name} — Graid`,
      description: product.tagline,
      url: `${siteUrl}/marketplace/${product.slug}`,
      images: [{ url: product.previewImage, width: 800, height: 450, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const creator = getCreatorById(product.creatorId);
  const related = getRelatedProducts(product);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.previewImage,
    description: product.tagline,
    sku: product.id,
    brand: { "@type": "Brand", name: "Graid" },
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/marketplace/${product.slug}`,
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero image */}
      <div className={styles.heroImage}>
        <ImageWithLoader
          src={product.previewImage}
          alt={`${product.name} — preview`}
          fill
          sizes="100vw"
          className={styles.heroImg}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroBadges}>
          {product.badges.map((badge) => (
            <Badge key={badge} type={badge} />
          ))}
        </div>
      </div>

      <div className="container">
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/marketplace">Marketplace</Link>
          <span className={styles.crumbSep}>/</span>
          <span className={styles.crumbCurrent}>{product.category}</span>
        </nav>

        {/* Main split */}
        <div className={styles.split}>
          <div className={styles.leftCol}>
            <ProductGallery
              mainImage={product.previewImage}
              galleryImages={product.galleryImages}
              alt={product.name}
            />

            {/* Description */}
            <div className={styles.description}>
              <h2 className={styles.descTitle}>About this product</h2>
              <p className={styles.descText}>{product.description}</p>
            </div>

            {/* What's included */}
            <div className={styles.included}>
              <h2 className={styles.descTitle}>What's included</h2>
              <ul className={styles.includedList}>
                {product.whatsIncluded.map((item, i) => (
                  <li key={i} className={styles.includedItem}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-mint)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Creator card */}
            {creator && (
              <div className={styles.creatorCard}>
                <ImageWithLoader
                  src={creator.avatar}
                  alt={creator.name}
                  width={64}
                  height={64}
                  className={styles.creatorAvatar}
                />
                <div className={styles.creatorInfo}>
                  <div className={styles.creatorNameRow}>
                    <Link
                      href={`/creators/${creator.username}`}
                      className={styles.creatorName}
                    >
                      {creator.name}
                    </Link>
                    {creator.verified && <Badge type="Verified" />}
                  </div>
                  <p className={styles.creatorBio}>{creator.bio}</p>
                  <div className={styles.creatorStats}>
                    <span className={styles.creatorStat}>
                      <strong>{creator.productsSold.toLocaleString()}</strong> sold
                    </span>
                    <span className={styles.creatorStat}>
                      <strong>{creator.averageRating}</strong> ★ rating
                    </span>
                    <span className={styles.creatorStat}>
                      <strong>{creator.totalSales}</strong> in sales
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews */}
            <div className={styles.reviews}>
              <h2 className={styles.descTitle}>
                Reviews ({product.reviewCount})
              </h2>
              <div className={styles.reviewSummary}>
                <span className={styles.reviewBigRating}>{product.rating}</span>
                <StarRating rating={product.rating} showNumber={false} size="md" />
                <span className={styles.reviewCount}>
                  Based on {product.reviewCount} reviews
                </span>
              </div>
              <div className={styles.reviewList}>
                {product.reviews.map((review) => (
                  <div key={review.id} className={styles.review}>
                    <ImageWithLoader
                      src={review.avatar}
                      alt={review.author}
                      width={40}
                      height={40}
                      className={styles.reviewAvatar}
                    />
                    <div className={styles.reviewContent}>
                      <div className={styles.reviewHeader}>
                        <span className={styles.reviewAuthor}>{review.author}</span>
                        <span className={styles.reviewDate}>{review.date}</span>
                      </div>
                      <StarRating rating={review.rating} showNumber={false} />
                      <p className={styles.reviewText}>{review.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky purchase panel */}
          <aside className={styles.purchasePanel}>
            <div className={styles.panelInner}>
              <span className={styles.panelCategory}>{product.category}</span>
              <h1 className={styles.productName}>{product.name}</h1>
              <p className={styles.productTagline}>{product.tagline}</p>

              <div className={styles.panelRating}>
                <StarRating rating={product.rating} count={product.reviewCount} size="md" />
                <span className={styles.panelSales}>
                  {product.sales.toLocaleString()} sales
                </span>
              </div>

              <div className={styles.priceRow}>
                {product.originalPrice && (
                  <span className={styles.originalPrice}>
                    ${product.originalPrice}
                  </span>
                )}
                <span className={styles.price}>{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className={styles.discount}>
                    {Math.round(
                      ((product.originalPrice - product.price) / product.originalPrice) * 100
                    )}
                    % off
                  </span>
                )}
              </div>

              <div className={styles.panelSection}>
                <h3 className={styles.panelLabel}>License</h3>
                <LicenseSelector basePrice={product.price} defaultLicense={product.license} />
              </div>

              <div className={styles.panelActions}>
                <Button size="lg" className={styles.buyBtn}>
                  Buy now
                </Button>
                <Button size="lg" variant="ghost" className={styles.wishlistBtn}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  Wishlist
                </Button>
              </div>

              <div className={styles.fileInfo}>
                <h3 className={styles.panelLabel}>File information</h3>
                <dl className={styles.infoList}>
                  <div className={styles.infoRow}>
                    <dt>Format</dt>
                    <dd className="mono">{product.format}</dd>
                  </div>
                  <div className={styles.infoRow}>
                    <dt>File size</dt>
                    <dd className="mono">{product.fileSize}</dd>
                  </div>
                  <div className={styles.infoRow}>
                    <dt>Last updated</dt>
                    <dd>{product.lastUpdated}</dd>
                  </div>
                  <div className={styles.infoRow}>
                    <dt>License</dt>
                    <dd>{product.license}</dd>
                  </div>
                </dl>
              </div>

              <div className={styles.guarantee}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-mint)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>14-day money-back guarantee</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className={styles.related}>
            <RevealOnScroll>
              <h2 className={styles.relatedTitle}>Related products</h2>
            </RevealOnScroll>
            <div className={styles.relatedGrid}>
              {related.map((p, i) => (
                <RevealOnScroll key={p.id} delay={i * 100}>
                  <ProductCard product={p} />
                </RevealOnScroll>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

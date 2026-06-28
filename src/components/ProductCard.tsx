import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { getCreatorById, formatPrice } from "@/lib/helpers";
import Badge from "./Badge";
import StarRating from "./StarRating";
import ImageWithLoader from "./ImageWithLoader";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  size?: "default" | "large";
}

export default function ProductCard({ product, size = "default" }: ProductCardProps) {
  const creator = getCreatorById(product.creatorId);

  return (
    <Link
      href={`/marketplace/${product.slug}`}
      className={`${styles.card} ${size === "large" ? styles.large : ""}`}
    >
      <div className={styles.imageWrap}>
        <ImageWithLoader
          src={product.previewImage}
          alt={`${product.name} — ${product.tagline}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className={styles.image}
        />
        <div className={styles.badges}>
          {product.badges.map((badge) => (
            <Badge key={badge} type={badge} />
          ))}
        </div>
        <div className={styles.overlay}>
          <span className={styles.quickView}>Quick view</span>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.topRow}>
          <span className={styles.category}>{product.category}</span>
          <StarRating rating={product.rating} count={product.reviewCount} />
        </div>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.tagline}>{product.tagline}</p>
        <div className={styles.bottomRow}>
          {creator && (
            <div className={styles.creator}>
              <Image
                src={creator.avatar}
                alt={creator.name}
                width={24}
                height={24}
                className={styles.avatar}
              />
              <span className={styles.creatorName}>{creator.name}</span>
            </div>
          )}
          <div className={styles.priceWrap}>
            {product.originalPrice && (
              <span className={styles.originalPrice}>
                ${product.originalPrice}
              </span>
            )}
            <span className={styles.price}>{formatPrice(product.price)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

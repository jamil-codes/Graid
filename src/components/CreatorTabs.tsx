"use client";

import { useState } from "react";
import ImageWithLoader from "@/components/ImageWithLoader";
import type { Product, Review } from "@/lib/types";
import ProductCard from "@/components/ProductCard";
import StarRating from "@/components/StarRating";
import styles from "./CreatorTabs.module.css";

interface CreatorTabsProps {
  products: Product[];
  bio: string;
  reviews: Review[];
}

export default function CreatorTabs({ products, bio, reviews }: CreatorTabsProps) {
  const [activeTab, setActiveTab] = useState<"products" | "about" | "reviews">(
    "products"
  );

  return (
    <div>
      <div className={styles.tabNav}>
        <button
          className={`${styles.tab} ${activeTab === "products" ? styles.tabActive : ""}`}
          onClick={() => setActiveTab("products")}
        >
          Products ({products.length})
        </button>
        <button
          className={`${styles.tab} ${activeTab === "about" ? styles.tabActive : ""}`}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={`${styles.tab} ${activeTab === "reviews" ? styles.tabActive : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews ({reviews.length})
        </button>
      </div>

      {activeTab === "products" && (
        <div className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {activeTab === "about" && (
        <div className={styles.aboutSection}>
          <p className={styles.aboutText}>{bio}</p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className={styles.reviewList}>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review.id} className={styles.review}>
                <ImageWithLoader
                  src={review.avatar}
                  alt={review.author}
                  width={44}
                  height={44}
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
            ))
          ) : (
            <p className={styles.noReviews}>No reviews yet.</p>
          )}
        </div>
      )}
    </div>
  );
}

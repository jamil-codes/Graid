"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import styles from "./ProductGallery.module.css";

interface ProductGalleryProps {
  mainImage: string;
  galleryImages: string[];
  alt: string;
}

export default function ProductGallery({
  mainImage,
  galleryImages,
  alt,
}: ProductGalleryProps) {
  const allImages = [mainImage, ...galleryImages];
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleThumbClick = useCallback(
    (i: number) => {
      if (i === activeIndex) return;
      setLoading(true);
      setActiveIndex(i);
    },
    [activeIndex]
  );

  const handleImageLoad = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        {loading && (
          <div className={styles.loader}>
            <div className={styles.loaderIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-electric)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className={styles.shimmer} />
          </div>
        )}
        <Image
          src={allImages[activeIndex]}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`${styles.image} ${loading ? styles.imageLoading : ""}`}
          priority
          onLoad={handleImageLoad}
          key={activeIndex}
        />
      </div>
      <div className={styles.thumbnails}>
        {allImages.map((img, i) => (
          <button
            key={i}
            className={`${styles.thumb} ${i === activeIndex ? styles.thumbActive : ""}`}
            onClick={() => handleThumbClick(i)}
            aria-label={`View image ${i + 1}`}
          >
            <Image
              src={img}
              alt={`${alt} — view ${i + 1}`}
              width={100}
              height={56}
              className={styles.thumbImg}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

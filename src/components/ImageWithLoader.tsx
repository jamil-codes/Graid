"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import type { ImageProps } from "next/image";
import styles from "./ImageWithLoader.module.css";

export default function ImageWithLoader(props: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const { className, onLoad, fill, width, height, ...rest } = props;

  const hasFill = fill || (!width && !height);

  const handleLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      setLoaded(true);
      onLoad?.(e);
    },
    [onLoad]
  );

  return (
    <div
      className={`${styles.wrapper} ${hasFill ? styles.wrapperFill : styles.wrapperFixed} ${loaded ? styles.loaded : ""}`}
    >
      {!loaded && (
        <div className={styles.skeleton}>
          <div className={styles.shimmer} />
        </div>
      )}
      <Image
        {...rest}
        fill={hasFill ? true : undefined}
        width={hasFill ? undefined : width}
        height={hasFill ? undefined : height}
        className={`${styles.image} ${className || ""} ${hasFill ? styles.imageFill : ""}`}
        onLoad={handleLoad}
      />
    </div>
  );
}

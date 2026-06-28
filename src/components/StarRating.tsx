import styles from "./StarRating.module.css";

interface StarRatingProps {
  rating: number;
  count?: number;
  showNumber?: boolean;
  size?: "sm" | "md";
}

export default function StarRating({
  rating,
  count,
  showNumber = true,
  size = "sm",
}: StarRatingProps) {
  return (
    <div className={styles.rating} data-size={size}>
      <span className={styles.stars} aria-label={`${rating} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={star <= Math.round(rating) ? styles.filled : styles.empty}
            width={size === "sm" ? "14" : "16"}
            height={size === "sm" ? "14" : "16"}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </span>
      {showNumber && (
        <span className={styles.text}>
          {rating.toFixed(1)}
          {count !== undefined && (
            <span className={styles.count}> ({count})</span>
          )}
        </span>
      )}
    </div>
  );
}

import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className={styles.logo} onClick={onClick} aria-label="Graid home">
      <svg
        className={styles.mark}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="12" height="12" rx="2" fill="var(--color-electric)" />
        <rect
          x="15"
          y="1"
          width="12"
          height="12"
          rx="2"
          fill="var(--color-electric)"
          fillOpacity="0.3"
        />
        <rect
          x="1"
          y="15"
          width="12"
          height="12"
          rx="2"
          fill="var(--color-electric)"
          fillOpacity="0.3"
        />
        <rect x="15" y="15" width="12" height="12" rx="2" fill="var(--color-electric)" />
      </svg>
      <span className={styles.wordmark}>
        gr<span className={styles.violet}>ai</span>d
      </span>
    </Link>
  );
}

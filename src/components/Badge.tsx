import type { BadgeType } from "@/lib/types";
import styles from "./Badge.module.css";

const badgeLabels: Record<BadgeType, string> = {
  New: "New",
  Sale: "Sale",
  Verified: "Verified",
  Hot: "Hot Pick",
  Free: "Free",
};

export default function Badge({ type }: { type: BadgeType }) {
  return <span className={`${styles.badge} ${styles[type]}`}>{badgeLabels[type]}</span>;
}

import Button from "@/components/Button";
import type { Metadata } from "next";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <p className={styles.text}>
            This page doesn't exist — or it shipped to a different URL.
          </p>
          <div className={styles.actions}>
            <Button href="/">Back home</Button>
            <Button href="/marketplace" variant="ghost">Browse marketplace</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

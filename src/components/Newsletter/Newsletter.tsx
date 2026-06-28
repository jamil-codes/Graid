"use client";

import { useState } from "react";
import Button from "@/components/Button";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h2 className={styles.newsletterTitle}>You're in. Welcome.</h2>
          <p className={styles.newsletterText}>
            Check your inbox for a confirmation. New assets drop every Friday.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletterContent}>
        <h2 className={styles.newsletterTitle}>New assets, every week.</h2>
        <p className={styles.newsletterText}>
          Get the latest drops, creator spotlights, and exclusive deals
          delivered to your inbox. No spam — just quality.
        </p>
      </div>
      <form className={styles.newsletterForm} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="you@example.com"
          className={styles.newsletterInput}
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  );
}

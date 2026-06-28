"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-mint)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className={styles.successTitle}>Message sent</h3>
        <p className={styles.successText}>
          Thanks, {form.name}. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
          placeholder="Your name"
          aria-invalid={!!errors.name}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="subject" className={styles.label}>
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="general">General inquiry</option>
          <option value="support">Product support</option>
          <option value="creator">Creator question</option>
          <option value="enterprise">Enterprise licensing</option>
          <option value="dmca">DMCA / Copyright</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
          placeholder="How can we help?"
          rows={5}
          aria-invalid={!!errors.message}
        />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>

      <button type="submit" className={styles.submitBtn}>
        Send message
      </button>
    </form>
  );
}

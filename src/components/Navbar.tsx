"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/marketplace", label: "Marketplace" },
  { href: "/collections", label: "Collections" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [drawerOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Logo onClick={() => setDrawerOpen(false)} />

        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                pathname.startsWith(link.href) ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <Link href="/signin" className={styles.signIn}>
            Sign in
          </Link>
          <Button href="/pricing" size="sm" className={styles.startBtn}>
            Start selling
          </Button>
          <button
            className={styles.hamburger}
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle menu"
            aria-expanded={drawerOpen}
          >
            <span className={`${styles.bar} ${drawerOpen ? styles.bar1Open : ""}`} />
            <span className={`${styles.bar} ${drawerOpen ? styles.bar2Open : ""}`} />
            <span className={`${styles.bar} ${drawerOpen ? styles.bar3Open : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setDrawerOpen(false);
        }}
      >
        <div className={styles.drawerContent}>
          <div className={styles.drawerHeader}>
            <Logo onClick={() => setDrawerOpen(false)} />
            <button
              className={styles.closeBtn}
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className={styles.drawerNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.drawerLink}
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/signin"
              className={styles.drawerLink}
              onClick={() => setDrawerOpen(false)}
            >
              Sign in
            </Link>
            <Button
              href="/pricing"
              className={styles.drawerCta}
              onClick={() => setDrawerOpen(false)}
            >
              Start selling
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

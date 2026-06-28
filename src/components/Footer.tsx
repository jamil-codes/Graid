import Link from "next/link";
import Logo from "./Logo";
import styles from "./Footer.module.css";

const footerLinks = {
  marketplace: [
    { label: "Browse all", href: "/marketplace" },
    { label: "Templates", href: "/marketplace?category=Templates" },
    { label: "UI Kits", href: "/marketplace?category=UI+Kits" },
    { label: "Icons", href: "/marketplace?category=Icons" },
    { label: "Figma files", href: "/marketplace?category=Figma" },
    { label: "Collections", href: "/collections" },
  ],
  creators: [
    { label: "Start selling", href: "/pricing" },
    { label: "Creator guide", href: "/blog/anatomy-of-a-5-star-ui-kit" },
    { label: "Pricing", href: "/pricing#plans" },
    { label: "Creator profiles", href: "/creators/novastudio" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Terms", href: "/legal/terms" },
    { label: "Privacy", href: "/legal/privacy" },
  ],
};

const socials = [
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zM7.072 1.431c1.346 1.74 2.535 3.572 3.55 5.482-2.5.674-5.32 1.018-8.44 1.018-.536 0-1.062-.012-1.581-.036C1.302 5.394 3.876 2.648 7.072 1.431zM.745 12.001c0-.155.003-.31.009-.464.601.024 1.215.036 1.841.036 3.483 0 6.661-.408 9.522-1.215.246.497.48.998.706 1.503-3.165 1.018-5.742 3.052-7.742 6.108C2.894 16.745.745 14.614.745 12zm5.962 8.926c1.806-2.852 4.144-4.752 7.018-5.688.855 2.335 1.439 4.781 1.74 7.328-1.479.855-3.184 1.351-4.999 1.351-1.387 0-2.702-.281-3.901-.786v-.206zm10.358-.236c-.299-2.335-.845-4.578-1.622-6.708 1.93-.299 4.041-.239 6.342.181-.36 2.746-1.952 5.122-4.221 6.527h-.499z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Logo />
            <p className={styles.tagline}>Built for builders.</p>
            <p className={styles.description}>
              Premium digital assets for creators who ship. Templates, UI kits,
              icons, Figma files, motion packs, and code — quality-graded, ready
              to deploy.
            </p>
            <div className={styles.socials}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Marketplace</h4>
            <ul>
              {footerLinks.marketplace.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Creators</h4>
            <ul>
              {footerLinks.creators.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul>
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Graid. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/legal/terms" className={styles.bottomLink}>
              Terms
            </Link>
            <Link href="/legal/privacy" className={styles.bottomLink}>
              Privacy
            </Link>
            <Link href="/contact" className={styles.bottomLink}>
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

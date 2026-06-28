import ImageWithLoader from "@/components/ImageWithLoader";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog";
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
  siteUrl,
} from "@/lib/helpers";
import Button from "@/components/Button";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Post not found" };
  }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${siteUrl}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.coverImage, width: 1200, height: 600, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Graid" },
    description: post.excerpt,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <article className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Cover */}
      <div className={styles.cover}>
        <ImageWithLoader
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="100vw"
          className={styles.coverImg}
          priority
        />
        <div className={styles.coverOverlay} />
      </div>

      <div className="container">
        <div className={styles.content}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/blog">Blog</Link>
            <span className={styles.crumbSep}>/</span>
            <span className={styles.crumbCurrent}>{post.category}</span>
          </nav>

          {/* Header */}
          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.category}>{post.category}</span>
              <span className={styles.dot}>•</span>
              <span>{post.date}</span>
              <span className={styles.dot}>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>
          </header>

          {/* Author */}
          <div className={styles.authorCard}>
            <ImageWithLoader
              src={post.authorAvatar}
              alt={post.author}
              width={48}
              height={48}
              className={styles.authorAvatar}
            />
            <div>
              <span className={styles.authorName}>{post.author}</span>
              <span className={styles.authorRole}>Contributor, Graid Blog</span>
            </div>
          </div>

          {/* Body */}
          <div className={styles.body}>
            {post.content.map((section, i) => (
              <div key={i} className={styles.section}>
                {section.heading && (
                  <h2 className={styles.subheading}>{section.heading}</h2>
                )}
                {section.paragraphs.map((para, j) => (
                  <p key={j} className={styles.paragraph}>
                    {para}
                  </p>
                ))}
                {section.list && (
                  <ul className={styles.list}>
                    {section.list.map((item, k) => (
                      <li key={k} className={styles.listItem}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-electric)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.postCta}>
            <h3 className={styles.ctaTitle}>Ready to ship better?</h3>
            <p className={styles.ctaText}>
              Browse premium digital assets on Graid. Quality-graded, ready to deploy.
            </p>
            <Button href="/marketplace">Browse the marketplace</Button>
          </div>

          {/* Other posts */}
          <div className={styles.otherPosts}>
            <h2 className={styles.otherTitle}>Keep reading</h2>
            <div className={styles.otherGrid}>
              {otherPosts.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className={styles.otherCard}>
                  <ImageWithLoader
                    src={p.coverImage}
                    alt={p.title}
                    fill
                    className={styles.otherImg}
                  />
                  <div className={styles.otherContent}>
                    <span className={styles.category}>{p.category}</span>
                    <h3 className={styles.otherPostTitle}>{p.title}</h3>
                    <span className={styles.otherDate}>{p.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

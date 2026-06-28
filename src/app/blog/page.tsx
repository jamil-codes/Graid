import ImageWithLoader from "@/components/ImageWithLoader";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getFeaturedBlogPost,
  getNonFeaturedBlogPosts,
  siteUrl,
} from "@/lib/helpers";
import RevealOnScroll from "@/components/RevealOnScroll";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, guides, and stories from the Graid team and creator community. Learn about pricing, design systems, and building digital products.",
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    title: "Graid Blog — Insights for Builders",
    description: "Guides, stories, and insights from the Graid marketplace.",
    url: `${siteUrl}/blog`,
  },
};

export default function BlogPage() {
  const featured = getFeaturedBlogPost();
  const posts = getNonFeaturedBlogPosts();

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Blog</p>
          <h1 className={styles.title}>Insights for builders</h1>
          <p className={styles.subtitle}>
            Guides, stories, and lessons from creators and the Graid team.
          </p>
        </div>

        {/* Featured post */}
        {featured && (
          <RevealOnScroll>
            <Link href={`/blog/${featured.slug}`} className={styles.featuredPost}>
              <div className={styles.featuredImage}>
                <ImageWithLoader
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className={styles.featuredImg}
                  priority
                />
              </div>
              <div className={styles.featuredContent}>
                <div className={styles.featuredMeta}>
                  <span className={styles.postCategory}>{featured.category}</span>
                  <span className={styles.postDate}>{featured.date}</span>
                  <span className={styles.postReadTime}>{featured.readTime}</span>
                </div>
                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                <div className={styles.featuredAuthor}>
                  <ImageWithLoader
                    src={featured.authorAvatar}
                    alt={featured.author}
                    width={32}
                    height={32}
                    className={styles.authorAvatar}
                  />
                  <span className={styles.authorName}>{featured.author}</span>
                </div>
              </div>
            </Link>
          </RevealOnScroll>
        )}

        {/* Post grid */}
        <div className={styles.postGrid}>
          {posts.map((post, i) => (
            <RevealOnScroll key={post.id} delay={i * 100}>
              <Link href={`/blog/${post.slug}`} className={styles.postCard}>
                <div className={styles.postImage}>
                  <ImageWithLoader
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.postImg}
                  />
                </div>
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.postCategory}>{post.category}</span>
                    <span className={styles.postReadTime}>{post.readTime}</span>
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postFooter}>
                    <div className={styles.postAuthor}>
                      <ImageWithLoader
                        src={post.authorAvatar}
                        alt={post.author}
                        width={28}
                        height={28}
                        className={styles.authorAvatar}
                      />
                      <span className={styles.authorName}>{post.author}</span>
                    </div>
                    <span className={styles.postDate}>{post.date}</span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}

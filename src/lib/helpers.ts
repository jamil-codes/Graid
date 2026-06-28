import { products } from "./products";
import { creators } from "./creators";
import { blogPosts } from "./blog";
import { collections } from "./collections";
import type { Product, Creator, BlogPost, Collection } from "./types";

export const siteUrl = "https://graid.market";

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug);
}

export function getCreatorById(id: string): Creator | undefined {
    return creators.find((c) => c.id === id);
}

export function getCreatorByUsername(username: string): Creator | undefined {
    return creators.find((c) => c.username === username);
}

export function getProductsByCreator(creatorId: string): Product[] {
    return products.filter((p) => p.creatorId === creatorId);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
    return products
        .filter((p) => p.id !== product.id && p.category === product.category)
        .slice(0, limit);
}

export function getFeaturedProducts(): Product[] {
    return products.filter((p) => p.featured);
}

export function getTrendingProducts(): Product[] {
    return products.filter((p) => p.trending);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedBlogPost(): BlogPost | undefined {
    return blogPosts.find((p) => p.featured);
}

export function getNonFeaturedBlogPosts(): BlogPost[] {
    return blogPosts.filter((p) => !p.featured);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
    return collections.find((c) => c.slug === slug);
}

export function getProductsByIds(ids: string[]): Product[] {
    return ids
        .map((id) => products.find((p) => p.id === id))
        .filter((p): p is Product => p !== undefined);
}

export function getAllProductSlugs(): string[] {
    return products.map((p) => p.slug);
}

export function getAllCreatorUsernames(): string[] {
    return creators.map((c) => c.username);
}

export function getAllBlogSlugs(): string[] {
    return blogPosts.map((p) => p.slug);
}

export function formatPrice(price: number): string {
    if (price === 0) return "Free";
    return `$${price}`;
}

export function getCategories(): string[] {
    return ["Templates", "UI Kits", "Icons", "Figma", "Motion", "Code"];
}

export function getStats() {
    return {
        assets: "12,400+",
        creators: "3,800",
        reviews: "98%",
    };
}

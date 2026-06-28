export type Category =
    | "Templates"
    | "UI Kits"
    | "Icons"
    | "Figma"
    | "Motion"
    | "Code";

export type LicenseType = "Personal" | "Commercial" | "Extended";

export type BadgeType = "New" | "Sale" | "Verified" | "Hot" | "Free";

export interface Creator {
    id: string;
    username: string;
    name: string;
    avatar: string;
    banner: string;
    bio: string;
    longBio: string;
    location: string;
    joinedDate: string;
    verified: boolean;
    productsSold: number;
    totalSales: string;
    averageRating: number;
    socials: {
        twitter?: string;
        dribbble?: string;
        website?: string;
    };
}

export interface Review {
    id: string;
    author: string;
    avatar: string;
    rating: number;
    date: string;
    text: string;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    tagline: string;
    description: string;
    whatsIncluded: string[];
    category: Category;
    creatorId: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviewCount: number;
    sales: number;
    badges: BadgeType[];
    license: LicenseType;
    format: string;
    fileSize: string;
    lastUpdated: string;
    previewImage: string;
    galleryImages: string[];
    featured: boolean;
    trending: boolean;
    createdAt: string;
    reviews: Review[];
}

export interface Collection {
    id: string;
    slug: string;
    name: string;
    description: string;
    image: string;
    productIds: string[];
    accent: string;
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: BlogSection[];
    category: string;
    author: string;
    authorAvatar: string;
    date: string;
    readTime: string;
    coverImage: string;
    featured: boolean;
}

export interface BlogSection {
    heading?: string;
    paragraphs: string[];
    list?: string[];
}

export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    avatar: string;
}

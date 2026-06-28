"use client";

import { useState, useMemo } from "react";
import type { Product, Category, LicenseType } from "@/lib/types";
import ProductCard from "@/components/ProductCard";
import styles from "./MarketplaceFilters.module.css";

type SortOption = "popular" | "newest" | "price-low" | "price-high";

interface MarketplaceFiltersProps {
  products: Product[];
  initialCategory?: string;
}

const categories: Category[] = ["Templates", "UI Kits", "Icons", "Figma", "Motion", "Code"];
const licenses: LicenseType[] = ["Personal", "Commercial", "Extended"];

export default function MarketplaceFilters({
  products,
  initialCategory,
}: MarketplaceFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [priceRange, setPriceRange] = useState<number>(100);
  const [minRating, setMinRating] = useState<number>(0);
  const [selectedLicenses, setSelectedLicenses] = useState<string[]>([]);
  const [sort, setSort] = useState<SortOption>("popular");
  const [showFreeOnly, setShowFreeOnly] = useState(false);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleLicense = (lic: string) => {
    setSelectedLicenses((prev) =>
      prev.includes(lic) ? prev.filter((l) => l !== lic) : [...prev, lic]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange(100);
    setMinRating(0);
    setSelectedLicenses([]);
    setSort("popular");
    setShowFreeOnly(false);
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    result = result.filter((p) => p.price <= priceRange);

    if (showFreeOnly) {
      result = result.filter((p) => p.price === 0);
    }

    if (minRating > 0) {
      result = result.filter((p) => p.rating >= minRating);
    }

    if (selectedLicenses.length > 0) {
      result = result.filter((p) => selectedLicenses.includes(p.license));
    }

    switch (sort) {
      case "newest":
        result.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        result.sort((a, b) => b.sales - a.sales);
    }

    return result;
  }, [products, selectedCategories, priceRange, minRating, selectedLicenses, sort, showFreeOnly]);

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarInner}>
          <div className={styles.sidebarHeader}>
            <h3 className={styles.sidebarTitle}>Filters</h3>
            <button className={styles.clearBtn} onClick={clearFilters}>
              Clear all
            </button>
          </div>

          <div className={styles.filterGroup}>
            <h4 className={styles.filterLabel}>Category</h4>
            <div className={styles.checkboxes}>
              {categories.map((cat) => (
                <label key={cat} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className={styles.checkbox}
                  />
                  <span className={styles.checkText}>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <h4 className={styles.filterLabel}>Price range</h4>
            <div className={styles.priceDisplay}>
              <span>$0</span>
              <span className={styles.priceMax}>${priceRange}</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className={styles.rangeSlider}
              aria-label="Maximum price"
            />
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={showFreeOnly}
                onChange={() => setShowFreeOnly(!showFreeOnly)}
                className={styles.checkbox}
              />
              <span className={styles.checkText}>Free only</span>
            </label>
          </div>

          <div className={styles.filterGroup}>
            <h4 className={styles.filterLabel}>Rating</h4>
            <div className={styles.ratingButtons}>
              {[0, 4, 4.5, 4.8].map((rating) => (
                <button
                  key={rating}
                  className={`${styles.ratingBtn} ${
                    minRating === rating ? styles.ratingBtnActive : ""
                  }`}
                  onClick={() => setMinRating(rating)}
                >
                  {rating === 0 ? "All" : `${rating}+ ★`}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <h4 className={styles.filterLabel}>License type</h4>
            <div className={styles.checkboxes}>
              {licenses.map((lic) => (
                <label key={lic} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={selectedLicenses.includes(lic)}
                    onChange={() => toggleLicense(lic)}
                    className={styles.checkbox}
                  />
                  <span className={styles.checkText}>{lic}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <div className={styles.main}>
        <div className={styles.toolbar}>
          <p className={styles.resultCount}>
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>
          <div className={styles.sortWrap}>
            <label htmlFor="sort" className={styles.sortLabel}>
              Sort:
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className={styles.sortSelect}
            >
              <option value="popular">Popular</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <h3 className={styles.emptyTitle}>No products found</h3>
            <p className={styles.emptyText}>
              Try adjusting your filters or clearing all to see everything.
            </p>
            <button className={styles.clearBtnLarge} onClick={clearFilters}>
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

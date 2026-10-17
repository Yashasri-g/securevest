'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/data/blogPosts';

interface BlogSearchFilterProps {
  posts: BlogPost[];
}

export default function BlogSearchFilter({ posts }: BlogSearchFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'estate', label: 'Estate & Trusts' },
    { id: 'retirement', label: 'Retirement' },
    { id: 'insurance', label: 'Life Insurance' },
    { id: 'protection', label: 'Asset Protection' },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCat = selectedCategory === 'all' || post.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.categoryLabel.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <>
      {/* Filter Bar */}
      <div className="blog-filters-bar">
        <div className="filter-pills" role="toolbar" aria-label="Filter blog posts by category">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-pill ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="blog-search-box">
          <span className="blog-search-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            type="text"
            className="blog-search-input"
            placeholder="Search insights..."
            aria-label="Search articles by keyword"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid-3 blog-grid">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="blog-card" data-category={post.category}>
              <div className="blog-card-media">
                <span className={`badge ${post.category === 'estate' ? 'badge-gold' : 'badge-cyan'} blog-card-badge`}>
                  {post.categoryLabel}
                </span>
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="blog-card-img"
                  width={380}
                  height={220}
                />
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="blog-card-title">
                  <Link href={`/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="blog-card-excerpt">
                  {post.excerpt}
                </p>
                <div className="blog-card-footer">
                  <Link href={`/${post.slug}`} className="nav-link" style={{ padding: 0 }}>
                    Read Article &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
          <h3>No articles found</h3>
          <p style={{ color: 'var(--color-slate-500)' }}>
            Try searching for a different keyword or selecting "All Articles".
          </p>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            style={{ marginTop: '1rem' }}
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </>
  );
}

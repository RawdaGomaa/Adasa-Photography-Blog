import { tw } from '../tailwind-classes';
import React from 'react';
import { Link } from 'react-router-dom';

const categoryColors = {
  'إضاءة': 'green',
  'بورتريه': 'purple',
  'مناظر طبيعية': 'blue',
  'تقنيات': 'orange',
  'معدات': 'teal',
};

export function formatDate(date) {
  return new Intl.DateTimeFormat('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(date));
}

function Meta({ post }) {
  return (
    <div className={tw("post-meta")}>
      <span>{post.readTime}</span>
      <span>•</span>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
    </div>
  );
}

export default function BlogCard({ post, view = 'grid' }) {
  return (
    <article className={tw(`blog-card ${view === 'list' ? 'list-card' : ''}`)}>
      <Link to={`/blog/${post.slug}`} className={tw("card-image-wrap relative block overflow-hidden")}>
        <img src={post.image} alt={post.title} loading="lazy" />
        <span className={tw(`category-badge ${categoryColors[post.category] || 'purple'}`)}>{post.category}</span>
      </Link>
      <div className={tw("card-content relative")}>
        <Meta post={post} />
        <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
        <p>{post.excerpt}</p>
        <div className={tw("author-row flex items-center")}>
          <img src={post.author.avatar} alt={post.author.name} loading="lazy" />
          <div>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
          <Link className={tw("read-more")} to={`/blog/${post.slug}`} aria-label={`اقرأ ${post.title}`}>اقرأ المقال ←</Link>
        </div>
      </div>
    </article>
  );
}

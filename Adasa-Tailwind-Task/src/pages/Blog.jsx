import { tw } from '../tailwind-classes';
import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import data from '../data/posts.json';
import BlogCard from '../components/BlogCard';
import Pagination from '../components/Pagination';
import CategoryFilter from '../components/CategoryFilter';

const PER_PAGE = 6;

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [search, setSearch] = useState(searchParams.get('q') || '');
  const [category, setCategory] = useState(initialCategory);
  const [view, setView] = useState('grid');
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);

  const featured = data.posts.find(post => post.featured) || data.posts[0];
  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return data.posts.filter((post) => {
      const matchesCategory = category === 'all' || post.category === category;
      const haystack = [post.title, post.excerpt, post.category, post.author.name, ...post.tags].join(' ').toLowerCase();
      return matchesCategory && (!query || haystack.includes(query));
    });
  }, [search, category]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const visiblePosts = filteredPosts.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  useEffect(() => {
    setSearch(searchParams.get('q') || '');
    setCategory(searchParams.get('category') || 'all');
    setPage(Math.max(1, Number(searchParams.get('page')) || 1));
  }, [searchParams]);

  const updateFilters = (changes) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(changes).forEach(([key,value]) => value === '' || value === 'all' || value === 1 ? params.delete(key) : params.set(key,String(value)));
    if (!('page' in changes)) params.delete('page');
    setSearchParams(params);
  };

  return (
    <section className={tw("blog-page")}>
      <div className={tw("container mx-auto")}>
        <div className="relative isolate flex h-[365px] flex-col items-center justify-start pt-[87px] text-center max-[640px]:h-auto max-[640px]:min-h-[365px] max-[640px]:pt-[70px]">
          {/* Full-bleed grid and warm orange glow above the blog section background */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2" style={{ backgroundColor: '#090909', backgroundImage: 'linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,.055) 1px,transparent 1px), radial-gradient(ellipse at 40% 55%,rgba(255,100,0,.13),transparent 58%)', backgroundSize: '65px 65px,65px 65px,100% 100%' }} />
          <span className={`${tw("eyebrow")} relative z-10`}><span className={tw("eyebrow-dot")} /> مدونتنا <span className={tw("eyebrow-icon")}>▣</span></span>
          <h1 className="relative z-10 mt-[25px] mb-[18px] text-[64px] leading-[1.1] font-black tracking-[-1.8px] max-[640px]:text-[43px]">اكتشف <span className="text-[#ff6a00]">مقالاتنا</span></h1>
          <p className="relative z-10 m-0 text-[18px] leading-[1.7] text-[#a0a0a0] max-[640px]:px-4 max-[640px]:text-[15px]">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
        </div>

        <div className={tw("blog-controls")}>
          <div className={tw("blog-search-row")}>
            <div className={tw("search-box")}>
              <span className={tw("search-icon")}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.4" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M15.7 15.7 21 21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></span>
              <input value={search} onChange={(e) => updateFilters({q:e.target.value})} placeholder="ابحث في المقالات..." aria-label="البحث عن مقال" />
              {search && <button onClick={() => updateFilters({q:''})} aria-label="مسح البحث">×</button>}
            </div>
            <CategoryFilter categories={data.categories} value={category} onChange={(value) => updateFilters({category:value})} />
          </div>
        </div>

        <div className={tw("results-bar")}>
          <div className={tw("view-toggle")} aria-label="تغيير طريقة العرض">
            <button className={tw(view === 'list' ? 'active' : '')} onClick={() => setView('list')} aria-label="عرض قائمة">
              <span className={tw("list-icon")}><i /><i /><i /></span>
            </button>
            <button className={tw(view === 'grid' ? 'active' : '')} onClick={() => setView('grid')} aria-label="عرض شبكي">
              <span className={tw("grid-icon")}><i /><i /><i /><i /></span>
            </button>
          </div>
          <p>عرض <strong>{filteredPosts.length}</strong> مقالات</p>
          {(search || category !== 'all') && <button onClick={() => setSearchParams({})}>إزالة الفلاتر</button>}
        </div>

        {visiblePosts.length ? (
          <div className={tw(`posts-grid ${view === 'list' ? 'list-view' : ''}`)}>
            {visiblePosts.map((post) => <BlogCard key={post.id} post={post} view={view} />)}
          </div>
        ) : (
          <div className={tw("empty-state")}>
            <span>⌕</span>
            <h2>مفيش نتائج مطابقة</h2>
            <p>جرّب كلمة بحث مختلفة أو اختر تصنيفاً آخر.</p>
            <button className={tw("primary-btn")} onClick={() => setSearchParams({})}>عرض كل المقالات</button>
          </div>
        )}

        <Pagination page={safePage} totalPages={totalPages} onChange={(number) => updateFilters({page:number})} />
      </div>
    </section>
  );
}

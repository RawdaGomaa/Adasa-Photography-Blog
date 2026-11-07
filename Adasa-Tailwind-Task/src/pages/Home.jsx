import { tw } from '../tailwind-classes';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/posts.json';
import BlogCard from '../components/BlogCard';
import SectionHeading from '../components/SectionHeading';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const { hash } = useLocation();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  useEffect(() => {
    if (hash === '#about') {
      const timer = window.setTimeout(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
      return () => window.clearTimeout(timer);
    }
  }, [hash]);

  const featured = data.posts.filter((post) => post.featured);
  const latest = [...data.posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);

  return (
    <>
      <section className={tw("hero-section relative isolate flex items-center justify-center overflow-hidden text-center")}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0" style={{ backgroundColor: '#090909', backgroundImage: 'linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,.055) 1px,transparent 1px), radial-gradient(ellipse at 40% 55%,rgba(255,100,0,.13),transparent 58%)', backgroundSize: '65px 65px,65px 65px,100% 100%' }} />
        <div className={tw("hero-glow glow-one")} />
        <div className={tw("hero-glow glow-two")} />
        <div className={tw("container hero-content mx-auto relative z-[2]")}>
          <span className={tw("hero-kicker")}>مرحباً بك في عدسة</span>
          <h1>اكتشف <span>فن</span><br />التصوير الفوتوغرافي</h1>
          <p>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>
          <div className={tw("hero-actions flex items-center justify-center flex-wrap")}>
            <Link to="/blog" className={tw("primary-btn")}>استكشف المقالات <span>←</span></Link>
        <Link to="/about" className={tw("secondary-btn")}>
            <span className={tw("info-icon")}>i</span>
              اعرف المزيد
                 </Link>
          </div>
          <div className={tw("hero-stats flex justify-center")} aria-label="إحصائيات عدسة">
            <div className={tw("stat-card")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg><strong>50+</strong><span>مقالة</span></div>
            <div className={tw("stat-card")}><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2 19v-2c0-3 3-5 7-5s7 2 7 5v2H2Zm14-6c3.7.1 6 1.8 6 4v2h-4v-2c0-1.4-.7-2.8-2-4Z"/></svg><strong>10+ ألف</strong><span>قارئ</span></div>
            <div className={tw("stat-card")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M3 7h8l2 3h8v9H3z"/><path d="M3 7V5h8"/></svg><strong>4</strong><span>تصنيفات</span></div>
            <div className={tw("stat-card")}><svg viewBox="0 0 24 24" fill="currentColor"><path d="m4 20 5.5-1.5L21 7a3 3 0 0 0-4-4L5.5 14.5 4 20Zm10-15 5 5"/></svg><strong>6</strong><span>كاتب</span></div>
          </div>
        </div>
        <div className={tw("hero-camera")} aria-hidden="true">
          <div className={tw("camera-ring")}><span /></div>
        </div>
      </section>

      <section id="featured" className={tw("section container relative mx-auto")}>
        <div className={tw("home-section-head")}><SectionHeading align="right" eyebrow="مميز" title="مقالات مختارة" description="محتوى منتقى لبدء رحلة تعلمك" /><Link to="/blog" className={tw("home-featured-all")}>عرض الكل <span>‹</span></Link></div>
        <div className={tw("home-featured-list")}>
          {featured.slice(0, 3).map((post) => <article className={tw("home-featured-card")} key={post.id}>
            <Link className={tw("home-featured-image")} to={`/blog/${post.slug}`}><img src={post.image} alt={post.title} /><span className={tw("featured-sticker")}>★ مميز</span></Link>
            <div className={tw("home-featured-info")}><div className={tw("home-featured-meta")}><span className={tw("category-pill")}>{post.category}</span><span>◷ {post.readTime}</span></div><Link to={`/blog/${post.slug}`} className={tw("home-featured-title")}>{post.title}</Link><p>{post.excerpt}</p><div className={tw("home-featured-bottom")}><div className={tw("home-featured-author")}><img src={post.author.avatar} alt=""/><span><strong>{post.author.name}</strong><small>{post.author.role}</small></span></div><Link to={`/blog/${post.slug}`} className={tw("home-featured-read")}>اقرأ المقال ←</Link></div></div>
          </article>)}
        </div>
      </section>

      <section className={tw("categories-section")}>
        <div className={tw("container mx-auto")}>
          <SectionHeading eyebrow="التصنيفات" title="استكشف حسب الموضوع" description="اعثر على محتوى مصمم حسب اهتماماتك." />
          <div className={tw("category-grid")}>
            {data.categories.map((category) => (
              <Link key={category.name} to={`/blog?category=${encodeURIComponent(category.name)}`} className={tw("category-card")}>
                <span className={tw(`category-icon ${category.color}`)} aria-hidden="true">{category.name==='إضاءة'?'☼':category.name==='بورتريه'?'♟':category.name==='مناظر طبيعية'?'▲':category.name==='تقنيات'?'☷':'⚙'}</span>
                <div><h3>{category.name}</h3><p>{category.count} مقالة</p></div>
                <span className={tw("category-arrow")}>←</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={tw("section container latest-section relative mx-auto")}>
        <div className={tw("section-row flex justify-between")}>
          <SectionHeading align="right" eyebrow="الأحدث" title="أحدث المقالات" description="محتوى جديد طازج من المطبعة." />
          <Link to="/blog" className={tw("outline-btn")}>عرض جميع المقالات <span>←</span></Link>
        </div>
        <div className={tw("latest-grid grid")}>
          {latest.slice(3, 6).map((post) => <BlogCard key={post.id} post={post} />)}
        </div>
      </section>
      <section className={tw("home-newsletter-section")}><div className={tw("home-newsletter-card")}><span className={tw("home-newsletter-icon")} aria-hidden="true">✉</span><h2>اشترك في <span>نشرتنا الإخبارية</span></h2><p>احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p><form onSubmit={e=>{e.preventDefault();if(newsletterEmail.trim()) newsletterEmail.includes('@') && setNewsletterSubmitted(true)}}><input type="email" required placeholder="أدخل بريدك الإلكتروني" value={newsletterEmail} onChange={e=>{setNewsletterEmail(e.target.value);setNewsletterSubmitted(false)}}/><button type="submit">اشترك الآن</button></form><div className={tw("home-newsletter-trust")}><span className={tw("newsletter-avatars")}>{data.posts.slice(0,3).map(p=><img src={p.author.avatar} alt="" key={p.id}/>)}</span><span>انضم لـ <strong>10,000+</strong> مصور</span><span>·</span><span>بدون إزعاج</span><span>·</span><span>إلغاء الاشتراك في أي وقت</span></div>{newsletterSubmitted&&<small className={tw("home-newsletter-message")}>تم تسجيل البريد في النموذج التجريبي فقط؛ لا توجد خدمة إرسال متصلة.</small>}</div></section>
    </>
  );
}

import { tw } from '../tailwind-classes';
import React, { useEffect } from 'react';
import {Link,useParams} from 'react-router-dom';
import data from '../data/posts.json';
import {formatDate} from '../components/BlogCard';

export default function BlogDetails(){
 const {slug}=useParams(); const post=data.posts.find(p=>p.slug===slug);
 useEffect(()=>{window.scrollTo(0,0)},[slug]);
 if(!post)return <section className={tw("not-found container mx-auto")}><h1>المقال غير موجود</h1><Link className={tw("primary-btn")} to="/blog">العودة للمدونة</Link></section>;
 const parts=post.content.split(/\n\n+/).filter(Boolean);
 const headings=parts.filter(x=>x.startsWith('## ')).map((x,i)=>({title:x.slice(3).trim(),id:`section-${i+1}`}));
 let idx=0;
 const related=data.posts.filter(p=>p.id!==post.id && p.category===post.category).slice(0,3);
 const share=(kind)=>{let url=encodeURIComponent(window.location.href), title=encodeURIComponent(post.title);let dest=kind==='x'?`https://twitter.com/intent/tweet?text=${title}&url=${url}`:kind==='wa'?`https://wa.me/?text=${title}%20${url}`:`https://www.linkedin.com/sharing/share-offsite/?url=${url}`;window.open(dest,'_blank','noopener,noreferrer')};
 return <article className={tw("reference-detail")}>
  <header className={tw("detail-hero")} style={{backgroundImage:`linear-gradient(to top,#090909 0%,rgba(0,0,0,.30) 75%),url('${post.image}')`}}><div className={tw("container detail-hero-content mx-auto")}><div className={tw("detail-crumbs")}><Link to="/">⌂</Link> ‹ <Link to="/blog">المدونة</Link> ‹ <Link to={`/blog?category=${encodeURIComponent(post.category)}`}>{post.category}</Link></div><div className={tw("detail-title-wrap")}><div className={tw("detail-meta-line")}><Link to={`/blog?category=${encodeURIComponent(post.category)}`} className={tw("detail-category")}>{post.category}</Link><span>▣ {formatDate(post.date)}</span><span>◷ {post.readTime}</span></div><h1>{post.title}</h1><div className={tw("detail-hero-author")}><img src={post.author.avatar} alt=""/><span><strong>{post.author.name}</strong><small>{post.author.role}</small></span></div></div></div></header>
  <div className={tw("container reference-article-grid mx-auto")}><aside className={tw("reference-detail-sidebar")}><div className={tw("detail-side-card detail-toc")}><h3>☷ &nbsp; محتويات المقال</h3>{headings.map((h,i)=><a key={h.id} href={`#${h.id}`}><span>{i+1}</span>{h.title}</a>)}</div><div className={tw("detail-side-card detail-side-facts")}><div>◷<strong>{post.readTime}</strong><small>وقت القراءة</small></div><div>▣<strong>{formatDate(post.date)}</strong><small>تاريخ النشر</small></div></div><div className={tw("detail-side-card detail-side-cta")}><h3>لا تفوت جديدنا</h3><p>اشترك للحصول على أحدث المقالات</p><Link to="/blog">تصفح المزيد</Link></div></aside>
  <main className={tw("reference-article-body")}><blockquote>{post.excerpt}</blockquote>{parts.map((text,i)=>{if(text.startsWith('## ')){idx++;return <h2 id={`section-${idx}`} key={i}><span>▣</span>{text.slice(3)}</h2>}return <p key={i}>{text}</p>})}
  <section className={tw("detail-tags")}><h3>◇ الوسوم</h3><div>{post.tags.map(t=><Link key={t} to={`/blog?q=${encodeURIComponent(t)}`}>#{t}</Link>)}</div></section><section className={tw("detail-share")}><h3>مشاركة المقال</h3><div><button onClick={()=>share('x')}>𝕏</button><button onClick={()=>share('wa')}>◉</button><button onClick={()=>share('li')}>in</button><button onClick={()=>navigator.clipboard?.writeText(window.location.href)}>🔗</button></div></section><section className={tw("detail-author-card")}><img src={post.author.avatar} alt=""/><div><small>كاتب المقال</small><h3>{post.author.name}</h3><p>{post.author.role}</p><p>مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p></div></section></main></div>
 <section className={tw("container detail-related mx-auto")}><div className={tw("detail-related-head")}><div><h2>مقالات قد تعجبك</h2><p>استكشف المزيد من المحتوى المميز</p></div><Link to="/blog">عرض الكل ←</Link></div><div className={tw("detail-related-grid")}>{related.map(p=><Link key={p.id} to={`/blog/${p.slug}`} className={tw("detail-related-card")}><div><img src={p.image} alt=""/><span>{p.category}</span></div><h3>{p.title}</h3><p>{p.author.name} · {p.readTime}</p></Link>)}</div></section>
 </article>
}

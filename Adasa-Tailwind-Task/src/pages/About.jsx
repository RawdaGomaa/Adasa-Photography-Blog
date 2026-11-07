import { tw } from '../tailwind-classes';
import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/posts.json';
const stats = [
  { icon: 'users', value: '+2مليون', label: 'قارئ شهرياً' },
  { icon: 'article', value: '+500', label: 'مقالة منشورة' },
  { icon: 'pen', value: '+50', label: 'كاتب خبير' },
  { icon: 'book', value: '+15', label: 'تصنيف' },
];
function StatIcon({type}) {
  const common = {fill:'none', stroke:'currentColor', strokeWidth:2.2, strokeLinecap:'round', strokeLinejoin:'round'};
  if(type==='users')return <svg viewBox="0 0 24 24" {...common}><circle cx="9" cy="7" r="3"/><path d="M2 20v-2a6 6 0 0 1 12 0v2M17 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 5 5v1"/></svg>;
  if(type==='article')return <svg viewBox="0 0 24 24" {...common}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 3v18M12 8h6M12 12h6M12 16h6"/></svg>;
  if(type==='pen')return <svg viewBox="0 0 24 24" {...common}><path d="m4 20 4-1 12-12-3-3L5 16l-1 4ZM14 7l3 3"/></svg>;
  return <svg viewBox="0 0 24 24" {...common}><path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1ZM12 6v14"/></svg>;
}
const values = [
 {icon:'◎',title:'الجودة أولاً',desc:'محتوى مدروس ومكتوب بخبرة'},
 {icon:'ϟ',title:'تركيز عملي',desc:'أمثلة واقعية يمكنك تطبيقها اليوم'},
 {icon:'🤝',title:'المجتمع',desc:'تعلم مع آلاف المصورين'},
 {icon:'⟳',title:'دائماً محدث',desc:'أحدث الاتجاهات وأفضل الممارسات'}
];
const authors=[...new Map(data.posts.map(post=>[post.author.name,post.author])).values()];
export default function About(){return <div className={tw("about-page")}>
<section className={tw("about-hero")}><div className={tw("container mx-auto")}><span className={tw("hero-kicker")}>● ● من نحن</span><h1>مهمتنا هي <span>العلم والإلهام</span></h1><p>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.</p><div className={tw("about-stats")}>{stats.map(item=><div className={tw("about-stat")} key={item.label}><StatIcon type={item.icon}/><strong>{item.value}</strong><span>{item.label}</span></div>)}</div></div></section>
<section className={tw("about-values")}><div className={tw("container mx-auto")}><div className={tw("about-section-title")}><h2>قيمنا</h2><p>المبادئ التي توجه كل ما نقوم بإنشائه</p></div><div className={tw("about-values-grid")}>{values.map(v=><div className={tw("about-value")} key={v.title}><span className={tw("about-value-icon")}>{v.icon}</span><h3>{v.title}</h3><p>{v.desc}</p></div>)}</div></div></section>
<section className={tw("container about-team mx-auto")}><div className={tw("about-section-title")}><span className={tw("hero-kicker")}>● فريقنا</span><h2>تعرف على كتابنا</h2><p>فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.</p></div><div className={tw("about-team-grid")}>{authors.map(author=><div className={tw("team-card")} key={author.name}><span className={tw("team-photo")}><img src={author.avatar} alt={author.name} loading="lazy"/><i>✓</i></span><h3>{author.name}</h3><p>{author.role}</p><div className={tw("team-socials")} aria-label="وسائل تواصل الكاتب"><span>in</span><span>◉</span><span>𝕏</span></div></div>)}</div></section>
<section className={tw("about-banner")}><div className={tw("container mx-auto")}><h2>لديك أسئلة؟ دعنا نتحدث!</h2><p>نحب أن نسمع منك، سواء كان لديك سؤال حول محتوياتنا، أو تريد المساهمة، أو تريد فقط إلقاء التحية. لا تتردد في التواصل.</p><div><a className={tw("secondary-btn")} href={`mailto:${data.siteInfo.email}`}>✉ تواصل معنا</a><Link className={tw("outline-btn")} to="/blog">تصفح المقالات</Link></div></div></section>
</div>}

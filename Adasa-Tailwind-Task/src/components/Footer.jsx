import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/posts.json';

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2C1.9 9 1.9 12 1.9 12s0 3 .5 4.8a2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2c.5-1.8.5-4.8.5-4.8s0-3-.5-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.1 8.2H1.7V21h3.4V8.2ZM3.4 3A2 2 0 1 0 3.4 7a2 2 0 0 0 0-4ZM22.3 13.7c0-3.9-2.1-5.7-4.9-5.7-2.3 0-3.3 1.3-3.9 2.1V8.2h-3.4V21h3.4v-6.3c0-1.7.3-3.4 2.5-3.4 2.1 0 2.1 2 2.1 3.5V21h3.4l.8-7.3Z"
      />
    </svg>
  );
}

function GithubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.162 19.488c.5.092.684-.217.684-.483 0-.237-.01-.867-.015-1.703-2.782.605-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.892 1.53 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.092.39-1.986 1.03-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.57 9.57 0 0 1 12 6.836c.85.004 1.706.114 2.505.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.594 1.028 2.686 0 3.842-2.339 4.688-4.565 4.935.359.312.678.925.678 1.865 0 1.347-.012 2.433-.012 2.762 0 .268.18.58.688.481A10.002 10.002 0 0 0 12 2Z" /></svg>;
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.8 2.5h3.4l-7.4 8.5 8.7 10.5h-6.8l-5.3-6.4-5.6 6.4H2.4l7.9-9L2 2.5h7l4.8 5.8 5-5.8Zm-1.2 17.1h1.9L8.8 4.3H6.7l10.9 15.3Z"
      />
    </svg>
  );
}

function FooterLink({to, children}) {
  return (
    <Link to={to} className="group inline-flex w-fit items-center gap-0 text-[14px] leading-6 text-[#777] transition-colors hover:text-orange-500 focus-visible:text-orange-500">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        className="h-0 w-0 shrink-0 opacity-0 transition-all duration-200 group-hover:ml-2 group-hover:h-4 group-hover:w-4 group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:h-4 group-focus-visible:w-4 group-focus-visible:opacity-100"
        aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
      <span>{children}</span>
    </Link>
  );
}
const Heading = ({ children }) => (
  <h3 className="mb-6 flex items-center gap-3 text-[17px] font-bold text-white">
    <span className="h-[2px] w-[35px] shrink-0 bg-[#ff9b00]" aria-hidden="true" />
    <span>{children}</span>
  </h3>
);

export default function Footer() {
  const {siteInfo} = data;
  const [email,setEmail] = useState('');
  const [submitted,setSubmitted] = useState(false);
  const handleSubscribe = e => { e.preventDefault(); if(email.trim()) setSubmitted(true); };
  const socials = [
    {href: siteInfo.social.youtube, label:'YouTube', Icon:YouTubeIcon},
    {href: siteInfo.social.linkedin, label:'LinkedIn', Icon:LinkedinIcon},
    {href: siteInfo.social.github, label:'GitHub', Icon:GithubIcon},
    {href: siteInfo.social.twitter, label:'X', Icon:XIcon}
  ];
  return (
    <footer id="about" dir="rtl" className="overflow-hidden border-t border-[#242424] bg-[radial-gradient(ellipse_40%_75%_at_55%_45%,rgba(110,54,7,0.12),transparent_100%)] bg-[#090909] text-[#eee]">
      <div className="mx-auto grid w-[min(1310px,calc(100%-52px))] grid-cols-1 gap-x-[60px] gap-y-10 pt-[68px] pb-[70px] sm:grid-cols-2 lg:grid-cols-[1.25fr_.8fr_.8fr_1.15fr]">
        <section className="min-w-0 text-right">
          <Link to="/" className="mb-5 flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#ff670b] text-[25px] font-bold text-white shadow-[0_6px_22px_#ff650018]">ع</span>
            <strong className="text-[22px] text-white">{siteInfo.name}</strong>
          </Link>
          <p className="max-w-[320px] text-[14px] leading-[1.95] text-[#777]">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
          </p>
          <div className="mt-[26px] flex flex-wrap gap-[10px]">
            {socials.map(({href,label,Icon})=>(
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="grid h-[43px] w-[43px] place-items-center rounded-[11px] border border-[#292929] bg-[#151515] text-[#707070] transition-colors hover:border-orange-500 hover:text-orange-500 [&_svg]:h-[19px] [&_svg]:w-[19px]">
                <Icon />
              </a>
            ))}
          </div>
        </section>
        <section className="flex min-w-0 flex-col items-start gap-[18px] text-right">
          <Heading>استكشف</Heading>
          <FooterLink to="/">الرئيسية</FooterLink>
          <FooterLink to="/blog">المدونة</FooterLink>
          <FooterLink to="/about">من نحن</FooterLink>
        </section>
        <section className="flex min-w-0 flex-col items-start gap-[18px] text-right">
          <Heading>التصنيفات</Heading>
          {data.categories.slice(0,4).map(category=>(
            <FooterLink key={category.name} to={`/blog?category=${encodeURIComponent(category.name)}`}>{category.name}</FooterLink>
          ))}
        </section>
        <section className="min-w-0 text-right">
          <Heading>ابقَ على اطلاع</Heading>
          <p className="mb-4 text-[14px] leading-[1.9] text-[#777]">اشترك للحصول على أحدث المقالات والتحديثات.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-[14px]">
            <input type="email" required value={email}
              onChange={e=>{setEmail(e.target.value);setSubmitted(false)}} placeholder="أدخل بريدك الإلكتروني"
              className="h-[51px] w-full rounded-xl border border-[#2b2b2b] bg-[#151515] px-[18px] text-right text-[14px] text-white outline-none placeholder:text-[#555] focus:border-[#ff6500]" />
            <button type="submit" className="h-[55px] w-full rounded-full bg-[#f7680e] border-none text-[16px] font-bold text-white hover:bg-[#e95500]">اشترك</button>
          </form>
          {submitted && <small className="mt-3 block text-[#999]">تم استلام بريدك في النموذج التجريبي. خدمة الاشتراك غير مفعّلة بعد.</small>}
        </section>
      </div>
      <div className="border-t border-[#222]">
        <div className="mx-auto flex w-[min(1310px,calc(100%-52px))] flex-col items-start justify-between gap-4 py-[23px] text-[12px] text-[#666] sm:flex-row sm:items-center">
          <p>© 2026 عدسة. صنع بكل <span className="text-[18px] text-[#ff6500]">♥</span> جميع الحقوق محفوظة.</p>
          <div className="flex gap-[25px]">
            <Link to="/privacy" className="hover:text-white">سياسة الخصوصية</Link>
            <Link to="/terms" className="hover:text-white">شروط الخدمة</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { tw } from '../tailwind-classes';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="10.8" cy="10.8" r="6.4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M15.7 15.7 21 21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LensMark() {
  return (
    <img
      src="/adasa-header-logo.png"
      alt="شعار عدسة"
      className={tw("lens-mark")}
    />
  );
}
export default function Header() {
  return (
    <header className={tw("site-header sticky top-0 z-50")}>
      <div className={tw("container header-inner mx-auto grid items-center")}>
        <Link to="/" className={tw("brand inline-flex items-center")} aria-label="العودة للرئيسية">
          <span className={tw("brand-icon")} aria-hidden="true">
         <LensMark /></span>
          <span className={tw("brand-copy")}>
            <strong>عدسة</strong>
            <small>عالم التصوير الفوتوغرافي</small>
          </span>
        </Link>

        <nav className={tw("main-nav flex items-center")} aria-label="التنقل الرئيسي">
          <NavLink to="/" className={tw(({ isActive }) => isActive ? 'active' : '')}>الرئيسية</NavLink>
          <NavLink to="/blog" className={tw(({ isActive }) => isActive ? 'active' : '')}>المدونة</NavLink>
          <NavLink to="/about" className={tw(({ isActive }) => isActive ? 'active' : '')}>من نحن</NavLink>
        </nav>

        <div className={tw("header-left flex items-center")}>
          <Link className={tw("header-cta")} to="/blog">ابدأ القراءة</Link>
          <Link className={tw("header-search")} to="/blog" aria-label="البحث في المقالات"><SearchIcon /></Link>
        </div>
      </div>
    </header>
  );
}


import { tw } from '../tailwind-classes';
import React, { useState } from 'react';
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

function MenuIcon({ open }) {
  return open ? (
    <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={tw("site-header sticky top-0 z-50 relative")}>

      {/* Header Container */}
      <div className={`${tw("container header-inner mx-auto grid items-center")} max-[640px]:!flex max-[640px]:!h-[88px] max-[640px]:!justify-between max-[640px]:!px-5 max-[640px]:!gap-3`}>

        {/* Logo - Right */}
        <Link
          to="/"
          className={tw("brand inline-flex items-center")}
          aria-label="العودة للرئيسية"
          onClick={closeMenu}
        >
          <span className={tw("brand-icon")} aria-hidden="true">
            <LensMark />
          </span>

          <span className={tw("brand-copy")}>
            <strong>عدسة</strong>
            <small>عالم التصوير الفوتوغرافي</small>
          </span>
        </Link>

        {/* Desktop Navigation - Center */}
        <nav
          className={`${tw("main-nav flex items-center")} max-[640px]:!hidden`}
          aria-label="التنقل الرئيسي"
        >
          <NavLink to="/" className={tw(({ isActive }) => isActive ? 'active' : '')}>
            الرئيسية
          </NavLink>

          <NavLink to="/blog" className={tw(({ isActive }) => isActive ? 'active' : '')}>
            المدونة
          </NavLink>

          <NavLink to="/about" className={tw(({ isActive }) => isActive ? 'active' : '')}>
            من نحن
          </NavLink>
        </nav>

        {/* Desktop Actions - Left */}
        <div className={`${tw("header-left flex items-center")} max-[640px]:!hidden`}>
          <Link className={tw("header-cta")} to="/blog">
            ابدأ القراءة
          </Link>

          <Link className={tw("header-search")} to="/blog" aria-label="البحث في المقالات">
            <SearchIcon />
          </Link>
        </div>

        {/* Mobile Hamburger - Left */}
        <button
          type="button"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="hidden max-[640px]:!flex w-10 h-10 shrink-0 items-center justify-center !border-0 !bg-transparent !p-0 !text-[#929292]"
        >
          <MenuIcon open={menuOpen} />
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute top-full left-4 right-4 z-[60] rounded-[20px] border border-[#292929] bg-[#161616] p-3 shadow-2xl min-[641px]:hidden"
        >
          <nav className="flex flex-col gap-2 text-right">

            <NavLink to="/" onClick={closeMenu}
              className={({ isActive }) =>
                `block rounded-xl p-4 font-bold ${isActive ? 'bg-[#2a1a12] text-[#ff8a32]' : 'text-[#aaa]'}`
              }>
              الرئيسية
            </NavLink>

            <NavLink to="/blog" onClick={closeMenu}
              className={({ isActive }) =>
                `block rounded-xl p-4 font-bold ${isActive ? 'bg-[#2a1a12] text-[#ff8a32]' : 'text-[#aaa]'}`
              }>
              المدونة
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}
              className={({ isActive }) =>
                `block rounded-xl p-4 font-bold ${isActive ? 'bg-[#2a1a12] text-[#ff8a32]' : 'text-[#aaa]'}`
              }>
              من نحن
            </NavLink>

            <Link
              to="/blog"
              onClick={closeMenu}
              className="mt-2 flex min-h-14 items-center justify-center rounded-full bg-[#ff6a00] font-extrabold text-white"
            >
              ابدأ القراءة
            </Link>

          </nav>
        </div>
      )}

    </header>
  );
}

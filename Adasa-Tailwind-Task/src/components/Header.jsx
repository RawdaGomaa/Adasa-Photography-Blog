
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
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={tw("site-header sticky top-0 z-50 relative")}>

      <div className={tw("container header-inner mx-auto grid items-center max-[640px]:[display:flex] max-[640px]:[height:76px] max-[640px]:[justify-content:space-between] max-[640px]:[gap:12px]")}>

        {/* Logo */}
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

        {/* Desktop Navigation */}
        <nav
          className={tw("main-nav flex items-center max-[640px]:[display:none]")}
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

        {/* Desktop Actions */}
        <div className={tw("header-left flex items-center max-[640px]:[display:none]")}>
          <Link className={tw("header-cta")} to="/blog">
            ابدأ القراءة
          </Link>

          <Link className={tw("header-search")} to="/blog" aria-label="البحث في المقالات">
            <SearchIcon />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className={tw("hidden max-[640px]:[display:flex] [width:44px] [height:44px] [align-items:center] [justify-content:center] [background:#171717] [border:1px_solid_#292929] [border-radius:12px] [color:#fff] [flex-shrink:0]")}
        >
          <MenuIcon open={menuOpen} />
        </button>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className={tw("absolute left-3 right-3 top-full z-[60] [background:#161616] [border:1px_solid_#292929] [border-radius:20px] [padding:12px] [box-shadow:0_15px_40px_#0009] min-[641px]:[display:none]")}
        >
          <nav className={tw("flex flex-col [gap:7px]")} aria-label="قائمة الموبايل">

            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) => tw(`block [padding:14px] [border-radius:12px] [font-weight:700] ${isActive ? '[background:#2a1a12] [color:#ff8a32]' : '[color:#aaa]'}`)}
            >
              الرئيسية
            </NavLink>

            <NavLink
              to="/blog"
              onClick={closeMenu}
              className={({ isActive }) => tw(`block [padding:14px] [border-radius:12px] [font-weight:700] ${isActive ? '[background:#2a1a12] [color:#ff8a32]' : '[color:#aaa]'}`)}
            >
              المدونة
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) => tw(`block [padding:14px] [border-radius:12px] [font-weight:700] ${isActive ? '[background:#2a1a12] [color:#ff8a32]' : '[color:#aaa]'}`)}
            >
              من نحن
            </NavLink>

            <Link
              to="/blog"
              onClick={closeMenu}
              className={tw("[display:flex] [align-items:center] [justify-content:center] [min-height:52px] [margin-top:8px] [background:#ff6a00] [color:white] [border-radius:30px] [font-weight:800]")}
            >
              ابدأ القراءة
            </Link>

          </nav>
        </div>
      )}

    </header>
  );
}

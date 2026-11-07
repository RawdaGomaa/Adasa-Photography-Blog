import { tw } from '../tailwind-classes';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className={tw("not-found container mx-auto")}>
      <span className={tw("not-found-number")}>404</span>
      <span className={tw("eyebrow")}>الصفحة غير موجودة</span>
      <h1>يبدو إنك خرجت برّه الكادر 📷</h1>
      <p>الصفحة اللي بتحاولي توصلي لها مش موجودة. ارجعي للرئيسية واكملي استكشاف عدسة.</p>
      <div className={tw("hero-actions flex items-center justify-center flex-wrap")}><Link className={tw("primary-btn")} to="/">العودة للرئيسية</Link><Link className={tw("secondary-btn")} to="/blog">تصفح المدونة</Link></div>
    </section>
  );
}

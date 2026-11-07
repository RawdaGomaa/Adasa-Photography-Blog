import { tw } from '../tailwind-classes';
import React from 'react';
export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className={tw("pagination")} aria-label="التنقل بين صفحات المقالات">
      <button onClick={() => onChange(page - 1)} disabled={page === 1} aria-label="الصفحة السابقة">‹</button>
      {pages.map((number) => (
        <button key={number} className={tw(number === page ? 'current' : '')} onClick={() => onChange(number)}>{number}</button>
      ))}
      <button onClick={() => onChange(page + 1)} disabled={page === totalPages} aria-label="الصفحة التالية">›</button>
    </div>
  );
}

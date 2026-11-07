import { tw } from '../tailwind-classes';
import React from 'react';

// Buttons perform stateful filtering; these are not router tabs or navigation links.
export default function CategoryFilter({ categories, value, onChange }) {
  return (
    <div className={tw("category-filter")} role="group" aria-label="تصفية المقالات حسب التصنيف">
      <button type="button" className={tw(value === 'all' ? 'active' : '')} aria-pressed={value === 'all'} onClick={() => onChange('all')}>جميع المقالات</button>
      {categories.map(category => (
        <button type="button" key={category.name} className={tw(value === category.name ? 'active' : '')} aria-pressed={value === category.name} onClick={() => onChange(category.name)}>{category.name}</button>
      ))}
    </div>
  );
}

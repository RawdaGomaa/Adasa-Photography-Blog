import { tw } from '../tailwind-classes';
import React from 'react';
export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={tw(`section-heading ${align}`)}>
      {eyebrow && <span className={tw("eyebrow")}>{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

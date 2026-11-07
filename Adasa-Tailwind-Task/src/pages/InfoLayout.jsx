import { tw } from '../tailwind-classes';
import React from 'react';
import {Link} from 'react-router-dom';
export default function InfoLayout({eyebrow,title,lead,children}) {return <div className={tw("info-page")}><div className={tw("container mx-auto")}><div className={tw("breadcrumbs")}><Link to="/">الرئيسية</Link><span>←</span><span>{title}</span></div><header className={tw("info-hero")}><span className={tw("hero-kicker")}>{eyebrow}</span><h1>{title}</h1><p>{lead}</p></header><div className={tw("info-body")}>{children}</div><div className={tw("info-end")}><h2>استكشف عالم التصوير معنا</h2><p>مقالات ونصائح تساعدك على تطوير نظرتك للعالم من خلال عدستك.</p><Link className={tw("primary-btn")} to="/blog">تصفح المدونة ←</Link></div></div></div>}

import { Site } from '@/components/site';
import { isLocale, locales } from '@/lib/i18n';
import { notFound } from 'next/navigation';
export function generateStaticParams(){ return locales.map(locale => ({ locale })); }
export default function LocalePage({ params }: { params: { locale: string } }){ if(!isLocale(params.locale)) return notFound(); return <Site locale={params.locale} />; }

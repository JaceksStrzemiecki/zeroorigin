import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { content, localeNames, locales, type Locale } from '@/lib/i18n';

export function Site({ locale }: { locale: Locale }) {
  const t = content[locale];
  const rtl = locale === 'ar';

  return (
    <main dir={rtl ? 'rtl' : 'ltr'} className="min-h-screen overflow-hidden bg-ink text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-line bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href={`/${locale}`} className="text-sm font-semibold tracking-[0.28em]">
            ZEROORIGIN
          </Link>
          <nav className="hidden gap-8 text-xs uppercase tracking-[0.22em] text-neutral-400 lg:flex">
            {t.nav.map((n: string, i: number) => (
              <a key={n} href={`#s${i}`} className="hover:text-white">
                {n}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 overflow-x-auto">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`rounded-full border px-3 py-1 text-xs ${
                  l === locale ? 'border-white text-white' : 'border-line text-neutral-500 hover:text-white'
                }`}
              >
                {localeNames[l]}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-24">
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,.14),transparent_34%)]"
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-neutral-500">{t.heroKicker}</p>
        <h1 className="max-w-6xl text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
          {t.heroTitle}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300">{t.heroText}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#s0" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black">
            {t.heroButton}
          </a>
          <a
            href="https://x.com/ZeroOriginLab"
            target="_blank"
rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-white hover:bg-white/10"
          >
            {t.secondaryButton}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <Section id="s0" title={t.definitionTitle} text={t.definitionText} />
      <Section id="s1" title={t.missionTitle} text={t.missionText} label="01" />
      <Section id="s2" title={t.whyTitle} text={t.whyText} label="02" />
      <Section id="s3" title={t.tokenTitle} text={t.tokenText} label="03" />
      <Section id="s4" title={t.physicalTitle} text={t.physicalText} label="04" />

      <section id="s5" className="mx-auto max-w-7xl border-t border-line px-5 py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[.35em] text-neutral-500">05</p>
            <h2 className="text-4xl font-medium tracking-[-.04em] sm:text-6xl">{t.roadmapTitle}</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-400">{t.roadmapIntro}</p>
          </div>
          <div className="space-y-4">
            {t.roadmap.map((r, i) => (
              <div key={`${r.phase}-${r.title}`} className="rounded-3xl border border-line bg-white/[.03] p-6">
                <span className="text-xs uppercase tracking-[.25em] text-neutral-500">{r.phase}</span>
                <h3 className="mt-3 text-2xl font-medium tracking-[-.03em] text-white">{r.title}</h3>
                <p className="mt-3 text-lg leading-8 text-neutral-300">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="s6" title={t.publicTitle} text={t.publicText} label="06" />

      <section className="mx-auto max-w-7xl border-t border-line px-5 py-28">
        <div className="rounded-[2rem] border border-line bg-white/[.04] p-8 sm:p-12">
          <h2 className="text-4xl font-medium tracking-[-.04em]">{t.collabTitle}</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">{t.collabText}</p>
          <a
            href="mailto:contact@zerooriginlab.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            {t.contact}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <footer className="border-t border-line px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© ZeroOrigin Lab</p>
          <p className="max-w-2xl">{t.disclaimer}</p>
        </div>
      </footer>
    </main>
  );
}

function Section({ id, title, text, label }: { id: string; title: string; text: string; label?: string }) {
  return (
    <section id={id} className="mx-auto max-w-7xl border-t border-line px-5 py-28">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          {label && <p className="mb-4 text-sm uppercase tracking-[.35em] text-neutral-500">{label}</p>}
          <h2 className="text-4xl font-medium tracking-[-.04em] sm:text-6xl">{title}</h2>
        </div>
        <p className="max-w-2xl text-xl leading-9 text-neutral-300">{text}</p>
      </div>
    </section>
  );
}

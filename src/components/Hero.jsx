import Spline from '@splinetool/react-spline'

export default function Hero({ t }) {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36" id="home">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.18),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs">{t.badge}</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              {t.heroTitle}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/70 leading-relaxed">
              {t.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#signup" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-amber-600 px-6 py-3 text-base sm:text-lg font-semibold text-slate-950 shadow-lg ring-1 ring-white/10 hover:brightness-105 transition">
                {t.ctaPrimary}
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-base sm:text-lg font-medium text-white ring-1 ring-white/15 hover:bg-white/15 transition">
                {t.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="relative h-[360px] sm:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-black/20">
            <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HowItWorks({ t }) {
  const steps = [
    { title: t.step1Title, desc: t.step1Desc, number: '1' },
    { title: t.step2Title, desc: t.step2Desc, number: '2' },
    { title: t.step3Title, desc: t.step3Desc, number: '3' },
  ]

  return (
    <section id="how" className="relative py-20 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-950/60">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">{t.howTitle}</h2>
          <p className="mt-3 text-white/70">{t.howSubtitle}</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.number} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-gradient-to-br from-orange-400 to-amber-600 text-slate-900 font-bold flex items-center justify-center ring-1 ring-white/10 shadow">
                {s.number}
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-white ring-1 ring-white/15 hover:bg-white/15 transition">
            {t.watchVideo}
          </a>
          <p className="text-xs text-white/60">{t.videoLabel}: https://www.youtube.com/watch?v=mO_1rmAdxJk</p>
        </div>
      </div>
    </section>
  )
}

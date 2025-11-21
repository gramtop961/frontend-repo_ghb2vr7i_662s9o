import { CheckCircle2, Zap, Gauge, Shield } from 'lucide-react'

export default function Benefits({ t }) {
  const items = [
    { icon: CheckCircle2, title: t.benefit1 },
    { icon: Shield, title: t.benefit2 },
    { icon: Gauge, title: t.benefit3 },
    { icon: Zap, title: t.benefit4 },
  ]

  return (
    <section id="benefits" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,146,60,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">{t.benefitsTitle}</h2>
          <p className="mt-3 text-white/70">{t.benefitsSubtitle}</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title }, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
              <Icon className="h-6 w-6 text-orange-400" />
              <h3 className="mt-3 text-white font-medium">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

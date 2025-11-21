import { useState } from 'react'

export default function Signup({ t }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="signup" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">{t.signupTitle}</h2>
            <p className="mt-3 text-white/70">{t.signupSubtitle}</p>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">{t.email}</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="you@company.com" className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none ring-1 ring-white/15 focus:ring-orange-400/40" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">{t.password}</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="••••••••" className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none ring-1 ring-white/15 focus:ring-orange-400/40" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-amber-600 px-6 py-3 font-semibold text-slate-950 shadow-lg ring-1 ring-white/10 hover:brightness-105 transition">
                {t.signupCta}
              </button>
              {submitted && (
                <p className="text-emerald-300 text-sm">{t.signupSuccess}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

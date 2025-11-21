import { useEffect, useState } from 'react'
import { Globe, Menu } from 'lucide-react'

export default function Navbar({ lang, setLang, t }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setOpen(false)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-orange-400 to-amber-600 shadow ring-1 ring-white/20" />
              <span className="text-white text-lg font-semibold tracking-tight">Oriion</span>
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
              <a href="#how" className="hover:text-white transition-colors">{t.navHow}</a>
              <a href="#benefits" className="hover:text-white transition-colors">{t.navBenefits}</a>
              <a href="#signup" className="hover:text-white transition-colors">{t.navSignup}</a>
              <LanguageSwitch lang={lang} setLang={setLang} />
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white transition-colors" aria-label="Menu">
              <Menu size={24} />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <nav className="flex flex-col gap-3 pt-3 text-white/80">
                <a href="#how" onClick={() => setOpen(false)} className="hover:text-white">{t.navHow}</a>
                <a href="#benefits" onClick={() => setOpen(false)} className="hover:text-white">{t.navBenefits}</a>
                <a href="#signup" onClick={() => setOpen(false)} className="hover:text-white">{t.navSignup}</a>
                <div className="pt-2">
                  <LanguageSwitch lang={lang} setLang={setLang} />
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

function LanguageSwitch({ lang, setLang }) {
  return (
    <div className="flex items-center gap-2 text-white/80">
      <Globe size={18} className="opacity-80" />
      <button
        onClick={() => setLang('ru')}
        className={`px-2 py-1 rounded-md transition-colors ${lang === 'ru' ? 'bg-white/15 text-white' : 'hover:text-white'}`}
      >RU</button>
      <span className="opacity-40">|</span>
      <button
        onClick={() => setLang('en')}
        className={`px-2 py-1 rounded-md transition-colors ${lang === 'en' ? 'bg-white/15 text-white' : 'hover:text-white'}`}
      >EN</button>
    </div>
  )
}

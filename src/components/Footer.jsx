export default function Footer({ t }) {
  return (
    <footer className="relative py-10 mt-10 border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(251,146,60,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70">
        <p className="text-sm">© Oriion 2025</p>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#signup" className="hover:text-white transition-colors">{t.contacts}</a>
          <a href="#" className="hover:text-white transition-colors">{t.privacy}</a>
        </nav>
      </div>
    </footer>
  )
}

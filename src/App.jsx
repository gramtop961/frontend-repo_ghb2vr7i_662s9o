import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Signup from './components/Signup'
import Footer from './components/Footer'

const translations = {
  ru: {
    navHow: 'Как это работает',
    navBenefits: 'Преимущества',
    navSignup: 'Регистрация',

    badge: 'AI chatbot для бизнеса',
    heroTitle: 'ИИ-чатбот, который отвечает за вас 24/7',
    heroSubtitle: 'Обрабатывает запросы, консультирует, продаёт и принимает обращения без менеджера',
    ctaPrimary: 'Создать бота бесплатно',
    ctaSecondary: 'Узнать больше',

    howTitle: 'Как работает Oriion',
    howSubtitle: 'Всего три шага — и ваш бот уже помогает клиентам',
    step1Title: 'Подключение каналов',
    step1Desc: 'Пользователь подключает сайт или соцсети',
    step2Title: 'Загрузка знаний',
    step2Desc: 'Загружает информацию о бизнесе',
    step3Title: 'Старт общения',
    step3Desc: 'Oriion обучается и начинает общаться с клиентами',
    watchVideo: 'Смотреть видео о работе Oriion',
    videoLabel: 'Видео',

    benefitsTitle: 'Почему компании выбирают Oriion',
    benefitsSubtitle: 'Умный ассистент, который не устаёт и не ошибается',
    benefit1: 'Работает 24/7',
    benefit2: 'Не ошибается',
    benefit3: 'Улучшает конверсию',
    benefit4: 'Обрабатывает вопросы мгновенно',

    signupTitle: 'Начните бесплатно за 1 минуту',
    signupSubtitle: 'Создайте аккаунт и получите готового бота для вашего сайта или соцсетей',
    email: 'Email',
    password: 'Пароль',
    signupCta: 'Создать аккаунт',
    signupSuccess: 'Готово! Мы отправили письмо с подтверждением.',

    contacts: 'Контакты',
    privacy: 'Политика конфиденциальности',
  },
  en: {
    navHow: 'How it works',
    navBenefits: 'Benefits',
    navSignup: 'Sign up',

    badge: 'AI chatbot for business',
    heroTitle: 'AI chatbot that replies for you 24/7',
    heroSubtitle: 'Handles requests, consults, sells and processes inquiries without a manager',
    ctaPrimary: 'Create a bot for free',
    ctaSecondary: 'Learn more',

    howTitle: 'How Oriion works',
    howSubtitle: 'Just three steps — and your bot is already helping customers',
    step1Title: 'Connect channels',
    step1Desc: 'Connect your website or social networks',
    step2Title: 'Upload knowledge',
    step2Desc: 'Provide your business information',
    step3Title: 'Start chatting',
    step3Desc: 'Oriion learns and starts talking to your customers',
    watchVideo: 'Watch how Oriion works',
    videoLabel: 'Video',

    benefitsTitle: 'Why companies choose Oriion',
    benefitsSubtitle: 'A smart assistant that never gets tired and never makes mistakes',
    benefit1: 'Works 24/7',
    benefit2: 'Does not make mistakes',
    benefit3: 'Improves conversion',
    benefit4: 'Handles questions instantly',

    signupTitle: 'Get started free in 1 minute',
    signupSubtitle: 'Create an account and get a ready-to-use bot for your website or socials',
    email: 'Email',
    password: 'Password',
    signupCta: 'Create account',
    signupSuccess: 'Done! We sent a confirmation email.',

    contacts: 'Contacts',
    privacy: 'Privacy Policy',
  },
}

function App() {
  const [lang, setLang] = useState('ru')
  const t = useMemo(() => translations[lang], [lang])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <HowItWorks t={t} />
        <Benefits t={t} />
        <Signup t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}

export default App

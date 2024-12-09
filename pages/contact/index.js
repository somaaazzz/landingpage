import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Contact() {
  const [language, setLanguage] = useState('ja')
  const toggleLanguage = () => {
    const newLanguage = language === 'ja' ? 'en' : 'ja'
    setLanguage(newLanguage)
  }

  // Translations for different page elements
  const translations = {
    ja: {
      pageTitle: 'お問い合わせ - 高齢者向け求人サイト',
      pageDescription: '高齢者向け求人サイトへのお問い合わせ',
      pageHeader: 'お問い合わせ',
      labels: {
        company: '会社名',
        name: 'お名前',
        email: 'メールアドレス',
        phone: '電話番号',
        message: 'お問い合わせ内容'
      },
      placeholders: {
        company: '会社名を入力',
        name: 'お名前を入力',
        email: 'メールアドレスを入力',
        phone: '電話番号を入力',
        message: 'お問い合わせ内容を入力'
      },
      submitButton: '送信する',
      backToHome: 'トップページに戻る'
    },
    en: {
      pageTitle: 'Contact - Job Site for Seniors',
      pageDescription: 'Contact page for job site specialized in senior employment',
      pageHeader: 'Contact Us',
      labels: {
        company: 'Company Name',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Message'
      },
      placeholders: {
        company: 'Enter company name',
        name: 'Enter your full name',
        email: 'Enter your email address',
        phone: 'Enter your phone number',
        message: 'Enter your message'
      },
      submitButton: 'Send Message',
      backToHome: 'Back to Home'
    }
  }

  const t = translations[language]

  return (
    <>
      <Head>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.pageDescription} />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Language Toggle Button */}
      <div className="absolute top-4 right-4 z-10">
        <button 
          onClick={toggleLanguage}
          className="relative flex items-center bg-[#90C978] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors"
        >
          <div className="flex items-center">
            <span 
              className={`mr-2 ${language === 'en' ? 'font-bold text-black' : 'text-white'}`}
            >
              EN
            </span>
            <span 
              className={`${language === 'ja' ? 'font-bold text-black' : 'text-white'}`}
            >
              日本語
            </span>
          </div>
        </button>
      </div>

      <main className="min-h-screen px-4 py-12 max-w-3xl mx-auto font-sans">
        {/* Header */}
        <Link href="/" className="block mb-12">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </Link>

        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
          {t.pageHeader}
        </h1>

        {/* Contact Form */}
        <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
          <div className="space-y-2">
            <label htmlFor="company" className="block text-gray-700 font-medium">
              {t.labels.company}
            </label>
            <input
              type="text"
              id="company"
              placeholder={t.placeholders.company}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#90C978] focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              {t.labels.name}
            </label>
            <input
              type="text"
              id="name"
              placeholder={t.placeholders.name}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#90C978] focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              {t.labels.email}
            </label>
            <input
              type="email"
              id="email"
              placeholder={t.placeholders.email}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#90C978] focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-gray-700 font-medium">
              {t.labels.phone}
            </label>
            <input
              type="tel"
              id="phone"
              placeholder={t.placeholders.phone}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#90C978] focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-gray-700 font-medium">
              {t.labels.message}
            </label>
            <textarea
              id="message"
              placeholder={t.placeholders.message}
              rows={6}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#90C978] focus:outline-none transition-colors"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#90C978] hover:bg-[#7fb368] text-white font-medium py-3 rounded-xl transition-colors shadow-md hover:shadow-lg"
          >
            {t.submitButton}
          </button>
        </form>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-[#90C978] hover:text-[#7fb368] font-medium transition-colors"
          >
            ← {t.backToHome}
          </Link>
        </div>
      </main>
    </>
  )
}
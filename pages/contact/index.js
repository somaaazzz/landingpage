import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Contact() {
  return (
    <>
      <Head>
        <title>お問い合わせ - 高齢者向け求人サイト</title>
        <meta name="description" content="高齢者向け求人サイトへのお問い合わせ" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

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
          お問い合わせ
        </h1>

        {/* Contact Form */}
        <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
          <div className="space-y-2">
            <label htmlFor="company" className="block text-gray-700 font-medium">
              会社名
            </label>
            <input
              type="text"
              id="company"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#90C978] focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              お名前
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#90C978] focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#90C978] focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-gray-700 font-medium">
              電話番号
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#90C978] focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-gray-700 font-medium">
              お問い合わせ内容
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#90C978] focus:outline-none transition-colors"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#90C978] hover:bg-[#7fb368] text-white font-medium py-3 rounded-xl transition-colors shadow-md hover:shadow-lg"
          >
            送信する
          </button>
        </form>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-[#90C978] hover:text-[#7fb368] font-medium transition-colors"
          >
            ← トップページに戻る
          </Link>
        </div>
      </main>
    </>
  )
}
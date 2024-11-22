import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Senior Job Search Platform</title>
        <meta name="description" content="Contact page for Senior Job Search Platform" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen px-4 py-12 max-w-3xl mx-auto font-sans">
        {/* Header */}
        <Link href="/en" className="block mb-12">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </Link>

        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Contact Us
        </h1>

        {/* Contact Form */}
        <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
          <div className="space-y-2">
            <label htmlFor="company" className="block text-gray-700 font-medium">
              Company Name
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
              Your Name
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
              Email Address
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
              Phone Number
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
              Message
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
            Submit
          </button>
        </form>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/en"
            className="text-[#90C978] hover:text-[#7fb368] font-medium transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </>
  )
}
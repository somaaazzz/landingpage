import React, { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  const [language, setLanguage] = useState('ja')

  const toggleLanguage = () => {
    const newLanguage = language === 'ja' ? 'en' : 'ja'
    setLanguage(newLanguage)
  }

  const features = language === 'ja' 
    ? [
        { title: 'シンプル', description: '簡単、かつ素早く仕事を見つけられます' },
        { title: '無料', description: '求職者の方も、求人企業様も無料です' },
        { title: 'サポート', description: '困ったことがあればいつでもお問い合わせください' }
      ]
    : [
        { title: 'Simple', description: 'Find jobs quickly and easily' },
        { title: 'Free', description: 'Free for job seekers and employers' },
        { title: 'Support', description: 'Contact us anytime if you need help' }
      ]

  const jobTypes = language === 'ja' 
    ? [
        'シェフ',
        'ウェイター',
        'ホテルスタッフ',
        'セキュリティー',
        '清掃',
        'その他100種以上の職種'
      ]
    : [
        'Chef',
        'Waiter',
        'Hotel Staff',
        'Security',
        'Cleaning',
        'Over 100 Other Job Types'
      ]

  const registrationSteps = language === 'ja'
    ? [
        { step: 1, text: '公式LINEを登録' },
        { step: 2, text: 'LINEで簡単な質問に回答' },
        { step: 3, text: 'それぞれの方に合ったお仕事を紹介します' }
      ]
    : [
        { step: 1, text: 'Register Official LINE' },
        { step: 2, text: 'Answer Simple Questions on LINE' },
        { step: 3, text: 'We will introduce jobs that match your profile' }
      ]

  return (
    <>
      <Head>
        <title>{language === 'ja' ? '高齢者向け求人サイト' : 'Job Site for Seniors'}</title>
        <meta 
          name="description" 
          content={language === 'ja' 
            ? '高齢者に最適な仕事をシンプルな方法で' 
            : 'Finding the optimal jobs for seniors in a simple way'} 
        />
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
      
      <main className="min-h-screen px-4 py-12 max-w-5xl mx-auto font-sans">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="mb-12">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          <h1 className="text-4xl font-bold mb-8 text-gray-800 leading-tight">
            {language === 'ja' ? (
              <>高齢者に<span className="text-[#90C978]">最適な仕事</span>を<br />シンプルな方法で</>
            ) : (
              <>Finding <span className="text-[#90C978]">Optimal Jobs</span> for<br />Seniors in a Simple Way</>
            )}
          </h1>
          
          <div className="space-y-4 max-w-sm mx-auto">
            <div className="bg-[#90C978] transition-colors font-medium px-8 py-4 rounded-xl w-full shadow-lg">
              <p className='text-white text-lg mb-4'>
                {language === 'ja' ? 'LINE登録' : 'LINE Registration'}
              </p>
              <Image
                src="/line.png"
                alt="line Logo"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {language === 'ja' 
              ? 'それぞれの方に沿ったお仕事を紹介します' 
              : 'We Introduce Jobs Tailored to You'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#E8F5E4] transition-colors p-8 rounded-2xl text-center shadow-md"
              >
                <h3 className="font-bold text-xl mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Job Types Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {language === 'ja' 
              ? 'ホスピタリティ業界を中心に\n幅広い職種をカバーしています。\n現在は飲食業のみをサポートしています'
              : 'Covering a Wide Range of Positions\nMainly in the Hospitality Industry\nCurrently Supporting Food Service Only'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {jobTypes.map((job) => (
              <span
                key={job}
                className="bg-white transition-colors border-2 border-[#90C978] rounded-full px-6 py-3 text-gray-700 shadow-md"
              >
                {job}
              </span>
            ))}
          </div>
        </section>

        {/* Registration Steps */}
        <section className="mb-24 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {language === 'ja' ? '10分で登録' : 'Register in 10 Minutes'}
          </h2>
          <div className="space-y-8">
            {registrationSteps.map(({ step, text }) => (
              <div key={step} className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-md transition-shadow">
                <span className="w-12 h-12 flex items-center justify-center bg-[#90C978] text-white rounded-full font-bold text-xl">
                  {step}
                </span>
                <p className="text-lg text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Teams Section */}
<section className="mt-16 mb-16">
  <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
    {language === 'ja' ? 'チーム' : 'Team'}
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {/* Saki */}
    <div className="text-center">
      <Image
        src="/saki.jpg"
        alt="Saki"
        width={150}
        height={150}
        className="rounded-full mx-auto"
      />
      <h3 className="mt-4 text-xl font-medium text-gray-800">Saki</h3>
      <p className="text-gray-600">
        {language === 'ja' ? 'マーケティング担当' : 'Marketing Lead'}
      </p>
      <Link 
        href="https://www.linkedin.com/in/saki-fujita-67bb05289/" 
        target="_blank" 
        className="flex justify-center items-center mt-2 hover:opacity-80 transition-opacity"
      >
        <Image
          src="/Linkedin.png"
          alt="LinkedIn"
          width={30}
          height={30}
        />
      </Link>
    </div>
    {/* Soma */}
    <div className="text-center">
      <Image
        src="/soma.jpg"
        alt="Soma"
        width={150}
        height={150}
        className="rounded-full mx-auto"
      />
      <h3 className="mt-4 text-xl font-medium text-gray-800">Soma</h3>
      <p className="text-gray-600">
        {language === 'ja' ? 'プロダクト開発担当' : 'Product Development Lead'}
      </p>
      <Link 
        href="https://www.linkedin.com/in/soma-tomita/" 
        target="_blank" 
        className="flex justify-center items-center mt-2 hover:opacity-80 transition-opacity"
      >
        <Image
          src="/Linkedin.png"
          alt="LinkedIn"
          width={30}
          height={30}
        />
      </Link>
    </div>
  </div>
</section>
      </main>
    </>
  )
}
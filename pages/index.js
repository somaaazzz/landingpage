import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const features = [
    { title: 'シンプル', description: '登録にかかる時間は5分以内！簡単に仕事を見つけられます！！' },
    { title: '無料', description: '求職者の方も、求人企業様も無料です！' },
    { title: 'サポート', description: '困ったことがあればいつでもお問い合わせください！！' }, 
    { title: '仕事の詳細', description: '仕事の詳細は文章ではなく、分かりやすい動画で送ります！' }
  ]
  
  const jobTypes = [
    'シェフ',
    'ウェイター',
    'ホテルスタッフ',
    'セキュリティー',
    '清掃',
    'その他100種以上の職種'
  ]

  const sponsors = [
    { name: 'Japan's Venture Academy', image: '/sponsor-1.png' },
    { name: 'Shibuya Startup Support', image: '/sponsor-2.png' },
    { name: '慶応大学', image: '/sponsor-3.png' },
    { name: '明治大学', image: '/sponsor-4.png' }
  ]

  const teamMembers = [
    { 
      name: '藤田早葵', 
      image: '/team-member-2.jpg', 
      description: '豊富な採用経験と、高齢者の strengths に対する深い理解を持っています。' 
    },
    { 
      name: '富田創真', 
      image: '/team-member-1.jpg', 
      description: '長年の人材紹介業界での経験を活かし、高齢者の就労支援に尽力しています。' 
    },
  ]

  return (
    <>
      <Head>
        <title>高齢者向け求人サイト</title>
        <meta name="description" content="高齢者に最適な仕事をシンプルな方法で" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen px-4 py-12 max-w-5xl mx-auto font-sans">

        {/* Existing Final CTA Section */}
        <section className="text-center max-w-sm mx-auto">
          <div className="space-y-4">
            <div className="bg-[#90C978] transition-colors font-medium px-8 py-4 rounded-xl w-full shadow-lg">
              <p className='text-white text-lg mb-4'>LINE登録</p>
              <Image
                src="/line.png"
                alt="line Logo"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
            </div>
            
            <Link href="/contact" className="block bg-white hover:bg-gray-50 transition-colors text-[#90C978] text-lg font-medium px-8 py-4 rounded-xl w-full border-2 border-[#90C978] shadow-lg hover:shadow-xl">
              企業の方はこちらから
            </Link>
          </div>
        </section>

        {/* スポンサー Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            スポンサー
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {sponsors.map((sponsor) => (
              <div 
                key={sponsor.name}
                className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center w-48 h-36 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={sponsor.image}
                  alt={`${sponsor.name} ロゴ`}
                  width={150}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </section>


        {/* チームメンバー Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            チームメンバー
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
              >
                <div className="h-64 relative">
                  <Image
                    src={member.image}
                    alt={`${member.name} プロフィール画像`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  )
}

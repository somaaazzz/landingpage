import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const features = [
    { title: 'Simple', description: 'Find jobs easily with our aptitude and psychological assessments' },
    { title: 'Free', description: 'No cost for both job seekers and hiring companies' },
    { title: 'Support', description: 'Contact us anytime if you need assistance' }
  ]
  
  const jobTypes = [
    'Chef',
    'Waiter',
    'Hotel Staff',
    'Security',
    'Cleaning',
    'Over 100 other positions'
  ]

  return (
    <>
      <Head>
        <title>Senior Job Search Platform</title>
        <meta name="description" content="Find the perfect job for seniors in a simple way" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen px-4 py-12 max-w-5xl mx-auto font-sans">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="mb-12">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
          <h1 className="text-4xl font-bold mb-8 text-gray-800 leading-tight">
            Find the <span className="text-[#90C978]">perfect job</span><br />for seniors in a simple way
          </h1>
          
          <div className="space-y-4 max-w-sm mx-auto">
            <div className="bg-[#90C978] transition-colors font-medium px-8 py-4 rounded-xl w-full shadow-lg">
              <p className='text-white text-lg mb-4'>Register via LINE</p>
              <Image
                src="/line.png"
                alt="LINE Logo"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
            </div>
            
            <Link href="/en/contact" className="block bg-white hover:bg-gray-50 transition-colors text-[#90C978] text-lg font-medium px-8 py-4 rounded-xl w-full border-2 border-[#90C978] shadow-lg hover:shadow-xl">
              For Employers
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            We match you with jobs that suit your needs
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
            Wide range of positions available<br />primarily in the hospitality industry
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Register in 10 Minutes</h2>
          <div className="space-y-8">
            {[
              { step: 1, text: 'Register on our official LINE account' },
              { step: 2, text: 'Answer a few simple questions via LINE' },
              { step: 3, text: 'Receive personalized job recommendations' }
            ].map(({ step, text }) => (
              <div key={step} className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-md transition-shadow">
                <span className="w-12 h-12 flex items-center justify-center bg-[#90C978] text-white rounded-full font-bold text-xl">
                  {step}
                </span>
                <p className="text-lg text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center max-w-sm mx-auto">
          <div className="space-y-4">
            <div className="bg-[#90C978] transition-colors font-medium px-8 py-4 rounded-xl w-full shadow-lg">
              <p className='text-white text-lg mb-4'>Register via LINE</p>
              <Image
                src="/line.png"
                alt="LINE Logo"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
            </div>
            
            <Link href="/en/contact" className="block bg-white hover:bg-gray-50 transition-colors text-[#90C978] text-lg font-medium px-8 py-4 rounded-xl w-full border-2 border-[#90C978] shadow-lg hover:shadow-xl">
              For Employers
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
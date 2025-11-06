import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-purple via-brand-purple-dark to-brand-purple min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering Lives for a{' '}
            <span className="text-brand-orange">Better Tomorrow</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            A transformed and self-reliant community living a better life through 
            community-driven initiatives that enhance social welfare, education, 
            environmental sustainability, and economic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer" className="btn-primary text-lg px-8 py-4">
              Get Involved
            </Link>
            <Link href="/donate" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-brand-purple">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20" fill="white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  )
}


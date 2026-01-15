'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function DonatePage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // You could add a "Copied!" toast here if desired
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white section-padding pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="relative w-28 h-28 md:w-32 md:h-32 bg-white p-2 rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/logo.jpeg"
                  alt="Better Life CBO Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Support Our <span className="text-brand-orange">Mission</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              Your contribution directly funds community empowerment, education, and health initiatives.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Payment Details - MOVED TO TOP */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              {/* <h2 className="text-3xl font-bold text-gray-900 mb-4">Direct Payment Methods</h2> */}
              <p className="text-gray-600">Choose your preferred way to give. Both methods go directly to Better Life CBO.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* M-Pesa Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-green-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 opacity-5 -mr-16 -mt-16 rounded-full transition-all group-hover:scale-110" />
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-green-500 text-white p-3 rounded-2xl shadow-lg shadow-green-200">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">M-Pesa Paybill</h3>
                    {/* <p className="text-green-600 font-medium">Instant & Secure</p> */}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex justify-between items-center group/item hover:bg-white hover:shadow-md transition-all">
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-black mb-1">Business Number</p>
                      <p className="text-2xl font-black text-gray-900">522533</p>
                    </div>
                    <button onClick={() => copyToClipboard('522533')} className="p-2 text-gray-400 hover:text-green-500 transition-colors">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex justify-between items-center group/item hover:bg-white hover:shadow-md transition-all">
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-black mb-1">Account Number</p>
                      <p className="text-2xl font-black text-gray-900">8052933</p>
                    </div>
                    <button onClick={() => copyToClipboard('8052933')} className="p-2 text-gray-400 hover:text-green-500 transition-colors">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>

                  <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
                    <p className="text-xs text-green-400 uppercase font-black mb-1">Account Name</p>
                    <p className="text-lg font-bold text-green-800 uppercase tracking-wide">BETTER LIFE CBO</p>
                  </div>
                </div>
              </motion.div>

              {/* Bank Transfer Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-blue-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-5 -mr-16 -mt-16 rounded-full transition-all group-hover:scale-110" />
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg shadow-blue-200">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Bank Transfer</h3>
                    <p className="text-blue-600 font-medium tracking-tight">KCB Bank Kenya Limited</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-xs text-gray-400 uppercase font-black">Branch</p>
                    <p className="font-bold text-gray-800">TRM (Thika Road Mall) Branch</p>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-xs text-gray-400 uppercase font-black">Account Name</p>
                    <p className="font-bold text-gray-800">BETTER LIFE CBO</p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex justify-between items-center group/item hover:bg-white hover:shadow-md transition-all">
                    <div>
                      <p className="text-xs text-blue-400 uppercase font-black mb-1">Account Number</p>
                      <p className="text-2xl font-black text-blue-600">1348339837</p>
                    </div>
                    <button onClick={() => copyToClipboard('1348339837')} className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate - Moved down but still important */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                How Your <span className="text-brand-orange">Impact</span> Travels
              </h2>
              <p className="text-gray-600 text-lg">Every shilling you contribute is channeled directly into our community-led programs.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  label: 'Education',
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  )
                },
                {
                  label: 'Health',
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  )
                },
                {
                  label: 'Empowerment',
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  )
                },
                {
                  label: 'Environment',
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707" />
                    </svg>
                  )
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-brand-orange mb-4 bg-white p-4 rounded-2xl shadow-sm group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-black text-gray-900 uppercase tracking-tighter text-sm">{item.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-brand-purple text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8">Need Assistance?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-10">
            <a href="https://wa.me/254708326278" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-brand-orange transition-colors">
              +254 708 326 278
            </a>
            <a href="mailto:cbobetterlife@gmail.com" className="text-xl font-bold hover:text-brand-orange transition-colors">
              cbobetterlife@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-purple via-brand-purple-dark to-brand-purple min-h-[90vh] flex items-center">
      {/* Background Image - Replace with your actual photo */}
      {/* <div className="absolute inset-0">
        <Image
          src="/images/hero-community.jpg"
          alt="Better Life CBO Community"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div> */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Empowering Lives for a{' '}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-brand-orange"
            >
              Better Tomorrow
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            A transformed and self-reliant community living a better life through
            community-driven initiatives that enhance social welfare, education,
            environmental sustainability, and economic growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/volunteer" className="btn-primary text-lg px-8 py-4">
                Get Involved
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/donate" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-brand-purple">
                Donate Now
              </Link>
            </motion.div>
          </motion.div>
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


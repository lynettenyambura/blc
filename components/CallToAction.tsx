'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <section className="section-padding bg-gradient-to-r from-brand-orange to-red-600 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl mb-8 text-gray-100"
          >
            Whether you want to volunteer your time, make a donation, or learn more about our work, 
            we'd love to have you join our community of changemakers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/volunteer" className="bg-white text-brand-orange btn-primary hover:bg-gray-100">
                Become a Volunteer
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/donate" className="bg-brand-purple text-white btn-secondary hover:bg-opacity-90">
                Make a Donation
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/about" className="border-2 border-white text-white btn-outline hover:bg-white hover:text-brand-orange">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


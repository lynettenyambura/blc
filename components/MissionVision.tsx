'use client'

import { motion } from 'framer-motion'

export default function MissionVision() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-brand-orange">Purpose</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Driven by our core values, we work together to create lasting positive change in our community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-brand-purple to-brand-purple-dark p-8 rounded-2xl text-white shadow-xl"
          >
            <div className="mb-4">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-200">
              A transformed and self-reliant community living a better life.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-brand-orange to-red-600 p-8 rounded-2xl text-white shadow-xl"
          >
            <div className="mb-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-100">
              To empower individuals and families through community-driven initiatives that enhance 
              social welfare, education, environmental sustainability, and economic growth.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Our <span className="text-brand-orange">Core Values</span>
          </h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {[
              'Integrity and Transparency',
              'Inclusivity and Equality',
              'Accountability and Teamwork',
              'Empowerment and Self-Reliance',
              'Community Service and Sustainability',
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 p-6 rounded-xl border-2 border-transparent hover:border-brand-orange transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <p className="font-semibold text-gray-800">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


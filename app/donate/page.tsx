'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const presetAmounts = ['500', '1000', '2000', '5000', '10000']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would integrate with a payment gateway
    alert('Thank you for your donation! We will contact you with payment details.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
    setDonationAmount('')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Make a <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-brand-orange"
              >Donation</motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-200"
            >
              Your generous contribution helps us continue our mission of empowering lives and
              creating lasting positive change in our community. Every donation makes a difference.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-8 text-center"
            >
              How Your <span className="text-brand-orange">Donation</span> Helps
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: 'Education Programs',
                  description: 'Support scholarships and skills training for youth and women.',
                  icon: (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                },
                {
                  title: 'Health Initiatives',
                  description: 'Fund community health drives and awareness campaigns.',
                  icon: (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Economic Empowerment',
                  description: 'Enable small business support and financial literacy programs.',
                  icon: (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Environmental Projects',
                  description: 'Support tree planting and waste management initiatives.',
                  icon: (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-50 p-6 rounded-xl border-l-4 border-brand-orange"
                >
                  <div className="flex justify-center mb-3 text-brand-purple">{item.icon}</div>
                  <h3 className="text-xl font-bold text-brand-purple mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Donation <span className="text-brand-orange">Form</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Donation Amount (KES) *
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-3">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setDonationAmount(amount)}
                        className={`px-4 py-3 rounded-lg font-semibold transition-all ${donationAmount === amount
                            ? 'bg-brand-orange text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                      >
                        {parseInt(amount).toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    required
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="Or enter custom amount"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    placeholder="Any message you'd like to include with your donation..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary text-lg py-4"
                >
                  Proceed to Donate
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-6 text-center text-gray-800"
            >
              Payment <span className="text-brand-orange">Methods</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <p className="text-lg text-gray-700 mb-4">
                After submitting your donation form, we will contact you with payment details.
                We accept donations through:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-brand-orange mr-3">✓</span>
                  M-Pesa Mobile Money
                </li>
                <li className="flex items-center">
                  <span className="text-brand-orange mr-3">✓</span>
                  Bank Transfer
                </li>
                <li className="flex items-center">
                  <span className="text-brand-orange mr-3">✓</span>
                  Cash Donations (arranged in person)
                </li>
              </ul>
              <div className="mt-6 p-4 bg-brand-purple bg-opacity-10 rounded-lg border-l-4 border-brand-purple">
                <p className="text-gray-700">
                  <strong>Note:</strong> All donations are used transparently for community programs.
                  Financial reports are available upon request and presented at our Annual General Meeting.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-gradient-to-r from-brand-orange to-red-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4"
            >Questions About Donating?</motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-6 text-gray-100"
            >
              We're here to help. Contact us for more information about making a donation.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="tel:+254708326278"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white text-xl font-semibold hover:underline bg-white bg-opacity-20 px-6 py-3 rounded-lg inline-block"
              >
                +254 708 326278
              </motion.a>
              <motion.a
                href="mailto:cbobetterlife@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white text-xl font-semibold hover:underline bg-white bg-opacity-20 px-6 py-3 rounded-lg inline-block"
              >
                cbobetterlife@gmail.com
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


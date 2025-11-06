'use client'

import { useState } from 'react'

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Make a <span className="text-brand-orange">Donation</span>
            </h1>
            <p className="text-xl text-gray-200">
              Your generous contribution helps us continue our mission of empowering lives and 
              creating lasting positive change in our community. Every donation makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              How Your <span className="text-brand-orange">Donation</span> Helps
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: 'Education Programs',
                  description: 'Support scholarships and skills training for youth and women.',
                  icon: '📚',
                },
                {
                  title: 'Health Initiatives',
                  description: 'Fund community health drives and awareness campaigns.',
                  icon: '🏥',
                },
                {
                  title: 'Economic Empowerment',
                  description: 'Enable small business support and financial literacy programs.',
                  icon: '💰',
                },
                {
                  title: 'Environmental Projects',
                  description: 'Support tree planting and waste management initiatives.',
                  icon: '🌳',
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border-l-4 border-brand-orange">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-brand-purple mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
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
                        className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                          donationAmount === amount
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

                <button type="submit" className="w-full btn-primary text-lg py-4">
                  Proceed to Donate
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Payment <span className="text-brand-orange">Methods</span>
            </h2>
            <div className="bg-gray-50 p-8 rounded-2xl">
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
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-gradient-to-r from-brand-orange to-red-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About Donating?</h2>
            <p className="text-xl mb-6 text-gray-100">
              We're here to help. Contact us for more information about making a donation.
            </p>
            <a
              href="mailto:cbobetterlife@gmail.com"
              className="text-white text-xl font-semibold hover:underline bg-white bg-opacity-20 px-6 py-3 rounded-lg inline-block"
            >
              cbobetterlife@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}


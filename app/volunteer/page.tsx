'use client'

import { useState } from 'react'

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    interests: [] as string[],
    message: '',
  })

  const interestAreas = [
    'Economic Empowerment',
    'Education and Training',
    'Health and Sanitation',
    'Environmental Conservation',
    'Social Cohesion',
    'Administrative Support',
    'Event Planning',
    'Marketing and Communications',
  ]

  const handleCheckboxChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend
    alert('Thank you for your interest! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      area: '',
      interests: [],
      message: '',
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Become a <span className="text-brand-orange">Volunteer</span>
            </h1>
            <p className="text-xl text-gray-200">
              Join our community of changemakers and make a real difference in the lives of others. 
              Your time, skills, and passion can help transform our community.
            </p>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Why <span className="text-brand-orange">Volunteer</span> with Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: 'Make a Real Impact',
                  description: 'See the direct results of your efforts in the lives of community members.',
                  icon: '🌟',
                },
                {
                  title: 'Develop Skills',
                  description: 'Gain valuable experience and skills while contributing to a meaningful cause.',
                  icon: '📈',
                },
                {
                  title: 'Build Community',
                  description: 'Connect with like-minded individuals and build lasting relationships.',
                  icon: '🤝',
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-brand-purple mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Volunteer <span className="text-brand-orange">Application</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <label htmlFor="area" className="block text-sm font-semibold text-gray-700 mb-2">
                    Area of Residence
                  </label>
                  <input
                    type="text"
                    id="area"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    placeholder="e.g., Kahawa West"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Areas of Interest (Select all that apply)
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {interestAreas.map((interest) => (
                      <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleCheckboxChange(interest)}
                          className="w-5 h-5 text-brand-orange border-gray-300 rounded focus:ring-brand-orange"
                        />
                        <span className="text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about yourself and why you want to volunteer
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>

                <button type="submit" className="w-full btn-primary text-lg py-4">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Feel free to reach out to us if you have any questions about volunteering.
            </p>
            <a
              href="mailto:cbobetterlife@gmail.com"
              className="text-brand-orange text-xl font-semibold hover:underline"
            >
              cbobetterlife@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}


'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
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
              About <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-brand-orange"
              >Better Life CBO</motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-200"
            >
              A non-political, non-sectarian, and voluntary community organization committed to
              enhancing the social and economic wellbeing of its members and the wider community.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-2xl border-l-4 border-brand-orange"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Location</h2>
              <p className="text-lg text-gray-600 mb-2">
                <strong>Address:</strong> P.O. Box 13768-00100 GPO Nairobi, Kenya
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <strong>Location:</strong> Kahawa West, Roysambu Subcounty, Nairobi
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <strong>Phone:</strong>{' '}
                <a href="tel:+254708326278" className="text-brand-orange hover:underline">
                  +254 708 326278
                </a>
              </p>
              <p className="text-lg text-gray-600">
                <strong>Email:</strong>{' '}
                <a href="mailto:cbobetterlife@gmail.com" className="text-brand-orange hover:underline">
                  cbobetterlife@gmail.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-8 text-center"
            >
              Our <span className="text-brand-orange">Objectives</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Promote community empowerment through education, health, and economic programs.',
                'Support vulnerable groups including youth, women, the elderly, and persons with disabilities.',
                'Promote environmental conservation, sanitation, and sustainable living practices.',
                'Facilitate skills training, entrepreneurship, and financial empowerment opportunities.',
                'Collaborate with government agencies, NGOs, and private entities in implementing community development projects.',
                'Foster unity, peace, and social responsibility within the community.',
                'Mobilize resources to improve livelihoods through income-generating activities.',
              ].map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-brand-green"
                >
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{objective}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
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
              Our <span className="text-brand-orange">Governance</span>
            </motion.h2>
            <div className="space-y-6">
              {[
                {
                  title: 'General Assembly',
                  description: 'Composed of all registered members, serving as the supreme decision-making body of the organization.',
                  gradient: 'from-brand-purple to-brand-purple-dark',
                },
                {
                  title: 'Executive Committee',
                  description: 'Responsible for implementation of decisions and management of daily operations.',
                  gradient: 'from-brand-orange to-red-600',
                },
                {
                  title: 'Subcommittees',
                  description: 'Established as necessary to address specific areas such as finance, programs, or welfare.',
                  gradient: 'from-brand-green to-green-600',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-gradient-to-r ${item.gradient} text-white p-8 rounded-2xl`}
                >
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-100">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-8 text-center"
            >
              Become a <span className="text-brand-orange">Member</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <p className="text-lg text-gray-700 mb-6">
                Membership is open to all persons aged 18 years and above residing within the area of operation
                who subscribe to the mission and vision of Better Life CBO.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-brand-purple mb-2">Registration Requirements</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>New members shall pay a non-refundable registration fee of Ksh 5,000</li>
                    <li>Each member shall make regular contributions as determined by the general meeting</li>
                    <li>Every member shall complete a membership form and provide accurate contact information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-purple mb-2">Member Rights</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Attend and participate in all general meetings</li>
                    <li>Vote and be voted into any elective position</li>
                    <li>Inspect and receive information regarding the organization's activities and finances</li>
                    <li>Benefit from the programs and projects of the organization</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 p-6 bg-brand-orange bg-opacity-10 rounded-xl border-l-4 border-brand-orange">
                <p className="text-gray-700">
                  <strong>Interested in joining?</strong> Contact us at{' '}
                  <a href="mailto:cbobetterlife@gmail.com" className="text-brand-orange font-semibold hover:underline">
                    cbobetterlife@gmail.com
                  </a>{' '}
                  to learn more about membership and how you can get involved.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}


'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProgramsPage() {
  const programs = [
    {
      title: 'Economic Empowerment',
      description: 'Support small businesses, capacity building, and cooperative initiatives.',
      image: '/images/programs/economic-empowerment.jpg',
      details: [
        'Small business development and support',
        'Capacity building workshops',
        'Cooperative initiatives and group savings',
        'Financial literacy training',
        'Entrepreneurship mentorship programs',
      ],
      icon: (
        <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-brand-orange to-red-600',
    },
    {
      title: 'Education and Training',
      description: 'Provide scholarships, mentorship, and skills training for youth and women.',
      image: '/images/programs/education-training.jpg',
      details: [
        'Educational scholarships for deserving students',
        'Youth mentorship programs',
        'Skills training workshops',
        'Women empowerment training',
        'Career guidance and counseling',
      ],
      icon: (
        <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'from-brand-purple to-brand-purple-dark',
    },
    {
      title: 'Health and Sanitation',
      description: 'Organize community health drives, awareness campaigns, and hygiene projects.',
      image: '/images/programs/health-saniation.jpeg',
      details: [
        'Community health drives and medical camps',
        'Health awareness campaigns',
        'Hygiene and sanitation projects',
        'Mental health support programs',
        'Nutrition and wellness workshops',
      ],
      icon: (
        <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'from-brand-green to-green-600',
    },
    {
      title: 'Environmental Conservation',
      description: 'Initiate tree planting, waste management, and clean-up campaigns.',
      image: '/images/programs/environmental-conservation.jpeg',
      details: [
        'Tree planting initiatives',
        'Waste management programs',
        'Community clean-up campaigns',
        'Environmental awareness education',
        'Sustainable living practices workshops',
      ],
      icon: (
        <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-brand-green to-green-700',
    },
    {
      title: 'Social Cohesion',
      description: 'Facilitate youth mentorship, family strengthening, and peace-building programs.',
      image: '/images/programs/social-cohesion.jpeg',
      details: [
        'Youth mentorship programs',
        'Family strengthening initiatives',
        'Peace-building and conflict resolution',
        'Community dialogue forums',
        'Cultural and social events',
      ],
      icon: (
        <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-brand-orange to-red-600',
    },
  ]

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
              Our <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-brand-orange"
              >Programs</motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-200"
            >
              We undertake comprehensive activities across multiple areas to achieve our objectives 
              and create lasting positive change in our community.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex`}
              >
                {/* Program Photo Section */}
                <div className={`md:w-1/3 bg-gradient-to-br ${program.color} text-white p-12 flex items-center justify-center relative`}>
                  {program.image ? (
                    <div className="absolute inset-0">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
                    </div>
                  ) : null}
                  <div className="text-center relative z-10">
                    <div className="flex justify-center mb-4">{program.icon}</div>
                    <h2 className="text-3xl font-bold">{program.title}</h2>
                  </div>
                </div>
                <div className="md:w-2/3 p-12">
                  <p className="text-xl text-gray-700 mb-6">{program.description}</p>
                  <h3 className="text-2xl font-bold text-brand-purple mb-4">Key Activities:</h3>
                  <ul className="space-y-3">
                    {program.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="text-brand-orange mr-3 mt-1">✓</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-brand-orange to-red-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-6"
            >Get Involved in Our Programs</motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 text-gray-100"
            >
              Whether you want to participate, volunteer, or support our programs, we'd love to have you join us.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="/volunteer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-orange btn-primary hover:bg-gray-100"
              >
                Volunteer
              </motion.a>
              <motion.a
                href="/donate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-purple text-white btn-secondary hover:bg-opacity-90"
              >
                Donate
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}


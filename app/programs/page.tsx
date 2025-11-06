export default function ProgramsPage() {
  const programs = [
    {
      title: 'Economic Empowerment',
      description: 'Support small businesses, capacity building, and cooperative initiatives.',
      details: [
        'Small business development and support',
        'Capacity building workshops',
        'Cooperative initiatives and group savings',
        'Financial literacy training',
        'Entrepreneurship mentorship programs',
      ],
      icon: '💰',
      color: 'from-brand-orange to-red-600',
    },
    {
      title: 'Education and Training',
      description: 'Provide scholarships, mentorship, and skills training for youth and women.',
      details: [
        'Educational scholarships for deserving students',
        'Youth mentorship programs',
        'Skills training workshops',
        'Women empowerment training',
        'Career guidance and counseling',
      ],
      icon: '📚',
      color: 'from-brand-purple to-brand-purple-dark',
    },
    {
      title: 'Health and Sanitation',
      description: 'Organize community health drives, awareness campaigns, and hygiene projects.',
      details: [
        'Community health drives and medical camps',
        'Health awareness campaigns',
        'Hygiene and sanitation projects',
        'Mental health support programs',
        'Nutrition and wellness workshops',
      ],
      icon: '🏥',
      color: 'from-brand-green to-green-600',
    },
    {
      title: 'Environmental Conservation',
      description: 'Initiate tree planting, waste management, and clean-up campaigns.',
      details: [
        'Tree planting initiatives',
        'Waste management programs',
        'Community clean-up campaigns',
        'Environmental awareness education',
        'Sustainable living practices workshops',
      ],
      icon: '🌳',
      color: 'from-brand-green to-green-700',
    },
    {
      title: 'Social Cohesion',
      description: 'Facilitate youth mentorship, family strengthening, and peace-building programs.',
      details: [
        'Youth mentorship programs',
        'Family strengthening initiatives',
        'Peace-building and conflict resolution',
        'Community dialogue forums',
        'Cultural and social events',
      ],
      icon: '🤝',
      color: 'from-brand-orange to-red-600',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-brand-orange">Programs</span>
            </h1>
            <p className="text-xl text-gray-200">
              We undertake comprehensive activities across multiple areas to achieve our objectives 
              and create lasting positive change in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex`}
              >
                <div className={`md:w-1/3 bg-gradient-to-br ${program.color} text-white p-12 flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="text-7xl mb-4">{program.icon}</div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-brand-orange to-red-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get Involved in Our Programs</h2>
            <p className="text-xl mb-8 text-gray-100">
              Whether you want to participate, volunteer, or support our programs, we'd love to have you join us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/volunteer" className="bg-white text-brand-orange btn-primary hover:bg-gray-100">
                Volunteer
              </a>
              <a href="/donate" className="bg-brand-purple text-white btn-secondary hover:bg-opacity-90">
                Donate
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-brand-orange">Better Life CBO</span>
            </h1>
            <p className="text-xl text-gray-200">
              A non-political, non-sectarian, and voluntary community organization committed to 
              enhancing the social and economic wellbeing of its members and the wider community.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-brand-orange">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Location</h2>
              <p className="text-lg text-gray-600 mb-2">
                <strong>Address:</strong> Kahawa West, Roysambu Subcounty, Nairobi City County, Kenya
              </p>
              <p className="text-lg text-gray-600">
                <strong>Email:</strong>{' '}
                <a href="mailto:cbobetterlife@gmail.com" className="text-brand-orange hover:underline">
                  cbobetterlife@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Our <span className="text-brand-orange">Objectives</span>
            </h2>
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
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-brand-green"
                >
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{objective}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Our <span className="text-brand-orange">Governance</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-brand-purple to-brand-purple-dark text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">General Assembly</h3>
                <p className="text-gray-200">
                  Composed of all registered members, serving as the supreme decision-making body of the organization.
                </p>
              </div>
              <div className="bg-gradient-to-r from-brand-orange to-red-600 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Executive Committee</h3>
                <p className="text-gray-100">
                  Responsible for implementation of decisions and management of daily operations.
                </p>
              </div>
              <div className="bg-gradient-to-r from-brand-green to-green-600 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Subcommittees</h3>
                <p className="text-gray-100">
                  Established as necessary to address specific areas such as finance, programs, or welfare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Become a <span className="text-brand-orange">Member</span>
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


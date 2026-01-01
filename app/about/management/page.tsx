'use client'

import { motion } from 'framer-motion'

export default function ManagementPage() {
    const officeBearers = [
        { role: 'Chairperson', duties: ['Presides over all meetings', 'Provides strategic leadership', 'Represents the CBO in official matters'] },
        { role: 'Vice Chairperson', duties: ['Assists and deputizes the Chairperson', 'Undertakes delegated responsibilities'] },
        { role: 'Secretary', duties: ['Keeps accurate records', 'Issues notices of meetings', 'Prepares reports'] },
        { role: 'Vice Secretary', duties: ['Assists the Secretary and acts in their absence'] },
        { role: 'Treasurer', duties: ['Receives and accounts for all funds', 'Prepares financial reports', 'Maintains proper accounting records'] },
    ]

    const governanceStructure = [
        {
            title: 'The General Assembly',
            description: 'The supreme decision-making body composed of all registered members. They meet annually to elect officials and approve plans.',
        },
        {
            title: 'The Executive Committee',
            description: 'Responsible for the implementation of decisions and the management of daily operations.',
        },
        {
            title: 'Subcommittees',
            description: 'Established as necessary to address specific areas such as finance, programs, or welfare.',
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white section-padding">
                <div className="container-custom text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Management & <span className="text-brand-orange">Governance</span>
                    </motion.h1>
                    <p className="text-xl max-w-2xl mx-auto text-gray-200">
                        Guided by a commitment to transparency, accountability, and community service.
                    </p>
                </div>
            </section>

            {/* Governance Structure */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Governance Structure</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {governanceStructure.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-orange"
                            >
                                <h3 className="text-xl font-bold mb-4 text-brand-purple">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Office Bearers */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Office Bearers</h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {officeBearers.map((bearer, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col md:flex-row md:items-center bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
                            >
                                <div className="md:w-1/3 mb-4 md:mb-0">
                                    <h3 className="text-xl font-bold text-brand-purple">{bearer.role}</h3>
                                </div>
                                <div className="md:w-2/3">
                                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                                        {bearer.duties.map((duty, idx) => (
                                            <li key={idx}>{duty}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Accountability */}
            <section className="section-padding bg-brand-purple text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold mb-6">Financial Accountability</h2>
                    <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-200">
                        As per our constitution, we maintain a bank account operated by the Chairperson, Secretary, and Treasurer.
                        All expenditures are authorized, documented, and audited annually to ensure maximum transparency to our members.
                    </p>
                    <div className="inline-block bg-white text-brand-purple px-8 py-3 rounded-full font-bold">
                        Integrity • Transparency • Accountability
                    </div>
                </div>
            </section>
        </div>
    )
}

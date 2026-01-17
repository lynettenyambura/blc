'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Newsletter from './Newsletter'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-brand-purple text-white">
      <div className="container-custom section-padding">
        {/* Newsletter Section */}
        <div className="mb-12">
          <Newsletter />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-brand-orange">Better</span> Life CBO
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Empowering Lives for a Better Tomorrow. A community-based organization committed to enhancing social and economic wellbeing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>P.O. Box 13768-00100 GPO Nairobi</li>
              <li>Kahawa West, Roysambu Subcounty</li>
              <li>Nairobi City County, Kenya</li>
              <li>
                <a href="tel:+254708326278" className="hover:text-brand-orange transition-colors">
                  +254 708 326278
                </a>
              </li>
              <li>
                <a href="mailto:info@betterlifecbo.org" className="hover:text-brand-orange transition-colors">
                  info@betterlifecbo.org
                </a>
              </li>
              <li>
                <a href="mailto:cbobetterlife@gmail.com" className="hover:text-brand-orange transition-colors">
                  cbobetterlife@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Core Values */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Values</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Integrity & Transparency</li>
              <li>• Inclusivity & Equality</li>
              <li>• Accountability & Teamwork</li>
              <li>• Empowerment & Self-Reliance</li>
              <li>• Community Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {currentYear} Better Life CBO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


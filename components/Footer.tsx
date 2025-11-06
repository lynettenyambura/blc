import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-purple text-white">
      <div className="container-custom section-padding">
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
              <li>Kahawa West, Roysambu Subcounty</li>
              <li>Nairobi City County, Kenya</li>
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
          <p>&copy; {new Date().getFullYear()} Better Life CBO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


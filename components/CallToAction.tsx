import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="section-padding bg-gradient-to-r from-brand-orange to-red-600 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Whether you want to volunteer your time, make a donation, or learn more about our work, 
            we'd love to have you join our community of changemakers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer" className="bg-white text-brand-orange btn-primary hover:bg-gray-100">
              Become a Volunteer
            </Link>
            <Link href="/donate" className="bg-brand-purple text-white btn-secondary hover:bg-opacity-90">
              Make a Donation
            </Link>
            <Link href="/about" className="border-2 border-white text-white btn-outline hover:bg-white hover:text-brand-orange">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


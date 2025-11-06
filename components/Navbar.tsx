'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center">
              <div className="text-4xl font-bold">
                <span className="text-brand-purple">B</span>
                <span className="text-brand-orange">L</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold">
                <span className="text-brand-purple">Better</span>{' '}
                <span className="text-brand-orange">Life</span>{' '}
                <span className="text-brand-purple">CBO</span>
              </div>
              <div className="text-xs text-gray-600">Empowering Lives for a Better Tomorrow</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-brand-orange transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-orange transition-colors font-medium">
              About
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-brand-orange transition-colors font-medium">
              Programs
            </Link>
            <Link href="/volunteer" className="text-gray-700 hover:text-brand-orange transition-colors font-medium">
              Volunteer
            </Link>
            <Link href="/donate" className="btn-primary">
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-brand-orange"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-brand-orange transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-brand-orange transition-colors font-medium">
              About
            </Link>
            <Link href="/programs" className="block text-gray-700 hover:text-brand-orange transition-colors font-medium">
              Programs
            </Link>
            <Link href="/volunteer" className="block text-gray-700 hover:text-brand-orange transition-colors font-medium">
              Volunteer
            </Link>
            <Link href="/donate" className="block btn-primary text-center">
              Donate
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}


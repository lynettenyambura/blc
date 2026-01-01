'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <motion.div whileHover={{ y: -2 }}>
              <Link href="/" className="text-gray-700 hover:text-brand-orange transition-colors font-medium">
                Home
              </Link>
            </motion.div>
            {/* About Dropdown */}
            <div className="relative group">
              <motion.div whileHover={{ y: -2 }} className="flex items-center space-x-1 cursor-pointer py-4">
                <Link href="/about" className="text-gray-700 group-hover:text-brand-orange transition-colors font-medium">
                  About
                </Link>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-brand-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>

              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 w-56">
                <div className="bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden py-2">
                  <Link href="/about" className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors">
                    Our Story & Objectives
                  </Link>
                  <Link href="/about/management" className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors">
                    Management & Board
                  </Link>
                </div>
              </div>
            </div>

            <motion.div whileHover={{ y: -2 }}>
              <Link href="/programs" className="text-gray-700 hover:text-brand-orange transition-colors font-medium">
                Programs
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link href="/volunteer" className="text-gray-700 hover:text-brand-orange transition-colors font-medium">
                Volunteer
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/donate" className="btn-primary">
                Donate
              </Link>
            </motion.div>
          </motion.div>

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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 space-y-3 overflow-hidden"
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Link href="/" className="block text-gray-700 hover:text-brand-orange transition-colors font-medium">
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="space-y-2"
              >
                <Link href="/about" className="block text-gray-700 hover:text-brand-orange transition-colors font-medium">
                  About
                </Link>
                <div className="pl-4 space-y-2 border-l-2 border-brand-orange border-opacity-30">
                  <Link href="/about" className="block text-sm text-gray-600 hover:text-brand-orange mb-1">
                    Our Story
                  </Link>
                  <Link href="/about/management" className="block text-sm text-gray-600 hover:text-brand-orange">
                    Management & Board
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/programs" className="block text-gray-700 hover:text-brand-orange transition-colors font-medium">
                  Programs
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <Link href="/volunteer" className="block text-gray-700 hover:text-brand-orange transition-colors font-medium">
                  Volunteer
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link href="/donate" className="block btn-primary text-center">
                  Donate
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}


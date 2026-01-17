
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Swal from 'sweetalert2'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      setStatus('success')
      setEmail('')

      Swal.fire({
        title: 'Subscribed!',
        text: 'Thank you for subscribing! Check your email for a confirmation message.',
        icon: 'success',
        confirmButtonColor: '#fe330a',
        timer: 5000
      })

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      setStatus('error')
      const errorMsg = error instanceof Error
        ? error.message
        : 'Something went wrong. Please try again later.'

      Swal.fire({
        title: 'Error',
        text: errorMsg,
        icon: 'error',
        confirmButtonColor: '#fe330a'
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-brand-purple to-brand-purple-dark p-8 rounded-2xl shadow-xl"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Stay Connected
        </h3>
        <p className="text-gray-200">
          Subscribe to our newsletter to receive updates on our programs and community initiatives.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            disabled={status === 'loading'}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status === 'loading'}
            className="bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </motion.button>
        </div>
      </form>
    </motion.div>
  )
}

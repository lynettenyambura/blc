
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Subscriber {
    id: string
    email: string
    subscribedAt: string
}

interface Volunteer {
    id: string
    name: string
    email: string
    phone: string
    area?: string
    interests: string
    message?: string
    createdAt: string
}

export default function AdminDashboard() {
    const [accessKey, setAccessKey] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [activeTab, setActiveTab] = useState<'subscribers' | 'volunteers'>('subscribers')

    const [subscribers, setSubscribers] = useState<Subscriber[]>([])
    const [volunteers, setVolunteers] = useState<Volunteer[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        const savedKey = sessionStorage.getItem('admin_access_key')
        if (savedKey) {
            setAccessKey(savedKey)
            fetchData(savedKey)
        }
    }, [])

    const fetchData = async (key: string) => {
        setIsLoading(true)
        setError('')

        try {
            // Fetch Subscribers
            const subRes = await fetch('/api/admin/subscribers', {
                headers: { 'x-admin-key': key }
            })

            // Check auth on first request
            if (subRes.status === 401) {
                setIsAuthenticated(false)
                setError('Invalid Access Key')
                sessionStorage.removeItem('admin_access_key')
                setIsLoading(false)
                return
            }

            // Fetch Volunteers
            const volRes = await fetch('/api/admin/volunteers', {
                headers: { 'x-admin-key': key }
            })

            if (subRes.ok && volRes.ok) {
                const subData = await subRes.json()
                const volData = await volRes.json()

                setSubscribers(subData.subscribers)
                setVolunteers(volData.volunteers)

                setIsAuthenticated(true)
                sessionStorage.setItem('admin_access_key', key)
            } else {
                throw new Error('Failed to fetch data')
            }

        } catch (err) {
            setError('Something went wrong. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        fetchData(accessKey)
    }

    const handleLogout = () => {
        setIsAuthenticated(false)
        setAccessKey('')
        setSubscribers([])
        setVolunteers([])
        sessionStorage.removeItem('admin_access_key')
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                    <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Admin Login</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Access Key
                            </label>
                            <input
                                type="password"
                                value={accessKey}
                                onChange={(e) => setAccessKey(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                                placeholder="Enter secret key"
                                required
                            />
                        </div>
                        {error && (
                            <p className="text-red-500 text-sm text-center">{error}</p>
                        )}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-brand-purple text-white py-2 rounded-lg font-semibold hover:bg-brand-purple-dark transition-colors disabled:opacity-50"
                        >
                            {isLoading ? 'Verifying...' : 'Access Dashboard'}
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-brand-purple text-white p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                            <p className="text-purple-100 opacity-80 text-sm mt-1">
                                Manage your community data
                            </p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                        >
                            Logout
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-gray-100 bg-gray-50/50">
                        <button
                            onClick={() => setActiveTab('subscribers')}
                            className={`flex-1 py-4 text-center font-medium text-sm transition-colors ${activeTab === 'subscribers'
                                    ? 'text-brand-purple border-b-2 border-brand-purple bg-white'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Newsletter Subscribers ({subscribers.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('volunteers')}
                            className={`flex-1 py-4 text-center font-medium text-sm transition-colors ${activeTab === 'volunteers'
                                    ? 'text-brand-purple border-b-2 border-brand-purple bg-white'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Volunteers ({volunteers.length})
                        </button>
                    </div>

                    {/* Content */}
                    <div className="overflow-x-auto min-h-[400px]">
                        {activeTab === 'subscribers' ? (
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                                        <th className="p-4">Email Address</th>
                                        <th className="p-4">Subscribed At</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {subscribers.length === 0 ? (
                                        <tr>
                                            <td colSpan={2} className="p-8 text-center text-gray-500">
                                                No subscribers found yet.
                                            </td>
                                        </tr>
                                    ) : (
                                        subscribers.map((sub) => (
                                            <tr key={sub.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="p-4 font-medium text-gray-900">{sub.email}</td>
                                                <td className="p-4 text-gray-600">
                                                    {new Date(sub.subscribedAt).toLocaleString()}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        ) : (
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                                        <th className="p-4">Name</th>
                                        <th className="p-4">Contact</th>
                                        <th className="p-4">Area & Interests</th>
                                        <th className="p-4">Message</th>
                                        <th className="p-4">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {volunteers.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="p-8 text-center text-gray-500">
                                                No volunteer applications yet.
                                            </td>
                                        </tr>
                                    ) : (
                                        volunteers.map((vol) => (
                                            <tr key={vol.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="p-4 font-medium text-gray-900 align-top">
                                                    {vol.name}
                                                </td>
                                                <td className="p-4 text-sm text-gray-600 align-top">
                                                    <div className="font-medium">{vol.email}</div>
                                                    <div>{vol.phone}</div>
                                                </td>
                                                <td className="p-4 text-sm text-gray-600 align-top max-w-xs">
                                                    <div className="font-medium text-brand-purple mb-1">{vol.area || 'N/A'}</div>
                                                    <div className="text-xs">{vol.interests}</div>
                                                </td>
                                                <td className="p-4 text-sm text-gray-600 align-top max-w-xs truncate" title={vol.message}>
                                                    {vol.message || '-'}
                                                </td>
                                                <td className="p-4 text-xs text-gray-500 align-top whitespace-nowrap">
                                                    {new Date(vol.createdAt).toLocaleDateString()}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <Link href="/" className="text-gray-500 hover:text-brand-purple transition-colors text-sm">
                        &larr; Back to Website
                    </Link>
                </div>
            </div>
        </div>
    )
}

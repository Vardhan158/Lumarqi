import React from 'react'
import Navbar from '../../components/Navbar'

export default function Industry() {
  return (
    <main className="pt-28 md:pt-40 px-6 md:px-16 lg:px-24 xl:px-32 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-2xl font-semibold mb-4">All Industries</h1>
        <p className="text-slate-600">Serving diverse industries with specialized expertise in data and AI solutions.</p>
      </div>
    </main>
  )
}

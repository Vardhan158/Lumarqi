import React from 'react'
import Navbar from '../../../components/Navbar'

export default function MLOps() {
  return (
    <main className="pt-28 md:pt-40 px-6 md:px-16 lg:px-24 xl:px-32 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-2xl font-semibold mb-4">MLOps</h1>
        <p className="text-slate-600">Operationalize and scale machine learning models with DevOps best practices.</p>
      </div>
    </main>
  )
}

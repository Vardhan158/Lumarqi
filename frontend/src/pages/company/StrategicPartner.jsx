import React from 'react'
import Navbar from '../../components/Navbar'

const partners = [
  {
    name: "Microsoft Azure",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
    description: "Cloud, AI, and analytics partner for scalable enterprise solutions.",
    link: "https://azure.microsoft.com/"
  },
  {
    name: "Google Cloud",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Cloud_logo.svg",
    description: "Data engineering, ML, and infrastructure partner for innovation.",
    link: "https://cloud.google.com/"
  },
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    description: "Cloud computing, storage, and AI partner for global scale.",
    link: "https://aws.amazon.com/"
  },
  {
    name: "Databricks",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Databricks_Logo.png",
    description: "Unified analytics and lakehouse platform partner.",
    link: "https://databricks.com/"
  },
  {
    name: "Snowflake",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Snowflake_Logo.png",
    description: "Cloud data warehousing and analytics partner.",
    link: "https://snowflake.com/"
  },
  {
    name: "Tableau",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png",
    description: "Business intelligence and data visualization partner.",
    link: "https://tableau.com/"
  },
];

export default function StrategicPartner() {
  return (
    <main className="pt-28 md:pt-40 px-6 md:px-16 lg:px-24 xl:px-32 min-h-screen bg-gradient-to-br from-white to-slate-50">
      <Navbar />
      <div className="max-w-5xl mx-auto py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Strategic Partners</h1>
        <p className="text-slate-600 mb-8 text-lg max-w-2xl">
          We collaborate with leading technology and data partners to deliver innovative, scalable, and secure solutions for our clients. Explore our strategic partnerships and discover how we drive transformation together.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {partners.map((p) => (
            <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center border border-slate-100">
              <img src={p.logo} alt={p.name + ' logo'} className="h-16 mb-4 object-contain" style={{maxHeight:64}} />
              <h2 className="text-lg font-semibold mb-2 text-slate-800">{p.name}</h2>
              <p className="text-sm text-slate-600 mb-2">{p.description}</p>
              <span className="text-indigo-600 font-medium text-xs">Learn more ↗</span>
            </a>
          ))}
        </div>
        <div className="bg-indigo-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-2 text-indigo-700">Interested in partnering with us?</h3>
          <p className="text-slate-700 mb-4">We welcome new collaborations and strategic alliances. Reach out to explore partnership opportunities and drive innovation together.</p>
          <a href="/company/contact" className="inline-block bg-indigo-600 text-white font-medium px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition">Contact Us</a>
        </div>
      </div>
    </main>
  );
}

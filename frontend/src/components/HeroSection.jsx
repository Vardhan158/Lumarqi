import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import WhyChoose from "./WhyChoose";
import Footer from "./Footer";

// Helper function for client-side navigation
const navigateTo = (path) => {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const navItems = [
    { label: "Service", link: "/services" },
    { label: "Industry", link: "/industry" },
    { label: "Company", link: "/company" },
    { label: "Case Studies", link: "/case-studies" },
  ];

  const services = [
    {
      title: "Strategy & Advisory",
      link: "/services/strategy-advisory",
      bg: "bg-indigo-50",
      img: "https://images.unsplash.com/photo-1526378723306-0b0b0c4b0b62?auto=format&fit=crop&w=800&q=60",
      items: [
        { label: "Analytics Roadmap", link: "/services/strategy-advisory/analytics-roadmap" },
        { label: "Data Strategy", link: "/services/strategy-advisory/data-strategy" },
        { label: "Platform Strategy", link: "/services/strategy-advisory/platform-strategy" },
      ],
    },
    {
      title: "Engineer Your Data",
      link: "/services/engineer-your-data",
      bg: "bg-teal-50",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=60",
      items: [
        { label: "Data Modernization", link: "/services/engineer-your-data/data-modernization" },
        { label: "Data Foundation", link: "/services/engineer-your-data/data-foundation" },
        { label: "Data Operations", link: "/services/engineer-your-data/data-operations" },
      ],
    },
    {
      title: "Differentiate with AI/ML",
      link: "/services/ai-ml",
      bg: "bg-cyan-50",
      img: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=800&q=60",
      items: [
        { label: "Data Science", link: "/services/ai-ml/data-science" },
        { label: "AI Engineering", link: "/services/ai-ml/ai-engineering" },
        { label: "ML Products & Platforms", link: "/services/ai-ml/ml-products-platforms" },
      ],
    },
    {
      title: "Operationalize Insights",
      link: "/services/operationalize-insights",
      bg: "bg-violet-50",
      img: "https://images.unsplash.com/photo-1543007632-7bb2f3b6f8f4?auto=format&fit=crop&w=800&q=60",
      items: [
        { label: "Experience Consulting", link: "/services/operationalize-insights/experience-consulting" },
        { label: "Application Engineering", link: "/services/operationalize-insights/application-engineering" },
        { label: "Business Intelligence", link: "/services/operationalize-insights/business-intelligence" },
        { label: "MLOps", link: "/services/operationalize-insights/mlops" },
      ],
    },
  ];

  const industries = [
    {
      title: "CPG",
      link: "/industry/cpg",
      img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=60",
      items: [{ label: "Retail", link: "/industry/cpg/retail" }],
    },
    {
      title: "BFS",
      link: "/industry/bfs",
      img: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=60",
      items: [{ label: "Insurance", link: "/industry/bfs/insurance" }],
    },
    {
      title: "Manufacturing",
      link: "/industry/manufacturing",
      img: "https://images.unsplash.com/photo-1532634726-8b9fb99825a8?auto=format&fit=crop&w=800&q=60",
      items: [{ label: "Logistics", link: "/industry/manufacturing/logistics" }],
    },
    {
      title: "Life Sciences",
      link: "/industry/life-sciences",
      img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=60",
      items: [{ label: "Healthcare", link: "/industry/life-sciences/healthcare" }],
    },
    {
      title: "Technology, Telecom & Media",
      link: "/industry/technology-telecom-media",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60",
      items: [],
    },
  ];

  const companySections = [
    {
      title: "About Us",
      items: [
        { label: "Mission & Values", link: "/company/mission-values" },
        { label: "Investors", link: "/company/investors" },
        { label: "People", link: "/company/people" },
        { label: "Contact Us", link: "/company/contact" },
        { label: "Careers", link: "/company/careers" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "News", link: "/company/news" },
        { label: "Newsletters", link: "/company/newsletters" },
        { label: "Webinars", link: "/company/webinars" },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 min-h-screen">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="relative flex items-center justify-between py-5 px-6 md:px-16 lg:px-24 xl:px-32">
          <a href="/" className="text-2xl font-bold tracking-tight text-slate-900">
            Lumar <span className="text-indigo-600">QI</span>
          </a>

          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) =>
              item.label === "Service" ? (
                <div
                  key={item.label}
                  onMouseEnter={() => setServiceOpen(true)}
                  onMouseLeave={() => setServiceOpen(false)}
                >
                  <span className="text-lg font-semibold cursor-pointer hover:text-indigo-600 transition">
                    Service
                  </span>

                  <AnimatePresence>
                    {serviceOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="
                          fixed left-0 right-0 top-16 md:top-[80px]
                          bg-gradient-to-b from-white to-slate-50
                          shadow-xl border-t border-slate-200
                          px-6 md:px-16 lg:px-24 xl:px-32 py-10
                        "
                      >
                        {/* Header */}
                        <span
                          onClick={() => navigateTo('/services')}
                          className="group flex items-center gap-2 mb-10 text-sm font-semibold text-slate-700 cursor-pointer"
                        >
                          ALL SERVICES
                          <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent inline-block transition-transform duration-200 group-hover:-translate-y-1">
                            ↗
                          </span>
                        </span>

                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          {services.map((s) => (
                            <span
                              key={s.title}
                              onClick={() => navigateTo(s.link)}
                              className={`
                                rounded-2xl p-6 ${s.bg}
                                border border-slate-200
                                hover:border-indigo-300
                                hover:shadow-lg
                                transition
                                cursor-pointer
                              `}
                            >
                              {/* Service image */}
                              <div className="h-20 md:h-24 lg:h-28 mb-6 rounded-xl overflow-hidden border border-slate-300">
                                <img src={s.img} alt={`${s.title} image`} loading="lazy" className="w-full h-full object-cover pointer-events-none" />
                              </div>

                              <div className="group flex items-center gap-2 font-semibold mb-4 text-slate-900">
                                {s.title}
                                <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent inline-block transition-transform duration-200 group-hover:-translate-y-1">
                                  ↗
                                </span>
                              </div>

                              <ul className="space-y-3 text-sm text-slate-700">
                                {s.items.map((i) => (
                                  <li key={i.label}>
                                    <span
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        navigateTo(i.link)
                                      }}
                                      className="group flex items-center gap-2 hover:text-indigo-600 transition cursor-pointer"
                                    >
                                      {i.label}
                                      <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent inline-block transition-transform duration-200 group-hover:-translate-y-1">
                                        ↗
                                      </span>
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item.label === "Industry" ? (
                <div
                  key={item.label}
                  onMouseEnter={() => setIndustryOpen(true)}
                  onMouseLeave={() => setIndustryOpen(false)}
                >
                  <span className="text-lg font-semibold cursor-pointer hover:text-indigo-600 transition">
                    Industry
                  </span>

                  <AnimatePresence>
                    {industryOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="
                          fixed left-0 right-0 top-16 md:top-[80px]
                          bg-gradient-to-b from-white to-slate-50
                          shadow-xl border-t border-slate-200
                          px-6 md:px-16 lg:px-24 xl:px-32 py-10
                        "
                      >
                        <span
                          onClick={() => navigateTo('/industry')}
                          className="group flex items-center gap-2 mb-10 text-sm font-semibold text-slate-700 cursor-pointer"
                        >
                          ALL INDUSTRIES
                          <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent inline-block transition-transform duration-200 group-hover:-translate-y-1">
                            ↗
                          </span>
                        </span>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                          {industries.map((ind) => (
                            <div
                              key={ind.title}
                              className="rounded-2xl overflow-hidden bg-white border border-slate-200 hover:shadow-lg transition"
                            >
                              <div className="h-24 md:h-36 lg:h-40 bg-slate-100">
                                <img src={ind.img} alt={ind.title} loading="lazy" className="w-full h-full object-cover pointer-events-none" />
                              </div>
                              <div className="p-4">
                                <span onClick={() => navigateTo(ind.link)} className="group flex items-center gap-2 mb-3 text-sm font-semibold text-slate-900 cursor-pointer">
                                  {ind.title}
                                  <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent inline-block transition-transform duration-200 group-hover:-translate-y-1">
                                    ↗
                                  </span>
                                </span>

                                <ul className="space-y-3 text-sm text-slate-700">
                                  {ind.items.slice(0, 2).map((it) => (
                                    <li key={it.label}>
                                      <span onClick={() => navigateTo(it.link)} className="group flex items-center gap-2 hover:text-indigo-600 transition cursor-pointer">
                                        {it.label}
                                        <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent inline-block transition-transform duration-200 group-hover:-translate-y-1">
                                          ↗
                                        </span>
                                      </span>
                                    </li>
                                  ))}

                                  {ind.items.length > 2 && (
                                    <li>
                                      <span onClick={() => navigateTo(ind.link)} className="text-indigo-600 font-medium cursor-pointer">View all ↗</span>
                                    </li>
                                  )}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item.label === "Company" ? (
                <div
                  key={item.label}
                  onMouseEnter={() => setCompanyOpen(true)}
                  onMouseLeave={() => setCompanyOpen(false)}
                >
                  <span className="text-lg font-semibold cursor-pointer hover:text-indigo-600 transition">
                    Company
                  </span>

                  <AnimatePresence>
                    {companyOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="
                          fixed left-0 right-0 top-16 md:top-[80px]
                          bg-gradient-to-b from-white to-slate-50
                          shadow-xl border-t border-slate-200
                          px-6 md:px-16 lg:px-24 xl:px-32 py-10
                        "
                      >
                        <span
                          onClick={() => navigateTo('/company')}
                          className="group flex items-center gap-2 mb-10 text-sm font-semibold text-slate-700 cursor-pointer"
                        >
                          COMPANY
                          <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent inline-block transition-transform duration-200 group-hover:-translate-y-1">
                            ↗
                          </span>
                        </span>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {companySections.map((sec) => (
                            <div key={sec.title} className="p-4 bg-white rounded-lg border border-slate-200">
                              <div className="font-semibold text-slate-900 mb-3">{sec.title}</div>
                              <ul className="text-sm text-slate-700 space-y-2">
                                {sec.items.map((it) => (
                                  <li key={it.label}>
                                    <span onClick={() => navigateTo(it.link)} className="group flex items-center gap-2 hover:text-indigo-600 cursor-pointer">
                                      {it.label}
                                      <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent inline-block transition-transform duration-200 group-hover:-translate-y-1">↗</span>
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.link}
                  onClick={(e) => {
                    // client-side navigation: push state and notify App
                    e.preventDefault()
                    window.history.pushState({}, '', item.link)
                    window.dispatchEvent(new PopStateEvent('popstate'))
                  }}
                  className="text-lg font-semibold text-slate-900 inline-flex items-center gap-2"
                >
                  {item.label}
                  {item.label !== 'Case Studies' && (
                    <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent inline-block transition-transform duration-200 group-hover:-translate-y-1">↗</span>
                  )}
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block px-7 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition">
              Request demo
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/50 border border-slate-200"
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {!menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6L18 18M6 18L18 6" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <main className="pt-28 md:pt-40 px-6 md:px-16 lg:px-24 xl:px-32">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-slate-900">
                Enterprise AI that <br /> drives intelligent decisions
              </h1>

              <p className="mt-6 text-slate-600 max-w-xl">
                Lumar QI helps organisations design, deploy, and govern AI solutions
                that scale responsibly across the enterprise.
              </p>
            </motion.div>

            <motion.div className="w-full max-w-lg mx-auto">
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-5.png"
                alt="AI Platform"
                className="w-full h-auto object-contain rounded-lg shadow-sm"
                loading="lazy"
              />
            </motion.div>
          </div>
        </Reveal>
      </main>

      {/* Additional section placed after hero */}
      <WhyChoose />

      {/* Footer placed after WhyChoose */}
      <Footer />

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm overflow-auto"
          >
            <div className="max-w-md mx-auto p-6">
              <div className="flex items-center justify-between mb-6">
                <a href="/" className="text-2xl font-bold tracking-tight text-slate-900">
                  Lumar <span className="text-indigo-600">QI</span>
                </a>
                <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6L18 18M6 18L18 6" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <nav className="space-y-4">
                {navItems.map((item) =>
                  item.label === "Service" ? (
                    <div key={item.label}>
                      <button
                        onClick={() => setMobileServiceOpen((s) => !s)}
                        className="w-full text-left flex items-center justify-between py-3 px-4 rounded-lg bg-slate-50 border border-slate-200"
                      >
                        <span className="font-semibold">Service</span>
                        <span className="text-slate-500">{mobileServiceOpen ? '−' : '+'}</span>
                      </button>

                      {mobileServiceOpen && (
                        <div className="mt-3 space-y-3">
                          {services.map((s) => (
                            <div key={s.title} className="p-4 rounded-lg bg-white border border-slate-200">
                              <span onClick={() => navigateTo(s.link)} className="group flex items-center gap-2 font-semibold text-slate-900 block mb-2 cursor-pointer">
                                {s.title}
                                <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent inline-block transition-transform duration-200 group-hover:-translate-y-1">↗</span>
                              </span>
                              <ul className="text-sm text-slate-600 space-y-1">
                                {s.items.map((it) => (
                                  <li key={it.label}>
                                    <span onClick={() => navigateTo(it.link)} className="group flex items-center gap-2 hover:text-indigo-600 block cursor-pointer">
                                      {it.label}
                                      <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent inline-block transition-transform duration-200 group-hover:-translate-y-1">↗</span>
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.label === "Industry" ? (
                    <div key={item.label}>
                      <button
                        onClick={() => setMobileIndustryOpen((s) => !s)}
                        className="w-full text-left flex items-center justify-between py-3 px-4 rounded-lg bg-slate-50 border border-slate-200"
                      >
                        <span className="font-semibold">Industry</span>
                        <span className="text-slate-500">{mobileIndustryOpen ? '−' : '+'}</span>
                      </button>

                      {mobileIndustryOpen && (
                        <div className="mt-3 space-y-3">
                          {industries.map((ind) => (
                            <div key={ind.title} className="p-4 rounded-lg bg-white border border-slate-200">
                              <span onClick={() => navigateTo(ind.link)} className="group flex items-center gap-2 font-semibold text-slate-900 block mb-2 cursor-pointer">
                                {ind.title}
                                <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent inline-block transition-transform duration-200 group-hover:-translate-y-1">↗</span>
                              </span>

                              <ul className="text-sm text-slate-600 space-y-1">
                                {ind.items.slice(0, 2).map((it) => (
                                  <li key={it.label}>
                                    <span onClick={() => navigateTo(it.link)} className="group flex items-center gap-2 hover:text-indigo-600 block cursor-pointer">
                                      {it.label}
                                      <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent inline-block transition-transform duration-200 group-hover:-translate-y-1">↗</span>
                                    </span>
                                  </li>
                                ))}
                                {ind.items.length > 2 && (
                                  <li>
                                    <span onClick={() => navigateTo(ind.link)} className="text-indigo-600 font-medium block cursor-pointer">View all ↗</span>
                                  </li>
                                )}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.label === "Company" ? (
                    <div key={item.label}>
                      <button
                        onClick={() => setMobileCompanyOpen((s) => !s)}
                        className="w-full text-left flex items-center justify-between py-3 px-4 rounded-lg bg-slate-50 border border-slate-200"
                      >
                        <span className="font-semibold">Company</span>
                        <span className="text-slate-500">{mobileCompanyOpen ? '−' : '+'}</span>
                      </button>

                      {mobileCompanyOpen && (
                        <div className="mt-3 space-y-3">
                          {companySections.map((sec) => (
                            <div key={sec.title} className="p-4 rounded-lg bg-white border border-slate-200">
                              <div className="font-semibold text-slate-900 block mb-2">{sec.title}</div>
                              <ul className="text-sm text-slate-600 space-y-1">
                                {sec.items.map((it) => (
                                  <li key={it.label}>
                                    <span onClick={() => navigateTo(it.link)} className="group flex items-center gap-2 hover:text-indigo-600 block cursor-pointer">
                                      {it.label}
                                      <span className="text-indigo-600">↗</span>
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      key={item.label}
                      href={item.link}
                      onClick={(e) => {
                        e.preventDefault()
                        window.history.pushState({}, '', item.link)
                        window.dispatchEvent(new PopStateEvent('popstate'))
                      }}
                      className="block py-3 px-4 rounded-lg hover:bg-slate-50 font-semibold flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      {item.label !== "Case Studies" && <span className="text-indigo-600">↗</span>}
                    </a>
                  )
                )}

                <div className="pt-4">
                    <a href="/request-demo" className="block text-center px-6 py-3 bg-indigo-600 text-white rounded-full font-medium">Request demo</a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import imgStrategy from "../assets/img-stratandadvisory.webp";
import imgEngineer from "../assets/img-engineerdata.webp";
import imgAIM from "../assets/img-diffwithaiml.webp";
import imgOperational from "../assets/img-opinsights.webp";

import imgCPG from "../assets/cpg-retail-menu-image-1.webp";
import imgBFS from "../assets/bfs-insurance-menu-image-1.webp";
import imgManufacturing from "../assets/Menu-navigation-Impact-3.webp";
import imgLifeSciences from "../assets/Menu-navigation-Impact-4.webp";
import imgTech from "../assets/Menu-navigation-Impact-5.webp";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  // Request Demo Modal State
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoName, setDemoName] = useState("");
  const [demoEmail, setDemoEmail] = useState("");
  const [demoPhone, setDemoPhone] = useState("");
  const [demoCompany, setDemoCompany] = useState("");
  const [demoCountry, setDemoCountry] = useState("");
  const [demoJobTitle, setDemoJobTitle] = useState("");
  const [demoContactAbout, setDemoContactAbout] = useState("");
  const [demoContactPreference, setDemoContactPreference] = useState("");
  const [demoIndustry, setDemoIndustry] = useState("");
  const [demoMessage, setDemoMessage] = useState("");
  const [demoStatus, setDemoStatus] = useState("");
  const [demoLoading, setDemoLoading] = useState(false);


  const services = [
    {
      title: "Strategy & Advisory",
      link: "/services/strategy-advisory",
      bg: "bg-indigo-50",
      img: imgStrategy,
      items: [
        {
          label: "Analytics Roadmap",
          link: "/services/strategy-advisory/analytics-roadmap",
        },
        {
          label: "Data Strategy",
          link: "/services/strategy-advisory/data-strategy",
        },
        {
          label: "Platform Strategy",
          link: "/services/strategy-advisory/platform-strategy",
        },
      ],
    },
    {
      title: "Engineer Your Data",
      link: "/services/engineer-your-data",
      bg: "bg-teal-50",
      img: imgEngineer,
      items: [
        {
          label: "Data Modernization",
          link: "/services/engineer-your-data/data-modernization",
        },
        {
          label: "Data Foundation",
          link: "/services/engineer-your-data/data-foundation",
        },
        {
          label: "Data Operations",
          link: "/services/engineer-your-data/data-operations",
        },
      ],
    },
    {
      title: "Differentiate with AI/ML",
      link: "/services/ai-ml",
      bg: "bg-cyan-50",
      img: imgAIM,
      items: [
        { label: "Data Science", link: "/services/ai-ml/data-science" },
        { label: "AI Engineering", link: "/services/ai-ml/ai-engineering" },
        {
          label: "ML Products & Platforms",
          link: "/services/ai-ml/ml-products-platforms",
        },
      ],
    },
    {
      title: "Operationalize Insights",
      link: "/services/operationalize-insights",
      bg: "bg-violet-50",
      img: imgOperational,
      items: [
        {
          label: "Experience Consulting",
          link: "/services/operationalize-insights/experience-consulting",
        },
        {
          label: "Application Engineering",
          link: "/services/operationalize-insights/application-engineering",
        },
        {
          label: "Business Intelligence",
          link: "/services/operationalize-insights/business-intelligence",
        },
        { label: "MLOps", link: "/services/operationalize-insights/mlops" },
      ],
    },
  ];

  const industries = [
    {
      title: "CPG",
      link: "/industry/cpg",
      img: imgCPG,
      items: [{ label: "Retail", link: "/industry/cpg/retail" }],
    },
    {
      title: "BFS",
      link: "/industry/bfs",
      img: imgBFS,
      items: [{ label: "Insurance", link: "/industry/bfs/insurance" }],
    },
    {
      title: "Manufacturing",
      link: "/industry/manufacturing",
      img: imgManufacturing,
      items: [
        { label: "Logistics", link: "/industry/manufacturing/logistics" },
      ],
    },
    {
      title: "Life Sciences",
      link: "/industry/life-sciences",
      img: imgLifeSciences,
      items: [
        { label: "Healthcare", link: "/industry/life-sciences/healthcare" },
      ],
    },
    {
      title: "Technology, Telecom & Media",
      link: "/industry/technology-telecom-media",
      img: imgTech,
      items: [],
    },
  ];

  const company = [
    {
      section: "About Us",
      items: [
        { label: "Mission & Values", link: "/company/mission-values" },
        { label: "Strategic Partner", link: "/company/StrategicPartners" },
        { label: "Leadership", link: "/company/leadership" },
        { label: "Contact Us", link: "/company/contact" },
        { label: "Careers", link: "/company/careers" },
      ],
    },
    {
      section: "Resources",
      items: [
        { label: "News", link: "/company/news" },
        { label: "Newsletters", link: "/company/newsletters" },
        { label: "Webinars", link: "/company/webinars" },
      ],
    },
  ];

  // Close mobile menu on navigation
  const handleMobileNav = () => {
    setMenuOpen(false);
    setMobileServiceOpen(false);
    setMobileIndustryOpen(false);
    setMobileCompanyOpen(false);
  };

  // Handle Request Demo form submit
  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    setDemoLoading(true);
    setDemoStatus("");
    try {
      // Debug: log the email value before sending
      console.log("Sending demo request with email:", demoEmail);
      const payload = {
        name: demoName,
        email: demoEmail,
        phone: demoPhone,
        company: demoCompany,
        country: demoCountry,
        jobTitle: demoJobTitle,
        contactAbout: demoContactAbout,
        contactPreference: demoContactPreference,
        industry: demoIndustry,
        message: demoMessage,
      };
      const res = await fetch("/api/request-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setDemoStatus("Thank you! We'll contact you soon.");
        setDemoName("");
        setDemoEmail("");
        setDemoPhone("");
        setDemoCompany("");
        setDemoCountry("");
        setDemoJobTitle("");
        setDemoContactAbout("");
        setDemoContactPreference("");
        setDemoIndustry("");
        setDemoMessage("");
      } else {
        setDemoStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      setDemoStatus("Network error. Please try again.");
      console.error("Demo request error:", err);
    }
    setDemoLoading(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full h-16 md:h-20 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="flex items-center justify-between h-16 md:h-20 py-0 px-6 md:px-16 lg:px-24 xl:px-32">
          {/* LOGO */}
          <Link to="/" className="text-2xl font-bold text-slate-900">
            Lumar <span className="text-indigo-600">QI</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-12">
            {/* SERVICE DROPDOWN */}
            <div
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
              className="relative"
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
                    transition={{ duration: 0.25 }}
                    onMouseEnter={() => setServiceOpen(true)}
                    onMouseLeave={() => setServiceOpen(false)}
                    className="fixed left-0 right-0 top-[80px] bg-white shadow-xl px-6 md:px-16 lg:px-24 xl:px-32 py-10 border-t border-slate-200"
                  >
                    <Link
                      to="/services"
                      onClick={() => setServiceOpen(false)}
                      className="inline-flex items-center gap-2 mb-10 text-sm font-semibold text-slate-700 hover:text-indigo-600"
                    >
                      ALL SERVICES
                      <span>↗</span>
                    </Link>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {services.map((s) => (
                        <Link
                          key={s.title}
                          to={s.link}
                          onClick={() => setServiceOpen(false)}
                          className={`p-6 rounded-2xl ${s.bg} border border-slate-200 hover:shadow-lg transition flex flex-col items-start text-left`}
                        >
                          <div className="w-full flex justify-center mb-6">
                            <img
                              src={s.img}
                              alt={s.title}
                              className="w-28 h-28 object-contain"
                            />
                          </div>
                          <div className="w-full">
                            <div className="font-semibold mb-4 text-slate-900 flex items-center gap-2">
                              {s.title}
                              <span className="text-orange-500">↗</span>
                            </div>
                            <ul className="space-y-2 text-sm text-slate-700">
                              {s.items.map((i) => (
                                <li key={i.label}>
                                  <Link
                                    to={i.link}
                                    onClick={() => setServiceOpen(false)}
                                    className="hover:text-indigo-600 flex items-center gap-2"
                                  >
                                    {i.label}
                                    <span className="text-orange-400">↗</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* INDUSTRY DROPDOWN */}
            <div
              onMouseEnter={() => setIndustryOpen(true)}
              onMouseLeave={() => setIndustryOpen(false)}
              className="relative"
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
                    transition={{ duration: 0.25 }}
                    onMouseEnter={() => setIndustryOpen(true)}
                    onMouseLeave={() => setIndustryOpen(false)}
                    className="fixed left-0 right-0 top-[80px] bg-white shadow-xl px-6 md:px-16 lg:px-24 xl:px-32 py-10 border-t border-slate-200"
                  >
                    <Link
                      to="/industry"
                      onClick={() => setIndustryOpen(false)}
                      className="inline-flex items-center gap-2 mb-10 text-sm font-semibold text-slate-700 hover:text-indigo-600"
                    >
                      ALL INDUSTRIES
                      <span>↗</span>
                    </Link>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                      {industries.map((ind) => (
                        <div
                          key={ind.title}
                          className="group rounded-2xl bg-white border border-slate-200 overflow-hidden hover:shadow-lg transition flex flex-col"
                        >
                          {/* IMAGE (same structure as second image) */}
                          <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                            <img
                              src={ind.img}
                              alt={ind.title}
                              loading="lazy"
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="p-6 flex flex-col flex-1 text-left">
                            {/* TITLE */}
                            <div className="font-semibold mb-4 text-slate-900 flex items-center gap-2">
                              <Link
                                to={ind.link}
                                onClick={() => setIndustryOpen(false)}
                                className="flex items-center gap-2 hover:text-indigo-600 transition"
                              >
                                {ind.title}
                                <span className="text-orange-500 transition-transform duration-200 group-hover:-translate-y-1">
                                  ↗
                                </span>
                              </Link>
                            </div>

                            {/* LINKS */}
                            <ul className="space-y-3 text-sm text-slate-700">
                              {ind.items.map((it) => (
                                <li key={it.label}>
                                  <Link
                                    to={it.link}
                                    onClick={() => setIndustryOpen(false)}
                                    className="flex items-center gap-2 hover:text-indigo-600 transition"
                                  >
                                    {it.label}
                                    <span className="text-orange-400 transition-transform duration-200 group-hover:-translate-y-1">
                                      ↗
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* COMPANY DROPDOWN */}
            <div
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
              className="relative"
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
                    transition={{ duration: 0.25 }}
                    onMouseEnter={() => setCompanyOpen(true)}
                    onMouseLeave={() => setCompanyOpen(false)}
                    className="fixed left-0 right-0 top-[80px] bg-white shadow-xl px-6 md:px-16 lg:px-24 xl:px-32 py-10 border-t border-slate-200"
                  >
                    <Link
                      to="/company"
                      onClick={() => setCompanyOpen(false)}
                      className="inline-flex items-center gap-2 mb-10 text-sm font-semibold text-slate-700 hover:text-indigo-600"
                    >
                      COMPANY
                      <span>↗</span>
                    </Link>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {company.map((sec) => (
                        <div
                          key={sec.section}
                          className="p-4 bg-white rounded-lg border border-slate-200"
                        >
                          <div className="font-semibold text-slate-900 mb-3">
                            {sec.section}
                          </div>
                          <ul className="space-y-2 text-sm text-slate-700">
                            {sec.items.map((it) => (
                              <li key={it.label}>
                                <Link
                                  to={it.link}
                                  onClick={() => setCompanyOpen(false)}
                                  className="hover:text-indigo-600 flex items-center gap-2"
                                >
                                  {it.label}
                                  <span>↗</span>
                                </Link>
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

            {/* OTHER LINKS */}
            <Link
              to="/case-studies"
              className="text-lg font-semibold hover:text-indigo-600 transition"
            >
              Case Studies
            </Link>
          </div>

          {/* CTA & MOBILE BUTTON */}
          <div className="flex items-center gap-4">
            <button
              className="hidden md:block px-7 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
              onClick={() => setDemoOpen(true)}
            >
              Request demo
            </button>
            <button
              className="md:hidden p-2 rounded-lg bg-white/50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {!menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#0f172a"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6L18 18M6 18L18 6"
                    stroke="#0f172a"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 pt-16 md:pt-20 overflow-y-auto"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
          >
            <div className="p-6 space-y-4">
              {/* MOBILE SERVICE */}
              <button
                onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                className="w-full text-left flex items-center justify-between py-3 px-4 rounded-lg bg-slate-50 border border-slate-200 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-expanded={mobileServiceOpen}
                aria-controls="mobile-service-menu"
              >
                Service
                <span>{mobileServiceOpen ? "−" : "+"}</span>
              </button>
              {mobileServiceOpen && (
                <div className="space-y-2 pl-4" id="mobile-service-menu">
                  {services.map((s) => (
                    <div key={s.title}>
                      <Link
                        to={s.link}
                        onClick={handleMobileNav}
                        className="block py-2 text-indigo-600 font-medium"
                      >
                        {s.title} ↗
                      </Link>
                      <ul className="space-y-1 text-sm pl-2">
                        {s.items.map((i) => (
                          <li key={i.label}>
                            <Link
                              to={i.link}
                              onClick={handleMobileNav}
                              className="hover:text-indigo-600"
                            >
                              {i.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* MOBILE INDUSTRY */}
              <button
                onClick={() => setMobileIndustryOpen(!mobileIndustryOpen)}
                className="w-full text-left flex items-center justify-between py-3 px-4 rounded-lg bg-slate-50 border border-slate-200 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-expanded={mobileIndustryOpen}
                aria-controls="mobile-industry-menu"
              >
                Industry
                <span>{mobileIndustryOpen ? "−" : "+"}</span>
              </button>
              {mobileIndustryOpen && (
                <div className="space-y-2 pl-4" id="mobile-industry-menu">
                  {industries.map((ind) => (
                    <div key={ind.title}>
                      <Link
                        to={ind.link}
                        onClick={handleMobileNav}
                        className="block py-2 text-indigo-600 font-medium"
                      >
                        {ind.title} ↗
                      </Link>
                      <ul className="space-y-1 text-sm pl-2">
                        {ind.items.map((it) => (
                          <li key={it.label}>
                            <Link
                              to={it.link}
                              onClick={handleMobileNav}
                              className="hover:text-indigo-600"
                            >
                              {it.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* MOBILE COMPANY */}
              <button
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                className="w-full text-left flex items-center justify-between py-3 px-4 rounded-lg bg-slate-50 border border-slate-200 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-expanded={mobileCompanyOpen}
                aria-controls="mobile-company-menu"
              >
                Company
                <span>{mobileCompanyOpen ? "−" : "+"}</span>
              </button>
              {mobileCompanyOpen && (
                <div className="space-y-2 pl-4" id="mobile-company-menu">
                  {company.map((sec) => (
                    <div key={sec.section}>
                      <div className="font-semibold text-slate-900 py-2">
                        {sec.section}
                      </div>
                      <ul className="space-y-1 text-sm pl-2">
                        {sec.items.map((it) => (
                          <li key={it.label}>
                            <Link
                              to={it.link}
                              onClick={handleMobileNav}
                              className="hover:text-indigo-600"
                            >
                              {it.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* OTHER MOBILE LINKS */}
              <Link
                to="/case-studies"
                onClick={handleMobileNav}
                className="block py-3 px-4 rounded-lg bg-slate-50 border border-slate-200 font-semibold"
              >
                Case Studies
              </Link>

              <button
                className="w-full py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
                onClick={() => setDemoOpen(true)}
              >
                Request demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    {/* Request Demo Modal */}
    <AnimatePresence>
      {demoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        >
          <motion.div
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-gradient-to-br from-[#0f1e13] to-[#0a1917] m-2 sm:m-6 md:m-10"
          >
            <button
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 text-2xl font-bold focus:outline-none z-10"
              onClick={() => setDemoOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex flex-col md:flex-row">
              {/* Left: Heading and description */}
              <div className="flex-1 flex flex-col justify-center px-4 py-8 sm:px-8 sm:py-10 md:py-14 bg-transparent">
                {/* Optional avatars row */}
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-2">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar1" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar2" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="avatar3" className="w-8 h-8 rounded-full border-2 border-white" />
                  </div>
                  <span className="ml-3 text-xs sm:text-sm text-green-200 font-medium">Join community of 1m+ founders</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-green-200 leading-tight">Ready to<br className="hidden sm:block"/>Transform Your<br className="hidden sm:block"/>Digital Experience?</h2>
                <p className="text-base sm:text-lg text-green-100/80 mb-2 md:mb-0">Let our design team craft a website that elevates your brand. Book a free session today.</p>
              </div>
              {/* Right: Form */}
              <div className="flex-1 flex items-center justify-center px-2 sm:px-6 md:px-10 py-8 sm:py-10 bg-black/10">
                <form onSubmit={handleDemoSubmit} className="w-full max-w-md space-y-4 sm:space-y-6 bg-black/30 rounded-2xl p-4 sm:p-8 border border-green-900/40 shadow-lg">
                  <div>
                    <label className="block text-green-100 font-medium mb-1 text-sm sm:text-base">Name</label>
                    <input
                      type="text"
                      placeholder="Eden Johnson"
                      value={demoName}
                      onChange={e => setDemoName(e.target.value)}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-green-700/40 rounded-lg text-green-100 placeholder-green-400 focus:ring-2 focus:ring-green-400 focus:outline-none transition text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-green-100 font-medium mb-1 text-sm sm:text-base">Email</label>
                    <input
                      type="email"
                      placeholder="Eden@example.com"
                      value={demoEmail}
                      onChange={e => setDemoEmail(e.target.value)}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-green-700/40 rounded-lg text-green-100 placeholder-green-400 focus:ring-2 focus:ring-green-400 focus:outline-none transition text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-green-100 font-medium mb-1 text-sm sm:text-base">Message</label>
                    <textarea
                      placeholder="Write your message here..."
                      value={demoMessage}
                      onChange={e => setDemoMessage(e.target.value)}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-green-700/40 rounded-lg text-green-100 placeholder-green-400 focus:ring-2 focus:ring-green-400 focus:outline-none transition text-sm sm:text-base"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-xs sm:text-xs text-green-300/80">By submitting, you agree to our <span className="font-semibold underline">Terms</span> and <span className="font-semibold underline">Privacy Policy</span>.</span>
                    <motion.button
                      type="submit"
                      disabled={demoLoading}
                      whileTap={{ scale: 0.97 }}
                      className="mt-2 sm:mt-0 px-6 sm:px-8 py-2 sm:py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-sm sm:text-base shadow-md transition disabled:opacity-60"
                    >
                      {demoLoading ? "Sending..." : "Submit"}
                    </motion.button>
                  </div>
                  {demoStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-green-400 text-xs sm:text-sm mt-2"
                    >
                      {demoStatus}
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

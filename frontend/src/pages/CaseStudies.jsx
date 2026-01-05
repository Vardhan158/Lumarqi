import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const caseStudies = [
  { title: "Unlocking Operational Capacity with Intelligent AI Agents", industry: "Event Production", solution: "Intelligent AI agent workflow for pre-sales automation", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=60" },
  { title: "Real-Time Baggage Tracking and Prediction Platform for Airlines", industry: "Transportation", solution: "AI-powered baggage tracking to reduce loss and delays", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60" },
  { title: "AI-Powered Candidate Matching Engine", industry: "HR Tech / Recruitment", solution: "Modular, AI-powered matching engine connecting via API", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=60" },
  { title: "Building a Real-Time Fraud Detection AI Platform", industry: "Renewable Energy", solution: "Real-time fraud detection engine for certificate validation", img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=60" },
  { title: "Customer 360 for Retail Loyalty", industry: "Retail", solution: "Unified customer profiles and personalized recommendations", img: "https://images.unsplash.com/photo-1495121605193-b116b5b09d6b?auto=format&fit=crop&w=800&q=60" },
  { title: "Predictive Maintenance for Manufacturing Lines", industry: "Manufacturing", solution: "ML models to predict failures and schedule maintenance", img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=60" },
  { title: "Clinical Trial Data Harmonization", industry: "Life Sciences", solution: "Data pipelines and schema alignment for trial data", img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=60" },
  { title: "Insurance Claims Automation", industry: "Insurance", solution: "Document understanding and automated claims processing", img: "https://images.unsplash.com/photo-1549921296-3c4f6f0d8c0f?auto=format&fit=crop&w=800&q=60" },
  { title: "Smart Logistics Optimization", industry: "Logistics", solution: "Route optimization and demand forecasting", img: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=800&q=60" },
  { title: "Demand Forecasting for CPG", industry: "CPG", solution: "Time-series models for sales and inventory planning", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=60" },
  { title: "Personalized Healthcare Recommendations", industry: "Healthcare", solution: "Patient-specific treatment suggestion engine", img: "https://images.unsplash.com/photo-1586773860416-7a39f5b8f2f2?auto=format&fit=crop&w=800&q=60" },
  { title: "Energy Consumption Optimization", industry: "Energy", solution: "Smart scheduling to reduce peak usage", img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=60" },
  { title: "Retail Shelf Analytics", industry: "Retail", solution: "Computer vision for shelf stock and placement", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=60" },
  { title: "Fraud Analytics for Banking", industry: "Banking", solution: "Behavioral models to detect anomalous transactions", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60" },
  { title: "Supply Chain Visibility Platform", industry: "Logistics", solution: "End-to-end tracking and ETA predictions", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60" },
  { title: "Smart Customer Support Bot", industry: "Technology", solution: "Conversational AI to automate support workflows", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60" },
  { title: "Automated Document Processing", industry: "Professional Services", solution: "NLP to extract and validate contract data", img: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?auto=format&fit=crop&w=800&q=60" },
  { title: "Ad Spend Optimization", industry: "Marketing", solution: "Causal models to allocate budget for max ROI", img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=60" },
  { title: "Telecom Network Anomaly Detection", industry: "Telecom", solution: "Real-time monitoring to detect outages", img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=60" },
  { title: "Smart Farming Analytics", industry: "Agriculture", solution: "Sensor-driven models to optimize yields", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60" },
  { title: "Visual Quality Inspection", industry: "Manufacturing", solution: "Computer vision to detect defects on production lines", img: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=800&q=60" },
  { title: "Churn Prediction for SaaS", industry: "SaaS", solution: "Retention models and targeted interventions", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=60" },
  { title: "Urban Traffic Optimization", industry: "Smart Cities", solution: "Signal timing and routing improvements using ML", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=60" },
  { title: "Voice Analytics for Contact Centers", industry: "Customer Service", solution: "Sentiment and intent extraction from calls", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60" },
  { title: "Sustainability Reporting Automation", industry: "Enterprise", solution: "Automate ESG data collection and reporting", img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=60" },
  { title: "Real-Time Pricing Engine", industry: "E-commerce", solution: "Dynamic pricing models for product assortment", img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=60" },
];

export default function CaseStudies() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imgHover = { scale: 1.03 };

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-8">Case Studies</h1>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {caseStudies.map((c) => (
              <motion.article
                key={c.title}
                variants={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                className="flex flex-col md:flex-row items-start gap-6"
              >
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <motion.img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 md:h-40 lg:h-56 object-cover rounded-lg shadow-sm"
                    whileHover={imgHover}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  />
                </div>

                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">{c.title}</h2>
                  <p className="text-sm text-slate-600 mb-3"><strong>Industry:</strong> {c.industry}</p>
                  <p className="text-sm text-slate-600 mb-4"><strong>Solution:</strong> {c.solution}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-indigo-600 font-medium">View case study ↗</a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </main>
    </>
  );
}

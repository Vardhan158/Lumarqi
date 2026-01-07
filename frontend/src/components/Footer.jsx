import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#f7f5f3] text-[#222]">
      {/* TOP ORANGE LINE */}
      <div className="h-[2px] bg-orange-500 w-full" />

      {/* MAIN FOOTER */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-16 gap-y-16 text-sm">

          {/* SERVICES */}
          <div>
            <h4 className="text-orange-500 font-semibold tracking-wide mb-4">
              SERVICES
            </h4>

            <h5 className="font-semibold mb-2 text-orange-500">
              STRATEGY & ADVISORY
            </h5>
            <ul className="space-y-1 mb-6">
              <li>Analytics Roadmap</li>
              <li>Data Strategy</li>
              <li>Platform Strategy</li>
            </ul>

            <h5 className="font-semibold mb-2 text-orange-500">
              ENGINEER YOUR DATA
            </h5>
            <ul className="space-y-1 mb-6">
              <li>Data Modernization</li>
              <li>Data Foundation</li>
              <li>Data Operations</li>
            </ul>

            <h5 className="font-semibold mb-2 text-orange-500">
              DIFFERENTIATE WITH AI/ML
            </h5>
            <ul className="space-y-1 mb-6">
              <li>Data Science</li>
              <li>AI Engineering</li>
              <li>ML Products & Platforms</li>
            </ul>

            <h5 className="font-semibold mb-2 text-orange-500">
              OPERATIONALIZE INSIGHTS
            </h5>
            <ul className="space-y-1">
              <li>Experience Consulting</li>
              <li>Application Engineering</li>
              <li>Business Intelligence</li>
              <li>MLOps</li>
            </ul>
          </div>

          {/* OPEN IP */}
          <div>
            <h4 className="text-orange-500 font-semibold tracking-wide mb-4">
              OPEN IP
            </h4>
            <ul className="space-y-2 mb-6">
              <li>Foundations</li>
              <li>TigerML</li>
              <li>Tiger Blueprints</li>
              <li>Tiger DataSphere</li>
              <li>Tiger AI Hub</li>
            </ul>

            <h5 className="font-semibold mb-2">Solutions</h5>
            <ul className="space-y-2">
              <li>Insights Pro</li>
              <li>MMX Planner</li>
              <li>TrendSpotter</li>
              <li>TPOoptimizer</li>
              <li>ForecastPro</li>
              <li>UWSmartFill</li>
            </ul>
          </div>

          {/* IMPACT */}
          <div>
            <h4 className="text-orange-500 font-semibold tracking-wide mb-4">
              IMPACT
            </h4>

            <h5 className="font-semibold mb-2 text-orange-500">
              INDUSTRIES
            </h5>
            <ul className="space-y-2">
              <li>CPG</li>
              <li>Retail</li>
              <li>BFS</li>
              <li>Insurance</li>
              <li>Manufacturing</li>
              <li>Transportation & Logistics</li>
              <li>Life Sciences</li>
              <li>Healthcare</li>
              <li>Technology, Telecom & Media</li>
            </ul>
          </div>

          {/* ABOUT / CONTACT */}
          <div>
            <h4 className="text-orange-500 font-semibold tracking-wide mb-4">
              ABOUT US
            </h4>
            <ul className="space-y-2 mb-6">
              <li>Our Story</li>
              <li>Why Join Us</li>
              <li>Current Openings</li>
              <li>Our Commitment to CSR</li>
            </ul>

            <h4 className="text-orange-500 font-semibold tracking-wide mb-4">
              CONTACT US
            </h4>

            <p className="font-medium mb-3">Follow us on</p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              {["X", "Facebook", "Instagram", "YouTube", "LinkedIn"].map(
                (label, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border border-[#222] flex items-center justify-center text-xs font-semibold hover:border-orange-500 hover:text-orange-500 transition"
                  >
                    {label[0]}
                  </div>
                )
              )}
            </div>
          </div>

          {/* PARTNERSHIPS / NEWSLETTER */}
          <div>
            <h4 className="text-orange-500 font-semibold tracking-wide mb-4">
              PARTNERSHIPS
            </h4>
            <ul className="space-y-2 mb-6">
              <li>Microsoft</li>
              <li>Google Cloud</li>
              <li>AWS</li>
              <li>Databricks</li>
              <li>Snowflake</li>
            </ul>

            <h4 className="text-orange-500 font-semibold tracking-wide mb-4">
              PERSPECTIVES
            </h4>

            <h4 className="text-orange-500 font-semibold tracking-wide mb-4">
              NEWSROOM
            </h4>
            <ul className="space-y-2 mb-10">
              <li>News & PR</li>
              <li>Events</li>
              <li>Awards</li>
            </ul>

            <p className="font-medium mb-3">
              Subscribe to get latest insights
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full bg-transparent border-b border-orange-500 pb-2 outline-none text-sm"
              />
              <span className="absolute right-0 bottom-2 text-orange-500">
                ↗
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ORANGE LINE */}
      <div className="h-[2px] bg-orange-500 w-full" />

      {/* COPYRIGHT */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 py-6 flex flex-col md:flex-row justify-between text-sm">
        <p>Copyright © 2025 Tiger Analytics | All Rights Reserved</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Notice</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}

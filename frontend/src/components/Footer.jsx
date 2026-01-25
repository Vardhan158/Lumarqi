
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleNavTop = (e, to) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        alert("Thank you for choosing LUMAR QI");
        setEmail("");
      } else {
        alert("There was a problem. Please try again.");
      }
    } catch {
      alert("There was a problem. Please try again.");
    }
    setLoading(false);
  };
  return (
    <footer className="bg-[#f7f5f3] text-[#222]">
      <div className="h-[2px] bg-orange-500 w-full" />
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-16 gap-y-16 text-sm">
          {/* SERVICES */}
          <div>
            <h4 className="text-orange-500 font-semibold tracking-wide mb-4">SERVICES</h4>
            <h5 className="font-semibold mb-2 text-orange-500">Strategy & Advisory</h5>
            <ul className="space-y-1 mb-6">
              <li><Link to="/services/strategy-advisory/analytics-roadmap" onClick={e => handleNavTop(e, "/services/strategy-advisory/analytics-roadmap")}>Analytics Roadmap</Link></li>
              <li><Link to="/services/strategy-advisory/data-strategy" onClick={e => handleNavTop(e, "/services/strategy-advisory/data-strategy")}>Data Strategy</Link></li>
              <li><Link to="/services/strategy-advisory/platform-strategy" onClick={e => handleNavTop(e, "/services/strategy-advisory/platform-strategy")}>Platform Strategy</Link></li>
            </ul>
            <h5 className="font-semibold mb-2 text-orange-500">Engineer Your Data</h5>
            <ul className="space-y-1 mb-6">
              <li><Link to="/services/engineer-your-data/data-modernization" onClick={e => handleNavTop(e, "/services/engineer-your-data/data-modernization")}>Data Modernization</Link></li>
              <li><Link to="/services/engineer-your-data/data-foundation" onClick={e => handleNavTop(e, "/services/engineer-your-data/data-foundation")}>Data Foundation</Link></li>
              <li><Link to="/services/engineer-your-data/data-operations" onClick={e => handleNavTop(e, "/services/engineer-your-data/data-operations")}>Data Operations</Link></li>
            </ul>
            <h5 className="font-semibold mb-2 text-orange-500">Differentiate with AI/ML</h5>
            <ul className="space-y-1 mb-6">
              <li><Link to="/services/ai-ml/data-science" onClick={e => handleNavTop(e, "/services/ai-ml/data-science")}>Data Science</Link></li>
              <li><Link to="/services/ai-ml/ai-engineering" onClick={e => handleNavTop(e, "/services/ai-ml/ai-engineering")}>AI Engineering</Link></li>
              <li><Link to="/services/ai-ml/ml-products-platforms" onClick={e => handleNavTop(e, "/services/ai-ml/ml-products-platforms")}>ML Products & Platforms</Link></li>
            </ul>
            <h5 className="font-semibold mb-2 text-orange-500">Operationalize Insights</h5>
            <ul className="space-y-1">
              <li><Link to="/services/operationalize-insights/experience-consulting" onClick={e => handleNavTop(e, "/services/operationalize-insights/experience-consulting")}>Experience Consulting</Link></li>
              <li><Link to="/services/operationalize-insights/application-engineering" onClick={e => handleNavTop(e, "/services/operationalize-insights/application-engineering")}>Application Engineering</Link></li>
              <li><Link to="/services/operationalize-insights/business-intelligence" onClick={e => handleNavTop(e, "/services/operationalize-insights/business-intelligence")}>Business Intelligence</Link></li>
              <li><Link to="/services/operationalize-insights/mlops" onClick={e => handleNavTop(e, "/services/operationalize-insights/mlops")}>MLOps</Link></li>
            </ul>
          </div>
          {/* INDUSTRIES */}
          <div>
            <h4 className="text-orange-500 font-semibold tracking-wide mb-4">INDUSTRIES</h4>
            <ul className="space-y-2">
              <li><Link to="/industry/cpg" onClick={e => handleNavTop(e, "/industry/cpg")}>CPG</Link></li>
              <li><Link to="/industry/cpg/retail" onClick={e => handleNavTop(e, "/industry/cpg/retail")}>Retail</Link></li>
              <li><Link to="/industry/bfs" onClick={e => handleNavTop(e, "/industry/bfs")}>BFS</Link></li>
              <li><Link to="/industry/bfs/insurance" onClick={e => handleNavTop(e, "/industry/bfs/insurance")}>Insurance</Link></li>
              <li><Link to="/industry/manufacturing" onClick={e => handleNavTop(e, "/industry/manufacturing")}>Manufacturing</Link></li>
              <li><Link to="/industry/manufacturing/logistics" onClick={e => handleNavTop(e, "/industry/manufacturing/logistics")}>Transportation & Logistics</Link></li>
              <li><Link to="/industry/life-sciences" onClick={e => handleNavTop(e, "/industry/life-sciences")}>Life Sciences</Link></li>
              <li><Link to="/industry/life-sciences/healthcare" onClick={e => handleNavTop(e, "/industry/life-sciences/healthcare")}>Healthcare</Link></li>
              <li><Link to="/industry/technology-telecom-media" onClick={e => handleNavTop(e, "/industry/technology-telecom-media")}>Technology, Telecom & Media</Link></li>
            </ul>
          </div>
          {/* COMPANY */}
          <div>
            <h4 className="text-orange-500 font-semibold tracking-wide mb-4">COMPANY</h4>
            <ul className="space-y-2 mb-6">
              <li><Link to="/company/mission-values" onClick={e => handleNavTop(e, "/company/mission-values")}>Mission & Values</Link></li>
              <li><Link to="/company/StrategicPartners" onClick={e => handleNavTop(e, "/company/StrategicPartners")}>Strategic Partner</Link></li>
              <li><Link to="/company/leadership" onClick={e => handleNavTop(e, "/company/leadership")}>Leadership</Link></li>
              <li><Link to="/company/contact" onClick={e => handleNavTop(e, "/company/contact")}>Contact Us</Link></li>
              <li><Link to="/company/careers" onClick={e => handleNavTop(e, "/company/careers")}>Careers</Link></li>
            </ul>
            <h4 className="text-orange-500 font-semibold tracking-wide mb-4">RESOURCES</h4>
            <ul className="space-y-2">
              <li><Link to="/company/news" onClick={e => handleNavTop(e, "/company/news")}>News</Link></li>
              <li><Link to="/company/newsletters" onClick={e => handleNavTop(e, "/company/newsletters")}>Newsletters</Link></li>
              <li><Link to="/company/webinars" onClick={e => handleNavTop(e, "/company/webinars")}>Webinars</Link></li>
            </ul>
          </div>
          {/* CASE STUDIES & PARTNERS */}
          <div>
            <h4 className="text-orange-500 font-semibold tracking-wide mb-4">CASE STUDIES</h4>
            <ul className="space-y-2 mb-6">
              <li><Link to="/case-studies" onClick={e => handleNavTop(e, "/case-studies")}>All Case Studies</Link></li>
            </ul>
            <h4 className="text-orange-500 font-semibold tracking-wide mb-4">PARTNERSHIPS</h4>
            <ul className="space-y-2 mb-6">
              <li><a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer">Microsoft Azure</a></li>
              <li><a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer">Google Cloud</a></li>
              <li><a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">AWS</a></li>
              <li><a href="https://databricks.com/" target="_blank" rel="noopener noreferrer">Databricks</a></li>
              <li><a href="https://snowflake.com/" target="_blank" rel="noopener noreferrer">Snowflake</a></li>
            </ul>
          </div>
          {/* SOCIAL & NEWSLETTER */}
          <div>
            <h4 className="text-orange-500 font-semibold tracking-wide mb-4">FOLLOW US</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#222] flex items-center justify-center hover:border-orange-500 transition group" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1DA1F2" className="transition-colors group-hover:fill-orange-500"><path d="M22.46 5.924c-.793.352-1.646.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.014-4.49 4.495 0 .352.04.695.116 1.022C7.728 9.37 4.1 7.555 1.67 4.905a4.48 4.48 0 0 0-.61 2.262c0 1.56.794 2.936 2.003 3.744a4.48 4.48 0 0 1-2.034-.563v.057c0 2.18 1.55 4.002 3.604 4.418a4.48 4.48 0 0 1-2.027.077c.572 1.785 2.23 3.084 4.195 3.12A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.86 2.01c8.23 0 12.74-6.82 12.74-12.74 0-.194-.004-.388-.013-.58A9.1 9.1 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.698z"/></svg>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#222] flex items-center justify-center hover:border-orange-500 transition group" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F3" className="transition-colors group-hover:fill-orange-500"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#222] flex items-center justify-center hover:border-orange-500 transition group" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#E4405F" className="transition-colors group-hover:fill-orange-500"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.77.131 4.672.425 3.678 1.42c-.994.994-1.288 2.092-1.347 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.282.353 2.38 1.347 3.374.994.994 2.092 1.288 3.374 1.347C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.059 2.38-.353 3.374-1.347.994-.994 1.288-2.092 1.347-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.282-.353-2.38-1.347-3.374-.994-.994-2.092-1.288-3.374-1.347C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#222] flex items-center justify-center hover:border-orange-500 transition group" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000" className="transition-colors group-hover:fill-orange-500"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.072 0 12 0 12s0 3.928.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.5 20.5 12 20.5 12 20.5s7.5 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.928 24 12 24 12s0-3.928-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/kiranshetty-ai/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#222] flex items-center justify-center hover:border-orange-500 transition group" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2" className="transition-colors group-hover:fill-orange-500"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/></svg>
              </a>
            </div>
            <h4 className="text-orange-500 font-semibold tracking-wide mb-4">NEWSLETTER</h4>
            <p className="font-medium mb-3">Subscribe to get latest insights</p>
            <form className="relative" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full bg-transparent border-b border-orange-500 pb-2 outline-none text-sm"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                disabled={loading}
              />
              <button
                type="submit"
                className="absolute right-0 bottom-2 text-orange-500 bg-transparent border-none outline-none cursor-pointer"
                disabled={loading}
                aria-label="Subscribe"
                style={{ background: "none" }}
              >↗</button>
            </form>
          </div>
        </div>
      </div>
      <div className="h-[2px] bg-orange-500 w-full" />
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 py-6 flex flex-col md:flex-row justify-between text-sm">
        <p>Copyright © 2026 LUMAR QI | All Rights Reserved</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Notice</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}

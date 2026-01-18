import React from "react";
import { useParams } from "react-router-dom";
import CaseStudyTemplate from "../../components/CaseStudyTemplate";

import { caseStudies as caseStudiesList } from "../CaseStudies.jsx";

const sharedSections = [
  {
    id: "client",
    label: "Meet Our Client",
    content: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          background: 'linear-gradient(90deg, #f7f7f7 70%, #fff 100%)',
          borderRadius: 12,
          padding: '2.5rem 1.2rem',
          minHeight: 340,
        }}
      >
        <div style={{ maxWidth: 600, width: '100%' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 24, marginTop: 0 }}>Meet Our Client</h2>
          <div style={{ fontSize: '1.08rem', color: '#222', marginBottom: 18 }}>
            Meeting Tomorrow is a leading event production company serving major corporate clients across the United States. With decades of experience in the industry, it provides comprehensive end-to-end event organization services – from venue sourcing and logistics coordination to sophisticated audio-visual setups and on-site technical support.
          </div>
          <div style={{ fontSize: '1.08rem', color: '#222' }}>
            Their success is built on deep domain expertise, with team members who possess up to 20 years of specialized knowledge in translating client visions into flawlessly executed events.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <img
            src="https://addepto.com/wp-content/uploads/2025/12/meeting-tomorrow-logo.png"
            alt="Meeting Tomorrow Logo"
            style={{ maxWidth: 180, maxHeight: 90, width: '100%', height: 'auto', margin: 0 }}
          />
        </div>
        <style>{`
          @media (min-width: 700px) {
            .case-client-flex {
              flex-direction: row !important;
              align-items: center !important;
              gap: 0 !important;
              padding: 2.5rem 2rem !important;
            }
            .case-client-logo {
              margin-left: 40px !important;
              max-width: 220px !important;
              max-height: 120px !important;
            }
          }
        `}</style>
      </div>
    ),
  },
  {
    id: "goal",
    label: "Goal",
    content: (
      <>
        <ul>
          <li>
            Automate repetitive pre-sales workflow tasks while preserving and
            amplifying human expertise.
          </li>
          <li>Automate standard equipment selection.</li>
          <li>Reduce manual data entry and repetitive order creation.</li>
          <li>Free staff for creative, high-value work.</li>
          <li>Maintain 100% human oversight for final orders.</li>
          <li>Enable scalable growth without linear staffing increases.</li>
        </ul>
      </>
    ),
  },
  {
    id: "outcome",
    label: "Outcome",
    content: (
      <>
        <strong>Before:</strong>
        <ul>
          <li>100% manual quoting by experienced staff.</li>
          <li>Senior employees spent much time on repetitive tasks.</li>
          <li>Bottlenecks limited new opportunities.</li>
          <li>Knowledge was siloed.</li>
        </ul>
        <strong>After:</strong>
        <ul>
          <li>
            AI pilot automated 50–70% of standard equipment selection.
          </li>
          <li>Staff shifted to verification and creative design.</li>
          <li>Orders generated in minutes, not hours.</li>
          <li>Team focused on creative, subjective work.</li>
          <li>Scalable architecture for growth.</li>
          <li>
            Knowledge codified in the system, with human expertise central.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "approach",
    label: "Approach",
    content: (
      <>
        <ul>
          <li>
            <strong>Agentic Workflow Architecture (LangGraph):</strong> Non-linear
            AI workflows mimicking human decision-making.
          </li>
          <li>
            <strong>Prompt Engineering & Validation Layer:</strong> Custom prompts
            and validation to prevent hallucinations and ensure quality.
          </li>
          <li>
            <strong>Inventory-Grounded Generation:</strong> AI outputs mapped to
            real inventory IDs in NetSuite ERP.
          </li>
          <li>
            <strong>Human-in-the-Loop Design:</strong> AI drafts orders for expert
            review, solving the “blank page” problem.
          </li>
          <li>
            <strong>Context-Aware Processing:</strong> Ingests multiple data
            sources (CSV, PDF, email) for comprehensive context.
          </li>
          <li>
            <strong>Legacy System Integration:</strong> Seamless compatibility
            with NetSuite ERP.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "timeline",
    label: "Timeline",
    content: (
      <>
        <ul>
          <li>
            <strong>Total Duration:</strong> 2 months
          </li>
          <li>
            <strong>Planning & Discovery:</strong> 2 weeks
          </li>
          <li>
            <strong>Development & Testing:</strong> 6 weeks
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "technology",
    label: "Technology",
    content: (
      <>
        <ul>
          <li>Google Cloud Platform (GCP)</li>
          <li>Large Language Model (LLM)</li>
          <li>NetSuite (ERP/Database)</li>
          <li>LangGraph</li>
        </ul>
      </>
    ),
  },
  {
    id: "team",
    label: "Our Team",
    content: (
      <>
        <ul>
          <li>
            <strong>Adam Komorowski</strong> – Senior Data Scientist
          </li>
          <li>
            <strong>Piotr Kowalski</strong> – Data Scientist
          </li>
          <li>
            <strong>Marcin Marczyk</strong> – Delivery Director
          </li>
        </ul>
        <blockquote>
          Our approach was simple: automate the 70–80% of work that’s mechanical,
          and protect the 20–30% that requires judgment. That’s not a compromise,
          it’s good system design. Every attempt to push AI beyond its reliable
          boundaries is just another way of manufacturing technical debt.
          <br />
          <span style={{ fontStyle: "italic" }}>
            — Adam Komorowski, Senior Data Scientist at Addepto
          </span>
        </blockquote>
      </>
    ),
  },
  {
    id: "challenge",
    label: "Challenge",
    content: (
      <div
        style={{
          background: 'linear-gradient(90deg, #f7f7f7 70%, #fff 100%)',
          borderRadius: 12,
          padding: '2.5rem 1.2rem',
          margin: '2rem 0',
        }}
      >
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 24, marginTop: 0 }}>Challenge</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          {/* Manual quoting bottleneck */}
          <div style={{ flex: 1, padding: '0 0.5rem', borderRight: 'none', textAlign: 'center', borderBottom: '1px solid #eee' }}>
            <img src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/arrow-down-left.svg" alt="Manual quoting bottleneck" style={{ width: 48, height: 48, margin: '0 auto 1rem', color: '#4CAF50', filter: 'invert(52%) sepia(98%) saturate(355%) hue-rotate(85deg) brightness(92%) contrast(92%)' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Manual quoting bottleneck</h3>
            <div style={{ color: '#555', fontSize: '1rem' }}>
              The process of converting vague client requests into detailed technical orders with hundreds of inventory line items was entirely manual, creating significant delays and limiting capacity.
            </div>
          </div>
          {/* Tribal knowledge dependency */}
          <div style={{ flex: 1, padding: '0 0.5rem', borderRight: 'none', textAlign: 'center', borderBottom: '1px solid #eee' }}>
            <img src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/cpu.svg" alt="Tribal knowledge dependency" style={{ width: 48, height: 48, margin: '0 auto 1rem', color: '#4CAF50', filter: 'invert(52%) sepia(98%) saturate(355%) hue-rotate(85deg) brightness(92%) contrast(92%)' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Tribal knowledge dependency</h3>
            <div style={{ color: '#555', fontSize: '1rem' }}>
              Critical operational knowledge existed only in the minds of senior employees, making the quoting process difficult to scale and vulnerable to knowledge loss.
            </div>
          </div>
          {/* Resource capacity constraints */}
          <div style={{ flex: 1, padding: '0 0.5rem', textAlign: 'center' }}>
            <img src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/grid.svg" alt="Resource capacity constraints" style={{ width: 48, height: 48, margin: '0 auto 1rem', color: '#4CAF50', filter: 'invert(52%) sepia(98%) saturate(355%) hue-rotate(85deg) brightness(92%) contrast(92%)' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Resource capacity constraints</h3>
            <div style={{ color: '#555', fontSize: '1rem' }}>
              With limited staff resources, the company needed to handle growing demand without proportionally increasing headcount, but couldn’t afford to lose the human expertise that makes events exceptional.
            </div>
          </div>
        </div>
        <style>{`
          @media (min-width: 700px) {
            .case-challenge-flex {
              flex-direction: row !important;
              gap: 0 !important;
            }
            .case-challenge-block {
              border-right: 1px solid #eee !important;
              border-bottom: none !important;
              padding: 0 2rem !important;
            }
            .case-challenge-block:last-child {
              border-right: none !important;
            }
            .case-challenge-icon {
              width: 64px !important;
              height: 64px !important;
              margin-bottom: 1.5rem !important;
            }
            .case-challenge-title {
              font-size: 1.35rem !important;
              margin-bottom: 16px !important;
            }
          }
        `}</style>
      </div>
    ),
  },
];

const caseStudies = (caseStudiesList || []).map((c) => {
  const slug = c.title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return {
    slug,
    title: c.title,
    heroImage: c.img,
    sections: sharedSections,
  };
});

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = caseStudies.find(cs => cs.slug === slug);
  if (!study) return <div style={{padding: 40}}>Case study not found.</div>;
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${study.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "320px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.45)",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "1.2rem",
              opacity: 0.85,
              marginBottom: 8,
            }}
          >
            AI Agents Development
          </div>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            {study.title}
          </h1>
        </div>
      </div>
      <CaseStudyTemplate
        title={study.title}
        sections={study.sections}
      />
    </div>
  );
};

export default CaseStudyDetail;


import React, { useRef, useEffect, useState } from "react";
import "./CaseStudyTemplate.css";

const CaseStudyTemplate = ({ title, sections }) => {

  const contentRef = useRef(null);
  const sectionRefs = useRef(sections.map(() => React.createRef()));
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNavClick = (idx, e) => {
    e.preventDefault();
    const node = sectionRefs.current[idx].current;
    if (node && contentRef.current) {
      contentRef.current.scrollTo({
        top: node.offsetTop - contentRef.current.offsetTop,
        behavior: "smooth"
      });
    }
    setActiveIdx(idx);
  };

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const scrollPos = contentRef.current.scrollTop;
      let found = 0;
      sectionRefs.current.forEach((ref, idx) => {
        if (ref.current && ref.current.offsetTop - contentRef.current.offsetTop - 40 <= scrollPos) {
          found = idx;
        }
      });
      setActiveIdx(found);
    };
    const el = contentRef.current;
    if (el) el.addEventListener('scroll', handleScroll);
    return () => { if (el) el.removeEventListener('scroll', handleScroll); };
  }, []);

  return (
    <div className="case-study-template">
      <nav className="case-study-nav">
        <ul>
          {sections.map((section, idx) => (
            <li key={idx} className={activeIdx === idx ? 'active' : ''}>
              <a href={`#${section.id}`} onClick={e => handleNavClick(idx, e)}>{section.label}</a>
            </li>
          ))}
        </ul>
        <button className="schedule-call-btn" onClick={() => window.open('https://addepto.com/contact/', '_blank')}>Schedule a call</button>
      </nav>
      <div className="case-study-content" ref={contentRef}>
        <h1>{title}</h1>
        {sections.map((section, idx) => (
          <section
            key={idx}
            id={section.id}
            ref={sectionRefs.current[idx]}
          >
            <h2>{section.label}</h2>
            <div>{section.content}</div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyTemplate;

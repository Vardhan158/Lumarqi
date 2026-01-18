import React from "react";
import Navbar from "../../components/Navbar";
import peopleBg from "../../assets/unnamed (1).jpg";

export default function People() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center">
        {/* Background Image (UNTOUCHED) */}
        <img
          src={peopleBg}
          alt="People discussion"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* LEFT SOFT GRADIENT (text readability only) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

        {/* DIAGONAL GLASS OVERLAY (signature look) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 70%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light">
                People
              </h1>

              <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-xl">
                Our unique formula for success would not be possible without the
                expertise of our people.
              </p>

              {/* Divider */}
              <div className="mt-10 h-[1px] w-40 bg-white/50" />

              {/* Breadcrumb */}
              <div className="mt-8 flex items-center gap-3 text-sm text-white/75">
                <span>Home Main</span>
                <span className="text-white/40">→</span>
                <span className="text-white">People</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR PEOPLE ================= */}
      <section className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-light text-slate-900">
            Our people
          </h2>

          {/* Divider */}
          <div className="relative mt-8 mb-10 h-[1px] w-full bg-slate-300">
            <span className="absolute left-1/2 -translate-x-1/2 top-0 h-[2px] w-32 bg-blue-600" />
          </div>

          {/* Intro line */}
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Driven by our values of{" "}
            <span className="font-semibold text-slate-800">courage</span>,{" "}
            <span className="font-semibold text-slate-800">curiosity</span> and{" "}
            <span className="font-semibold text-slate-800">collaboration</span>,
            everything we do is created in house and we’re proud of that.
          </p>

          {/* Body text */}
          <p className="mt-8 text-slate-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            From the expert researchers and analysts creating compelling
            content, to the innovative software teams building engaging
            platforms, our dynamic sales teams creating lasting client
            relationships, the passionate events professionals producing unique
            experiences, to our inspiring corporate teams ensuring our business
            runs efficiently and effectively.
          </p>
        </div>
      </section>

      {/* ================= OUR CULTURE ================= */}
      <section className="bg-[#f7f1e6] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          {/* ================= LEFT: VIDEO ================= */}
          <div className="relative w-full aspect-video bg-black overflow-hidden rounded-xl">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/LyOJ6sBPBOU?si=dFmUm_Rq03Nxvc75"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          {/* ================= RIGHT: CONTENT ================= */}
          <div className="max-w-xl w-full mx-auto">
            {/* Eyebrow */}
            <p className="text-xs tracking-[0.3em] text-slate-600 uppercase mb-6">
              Be part of our success
            </p>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-light text-slate-900">
              Our culture
            </h2>

            {/* Divider */}
            <div className="relative mt-6 mb-8 h-[1px] w-full bg-slate-300">
              <span className="absolute left-0 top-0 h-[2px] w-32 bg-blue-600" />
            </div>

            {/* Paragraphs */}
            <p className="text-slate-700 text-base leading-relaxed">
              We’re a truly human business, where fascinating people harness the
              power of data and AI to explore, innovate and reach new heights
              together.
            </p>

            <p className="mt-6 text-slate-700 text-base leading-relaxed">
              The highly stimulating, fast paced, global environment we operate
              in, and our bold ambitions result in unique learning opportunities
              for our people.
            </p>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-4 mt-8 px-6 py-3 rounded-full
                   bg-blue-600 text-white font-medium hover:bg-blue-700
                   transition-all text-base md:text-lg"
            >
              Explore our careers
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= OUR LEADERSHIP ================= */}
<section className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24 lg:py-32">
  <div className="max-w-6xl mx-auto text-center">

    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-light text-slate-900">
      Our leadership
    </h2>

    {/* Divider */}
    <div className="relative mt-8 mb-10 h-[1px] w-full bg-slate-300">
      <span className="absolute left-1/2 -translate-x-1/2 top-0 h-[2px] w-32 bg-blue-600" />
    </div>

    {/* Intro text */}
    <p className="text-slate-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
      Our leadership team have the functional expertise and business knowledge
      required to drive exponential growth, as well as decades of knowledge,
      experience and diverse backgrounds spanning every industry we cover.
    </p>

    <p className="mt-6 text-slate-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
      They are forward thinking, anticipating the changing needs of our
      increasingly broad customer base, keeping us at the forefront of our
      competitive landscape.
    </p>
  </div>

  {/* ================= LEADERS GRID ================= */}
  <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 max-w-7xl mx-auto">

    {[
      { name: "Mike Danson", role: "Chief Executive Officer", img: "/leaders/mike.jpg" },
      { name: "Graham Lilley", role: "Chief Financial Officer", img: "/leaders/graham.jpg" },
      { name: "Katherine Lunn", role: "Chief People Officer", img: "/leaders/katherine.jpg" },
      { name: "Mark Thornton", role: "Head of M&A", img: "/leaders/mark.jpg" },
      { name: "Leader Five", role: "Executive Role", img: "/leaders/5.jpg" },
      { name: "Leader Six", role: "Executive Role", img: "/leaders/6.jpg" },
      { name: "Leader Seven", role: "Executive Role", img: "/leaders/7.jpg" },
      { name: "Leader Eight", role: "Executive Role", img: "/leaders/8.jpg" },
      { name: "Leader Nine", role: "Executive Role", img: "/leaders/9.jpg" },
      { name: "Leader Ten", role: "Executive Role", img: "/leaders/10.jpg" },
      { name: "Leader Eleven", role: "Executive Role", img: "/leaders/11.jpg" },
    ].map((leader, index) => (
      <div
        key={index}
        className="border border-slate-200 bg-white p-6 md:p-8 text-center rounded-xl flex flex-col items-center"
      >
        {/* Avatar */}
        <div className="mx-auto mb-4 md:mb-6 w-28 h-28 md:w-40 md:h-40 rounded-full bg-slate-100 overflow-hidden">
          <img
            src={leader.img}
            alt={leader.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h3 className="text-base md:text-lg font-medium text-slate-900">
          {leader.name}
        </h3>

        {/* Role */}
        <p className="mt-2 text-xs md:text-sm text-slate-600">
          {leader.role}
        </p>
      </div>
    ))}

  </div>
</section>

<section className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 md:py-20 lg:py-28">
  <div className="max-w-7xl mx-auto">

    {/* ===== Header ===== */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start mb-10 md:mb-16">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900">
        Our Board of Directors
      </h2>

      {/* Info box */}
      <div className="bg-[#f7f1e6] p-6 md:p-8 max-w-xl w-full lg:ml-auto rounded-xl">
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          Our Board of Directors oversee the company’s strategic direction,
          governance, and long-term performance, ensuring accountability to
          shareholders and stakeholders.
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-3 mt-4 md:mt-6 bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium hover:bg-blue-700 transition"
        >
          Investors site
          <span className="text-lg">→</span>
        </a>
      </div>
    </div>

    {/* ===== Dark Grid ===== */}
    <div className="bg-[#1e2635] p-4 sm:p-6 md:p-10 rounded-xl">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/20 gap-4 md:gap-8">

        {[
          { name: "Murray Legg", role: "Non-Executive Chair", img: "/board/1.jpg" },
          { name: "Mike Danson", role: "Chief Executive", img: "/board/2.jpg" },
          { name: "Peter Harkness", role: "Non-Executive Director", img: "/board/3.jpg" },
          { name: "Graham Lilley", role: "Chief Financial Officer", img: "/board/4.jpg" },
          { name: "Annette Marie Barnes", role: "Non-Executive Director", img: "/board/5.jpg" },
          { name: "Andrew Day", role: "Non-Executive Director", img: "/board/6.jpg" },
          { name: "Julien Decot", role: "Non-Executive Director", img: "/board/7.jpg" },
          { name: "Catherine Birkett", role: "Non-Executive Director", img: "/board/8.jpg" },
        ].map((person, index) => (
          <div
            key={index}
            className="border border-white/20 p-4 md:p-8 text-center text-white rounded-xl flex flex-col items-center"
          >
            {/* Avatar */}
            <div className="mx-auto mb-4 md:mb-6 w-20 h-20 md:w-32 md:h-32 rounded-full bg-white overflow-hidden">
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-xs md:text-base font-medium">
              {person.name}
            </h3>

            {/* Role */}
            <p className="mt-2 text-[10px] md:text-xs text-white/70">
              {person.role}
            </p>
          </div>
        ))}

      </div>
    </div>

  </div>
</section>

<footer className="bg-gradient-to-r from-[#0b1a24] to-[#0e2233] text-white text-xs md:text-sm">
      
      {/* ================= TOP ================= */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 relative">

          {/* Divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-white/10" />

          {/* LEFT */}
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-8">
              <span className="text-lg md:text-2xl font-semibold">GlobalData</span>
            </div>

            <h4 className="text-base md:text-lg font-medium mb-2">
              Company information
            </h4>

            <p className="text-white/70 leading-relaxed max-w-lg text-xs md:text-sm">
              Registered Office: John Carpenter House, John Carpenter Street,
              London, EC4Y 0AN, UK
              <br />
              Registered in England No. 03925319
            </p>

            <button className="mt-6 md:mt-8 inline-flex items-center gap-2 md:gap-3 bg-white text-slate-900 px-6 md:px-8 py-2 md:py-3 rounded-full font-medium hover:gap-4 transition-all text-xs md:text-sm">
              Contact us
              <span>→</span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg md:text-2xl font-light mb-4 md:mb-8 max-w-md">
              DECODED, your curated industry newsletter.
            </h3>

            <button className="inline-flex items-center gap-2 md:gap-3 bg-white text-slate-900 px-6 md:px-8 py-2 md:py-3 rounded-full font-medium w-fit hover:gap-4 transition-all text-xs md:text-sm">
              Subscribe
              <span>→</span>
            </button>

            <div className="mt-6 md:mt-10 flex gap-4 md:gap-6 text-white/60 text-xs md:text-sm">
              <a href="#" className="hover:text-white transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition">
                Instagram
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4 md:py-6 relative">

        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-white/60">

          <div className="flex flex-wrap gap-2 md:gap-4">
            <a href="#" className="hover:text-white transition">
              Modern Slavery Statement
            </a>
            <a href="#" className="hover:text-white transition">
              UK Gender Pay Gap report
            </a>
            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
          </div>

          <div>
            Copyright © GlobalData Plc 2025. All Rights Reserved.
          </div>
        </div>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 md:right-16 bg-white/10 border border-white/20 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition"
          aria-label="Back to top"
        >
          ↑
        </button>

      </div>

    </footer>
    </main>
  );
}

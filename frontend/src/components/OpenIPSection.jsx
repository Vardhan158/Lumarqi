
import { useNavigate } from "react-router-dom";

export default function OpenIPSection() {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#2f2f2f]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 px-6 md:px-16 lg:px-24 py-24">

        {/* ===== LEFT CONTENT ===== */}
        <div className="text-white max-w-xl">
          <h2 className="text-3xl md:text-4xl font-medium leading-snug mb-6">
            Own your AI journey with Tiger’s{" "}
            <span className="text-orange-500">Open IP</span> approach
          </h2>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-10">
            Tiger’s easy-to-assemble accelerators and foundations, akin to Lego
            blocks, help speed up your AI development. As your AI and Analytics
            strategy evolves, our ready-to-deploy open-box solutions will help
            power your growth story ensuring scalability and underscored by
            quality.
          </p>

          <button
            className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-100 transition"
            onClick={() => navigate('/open-ip')}
          >
            Start now
            <span className="text-orange-500">↗</span>
          </button>
        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div className="w-full">
          <img
            src={openIPImage}
            alt="Open IP blocks"
            className="w-full h-auto object-cover rounded-sm"
          />
        </div>

      </div>
    </section>
  );
}
import openIPImage from "../assets/tiger-stack.webp";

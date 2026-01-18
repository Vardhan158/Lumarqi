import { motion } from "framer-motion";

const LumarLoader = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050812]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* SHARED LOGO */}
      <motion.div
        layoutId="lumar-logo"
        className="text-4xl font-semibold tracking-[0.3em]"
      >
        <span className="text-slate-200">LUMAR</span>
        <span className="ml-2 bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
          QI
        </span>
      </motion.div>
    </motion.div>
  );
};

export default LumarLoader;

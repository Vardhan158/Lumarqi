import { motion } from "framer-motion";
import Reveal from "../../components/Reveal";
import Footer from "../../components/Footer";

export default function StrategyAdvisory() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-indigo-50">
        
        {/* Breadcrumb */}
        <Reveal>
          <div className="mb-12 flex items-center gap-2 text-sm">
            <a href="/" className="text-slate-600 hover:text-slate-900">Home</a>
            <span className="text-slate-400">/</span>
            <a href="/services" className="text-slate-600 hover:text-slate-900">Services</a>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-semibold">
              Strategy & Advisory
            </span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <Reveal>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 mb-6">
                Drive business value with the right strategies and roadmaps
              </h1>

              <p className="text-lg text-slate-700">
                Accelerate your AI-driven transformation across the business value chain
              </p>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-10 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full"
              >
                Request a consultation
              </motion.button>
            </motion.div>
          </Reveal>

          {/* RIGHT — SINGLE CONTINUOUS SVG DRAWING */}
          <Reveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center items-center"
            >
              <div className="w-full max-w-md aspect-square relative">
                <motion.svg
                  viewBox="0 0 536 536"
                  className="w-full h-full"
                  fill="none"
                >
                  <motion.path
                    d="M330.5320129394531,272.0090026855469
                       C330.531005859375,239.68899536132812
                       304.3299865722656,213.48800659179688
                       272.010009765625,213.48899841308594
                       C239.69000244140625,213.49000549316406
                       213.48899841308594,239.6909942626953
                       213.49000549316406,272.010986328125
                       C213.49099731445312,304.33099365234375
                       239.69000244140625,330.531005859375
                       272.010009765625,330.531005859375
                       C304.33099365234375,330.531005859375
                       330.5320129394531,304.3299865722656
                       330.5320129394531,272.0090026855469z

                       M272.0090026855469,144.25399780273438
                       C342.5660095214844,144.25399780273438
                       399.7640075683594,201.45199584960938
                       399.7640075683594,272.0090026855469
                       C399.7640075683594,342.5660095214844
                       342.5660095214844,399.7640075683594
                       272.0090026855469,399.7640075683594
                       C201.45199584960938,399.7640075683594
                       144.25399780273438,342.5660095214844
                       144.25399780273438,272.0090026855469
                       C144.25399780273438,201.45199584960938
                       201.45199584960938,144.25399780273438
                       272.0090026855469,144.25399780273438z

                       M266.10198974609375,74.04100036621094
                       C156.76800537109375,77.30400085449219
                       70.77999877929688,168.58200073242188
                       74.04199981689453,277.9159851074219
                       C77.30500030517578,387.25
                       168.58299255371094,473.2380065917969
                       277.9169921875,469.97601318359375
                       C382.6990051269531,466.8489990234375
                       466.89599609375,382.61700439453125
                       469.9800109863281,277.8340148925781

                       M205.4980010986328,13.350000381469727
                       C90.21299743652344,42.90599822998047
                       5,147.5070037841797
                       5,272.0090026855469
                       C5,419.47900390625
                       124.54499816894531,539.0180053710938
                       272.0090026855469,539.0180053710938
                       C396.5119934082031,539.0180053710938
                       501.1109924316406,453.8059997558594
                       530.6690063476562,338.52099609375

                       M272.0090026855469,5
                       C272.0090026855469,5
                       539.0180053710938,5
                       539.0180053710938,5
                       C539.0180053710938,5
                       539.0180053710938,272.0090026855469
                       539.0180053710938,272.0090026855469
                       C539.0180053710938,272.0090026855469
                       272.0090026855469,5
                       272.0090026855469,5z

                       M477.85699462890625,138.5050048828125
                       C477.85699462890625,138.5050048828125
                       477.85699462890625,66.16300201416016
                       477.85699462890625,66.16300201416016
                       C477.85699462890625,66.16300201416016
                       405.5159912109375,66.16300201416016
                       405.5159912109375,66.16300201416016
                       C405.5159912109375,66.16300201416016
                       477.85699462890625,138.5050048828125
                       477.85699462890625,138.5050048828125z"
                    stroke="#000"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="3400"
                    strokeDashoffset="3400"
                    animate={{ strokeDashoffset: [3400, 0, 0, 3400] }}
                    transition={{
                      duration: 7,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  />
                </motion.svg>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <Reveal>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-sm font-semibold text-slate-600">SCROLL</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 15L4 9M10 15L16 9"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </motion.div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

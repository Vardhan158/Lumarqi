import React from "react";
import Reveal from "./Reveal";

export default function WhyChoose() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <section className="mt-12 mb-16">
        <Reveal>
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="max-md:px-4">
              <p className="bg-gradient-to-r from-slate-800 to-[#4D6EA3] text-transparent bg-clip-text text-2xl sm:text-3xl md:text-4xl text-center md:text-left font-medium max-w-full sm:max-w-2xl">
                Why do 500+ companies choose to integrate our features?
              </p>

              <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center gap-6 sm:gap-8 lg:gap-12 mt-6">
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                  <img
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-6.svg"
                    alt="features showcase"
                    loading="lazy"
                    className="w-full max-w-[520px] h-auto object-contain"
                  />
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                  <img
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-5.svg"
                    alt="features showcase"
                    loading="lazy"
                    className="w-full max-w-[520px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

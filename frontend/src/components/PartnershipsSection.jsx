import React from "react";

import microsoft from "../assets/icn_home_microsoft.webp";
import googleCloud from "../assets/icn_home_google-cloud.webp";
import aws from "../assets/icn_home_aws.webp";
import snowflake from "../assets/icn_home_snowflake.webp";
import databricks from "../assets/icn_home_databricks.webp";

export default function PartnershipsSection() {
  return (
    <section className="w-full bg-[#f6f4f2] py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-medium leading-snug mb-12 text-black">
            We’ve partnered with the best to bring you the latest
          </h2>

          <button className="group inline-flex items-center gap-3 border-b border-black pb-1 text-sm font-medium">
            Read about our partnerships
            <span className="text-orange-500 transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </button>
        </div>

        {/* RIGHT LOGO CARD */}
        <div className="bg-white rounded-3xl px-8 sm:px-12 md:px-16 py-16 md:py-20 min-h-[360px] md:min-h-[420px] flex items-center shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-16 items-center justify-items-center w-full">

            <img
              src={microsoft}
              alt="Microsoft"
              className="h-16 sm:h-20 md:h-16 lg:h-14 object-contain"
            />

            <img
              src={googleCloud}
              alt="Google Cloud"
              className="h-16 sm:h-20 md:h-16 lg:h-14 object-contain"
            />

            <img
              src={aws}
              alt="AWS"
              className="h-16 sm:h-20 md:h-16 lg:h-14 object-contain"
            />

            <img
              src={snowflake}
              alt="Snowflake"
              className="h-16 sm:h-20 md:h-16 lg:h-14 object-contain sm:col-span-2 lg:col-span-2 justify-self-center"
            />

            <img
              src={databricks}
              alt="Databricks"
              className="h-16 sm:h-20 md:h-16 lg:h-14 object-contain"
            />

          </div>
        </div>

      </div>
    </section>
  );
}

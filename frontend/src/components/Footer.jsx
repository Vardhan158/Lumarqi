import React from "react";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <Reveal>
      <footer className="relative overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-white pt-10 pb-12">
      <svg className="hidden md:block absolute -bottom-30 -left-80 opacity-5 w-full h-full pointer-events-none" width="68" height="26" viewBox="0 0 68 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_8678_1074)">
          <path d="M16.141 0C13.4854 0 10.9387 1.04871 9.06091 2.91543L2.93268 9.00761C1.05492 10.8743 0 13.4061 0 16.0461C0 21.5435 4.48289 26 10.0128 26C12.6684 26 15.2152 24.9512 17.0929 23.0845L21.3319 18.8705C21.3319 18.8705 21.3319 18.8706 21.3319 18.8705L33.6827 6.59239C34.5795 5.70086 35.7958 5.2 37.0641 5.2C39.1874 5.2 40.9876 6.57576 41.6117 8.47953L45.5096 4.60457C43.7314 1.83589 40.6134 0 37.0641 0C34.4085 0 31.8617 1.04871 29.984 2.91543L13.3943 19.4076C12.4974 20.2992 11.2811 20.8 10.0128 20.8C7.37176 20.8 5.23077 18.6716 5.23077 16.0461C5.23077 14.7852 5.73459 13.5761 6.63139 12.6845L12.7596 6.59239C13.6564 5.70086 14.8727 5.2 16.141 5.2C18.2645 5.2 20.0645 6.57582 20.6887 8.47965L24.5866 4.60466C22.8084 1.83595 19.6904 0 16.141 0Z" fill="#364153" />
          <path d="M34.3188 19.4076C33.422 20.2992 32.2056 20.8 30.9373 20.8C28.8143 20.8 27.0143 19.4246 26.39 17.5211L22.4922 21.396C24.2705 24.1643 27.3883 26 30.9373 26C33.5929 26 36.1397 24.9512 38.0175 23.0845L54.6072 6.59239C55.504 5.70086 56.7203 5.2 57.9886 5.2C60.6297 5.2 62.7707 7.32839 62.7707 9.95393C62.7707 11.2148 62.2669 12.4239 61.37 13.3155L55.2419 19.4076C54.345 20.2992 53.1287 20.8 51.8604 20.8C49.7372 20.8 47.9371 19.4243 47.3129 17.5207L43.4151 21.3957C45.1933 24.1642 48.3112 26 51.8604 26C54.516 26 57.0628 24.9512 58.9405 23.0845L65.0687 16.9924C66.9465 15.1257 68.0014 12.5939 68.0014 9.95393C68.0014 4.45652 63.5186 0 57.9886 0C55.333 0 52.7863 1.04871 50.9085 2.91543L34.3188 19.4076Z" fill="#364153" />
        </g>
        <defs>
          <clipPath id="clip0_8678_1074">
            <rect width="68" height="26" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="/">
            <svg width="157" height="40" viewBox="0 0 157 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* simplified logo path preserved from example */}
              <path d="M47.154 28.28C46.1273 28.28 45.2127 28.0653 44.41 27.636C43.6073 27.188 42.9727 26.5813 42.506 25.816C42.058 25.0507 41.834 24.1827 41.834 23.212V19.348C41.834 18.3773 42.0673 17.5093 42.534 16.744C43.0007 15.9787 43.6353 15.3813 44.438 14.952C45.2407 14.504 46.146 14.28 47.154 14.28C48.3673 14.28 49.4593 14.5973 50.43 15.232C51.4193 15.848 52.194 16.688 52.754 17.752C53.3327 18.7973 53.622 19.9827 53.622 21.308C53.622 22.6147 53.3327 23.8 52.754 24.864C52.194 25.9093 51.4193 26.74 50.43 27.356C49.4593 27.972 48.3673 28.28 47.154 28.28Z" fill="#1D293D"/>
            </svg>
          </a>
          <p className="text-sm leading-7 mt-6">
            PrebuiltUI is a free and open-source UI component library with over 340+
            beautifully crafted, customizable components built with Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-col lg:items-center lg:justify-center">
          <div className="flex flex-col text-sm space-y-2.5">
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <a className="hover:text-slate-600 transition" href="#">About us</a>
            <a className="hover:text-slate-600 transition" href="#">Careers</a>
            <a className="hover:text-slate-600 transition" href="#">Contact us</a>
            <a className="hover:text-slate-600 transition" href="#">Privacy policy</a>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
          <div className="text-sm space-y-6 max-w-sm">
            <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <input className="rounded-md bg-gray-100 outline-none w-full h-11 px-3" type="email" placeholder="Enter your email" />
              <button className="w-full sm:w-auto bg-gradient-to-b from-indigo-600 to-indigo-800 cursor-pointer hover:from-indigo-700 hover:to-indigo-900 transition px-4 h-11 text-white rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-t mt-6 border-slate-200 text-center md:text-left">
        <p className="text-sm">
          Copyright 2025 © <a href="/">PrebuiltUI</a> All Right Reserved.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Cookie Policy</a>
        </div>
      </div>
      </footer>
    </Reveal>
  );
}

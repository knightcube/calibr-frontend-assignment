import React from "react";
import nexcentLogo from "../assets/nexcent_dark.png";
import dribbleIcon from "../assets/social_icon_1.png";
import twitterIcon from "../assets/social_icon_2.png";
import youtubeIcon from "../assets/social_icon_3.png";
import instagramIcon from "../assets/social_icon_4.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-dark_gray flex justify-between  px-64 py-16">
      <div>
        <Image
          width={191}
          height={30}
          src={nexcentLogo.src}
          alt="Nexcent Logo"
        />
        <p className="text-sm text-silver mt-8">
          Copyright © 2020 Newcent ltd.
        </p>
        <p className="text-sm text-silver mt-2">All rights reserved</p>
        <div className="flex gap-4 mt-8">
          <Image width={32} height={32} src={instagramIcon.src} alt="" />
          <Image width={32} height={32} src={dribbleIcon.src} alt="" />
          <Image width={32} height={32} src={twitterIcon.src} alt="" />
          <Image width={32} height={32} src={youtubeIcon.src} alt="" />
        </div>
      </div>
      <div className="flex gap-16">
        <div className="">
          <h1 className="text-2xl font-semibold text-white mb-4">Company</h1>
          <ul className="text-sm text-silver grid gap-4 ">
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Contact us</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Testimonials</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-white mb-4">Support</h1>
          <ul className="text-sm text-silver grid gap-4 ">
            <li className="cursor-pointer">Help Center</li>
            <li className="cursor-pointer">Terms of service</li>
            <li className="cursor-pointer">Legal</li>
            <li className="cursor-pointer">Privacy policy</li>
            <li className="cursor-pointer">Status</li>
          </ul>
        </div>
        <div>
          <form>
            <label
              htmlFor="email-address-icon"
              className="block mb-2 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              Stay up to date
            </label>
            <div className="relative">
              <input
                type="text"
                id="email-address-icon"
                className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-2 pr-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your email address"
              />

              <div className="absolute inset-y-0 right-4 flex items-center pl-3.5 pointer-events-none">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0303 0.969691C17.2341 1.17342 17.3031 1.47584 17.2079 1.74778L11.9579 16.7478C11.8563 17.038 11.5878 17.2369 11.2806 17.2494C10.9733 17.2619 10.6895 17.0856 10.5646 16.8046L7.6818 10.3182L1.1954 7.43538C0.91439 7.31049 0.738092 7.02671 0.750627 6.71945C0.763163 6.41219 0.961991 6.14371 1.25224 6.04213L16.2522 0.792127C16.5242 0.696948 16.8266 0.765962 17.0303 0.969691ZM9.14456 9.91612L11.1671 14.4667L14.7064 4.35429L9.14456 9.91612ZM13.6457 3.29362L3.53331 6.83297L8.0839 8.85546L13.6457 3.29362Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

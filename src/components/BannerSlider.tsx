import React from "react";
import BrandedButton from "./BrandedButton";
// import bannerIllustration from "/banner_illustration.png";
import Image from "next/image";

const BannerSlider: React.FC = () => {
  return (
    <div className=" flex justify-center items-center gap-40 bg-silver min-h-[600px] px-48 py-30">
      <div className="">
        <div>
          <h1 className="text-8xl text-neutral_dark_gray font-semibold">
            Lessons and insights<p className="text-green mt-2">from 8 years</p>
          </h1>
          <p className=" text-xl text-neutral_gray mt-6 mb-10 font-medium">
            Where to grow your business as a photographer: site or social media?
          </p>
          <BrandedButton title="Register" />
        </div>
      </div>
      <Image width={391} height={407} src="/banner_illustration.png" alt="" />
    </div>
  );
};

export default BannerSlider;

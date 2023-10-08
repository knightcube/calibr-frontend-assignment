import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex px-40 py-5 justify-between bg-[#F5F7FA]">
      <div className="">
        <Image width={155} height={24} src="/nexcent_logo.png" alt="Company Logo" />
      </div>

      <ul className="flex gap-10">
        <li
          className={`cursor-pointer ${
            router.pathname == "/" ? "font-semibold" : ""
          }`}
        >
          Home
        </li>
        <li className="cursor-pointer">Service</li>
        <li className="cursor-pointer">Feature</li>
        <li className="cursor-pointer">Product</li>
        <li className="cursor-pointer">Testimonial</li>
        <li className="cursor-pointer">FAQ</li>
      </ul>

      <div className="flex gap-5">
        <button className="text-[#4CAF4F]">Login</button>
        <button
          type="button"
          className="bg-[#4CAF4F] text-sm text-white rounded-md px-[20px] py-[10px]"
        >
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

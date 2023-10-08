import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import BannerSlider from "@/components/BannerSlider";
import MainContentSection from "@/components/MainContentSection";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <BannerSlider />
      <MainContentSection />
      <Footer />
    </div>
  );
}

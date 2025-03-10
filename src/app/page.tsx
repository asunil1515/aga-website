import Image from "next/image";
import { Merriweather } from "next/font/google";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { About } from "./components/About";
import { ServiceTimes } from "./components/ServiceTimes";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: "300",
});

export default function Home() {
  return (
    <div className={`m-6 ${merriweather.variable} `}>
      <div className="flex justify-center">
        <h1 className="text-4xl">

         <Navbar />
         <HeroSection />
         <About />
         <ServiceTimes />
        </h1>
      </div>

    </div>

  );
}

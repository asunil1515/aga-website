// Removed @import statement. Add it to a CSS file instead.
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import { VisitUs } from "./components/VisitUs";
import { Sermons } from "./components/Sermons";
import Community from "./components/Community";
import OurPastor from "./components/OurPastor";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className={''}>
         <Navbar /> 
         <HeroSection />
         <Sermons />
         <About />
         <OurPastor />
         <Community />
         {/* <ServiceTimes />*/}
         <VisitUs />
         <Footer /> 
    </div>

  );
}
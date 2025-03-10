import Image from "next/image";
import churchbg from "../public/church-bg.jpg";
const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center bg-gray-900 text-white" style={{ backgroundImage: "url('/churchbg.jpg')" }}>

      {/* Hero Content */}
      <div className="relative z-10" style={{fontFamily: 'var(--font-merriweather)'}}>
        <h1 className="text-5xl font-bold">Amazing Grace Assembly</h1>
        <a href="/visit" className="mr-6 mt-10 px-6 py-3 inline-block bg-blue-400 hover:bg-blue-700 rounded text-white text-xs">
          Plan a Visit
        </a>
        <a href="/contact" className="mt-10 px-6 py-3 inline-block bg-blue-400 hover:bg-blue-700 rounded text-white text-xs">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

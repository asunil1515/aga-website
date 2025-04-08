import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

interface IntroScreenProps {
  className?: string;
}

const IntroScreen = ({ className }: IntroScreenProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/Apparel.jpg"
          as="image"
          type="image/jpeg"
          fetchPriority="high"
        />
      </Head>
      <div className={`intro-screen ${className || ""} ${isVisible ? "appear" : ""}`}>
        <div className="intro-image-container">
          <Image
            alt="Apparel"
            src="/Apparel.jpg"
            layout="fill"
            quality={100}
            objectFit="cover"
            className="intro-image"
            priority // 👈 ensures preload happens via Next.js too
          />
        </div>
        <h1 className="intro-header">APPAREL.</h1>
      </div>
    </>
  );
};

export default IntroScreen;

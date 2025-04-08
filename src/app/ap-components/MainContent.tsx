import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/bundle";
interface MainContentProps {
  showMainContent: boolean;
}

const numberOfImages = 6;
const images = Array.from({ length: numberOfImages }, (_, index) => `/yhwh/YHWH-${index + 1}.jpg`);

const MainContent: React.FC<MainContentProps> = ({ showMainContent }) => {
  return (
    <>
      <motion.div
        className={`main-content ${showMainContent ? "show" : ""}`}
        initial={{ opacity: 0, y: 0 }} // Start slightly below
        animate={{ opacity: 1, y: 0 }} // Move to normal position
        transition={{
          duration: 2.75, // Duration for the fade-in and slide-in
          delay: 2, // 1 second delay before the main content animates (longer delay)
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>ONE SHIRT, TO GLORIFY ONE NAME.</h2>
        <p>
          THIS SHIRT IS MEANT TO SERVE AS A REMINDER THAT THE SAME GOD WHO
          REVEALED HIMSELF TO MOSES THROUGH A BURNING BUSH, CAN REVEAL HIMSELF
          TO OUR GENERATION TOO.
        </p>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4100, disableOnInteraction: false }}
          navigation={true}
          className="image-gallery-swiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="image-swiper-container">
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={1200}
                  height={800}
                  objectFit="contain"
                  className="swiper-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <h2 className="t-shirt-text">WEAR THE MESSAGE.</h2>
        <Link href="/YHWHtshirt" className="t-shirt">
          <Image
            src="/shirt1.png"
            alt="YHWH T-shirt"
            width={500}
            height={500}
            className="img"
          />
        </Link>
      </motion.div>
    </>
  );
};

export default MainContent;

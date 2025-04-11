"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { BagSimple, CaretDown, CaretLeft } from "@phosphor-icons/react/dist/ssr";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import TopStart from "../components/TopStart";

const images = [
  "/shirt1.png",
  "/shirt2.png",
  "/shirt5.png",
  "/shirt6.png",
];

const YHWHshirtpage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showShippingDetails, setShowShippingDetails] = useState(false);
  const [showCareDetails, setShowCareDetails] = useState(false);

  const toggleDescription = () => setShowFullDescription(!showFullDescription);
  const toggleShippingDetails = () => setShowShippingDetails(!showShippingDetails);
  const toggleCareDetails = () => setShowCareDetails(!showCareDetails);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <Navbar variant="opaque" showBagIcon={false} />
      <TopStart/>
      <motion.div
  className="product-page product-page-opaque"
  id="YHWH-tshirt"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{
    duration: 1.,
    ease: [0.42, 0, 1, 1], // easeInCubic: starts slow, ends fast
  }}
>

        <div className="product-container">
          <div className="product-gallery">
            <div className="main-image-container">
              <button onClick={handlePrevImage} className="arrow-button left-arrow">
                <CaretLeft size={30} />
              </button>
              <Image src={images[currentImageIndex]} alt="YHWH-Tee" width={800} height={800} objectFit="contain" />
              <button onClick={handleNextImage} className="arrow-button right-arrow">
                <CaretRight size={30} />
              </button>
            </div>
            <div className="image-previews">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`preview-wrapper ${index === currentImageIndex ? "selected" : ""}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image src={image} alt={`Preview ${index + 1}`} width={80} height={80} objectFit="contain" className="preview-image" />
                </div>
              ))}
            </div>
          </div>

          <h1 className="product-title">YHWH TEE</h1>

          <div className="product-details">
            <div className="add-to-bag-container">
              <a
                href="https://square.link/u/PqDCVeOG"
                rel="noopener noreferrer"
                className="group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-black shadow-md transition focus:outline-none add-to-bag-button"
              >
                <div className="flex w-full items-center justify-between">
                  <span className="font-semibold text-sm">Buy Now</span>
                  <BagSimple size={32} className="bag-icon" />
                </div>
              </a>
            </div>

            {/* Description Section */}
            <div className={`collapsible-section description ${showFullDescription ? "expanded" : ""}`}>
              <h3>Description</h3>
              <p>
                One shirt, to glorify one name. This tee, inspired by The Burning Bush in Exodus 3, highlights the moment God reveals His name, YHWH—&quot;I AM WHO I AM.&quot; The design reflects the power of YHWH, the divine identity that calls, sustains, and leads.
              </p>
              <AnimatePresence>
                {showFullDescription && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      opacity: { duration: 0.3 },  // Adjust opacity duration
                      height: { duration: 0.3 }    // Adjust height duration
                    }}
                    style={{ overflow: "hidden" }} // prevents ghost text during height collapse
                  >
                    This is more than just a t-shirt, it&apos;s a conversation starter. He is still the same God that Moses encountered. Rep your God boldly. Let it be a reminder that every moment is an opportunity to release His presence, bringing hope, healing, and revival to a world in need, in style :) <br />
                    <br />
                    6.1 oz of 100% ringspun cotton, the Comfort Colors C1717 heavyweight RS t-shirt offers sought-after quality, fashion, and comfort. Preshrunk, soft-washed, and made using garment-dyed fabric. This t-shirt is true to size, we recommend sizing up.
                  </motion.p>
                )}
              </AnimatePresence>
              <button className="read-more-button" onClick={toggleDescription}>
                {showFullDescription ? "Read Less" : "Read More"}
              </button>
            </div>

            {/* Shipping Details Section */}
            <div className="collapsible-section">
              <button className="collapsible-button" onClick={toggleShippingDetails}>
                <span>Shipping Details</span>
                <CaretDown size={40} className={`caret-icon ${showShippingDetails ? "rotate" : ""}`} />
              </button>
              <AnimatePresence>
                {showShippingDetails && (
                  <motion.p
                    key="shipping"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="collapsible-content"
                  >
                    Shipping is about $5. However, if you&apos;re attending the Worship Night on April 26th, you can opt for free pickup at the event!
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Care Instructions Section */}
            <div className="collapsible-section">
              <button className="collapsible-button" onClick={toggleCareDetails}>
                <span>Care</span>
                <CaretDown size={40} className={`caret-icon ${showCareDetails ? "rotate" : ""}`} />
              </button>
              <AnimatePresence>
                {showCareDetails && (
                  <motion.p
                    key="care"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="collapsible-content"
                  >
                    We recommend washing these garments in cold water with like-colored garments, as some of the pigment dyes may stain light or white-colored garments. Dry in low heat to prevent excessive shrinkage.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default YHWHshirtpage;


/*full sclae shopping*/

/*"use client";
import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import Image from 'next/image';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import { CaretRight } from '@phosphor-icons/react/dist/ssr/CaretRight';
import { BagSimple, CaretDown, CaretLeft } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { useBag } from '../components/Bag'; // Add this import

const sizes = [
  { name: 'Medium', price: '$20' },
  { name: 'Large', price: '$20' },
  { name: 'XL', price: '$20' },
  { name: '2XL', price: '$40' },
];

const images = [
  '/shirt1.png',
  '/shirt2.png',
];

export const YHWHshirtpage = () => {
  const { addToBag } = useBag(); // Use bag context
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showShippingDetails, setShowShippingDetails] = useState(false);
  const [showCareDetails, setShowCareDetails] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const toggleShippingDetails = () => {
    setShowShippingDetails(!showShippingDetails);
  };

  const toggleCareDetails = () => {
    setShowCareDetails(!showCareDetails);
  };

  const handleQuantityChange = (amount: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handleAddToBag = () => {
    addToBag({
      id: "yhwh-tee", // Unique ID for the product
      name: "YHWH TEE",
      size: selectedSize.name,
      price: 20,
      quantity: quantity,
      image: images[0], // First image as a reference
    });
  };  

  return (
    <>
      <Navbar variant="opaque" showBagIcon={true} />
      <div className="product-page product-page-opaque" id="YHWH-tshirt">
        <div className="product-container">
          <div className="product-gallery">
            <div className="main-image-container">
              <button
                onClick={handlePrevImage}
                className="arrow-button left-arrow"
              >
                <CaretLeft size={40} />
              </button>
              <Image
                src={images[currentImageIndex]}
                alt="YHWH-Tee"
                width={1000}
                height={500}
                objectFit="cover"
              />
              <button
                onClick={handleNextImage}
                className="arrow-button right-arrow"
              >
                <CaretRight size={40} />
              </button>
            </div>
            <div className="image-previews">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Preview ${index + 1}`}
                  width={100}
                  height={100}
                  objectFit="cover"
                  className={`preview-image ${index === currentImageIndex ? "selected" : ""}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
          <h1 className="product-title">YHWH TEE</h1>
          <div className="product-details">
            <RadioGroup
              value={selectedSize}
              onChange={setSelectedSize}
              className="product-options"
            >
              {sizes.map((size) => (
                <RadioGroup.Option
                  key={size.name}
                  value={size}
                  className="group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-black shadow-md transition focus:outline-none"
                >
                  {({ checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-semibold ${checked ? "text-blue-600" : "text-black"}`}
                          >
                            {size.name} - {size.price}
                          </RadioGroup.Label>
                        </div>
                        {checked && (
                          <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
            <div className="quantity-selector">
              <label>Quantity:</label>
              <button onClick={() => handleQuantityChange(-1)}>
                <span className="span2">-</span>
              </button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
            <div className="add-to-bag-container">
              <Link
                href="https://square.link/u/PqDCVeOG"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-black shadow-md transition focus:outline-none add-to-bag-button"
              >
                <div className="flex w-full items-center justify-between">
                  <span className="font-semibold text-sm">Buy Now</span>
                  <BagSimple size={32} className="bag-icon" />
                </div>
              </Link>
            </div>
            <div
              className={`collapsible-section description ${showFullDescription ? "expanded" : ""}`}
            >
              <h3>Description</h3>
              <p>
                <span className="">One shirt, to glorify one name.</span> This
                tee, inspired by The Burning Bush in Exodus 3, highlights the
                moment God reveals His name, YHWH—"I AM WHO I AM." The design
                reflects the power of YHWH, the divine identity that calls,
                sustains, and leads.
              </p>
              {showFullDescription && (
                <p>
                  This is more than just a t-shirt, it's a conversation starter.
                  He is still the same God that Moses encountered. Rep your God
                  boldly. Let it be a reminder that every moment is an
                  opportunity to release His presence, bringing hope, healing,
                  and revival to a world in need, in style :) <br />
                  <br />
                  6.1 oz of 100% ringspun cotton, the Comfort Colors C1717
                  heavyweight RS t-shirt offers sought-after quality, fashion,
                  and comfort. Preshrunk, soft-washed and made using
                  garment-dyed fabric. This t-shirt is true to size, we
                  recommend sizing up.
                </p>
              )}
              <button className="read-more-button" onClick={toggleDescription}>
                {showFullDescription ? "Read Less" : "Read More"}
              </button>
            </div>
            <div className="collapsible-section">
              <button
                className="collapsible-button"
                onClick={toggleShippingDetails}
              >
                <span>Shipping Details</span>
                <CaretDown size={40} className="caret-icon" />
              </button>
              {showShippingDetails && (
                <p className="collapsible-content">
                  Shipping details about the product can go here.
                </p>
              )}
            </div>
            <div className="collapsible-section">
              <button
                className="collapsible-button"
                onClick={toggleCareDetails}
              >
                <span>Care</span>
                <CaretDown size={40} className="caret-icon" />
              </button>
              {showCareDetails && (
                <p className="collapsible-content">
                  We recommend washing these garments in cold water with
                  like-colored garments, as some of the pigment dyes may stain
                  light or white colored garments. Dry in low heat to prevent
                  excessive shrinkage.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default YHWHshirtpage;*/
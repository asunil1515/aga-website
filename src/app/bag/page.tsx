"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useBag } from "../components/Bag";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import Link from "next/link";

const BagPage = () => {
  const { bag, removeFromBag, updateQuantity } = useBag();

  const subtotal = bag.reduce(
    (total, item) => total + (item.price * item.quantity || 0),
    0
  );

  const handleQuantityChange = (itemId: string, size: string, amount: number) => {
    const item = bag.find((item) => item.id === itemId && item.size === size);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + amount);
      updateQuantity(itemId, size, newQuantity);
    }
  };

  const handleRemove = (itemId: string, size: string) => {
    removeFromBag(itemId, size);
  };

  return (
    <>
      <Navbar variant="opaque" showBagIcon={true} />
      <div className="bag-page">
        <div className="bag-container">
          <h1 className="bag-title">SHOPPING BAG</h1>

          <div className="bag-content">
            <div className="bag-items">
              {bag.length === 0 ? (
                <div className="bag-item empty-state">
                  <p>Your bag is empty</p>
                </div>
              ) : (
                bag.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="bag-item">
                    <div className="item-image">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={200}
                        objectFit="cover"
                      />
                    </div>
                    <div className="item-details">
                      <p>{item.name} - {item.size}</p>
                      <p>${item.price}</p>
                      <div className="item-quantity">
                        <span>Qty</span>
                        <div className="quantity-control">
                          <button onClick={() => handleQuantityChange(item.id, item.size, -1)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => handleQuantityChange(item.id, item.size, 1)}>+</button>
                        </div>
                      </div>
                      <button className="remove-item" onClick={() => handleRemove(item.id, item.size)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="bag-order-summary">
              <h3>Order Summary</h3>
              <div className="summary-details">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
              {/* Apply className to the Link directly */}
              <Link href="/checkout" className="continue-to-checkout-button">
        Continue to Checkout
      </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BagPage;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useRouter } from "next/navigation";

const shippingMethods = [
  {
    name: "Flat Rate Shipping",
    price: "$5.00",
    value: "flatRate",
  },
  {
    name: "Pickup",
    price: "Free",
    value: "pickup",
  },
];

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
    nameOnCard: "",

    // Billing address fields
    billingFirstName: "",
    billingLastName: "",
    billingAddress: "",
    billingApartment: "",
    billingCity: "",
    billingState: "",
    billingZipCode: "",
  });

  const [isBillingSameAsShipping, setIsBillingSameAsShipping] = useState(true);
  const [shippingMethod, setShippingMethod] = useState(shippingMethods[0]);
  const [showPickupDetails, setShowPickupDetails] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = () => {
    setIsBillingSameAsShipping(!isBillingSameAsShipping);
  };

  const togglePickupDetails = () => {
    if (shippingMethod.value === "pickup") {
      setShowPickupDetails(!showPickupDetails);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    router.push("/thank-you");
  };

  return (
    <>
      <Navbar variant="opaque" showBagIcon={true} />
      <div className="checkout-page">
        <div className="checkout-container">
          <h1 className="checkout-title">CHECKOUT</h1>
          <div className="checkout-content">
            {/* Left Column: User Information */}
            <div className="user-info">
              <form onSubmit={handleSubmit}>
                <h3>Contact Information</h3>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <h3>Shipping Address</h3>
                <div className="address-inputs">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="apartment"
                  name="apartment"
                  placeholder="Apartment, Suite, etc. (Optional)"
                  value={formData.apartment}
                  onChange={handleChange}
                />
                <div className="address-inputs">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                />

                {/* Shipping Method Section */}
                <h3>Shipping Method</h3>
                <RadioGroup
                  value={shippingMethod}
                  onChange={setShippingMethod}
                  className="shipping-methods-container"
                >
                  {shippingMethods.map((method) => (
                    <RadioGroup.Option
                      key={method.value}
                      value={method}
                      className={({ checked }) => `
                        shipping-method-group
                      `}
                    >
                      {({ checked }) => (
                        <div className="flex w-full items-center justify-between">
                          <div className="shipping-method-text">
                            <RadioGroup.Label
                              as="p"
                              className={`
                                shipping-method-font-semibold 
                                ${checked ? "shipping-method-blue-text" : "shipping-method-black-text"}
                              `}
                            >
                              {method.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className="shipping-method-black-text"
                            >
                              {method.price}
                            </RadioGroup.Description>
                          </div>
                          {checked && (
                            <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                      )}
                    </RadioGroup.Option>
                  ))}
                </RadioGroup>

                {/* Pickup Details Link */}
                  <div
                    className="pickup-details-link"
                    onClick={togglePickupDetails}
                  >
                    View Pickup Details
                  </div>


                <h3>Payment Information</h3>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                />
                <div className="address-inputs">
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="securityCode"
                    name="securityCode"
                    placeholder="CVV"
                    value={formData.securityCode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="text"
                  id="nameOnCard"
                  name="nameOnCard"
                  placeholder="Name on Card"
                  value={formData.nameOnCard}
                  onChange={handleChange}
                  required
                />

                <div className="checkboxes billing-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      checked={isBillingSameAsShipping}
                      onChange={handleCheckboxChange}
                    />
                    Use shipping address for billing address
                  </label>
                </div>

                {!isBillingSameAsShipping && (
                  <div className="billing-address-section">
                    <h3>Billing Address</h3>
                    <div className="address-inputs">
                      <input
                        type="text"
                        id="billingFirstName"
                        name="billingFirstName"
                        placeholder="First Name"
                        value={formData.billingFirstName}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="text"
                        id="billingLastName"
                        name="billingLastName"
                        placeholder="Last Name"
                        value={formData.billingLastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <input
                      type="text"
                      id="billingAddress"
                      name="billingAddress"
                      placeholder="Address"
                      value={formData.billingAddress}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      id="billingApartment"
                      name="billingApartment"
                      placeholder="Apartment, Suite, etc. (Optional)"
                      value={formData.billingApartment}
                      onChange={handleChange}
                    />
                    <div className="address-inputs">
                      <input
                        type="text"
                        id="billingCity"
                        name="billingCity"
                        placeholder="City"
                        value={formData.billingCity}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="text"
                        id="billingState"
                        name="billingState"
                        placeholder="State"
                        value={formData.billingState}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="text"
                        id="billingZipCode"
                        name="billingZipCode"
                        placeholder="ZIP Code"
                        value={formData.billingZipCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                )}

                <button type="submit" className="checkout-button">
                  Submit Order
                </button>
              </form>
            </div>

            {/* Right Column: Order Summary */}
            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="summary-details">
                <div className="item">
                  <img
                    src="/shirt1.png"
                    alt="Item Image"
                    width={300}
                    height={300}

                  />
                  <div className="item-description">
                    <span>YHWH Tee</span>
                    <span>Size: XL</span>
                    <span>Quantity: 1</span>
                  </div>
                </div>
                <div className="cost-summary">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span>$36.50</span>
                  </div>
                  <div className="shipping">
                    <span>Shipping</span>
                    <span>{shippingMethod.price}</span>
                  </div>
                  <div className="total">
                    <span>Total</span>
                    <span>
                      {shippingMethod.value === "flatRate"
                        ? "$44.50"
                        : "$36.50"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showPickupDetails && (
          <div className="dark-overlay">
            <div className="pickup-details-modal">
              <div className="pickup-details-container">
                <button
                  className="pickup-details-close"
                  onClick={togglePickupDetails}
                >
                  &times;
                </button>
                <Image
                  src="/pickup.jpg"
                  alt="Pickup Details"
                  width={1100} // Adjust width to match max-width in CSS
                  height={100}
                  className="pickup-details-image"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;

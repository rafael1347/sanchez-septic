import React from 'react';

import Header from '../components/Header';

export default function About() {
  return (
    <div>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={` pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <div className=" min-h-screen flex flex-col justify-center items-center">
              <title>About Us - Sanchez Septic Services</title>
              <meta
                name="description"
                content="Learn more about Sanchez Septic Services."
              />

              <div className="max-w-100% p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-semibold text-center mb-4">
                  About Sanchez Septic Services
                </h1>
                <p className="text-lg text-gray-700">
                  Sanchez Septic Services is a family-owned and operated septic
                  service company based in [Your City]. We have been providing
                  reliable septic system solutions to homeowners and businesses
                  in the area for over [Number] years.
                </p>
                <p className="text-lg text-gray-700 mt-4">
                  Our team of experienced professionals is committed to
                  delivering top-quality services, including septic tank
                  pumping, installation, repair, maintenance, and inspections.
                  We prioritize customer satisfaction and ensure that every job
                  is completed efficiently and to the highest standards.
                </p>
                <p className="text-lg text-gray-700 mt-4">
                  At Sanchez Septic Services, we understand the importance of a
                  properly functioning septic system for your property&apos;s
                  health and safety. Whether you need routine maintenance or
                  emergency repairs, you can count on us to provide prompt and
                  reliable service at competitive prices.
                </p>
                <p className="text-lg text-gray-700 mt-4">
                  Contact us today to learn more about our services or to
                  schedule an appointment. We look forward to serving you and
                  meeting all your septic system needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

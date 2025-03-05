"use client";

import React from "react";
import ContactForm from "./components/ContactForm";

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row gap-10 md:gap-1 p-8 md:p-16 bg-secondary-light dark:bg-primary-dark">
      {/* Datos de contacto */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-10 lg:mb-24 text-transparent bg-clip-text bg-gradient-to-r from-black to-primary-light dark:from-border-dark dark:to-textMain-dark">Contact</h2>
        <p className="text-base text-left light:text-primary-light dark:text-white sm:text-lg md:text-xl leading-relaxed max-w-6xl mt-3"
        >Via di Porta Tenaglia 1/3 – MAA Partner</p>
        <p className="text-base text-left light:text-primary-light dark:text-white sm:text-lg md:text-xl leading-relaxed max-w-6xl mt-3"
        >Via di Porta Tenaglia 1/3 – 20121 Milano</p>
        <p className="text-base text-left light:text-primary-light dark:text-white sm:text-lg md:text-xl leading-relaxed max-w-6xl mt-3"
        >Tel: +39 02 099.69510</p>
        <p className="text-base text-left light:text-primary-light dark:text-white sm:text-lg md:text-xl leading-relaxed max-w-6xl mt-3"
        >Cell: <a href="tel:+393470306210">+39 347.030.6210</a></p>
        <p className="text-base text-left light:text-primary-light dark:text-white sm:text-lg md:text-xl leading-relaxed max-w-6xl mt-3"
        >
          Email: <a href="mailto:studio@maapartner.it">studio@maapartner.it</a>
        </p>
      </div>

      {/* Formulario de contacto */}
      <div className="w-full md:w-1/2">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
"use client";

import React from "react";
import ContactForm from "./components/ContactForm";
import EventForm from "./components/EventForm";

const ContactPage = () => {
  return (

    <div className="w-full min-h-screen bg-secondary-light dark:bg-primary-dark">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-1 p-8 md:p-16">
          <div className="w-full md:w-1/2 flex flex-col">
            <h2 className="text-center text-4xl sm:text-6xl md:text-7xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-black to-primary-light dark:from-border-dark dark:to-textMain-dark">
              Contact
            </h2>
            <p className="text-base text-center light:text-primary-light dark:text-white sm:text-lg md:text-xl leading-relaxed max-w-6xl mt-3">
              Maurizio Ansaldi Arena
            </p>
            <p className="text-base text-center light:text-primary-light dark:text-white sm:text-lg md:text-xl leading-relaxed max-w-6xl">
              Dottore Commercialista
            </p>
            <p className="text-base text-center light:text-primary-light dark:text-white sm:text-lg md:text-xl leading-relaxed max-w-6xl mt-5">
              Via di Porta Tenaglia 1/3 – 20121 Milano
            </p>
            <p className="text-base text-center light:text-primary-light dark:text-white sm:text-lg md:text-xl leading-relaxed max-w-6xl mt-5">
              +39 335.838.5185
            </p>
            <p className="text-base text-center light:text-primary-light dark:text-white sm:text-lg md:text-xl leading-relaxed max-w-6xl mt-5">
              maurizio.ansaldiaarena@maapartner.it
            </p>
            <div className="mt-5 items-center justify-center mx-auto">
              <p className="text-base text-center light:text-primary-light dark:text-white sm:text-lg md:text-xl">
                vCard
              </p>
              <img src="/contactQr.png" alt="vCard QR Code" className="w-32 h-32 mt-2" />
            </div>
            <p className="text-base text-center justify-center light:text-primary-light dark:text-white sm:text-lg md:text-xl leading-relaxed max-w-6xl mt-5">
              www.maapartner.it
            </p>
          </div>


          {/* Formulario de contacto */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto mt-16 p-8 md:p-16">
          <h2 className="text-center text-4xl sm:text-6xl md:text-7xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-black to-primary-light dark:from-border-dark dark:to-textMain-dark">
            Book an Appointment
          </h2>
          <EventForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
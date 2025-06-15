
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/layouts/Navigation';
import Footer from '@/components/layouts/Footer';
import FaqSection from '@/components/sections/FaqSection';

const FaqDemo = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Frequently Asked Questions | Stevens Integrated Schools</title>
        <meta name="description" content="Find answers to common questions about Stevens Integrated Schools." />
      </Helmet>

      <Navigation />

      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="container">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Get answers to common questions about our school, programs, and admission process.
            </p>
          </div>
        </section>

        <FaqSection />
      </main>

      <Footer />
    </div>
  );
};

export default FaqDemo;

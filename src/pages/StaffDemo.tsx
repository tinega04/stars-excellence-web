
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/layouts/Navigation';
import Footer from '@/components/layouts/Footer';
import StaffDirectory from '@/components/sections/StaffDirectory';

const StaffDemo = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Our Team | Stevens Integrated Schools</title>
        <meta name="description" content="Meet our dedicated team of educators and staff at Stevens Integrated Schools." />
      </Helmet>

      <Navigation />

      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="container">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Our Team
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Meet our dedicated team of educators and staff committed to excellence in education.
            </p>
          </div>
        </section>

        <StaffDirectory />
      </main>

      <Footer />
    </div>
  );
};

export default StaffDemo;

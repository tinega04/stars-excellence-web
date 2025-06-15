
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/layouts/Navigation';
import Footer from '@/components/layouts/Footer';
import TourBookingForm from '@/components/forms/TourBookingForm';

const TourDemo = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Schedule a Tour | Stevens Integrated Schools</title>
        <meta name="description" content="Book a tour of our school and discover our learning environment." />
      </Helmet>

      <Navigation />

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 text-white">
          <div className="container">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Schedule Your Tour
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Experience our campus firsthand and see why Stevens Integrated Schools is the perfect place for your child's education.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl font-bold mb-4">
                  Book Your Visit
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll contact you to schedule your personalized tour.
                </p>
              </div>
              
              <TourBookingForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TourDemo;

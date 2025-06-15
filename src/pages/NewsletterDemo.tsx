
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/layouts/Navigation';
import Footer from '@/components/layouts/Footer';
import NewsletterSignupForm from '@/components/forms/NewsletterSignupForm';

const NewsletterDemo = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Newsletter Signup | Stevens Integrated Schools</title>
        <meta name="description" content="Subscribe to our newsletter for updates and announcements." />
      </Helmet>

      <Navigation />

      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="font-serif text-3xl font-bold mb-4">
                Stay Connected
              </h1>
              <p className="text-gray-600">
                Subscribe to our newsletter for the latest updates, events, and announcements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <NewsletterSignupForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsletterDemo;

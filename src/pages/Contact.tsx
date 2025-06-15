
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import ContactFormSection from "@/components/contact/ContactFormSection";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Contact Us | Stevens Integrated Schools</title>
        <meta name="description" content="Get in touch with Stevens Integrated Schools. Send us a message or visit our campus." />
      </Helmet>

      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20 text-white">
          <div className="container">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              We're here to answer your questions and help you learn more about our school community.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <h3 className="font-semibold text-xl mb-4">Visit Us</h3>
                <p className="text-gray-600">
                  Stevens Integrated Schools<br />
                  123 Education Street<br />
                  Lagos, Nigeria
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-xl mb-4">Call Us</h3>
                <p className="text-gray-600">
                  Phone: +234 xxx xxx xxxx<br />
                  WhatsApp: +234 xxx xxx xxxx
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-xl mb-4">Email Us</h3>
                <p className="text-gray-600">
                  info@stevensintegratedschools.com<br />
                  admissions@stevensintegratedschools.com
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;


import { useState } from "react";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import SEOHelmet from "@/components/layouts/SEOHelmet";
import OptimizedImage from "@/components/ui/OptimizedImage";
import AnnouncementsSection from "@/components/home/AnnouncementsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HeroBannersSection from "@/components/home/HeroBannersSection";
import NewsEventsSection from "@/components/home/NewsEventsSection";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHelmet />

      <Navigation />

      <main className="flex-grow">
        {/* Hero Carousel Section - Now using database content */}
        <HeroBannersSection />

        {/* Announcements Section */}
        <AnnouncementsSection />

        {/* Campuses Section */}
        <section className="py-12 md:py-16 bg-white" aria-labelledby="campuses-heading">
          <div className="container mx-auto px-4">
            <h2 id="campuses-heading" className="font-serif text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8 md:mb-12">Our Campuses</h2>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Nairobi Campus */}
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 md:h-64 overflow-hidden">
                  <OptimizedImage 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500&q=80" 
                    alt="Stevens Integrated Schools Nairobi Campus in Imara Daima with modern facilities" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-blue-700 mb-3">Nairobi Campus</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Located in Imara Daima, our flagship campus offers state-of-the-art facilities and a nurturing learning environment for students from kindergarten through junior school.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin size={16} className="mr-2" aria-hidden="true" />
                    <span>Imara Daima, Nairobi</span>
                  </div>
                  <Link 
                    to="/campuses"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300 group"
                    aria-label="Learn more about our Nairobi campus"
                  >
                    Learn More 
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </article>
              
              {/* Kitengela Campus */}
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 md:h-64 overflow-hidden">
                  <OptimizedImage 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500&q=80" 
                    alt="Stevens Integrated Schools Kitengela Campus in Airview with spacious grounds" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-blue-700 mb-3">Kitengela Campus</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Our Airview campus provides a spacious and serene environment for learning, with modern facilities set on expansive grounds perfect for holistic development.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin size={16} className="mr-2" aria-hidden="true" />
                    <span>Airview, Kitengela</span>
                  </div>
                  <Link 
                    to="/campuses"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300 group"
                    aria-label="Learn more about our Kitengela campus"
                  >
                    Learn More 
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CBC Curriculum Section */}
        <section className="py-12 md:py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-blue-800 mb-6">CBC Curriculum Excellence</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
              We implement the Competency-Based Curriculum (CBC) that focuses on developing essential skills, knowledge, and attitudes for the holistic growth of every child.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
              {/* Kindergarten */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=80&h=80&q=80" 
                    alt="Kindergarten learning icon representing early childhood education" 
                    className="w-8 h-8 md:w-12 md:h-12 object-contain rounded-full"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-bold text-blue-700 mb-3">Kindergarten</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Foundation learning through play-based activities, developing motor skills, creativity, and early literacy in a nurturing environment.
                </p>
              </div>
              
              {/* Lower Primary */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=80&h=80&q=80" 
                    alt="Primary education icon showing technology-enhanced learning" 
                    className="w-8 h-8 md:w-12 md:h-12 object-contain rounded-full"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-bold text-blue-700 mb-3">Primary School</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Building on the foundation with focus on literacy, numeracy, and core competencies while developing critical thinking skills.
                </p>
              </div>
              
              {/* Junior School */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=80&h=80&q=80" 
                    alt="Junior school icon representing advanced learning and skill development" 
                    className="w-8 h-8 md:w-12 md:h-12 object-contain rounded-full"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-bold text-blue-700 mb-3">Junior School</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Advanced learning with emphasis on creativity, practical skills, and preparing students for higher education and life beyond school.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8 md:mb-12">Why Choose Stevens Integrated Schools</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "CBC-Aligned Curriculum",
                  description: "Our curriculum fully aligns with CBC requirements, ensuring your child's education meets national standards and global best practices.",
                  image: "https://images.unsplash.com/photo-1469474038136-46273834b3fb?auto=format&fit=crop&w=64&h=64&q=80",
                  alt: "CBC curriculum icon representing quality education standards"
                },
                {
                  title: "Safe Environment",
                  description: "We prioritize student safety with secure facilities, trained staff supervision, and comprehensive safety protocols.",
                  image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=64&h=64&q=80",
                  alt: "Safety icon representing secure learning environment"
                },
                {
                  title: "Qualified Educators",
                  description: "Our teachers are experienced, certified professionals committed to educational excellence and continuous development.",
                  image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=64&h=64&q=80",
                  alt: "Qualified staff icon representing professional educators"
                },
                {
                  title: "Holistic Development",
                  description: "We offer diverse co-curricular activities including sports, arts, music, and leadership programs to nurture every talent.",
                  image: "https://images.unsplash.com/photo-1506744038136-46273f02e42e?auto=format&fit=crop&w=64&h=64&q=80",
                  alt: "Activities icon representing holistic student development"
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 hover:bg-blue-200 transition-colors">
                    <img 
                      src={feature.image}
                      alt={feature.alt}
                      className="w-8 h-8 object-contain rounded-full"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-blue-700 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* News & Events Section - Now using database content */}
        <NewsEventsSection />

        {/* Final CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Join the Stars of Excellence</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Give your child the gift of quality education in a nurturing environment. Applications for the next academic year are now open.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/admissions"
                className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Apply Now
              </Link>
              <Link 
                to="/portals"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Access Portals
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Index;

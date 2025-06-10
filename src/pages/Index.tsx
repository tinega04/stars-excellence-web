
import { useState } from "react";
import { Calendar, ChevronRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const heroSlides = [
    {
      title: "Nurturing Excellence From The Start",
      subtitle: "",
      description: "Empowering young minds through holistic education tailored for tomorrow's leaders.",
      primaryCTA: { text: "Explore Our Programs", link: "/academics" },
      secondaryCTA: null,
      backgroundImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&h=900&q=80",
      alt: "Clean classroom environment for student learning"
    },
    {
      title: "A Foundation for Lifelong Success",
      subtitle: "",
      description: "We prepare learners to think critically, act ethically, and grow confidently.",
      primaryCTA: { text: "Learn More", link: "/about" },
      secondaryCTA: null,
      backgroundImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&h=900&q=80",
      alt: "Students engaged in academic activities"
    },
    {
      title: "Tech Meets Tradition",
      subtitle: "",
      description: "We blend modern skills like coding and debate with strong academic values.",
      primaryCTA: { text: "See Our Vision", link: "/about" },
      secondaryCTA: null,
      backgroundImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&h=900&q=80",
      alt: "Children using laptops and learning together with technology"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Stevens Integrated Schools | Stars of Excellence</title>
        <meta name="description" content="Stevens Integrated Schools - Nurturing excellence in education through CBC curriculum across our Nairobi and Kitengela campuses. Quality education for kindergarten through junior school." />
        <meta name="keywords" content="Stevens Integrated Schools, CBC curriculum, quality education Kenya, Nairobi schools, Kitengela schools, private schools Kenya" />
      </Helmet>

      <Navigation />

      <main className="flex-grow">
        {/* Hero Carousel Section */}
        <section className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-96 md:h-[500px] lg:h-[600px] bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <img 
                        src={slide.backgroundImage}
                        alt={slide.alt}
                        className="object-cover w-full h-full"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                    <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-10">
                      <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-800 mb-4 max-w-4xl leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-gray-700 mb-8 max-w-2xl text-sm md:text-base lg:text-lg leading-relaxed">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
                          <Link to={slide.primaryCTA.link}>
                            {slide.primaryCTA.text}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 md:left-8" />
            <CarouselNext className="right-4 md:right-8" />
          </Carousel>
        </section>

        {/* Campuses Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8 md:mb-12">Our Campuses</h2>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Nairobi Campus */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 md:h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500&q=80" 
                    alt="Stevens Integrated Schools Nairobi Campus in Imara Daima with modern facilities" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-blue-700 mb-3">Nairobi Campus</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Located in Imara Daima, our flagship campus offers state-of-the-art facilities and a nurturing learning environment for students from kindergarten through junior school.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span>Imara Daima, Nairobi</span>
                  </div>
                  <Link 
                    to="/campuses"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300 group"
                  >
                    Learn More 
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              
              {/* Kitengela Campus */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 md:h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500&q=80" 
                    alt="Stevens Integrated Schools Kitengela Campus in Airview with spacious grounds" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-blue-700 mb-3">Kitengela Campus</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Our Airview campus provides a spacious and serene environment for learning, with modern facilities set on expansive grounds perfect for holistic development.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span>Airview, Kitengela</span>
                  </div>
                  <Link 
                    to="/campuses"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300 group"
                  >
                    Learn More 
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
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

        {/* News & Events Section */}
        <section className="py-12 md:py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8 md:mb-12">Latest News & Events</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Annual Sports Day 2025",
                  date: "June 15, 2025",
                  description: "Join us for our annual sports day celebration featuring competitions, performances, and fun activities for all grade levels.",
                  image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&h=400&q=80",
                  alt: "Students participating in annual sports day activities"
                },
                {
                  title: "CBC Parent Workshop",
                  date: "June 8, 2025",
                  description: "Parents are invited to learn about CBC implementation and discover effective strategies to support their children's learning journey at home.",
                  image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&h=400&q=80",
                  alt: "Parents attending educational workshop about CBC curriculum"
                },
                {
                  title: "New Science Lab Opening",
                  date: "May 28, 2025",
                  description: "We're excited to unveil our new state-of-the-art science laboratory at our Nairobi campus, enhancing hands-on learning experiences.",
                  image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=600&h=400&q=80",
                  alt: "Modern science laboratory with advanced equipment for student experiments"
                }
              ].map((news, index) => (
                <article key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-40 md:h-48 overflow-hidden">
                    <img 
                      src={news.image}
                      alt={news.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <time>{news.date}</time>
                    </div>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-blue-700 mb-3">{news.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
                      {news.description}
                    </p>
                    <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300 group text-sm">
                      Read More 
                      <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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

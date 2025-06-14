import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Us | Stevens Integrated Schools</title>
        <meta name="description" content="Stevens Integrated Schools, founded in 2004, is a nurturing learning community serving learners from early childhood through junior school across our Imara Daima and Airview campuses." />
        <meta name="keywords" content="Stevens Integrated Schools, CBC curriculum, private schools Nairobi, education Kenya, Imara Daima school, Airview school" />
        <link rel="canonical" href="https://stevensschools.com/about" />
      </Helmet>

      <Navigation />

      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 md:py-20 text-white">
        <div className="container">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">About Stevens Integrated Schools</h1>
          <p className="text-blue-100 mt-4 text-center md:text-left max-w-2xl">
            Nurturing excellence in education since 2004
          </p>
        </div>
      </div>
      
      <main className="container py-8 md:py-12 flex-grow">
        <div className="max-w-6xl mx-auto">
          <section className="mb-12 md:mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-blue-900 mb-6">Our Story</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Stevens Integrated Schools, founded in 2004, is a nurturing learning community that serves learners from early childhood through junior school. With two vibrant campuses in Imara Daima (Nairobi) and Airview (Kitengela), we deliver a rich academic experience grounded in Kenya's Competency-Based Curriculum (CBC).
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    More than just a place of learning, our school is a place of transformation — where students grow in knowledge, character, and confidence to impact their families and communities positively.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000"
                  alt="Stevens Integrated Schools campus showing modern facilities and learning environment" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8 md:my-12"></div>

          <section className="mb-12 md:mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 md:p-8 rounded-xl shadow-inner">
              <h2 className="text-2xl md:text-3xl font-serif text-blue-900 mb-6 text-center">Our Vision</h2>
              <blockquote className="text-lg md:text-xl text-gray-700 text-center italic leading-relaxed">
                "A school where learners receive holistic, quality education in order to transform their families and communities at large."
              </blockquote>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8 md:my-12"></div>

          <section className="mb-12 md:mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 md:p-8 rounded-xl shadow-inner">
              <h2 className="text-2xl md:text-3xl font-serif text-blue-900 mb-6 text-center">Our Mission</h2>
              <blockquote className="text-lg md:text-xl text-gray-700 text-center italic leading-relaxed">
                "To provide and advance holistic, quality education that develops young people into useful and productive members of their families and the wider society."
              </blockquote>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8 md:my-12"></div>

          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-blue-900 mb-8 text-center">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Trust in God",
                "Integrity",
                "Team Spirit", 
                "Professionalism",
                "Responsibility", 
                "Accountability",
                "Commitment to Service",
                "Excellence"
              ].map((value, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3">
                  <ChevronRight size={16} className="text-blue-600 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{value}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-gray-200 my-8 md:my-12"></div>

          <section className="mb-12 md:mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 md:p-8 rounded-xl shadow-inner">
              <h2 className="text-2xl md:text-3xl font-serif text-blue-900 mb-6 text-center">Our Belief</h2>
              <blockquote className="text-lg md:text-xl text-gray-700 text-center italic leading-relaxed">
                "We believe that all learners are capable — only that they all learn differently."
              </blockquote>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8 md:my-12"></div>

          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-blue-900 mb-8 text-center">Visit Our Campuses</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Imara Daima Campus</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our flagship campus in Nairobi with state-of-the-art facilities, modern classrooms, and comprehensive learning resources.
                </p>
                <Button asChild className="w-full">
                  <Link to="/campuses">Schedule a Visit</Link>
                </Button>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Airview Campus</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our Kitengela campus providing quality education in a serene environment with expansive grounds and modern facilities.
                </p>
                <Button asChild className="w-full">
                  <Link to="/campuses">Schedule a Visit</Link>
                </Button>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 md:p-8 rounded-xl shadow-xl text-center">
              <h2 className="text-2xl md:text-3xl font-serif mb-6">Join Our Community</h2>
              <p className="text-lg mb-8 text-blue-100 leading-relaxed max-w-2xl mx-auto">
                Discover how your child can benefit from our holistic approach to education and join the Stars of Excellence family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link to="/admissions" className="px-8">Apply Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                  <Link to="/contact" className="px-8">Contact Us</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

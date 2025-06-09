import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Calendar, Instagram, Facebook, ChevronRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

// Helper Components
function NavLink({ href, active, children }: { href: string; active?: boolean; children: React.ReactNode }) {
  return (
    <Link 
      to={href} 
      className={`font-medium transition duration-300 ${
        active ? 'text-blue-700' : 'text-gray-600 hover:text-blue-700'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, active, children }: { href: string; active?: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={href} 
      className={`block py-2 transition duration-300 ${
        active ? 'text-blue-700 font-medium' : 'text-gray-600 hover:text-blue-700'
      }`}
    >
      {children}
    </Link>
  );
}

// Main App Component
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortalsDropdownOpen, setIsPortalsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mr-3">
                <span className="font-serif font-bold text-xl">SIS</span>
              </div>
              <div className="hidden md:block">
                <h1 className="font-serif text-xl font-bold text-blue-700">Stevens Integrated Schools</h1>
                <p className="text-xs italic text-gray-600">Stars of Excellence</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 items-center">
              <NavLink href="/" active>Home</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/academics">Academics</NavLink>
              <NavLink href="/campuses">Campuses</NavLink>
              <NavLink href="/admissions">Admissions</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              
              {/* Portals Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsPortalsDropdownOpen(!isPortalsDropdownOpen)}
                  className="flex items-center font-medium text-gray-600 hover:text-blue-700 transition duration-300"
                >
                  Portals
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {isPortalsDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border">
                    <div className="py-1">
                      <Link
                        to="/portal/learner"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition duration-300"
                        onClick={() => setIsPortalsDropdownOpen(false)}
                      >
                        Learner Portal
                      </Link>
                      <Link
                        to="/portal/teacher"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition duration-300"
                        onClick={() => setIsPortalsDropdownOpen(false)}
                      >
                        Teacher Portal
                      </Link>
                      <Link
                        to="/portal/staff"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition duration-300"
                        onClick={() => setIsPortalsDropdownOpen(false)}
                      >
                        Staff Portal
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-blue-700" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-2">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-3">
                <MobileNavLink href="/" active>Home</MobileNavLink>
                <MobileNavLink href="/about">About Us</MobileNavLink>
                <MobileNavLink href="/academics">Academics</MobileNavLink>
                <MobileNavLink href="/campuses">Campuses</MobileNavLink>
                <MobileNavLink href="/admissions">Admissions</MobileNavLink>
                <MobileNavLink href="/contact">Contact</MobileNavLink>
                <div className="border-t pt-2 mt-2">
                  <p className="text-xs text-gray-500 mb-2">Portals</p>
                  <MobileNavLink href="/portal/learner">Learner Portal</MobileNavLink>
                  <MobileNavLink href="/portal/teacher">Teacher Portal</MobileNavLink>
                  <MobileNavLink href="/portal/staff">Staff Portal</MobileNavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] bg-blue-50 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&h=900" 
              alt="School campus" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-4">
              Welcome to Stevens Integrated Schools
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 italic mb-8">Stars of Excellence</p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md shadow-lg transition duration-300">
              Enroll Now
            </button>
          </div>
        </section>

        {/* Campuses Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-center text-blue-800 mb-12">Our Campuses</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Nairobi Campus */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500" 
                    alt="Nairobi Campus" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-blue-700 mb-2">Nairobi Campus</h3>
                  <p className="text-gray-600 mb-4">
                    Located in the heart of Nairobi, our main campus offers modern facilities and a conducive learning environment for students.
                  </p>
                  <button className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300">
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
              
              {/* Kitengela Campus */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500" 
                    alt="Kitengela Campus" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-blue-700 mb-2">Kitengela Campus</h3>
                  <p className="text-gray-600 mb-4">
                    Our Kitengela campus provides a spacious and serene environment for learning, with state-of-the-art facilities.
                  </p>
                  <button className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300">
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CBC Curriculum Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-center text-blue-800 mb-6">CBC Curriculum</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              We follow the Competency-Based Curriculum (CBC) that focuses on developing skills, knowledge, and attitudes for holistic growth of your child.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Kindergarten */}
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=80&h=80" 
                    alt="Kindergarten icon" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-blue-700 mb-2">Kindergarten</h3>
                <p className="text-gray-600">
                  Our kindergarten program focuses on early development through play-based learning and foundational skills.
                </p>
              </div>
              
              {/* Lower Primary */}
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=80&h=80" 
                    alt="Primary icon" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-blue-700 mb-2">Primary</h3>
                <p className="text-gray-600">
                  Building on the foundation, primary education focuses on literacy, numeracy, and core competencies.
                </p>
              </div>
              
              {/* Junior School */}
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=80&h=80" 
                    alt="Junior School icon" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-blue-700 mb-2">Junior School</h3>
                <p className="text-gray-600">
                  Junior school expands knowledge while developing critical thinking, creativity, and practical skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-center text-blue-800 mb-12">Why Choose Us</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* CBC-aligned */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1469474038136-46273834b3fb?auto=format&fit=crop&w=64&h=64" 
                    alt="CBC icon" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-blue-700 mb-2">CBC-Aligned</h3>
                <p className="text-gray-600">
                  Our curriculum is fully aligned with CBC requirements, ensuring your child's education meets national standards.
                </p>
              </div>
              
              {/* Safe Environment */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=64&h=64" 
                    alt="Safety icon" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-blue-700 mb-2">Safe Environment</h3>
                <p className="text-gray-600">
                  We prioritize student safety with secure facilities and vigilant staff supervision.
                </p>
              </div>
              
              {/* Qualified Staff */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=64&h=64" 
                    alt="Staff icon" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-blue-700 mb-2">Qualified Staff</h3>
                <p className="text-gray-600">
                  Our teachers are experienced, certified, and committed to educational excellence.
                </p>
              </div>
              
              {/* Co-curricular Activities */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273f02e42e?auto=format&fit=crop&w=64&h=64" 
                    alt="Activities icon" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-blue-700 mb-2">Co-curricular Activities</h3>
                <p className="text-gray-600">
                  We offer diverse activities to develop talents and skills beyond academics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* News & Events Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-center text-blue-800 mb-12">News & Events</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* News Item 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&h=400" 
                    alt="News event" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar size={16} className="mr-1" />
                    <span>May 15, 2025</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-blue-700 mb-2">Annual Sports Day</h3>
                  <p className="text-gray-600 mb-4">
                    Join us for our annual sports day celebration featuring competitions and performances from all grade levels.
                  </p>
                  <button className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300">
                    Read More <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
              
              {/* News Item 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&h=400" 
                    alt="News event" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar size={16} className="mr-1" />
                    <span>May 8, 2025</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-blue-700 mb-2">CBC Parent Workshop</h3>
                  <p className="text-gray-600 mb-4">
                    Parents are invited to learn more about CBC implementation and how to support their children's learning at home.
                  </p>
                  <button className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300">
                    Read More <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
              
              {/* News Item 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=600&h=400" 
                    alt="News event" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar size={16} className="mr-1" />
                    <span>April 28, 2025</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-blue-700 mb-2">New Science Lab Opening</h3>
                  <p className="text-gray-600 mb-4">
                    We're excited to announce the opening of our new state-of-the-art science laboratory at our Nairobi campus.
                  </p>
                  <button className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300">
                    Read More <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Join the Stars of Excellence</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Give your child the gift of quality education in a nurturing environment. Applications for the next intake are now open.
            </p>
            <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300">
              Apply Now
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Mail size={20} className="mr-2 mt-1 flex-shrink-0" />
                  <a href="mailto:stevensintergratedschools@gmail.com" className="hover:text-blue-300 transition duration-300">
                    stevensintergratedschools@gmail.com
                  </a>
                </div>
                <div className="flex items-start">
                  <Phone size={20} className="mr-2 mt-1 flex-shrink-0" />
                  <span>+254 123 456 789</span>
                </div>
                <div className="flex items-start">
                  <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p>Nairobi Campus: Imara Daima</p>
                    <p>Kitengela Campus: Airview</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-blue-300 transition duration-300">Home</Link></li>
                <li><Link to="/about" className="hover:text-blue-300 transition duration-300">About Us</Link></li>
                <li><Link to="/academics" className="hover:text-blue-300 transition duration-300">Academics</Link></li>
                <li><Link to="/campuses" className="hover:text-blue-300 transition duration-300">Campuses</Link></li>
                <li><Link to="/admissions" className="hover:text-blue-300 transition duration-300">Admissions</Link></li>
                <li><Link to="/contact" className="hover:text-blue-300 transition duration-300">Contact</Link></li>
              </ul>
            </div>
            
            {/* Social & Newsletter */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                    <path d="M16 8v8"></path>
                    <path d="M12 16v-8"></path>
                    <path d="M20 12V8h-4"></path>
                    <path d="M16 12a4 4 0 0 0 4 4"></path>
                  </svg>
                </a>
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition duration-300">
                  <Instagram size={20} />
                </a>
              </div>
              <p className="text-sm text-blue-200 mt-6">
                &copy; {new Date().getFullYear()} Stevens Integrated Schools. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;

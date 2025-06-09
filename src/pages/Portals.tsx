
import { Users, GraduationCap, UserCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, ChevronDown } from "lucide-react";

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

const Portals = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortalsDropdownOpen, setIsPortalsDropdownOpen] = useState(false);

  const portals = [
    {
      title: "Learner Portal",
      description: "Access your learning materials, assignments, fee statements, and track your academic progress.",
      icon: GraduationCap,
      link: "/portal/learner",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      features: ["Learning Materials", "Assignments", "Fee Statements", "Progress Tracking"]
    },
    {
      title: "Teacher Portal", 
      description: "Manage your classes, upload learning materials, track student progress, and collaborate with staff.",
      icon: Users,
      link: "/portal/teacher",
      color: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      features: ["Class Management", "Learning Materials", "Student Progress", "Collaboration Tools"]
    },
    {
      title: "Staff Portal",
      description: "Access administrative tools, manage student records, view results, and oversee school operations.",
      icon: UserCheck,
      link: "/portal/staff", 
      color: "bg-purple-600",
      hoverColor: "hover:bg-purple-700",
      features: ["Student Records", "Results Management", "Administrative Tools", "Reports"]
    }
  ];

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
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/academics">Academics</NavLink>
              <NavLink href="/campuses">Campuses</NavLink>
              <NavLink href="/admissions">Admissions</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              
              {/* Portals Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsPortalsDropdownOpen(!isPortalsDropdownOpen)}
                  className="flex items-center font-medium text-blue-700 transition duration-300"
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
                <MobileNavLink href="/">Home</MobileNavLink>
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
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-blue-800 mb-6">
              Choose Your Portal
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Access your personalized dashboard and manage your educational experience at Stevens Integrated Schools
            </p>
          </div>
        </section>

        {/* Portals Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {portals.map((portal, index) => {
                const IconComponent = portal.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className={`${portal.color} p-6`}>
                      <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4">
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-white text-center">
                        {portal.title}
                      </h3>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 mb-6 text-center">
                        {portal.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {portal.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link
                        to={portal.link}
                        className={`${portal.color} ${portal.hoverColor} text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition duration-300 group`}
                      >
                        Access Portal
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold text-blue-800 mb-6">Need Help?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              If you're having trouble accessing your portal or need assistance with your account, 
              our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:stevensintergratedschools@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Email Support
              </a>
              <a
                href="tel:+254123456789"
                className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Call Support
              </a>
            </div>
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
};

export default Portals;

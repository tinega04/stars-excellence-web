
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg md:text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail size={20} className="mt-1 flex-shrink-0 text-blue-300" />
                <div>
                  <a 
                    href="mailto:stevensintegratedschools@gmail.com" 
                    className="hover:text-blue-300 transition duration-300"
                  >
                    stevensintegratedschools@gmail.com
                  </a>
                  <p className="text-sm text-blue-200">General inquiries & admissions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="mt-1 flex-shrink-0 text-blue-300" />
                <div>
                  <h4 className="font-medium text-blue-100 mb-2">Branch Contacts</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium">Nairobi Branch:</p>
                      <a 
                        href="tel:+254712345678" 
                        className="hover:text-blue-300 transition duration-300"
                      >
                        +254 712 345 678
                      </a>
                    </div>
                    <div>
                      <p className="font-medium">Kitengela Branch:</p>
                      <a 
                        href="tel:+254798765432" 
                        className="hover:text-blue-300 transition duration-300"
                      >
                        +254 798 765 432
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-blue-200 mt-2">Mon-Fri: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-blue-300" />
                <div>
                  <p className="font-medium">Nairobi Campus: Imara Daima</p>
                  <p className="font-medium">Kitengela Campus: Airview</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg md:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-300 transition duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-300 transition duration-300">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-blue-300 transition duration-300">Academics</Link></li>
              <li><Link to="/campuses" className="hover:text-blue-300 transition duration-300">Campuses</Link></li>
              <li><Link to="/admissions" className="hover:text-blue-300 transition duration-300">Admissions</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300 transition duration-300">Contact</Link></li>
              <li><Link to="/portals" className="hover:text-blue-300 transition duration-300">Portal Access</Link></li>
            </ul>
          </div>
          
          {/* Social & Copyright */}
          <div>
            <h3 className="font-serif text-lg md:text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <div className="text-sm text-blue-200 space-y-2">
              <p>&copy; {new Date().getFullYear()} Stevens Integrated Schools.</p>
              <p>All rights reserved. | Stars of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

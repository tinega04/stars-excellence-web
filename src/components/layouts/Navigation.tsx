
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NavLinkProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}

function NavLink({ href, active, children }: NavLinkProps) {
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

function MobileNavLink({ href, active, children }: NavLinkProps) {
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

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortalsDropdownOpen, setIsPortalsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsPortalsDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={closeMenu}>
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mr-3 group-hover:bg-blue-700 transition-colors">
              <span className="font-serif font-bold text-xl">SIS</span>
            </div>
            <div className="hidden md:block">
              <h1 className="font-serif text-xl font-bold text-blue-700 group-hover:text-blue-800 transition-colors">
                Stevens Integrated Schools
              </h1>
              <p className="text-xs italic text-gray-600">Stars of Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink href="/" active={isActive('/')}>Home</NavLink>
            <NavLink href="/about" active={isActive('/about')}>About Us</NavLink>
            <NavLink href="/academics" active={isActive('/academics')}>Academics</NavLink>
            <NavLink href="/campuses" active={isActive('/campuses')}>Campuses</NavLink>
            <NavLink href="/admissions" active={isActive('/admissions')}>Admissions</NavLink>
            <NavLink href="/contact" active={isActive('/contact')}>Contact</NavLink>
            
            {/* Portals Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsPortalsDropdownOpen(!isPortalsDropdownOpen)}
                className={`flex items-center font-medium transition duration-300 focus:outline-none ${
                  isActive('/portals') || location.pathname.startsWith('/portal') 
                    ? 'text-blue-700' 
                    : 'text-gray-600 hover:text-blue-700'
                }`}
                aria-expanded={isPortalsDropdownOpen}
                aria-haspopup="true"
              >
                Portals
                <ChevronDown size={16} className={`ml-1 transition-transform ${isPortalsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isPortalsDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-100">
                  <div className="py-1">
                    <Link
                      to="/portal/learner"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition duration-300"
                      onClick={() => setIsPortalsDropdownOpen(false)}
                    >
                      Learner Portal
                    </Link>
                    <Link
                      to="/portal/staff"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition duration-300"
                      onClick={() => setIsPortalsDropdownOpen(false)}
                    >
                      Staff Portal
                    </Link>
                    <Link
                      to="/portal/learning"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition duration-300"
                      onClick={() => setIsPortalsDropdownOpen(false)}
                    >
                      Learning Portal
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 ml-4">
              <Button asChild variant="outline" size="sm">
                <Link to="/admissions">Apply Now</Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-blue-700 p-2 rounded-md hover:bg-blue-50 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-3">
              <MobileNavLink href="/" active={isActive('/')}>Home</MobileNavLink>
              <MobileNavLink href="/about" active={isActive('/about')}>About Us</MobileNavLink>
              <MobileNavLink href="/academics" active={isActive('/academics')}>Academics</MobileNavLink>
              <MobileNavLink href="/campuses" active={isActive('/campuses')}>Campuses</MobileNavLink>
              <MobileNavLink href="/admissions" active={isActive('/admissions')}>Admissions</MobileNavLink>
              <MobileNavLink href="/contact" active={isActive('/contact')}>Contact</MobileNavLink>
              <div className="border-t pt-2 mt-2">
                <p className="text-xs text-gray-500 mb-2 font-medium">Portals</p>
                <MobileNavLink href="/portal/learner" active={isActive('/portal/learner')}>Learner Portal</MobileNavLink>
                <MobileNavLink href="/portal/staff" active={isActive('/portal/staff')}>Staff Portal</MobileNavLink>
                <MobileNavLink href="/portal/learning" active={isActive('/portal/learning')}>Learning Portal</MobileNavLink>
              </div>
              <div className="border-t pt-2 mt-2 flex flex-col space-y-2">
                <Button asChild variant="outline" size="sm">
                  <Link to="/admissions" onClick={closeMenu}>Apply Now</Link>
                </Button>
                <Button asChild size="sm">
                  <Link to="/login" onClick={closeMenu}>Login</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;

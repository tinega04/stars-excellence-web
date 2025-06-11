
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import SEOHelmet from "@/components/layouts/SEOHelmet";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHelmet 
        title="Page Not Found - 404"
        description="The page you're looking for doesn't exist. Return to Stevens Integrated Schools homepage."
      />
      
      <Navigation />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-blue-800 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Sorry, the page you're looking for doesn't exist. It may have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
              <Link to="/" aria-label="Return to homepage">
                <Home size={20} className="mr-2" aria-hidden="true" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="#" onClick={() => window.history.back()} aria-label="Go back to previous page">
                <ArrowLeft size={20} className="mr-2" aria-hidden="true" />
                Go Back
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Need help finding what you're looking for?</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
              <Link to="/contact" className="text-blue-600 hover:text-blue-800 transition-colors">
                Contact Us
              </Link>
              <span className="hidden sm:inline text-gray-400">|</span>
              <Link to="/academics" className="text-blue-600 hover:text-blue-800 transition-colors">
                Our Programs
              </Link>
              <span className="hidden sm:inline text-gray-400">|</span>
              <Link to="/admissions" className="text-blue-600 hover:text-blue-800 transition-colors">
                Admissions
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;


import { Users, GraduationCap, UserCheck, ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";

const Portals = () => {
  const portals = [
    {
      title: "Learner Portal",
      description: "Access your learning materials, assignments, fee statements, and track your academic progress throughout your educational journey.",
      icon: GraduationCap,
      link: "/portal/learner",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      features: ["Learning Materials", "Assignments & Projects", "Fee Statements", "Progress Tracking", "Announcements"]
    },
    {
      title: "Educator Portal", 
      description: "Manage your classes, upload learning materials, track student progress, and access administrative tools for educational excellence.",
      icon: Users,
      link: "/portal/educator",
      color: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      features: ["Student Management", "Academic Records", "Document Center", "System Administration", "Reports & Analytics"]
    },
    {
      title: "Guardian Portal",
      description: "Monitor your children's academic progress, communicate with teachers, and stay updated on school activities and events.",
      icon: UserCheck,
      link: "/portal/guardian", 
      color: "bg-purple-600",
      hoverColor: "hover:bg-purple-700",
      features: ["Children's Progress", "Fee Management", "Teacher Communication", "School Events", "Academic Reports"]
    },
    {
      title: "Admin Portal",
      description: "Comprehensive system administration, user management, and oversight of all school operations and portal activities.",
      icon: Shield,
      link: "/portal/admin", 
      color: "bg-red-600",
      hoverColor: "hover:bg-red-700",
      features: ["User Management", "System Settings", "Security Controls", "Analytics Dashboard", "Database Management"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Portals | Stevens Integrated Schools</title>
        <meta name="description" content="Access your personalized portal at Stevens Integrated Schools. Choose from Learner, Educator, Guardian, or Admin portals to manage your educational experience." />
        <meta name="keywords" content="Stevens Integrated Schools portals, learner portal, educator portal, guardian portal, admin portal, student management system" />
      </Helmet>

      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
              Choose Your Portal
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Access your personalized dashboard and manage your educational experience at Stevens Integrated Schools. 
              Select the portal that matches your role to get started.
            </p>
          </div>
        </section>

        {/* Portals Grid */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {portals.map((portal, index) => {
                const IconComponent = portal.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className={`${portal.color} p-6`}>
                      <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4">
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-white text-center">
                        {portal.title}
                      </h3>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 mb-6 text-center leading-relaxed">
                        {portal.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {portal.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link
                        to={portal.link}
                        className={`${portal.color} ${portal.hoverColor} text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition duration-300 group focus:outline-none focus:ring-4 focus:ring-blue-300`}
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
        <section className="py-12 md:py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-blue-800 mb-6">Need Help Accessing Your Portal?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              If you're having trouble accessing your portal or need assistance with your account, 
              our support team is here to help you get connected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:stevensintegratedschools@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Email Support
              </a>
              <a
                href="tel:+254123456789"
                className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Call Support
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-500 max-w-lg mx-auto">
              <p>Support Hours: Monday - Friday, 8:00 AM - 5:00 PM</p>
              <p>Emergency assistance available outside business hours</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portals;

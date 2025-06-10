
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Award, Code, Shield, Heart, FileText, Calendar, MapPin, Eye, UserCheck } from "lucide-react";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Admissions = () => {
  const whyJoinFeatures = [
    {
      icon: Users,
      text: "Small class sizes for personalized attention"
    },
    {
      icon: Award,
      text: "Strong academic performance across all subjects"
    },
    {
      icon: Code,
      text: "Innovative programs in coding, chess, debate & music"
    },
    {
      icon: Shield,
      text: "Safe and inclusive environment"
    },
    {
      icon: Heart,
      text: "Highly qualified and passionate staff"
    }
  ];

  const admissionSteps = [
    {
      step: 1,
      icon: FileText,
      title: "Inquire",
      description: "Contact the school or fill out the online inquiry form."
    },
    {
      step: 2,
      icon: Eye,
      title: "Visit",
      description: "Schedule a school tour and meet the team."
    },
    {
      step: 3,
      icon: FileText,
      title: "Apply",
      description: "Fill out the application form and submit necessary documents."
    },
    {
      step: 4,
      icon: UserCheck,
      title: "Interview & Assessment",
      description: "We assess readiness and fit."
    },
    {
      step: 5,
      icon: Check,
      title: "Acceptance",
      description: "Receive offer letter and complete registration."
    }
  ];

  const requirements = [
    "Completed application form",
    "Child's birth certificate",
    "Recent passport-size photo",
    "Most recent school report (if transferring)",
    "Copy of parent/guardian ID"
  ];

  const enrollmentDates = [
    {
      intake: "January Intake",
      description: "Nursery to Grade 8",
      available: true
    },
    {
      intake: "May Mid-Year Entry",
      description: "Subject to availability",
      available: false
    },
    {
      intake: "September Intake",
      description: "Main Admissions for all classes",
      available: true
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -4,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconBounce = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Admissions | Stevens Integrated Schools</title>
        <meta name="description" content="Learn about our admissions process and join our learning community that celebrates every child's potential." />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <motion.div 
        className="bg-gradient-to-r from-blue-900 to-blue-800 py-20 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h1 
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Admissions
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join a learning community that celebrates every child's potential and prepares them for tomorrow's challenges.
          </motion.p>
        </div>
      </motion.div>

      <main className="flex-grow">
        {/* Why Join Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                A Holistic Environment for Every Learner
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe in nurturing well-rounded students prepared for tomorrow's challenges. 
                Our school fosters academic excellence, character development, and personal growth.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {whyJoinFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover="hover"
                  initial="rest"
                >
                  <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                    <motion.div variants={cardHover}>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <motion.div 
                            className="bg-blue-100 p-3 rounded-full"
                            variants={iconBounce}
                          >
                            <feature.icon className="h-6 w-6 text-blue-600" />
                          </motion.div>
                          <p className="text-gray-700 font-medium">{feature.text}</p>
                        </div>
                      </CardContent>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Admissions Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How to Enroll Your Child
              </h2>
              <p className="text-lg text-gray-600">
                Follow these simple steps to begin your child's journey with us
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {admissionSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover="hover"
                  initial="rest"
                  className="relative"
                >
                  <Card className="text-center hover:shadow-xl transition-all duration-300 h-full">
                    <motion.div variants={cardHover}>
                      <CardContent className="p-6">
                        <motion.div 
                          className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {step.step}
                        </motion.div>
                        <motion.div variants={iconBounce}>
                          <step.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                        </motion.div>
                        <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </CardContent>
                    </motion.div>
                  </Card>
                  
                  {/* Connecting line for larger screens */}
                  {index < admissionSteps.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-200"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Admission Requirements Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What You'll Need
                </h2>
                <p className="text-lg text-gray-600">
                  Ensure you have all the required documents for a smooth application process
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover="hover"
                initial="rest"
              >
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <motion.div variants={cardHover}>
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-700">Required Documents</CardTitle>
                      <CardDescription>Please prepare the following items for your application</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {requirements.map((requirement, index) => (
                          <motion.div 
                            key={index} 
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <motion.div 
                              className="bg-green-100 p-1 rounded-full"
                              whileHover={{ scale: 1.2 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <Check className="h-4 w-4 text-green-600" />
                            </motion.div>
                            <span className="text-gray-700">{requirement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enrollment Calendar Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Key Dates
                </h2>
                <p className="text-lg text-gray-600">
                  Plan your application around our intake schedules
                </p>
              </motion.div>

              <motion.div 
                className="grid md:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
              >
                {enrollmentDates.map((date, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover="hover"
                    initial="rest"
                  >
                    <Card className={`shadow-lg hover:shadow-xl transition-all duration-300 ${date.available ? 'border-blue-200' : 'border-gray-200'}`}>
                      <motion.div variants={cardHover}>
                        <CardHeader>
                          <div className="flex items-center space-x-2">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Calendar className={`h-5 w-5 ${date.available ? 'text-blue-600' : 'text-gray-400'}`} />
                            </motion.div>
                            <CardTitle className={`text-lg ${date.available ? 'text-blue-700' : 'text-gray-500'}`}>
                              {date.intake}
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-3">{date.description}</p>
                          <motion.div 
                            className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                              date.available 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {date.available ? 'Open for Applications' : 'Limited Availability'}
                          </motion.div>
                        </CardContent>
                      </motion.div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Ready to Begin?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join a learning community that celebrates every child's potential.
              </p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp}>
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-900 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Link to="/contact" className="flex items-center">
                      Apply Now
                    </Link>
                  </Button>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 active:scale-95"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Link to="/contact" className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Book a Tour
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Admissions;

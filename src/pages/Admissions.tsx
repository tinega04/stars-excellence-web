
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Award, Code, Shield, Heart, FileText, Calendar, MapPin, Eye, UserCheck } from "lucide-react";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import { Link } from "react-router-dom";

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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Admissions | Stevens Integrated Schools</title>
        <meta name="description" content="Learn about our admissions process and join our learning community that celebrates every child's potential." />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-20 text-white">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Join a learning community that celebrates every child's potential and prepares them for tomorrow's challenges.
          </p>
        </div>
      </div>

      <main className="flex-grow">
        {/* Why Join Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                A Holistic Environment for Every Learner
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe in nurturing well-rounded students prepared for tomorrow's challenges. 
                Our school fosters academic excellence, character development, and personal growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyJoinFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <p className="text-gray-700 font-medium">{feature.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Admissions Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How to Enroll Your Child
              </h2>
              <p className="text-lg text-gray-600">
                Follow these simple steps to begin your child's journey with us
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {admissionSteps.map((step, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.step}
                    </div>
                    <step.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Requirements Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What You'll Need
                </h2>
                <p className="text-lg text-gray-600">
                  Ensure you have all the required documents for a smooth application process
                </p>
              </div>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">Required Documents</CardTitle>
                  <CardDescription>Please prepare the following items for your application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="bg-green-100 p-1 rounded-full">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enrollment Calendar Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Key Dates
                </h2>
                <p className="text-lg text-gray-600">
                  Plan your application around our intake schedules
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {enrollmentDates.map((date, index) => (
                  <Card key={index} className={`shadow-lg ${date.available ? 'border-blue-200' : 'border-gray-200'}`}>
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Calendar className={`h-5 w-5 ${date.available ? 'text-blue-600' : 'text-gray-400'}`} />
                        <CardTitle className={`text-lg ${date.available ? 'text-blue-700' : 'text-gray-500'}`}>
                          {date.intake}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-3">{date.description}</p>
                      <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                        date.available 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {date.available ? 'Open for Applications' : 'Limited Availability'}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Ready to Begin?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join a learning community that celebrates every child's potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  <Link to="/contact" className="flex items-center">
                    Apply Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  <Link to="/contact" className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Book a Tour
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Admissions;

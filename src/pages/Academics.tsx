
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const Academics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Academics | Stevens Integrated Schools</title>
        <meta name="description" content="Discover our CBC-aligned academic programs from Kindergarten to Junior School. Quality education with modern teaching methods and holistic development." />
        <meta name="keywords" content="CBC curriculum, Stevens Integrated Schools academics, kindergarten, primary school, junior school, quality education Kenya" />
      </Helmet>

      <Navigation />

      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 md:py-20 text-white">
        <div className="container">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">Academic Excellence</h1>
          <p className="text-blue-100 mt-4 text-center md:text-left max-w-2xl">
            Nurturing minds through CBC-aligned curriculum and innovative teaching methods
          </p>
        </div>
      </div>
      
      <main className="container py-8 md:py-12 flex-grow">
        <div className="flex justify-center mb-6 md:mb-8">
          <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors">← Back to Home</Link>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-blue-800 mb-6">Our Academic Approach</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Stevens Integrated Schools, we follow the Competency-Based Curriculum (CBC) that focuses on developing 
              skills, knowledge, and attitudes for the holistic growth of your child. Our teaching methodology emphasizes 
              practical learning, critical thinking, and creativity while maintaining high academic standards.
            </p>
          </div>

          {/* Education Levels */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Kindergarten */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-blue-50 rounded-t-lg">
                <CardTitle className="text-xl md:text-2xl font-serif text-blue-800">Kindergarten</CardTitle>
                <CardDescription className="text-gray-600">Ages 4-6 years</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our kindergarten program creates a foundation for learning through play-based activities,
                  developing social skills, and introducing basic literacy and numeracy concepts.
                </p>
                <h3 className="font-medium text-blue-700 mb-3">Key Focus Areas:</h3>
                <ul className="space-y-2">
                  {[
                    "Development of motor skills",
                    "Introduction to phonics and numbers", 
                    "Creative expression through art and music",
                    "Social interaction and emotional development"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Primary */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-blue-50 rounded-t-lg">
                <CardTitle className="text-xl md:text-2xl font-serif text-blue-800">Primary School</CardTitle>
                <CardDescription className="text-gray-600">Ages 6-12 years</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our primary education program builds on the foundation with a focus on literacy, numeracy,
                  and developing core competencies across various subject areas.
                </p>
                <h3 className="font-medium text-blue-700 mb-3">Key Focus Areas:</h3>
                <ul className="space-y-2">
                  {[
                    "Literacy and language development",
                    "Mathematical concepts and problem-solving",
                    "Scientific inquiry and exploration", 
                    "Social studies and environmental awareness"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Junior School */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-blue-50 rounded-t-lg">
                <CardTitle className="text-xl md:text-2xl font-serif text-blue-800">Junior School</CardTitle>
                <CardDescription className="text-gray-600">Ages 12-15 years</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our junior school program expands knowledge while developing critical thinking,
                  creativity, and practical skills to prepare students for higher education.
                </p>
                <h3 className="font-medium text-blue-700 mb-3">Key Focus Areas:</h3>
                <ul className="space-y-2">
                  {[
                    "Advanced literacy and communication",
                    "Advanced mathematics and sciences",
                    "Digital literacy and technology skills",
                    "Life skills and career preparation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CBC Curriculum */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-blue-800 mb-6">CBC Curriculum Framework</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our curriculum implementation follows the Competency-Based Curriculum framework, focusing on developing 
              essential skills and competencies rather than memorization of facts.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-medium text-blue-700 mb-4">Core Competencies</h3>
                <div className="space-y-3">
                  {[
                    "Communication and collaboration",
                    "Critical thinking and problem solving",
                    "Creativity and imagination",
                    "Citizenship",
                    "Digital literacy",
                    "Learning to learn",
                    "Self-efficacy"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Checkbox id={`competency-${index}`} checked readOnly />
                      <label
                        htmlFor={`competency-${index}`}
                        className="text-sm font-medium text-gray-700 leading-none"
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-medium text-green-700 mb-4">Core Values</h3>
                <div className="space-y-3">
                  {[
                    "Respect",
                    "Responsibility",
                    "Integrity",
                    "Excellence",
                    "Patriotism",
                    "Unity",
                    "Peace",
                    "Social justice"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Checkbox id={`value-${index}`} checked readOnly />
                      <label
                        htmlFor={`value-${index}`}
                        className="text-sm font-medium text-gray-700 leading-none"
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-blue-800 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "What is the teacher to student ratio?",
                  answer: "We maintain a teacher to student ratio of 1:20 to ensure personalized attention for each child, allowing for better individual support and learning outcomes."
                },
                {
                  question: "Do you offer extracurricular activities?",
                  answer: "Yes, we offer a comprehensive range of extracurricular activities including sports (football, basketball, athletics), creative arts (music, drama, visual arts), STEM clubs, debate society, and various leadership programs to develop students' talents and interests beyond academics."
                },
                {
                  question: "How do you assess student progress?",
                  answer: "We use continuous assessment techniques including project-based learning, presentations, portfolios, peer assessments, and traditional tests to provide a comprehensive view of each student's progress and development across all learning areas."
                },
                {
                  question: "Do you offer special education services?",
                  answer: "Yes, we have dedicated support programs for students with special educational needs, including specialized teachers trained in inclusive education, individualized learning plans, and appropriate accommodations to ensure every child can succeed."
                },
                {
                  question: "How do you integrate technology in learning?",
                  answer: "We incorporate modern technology through digital learning platforms, computer labs, interactive whiteboards, and age-appropriate educational software to enhance learning experiences and prepare students for the digital age."
                }
              ].map((faq, index) => (
                <Collapsible key={index} className="border rounded-lg hover:shadow-md transition-shadow">
                  <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium hover:bg-blue-50 transition-colors rounded-lg">
                    <span className="text-gray-900">{faq.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down h-5 w-5 text-blue-600 transition-transform"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 pt-0 text-gray-600 border-t leading-relaxed">
                    {faq.answer}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Academics;

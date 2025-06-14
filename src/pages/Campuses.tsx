
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Campuses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Campuses | Stevens Integrated Schools</title>
        <meta name="description" content="Explore our modern campuses in Nairobi (Imara Daima) and Kitengela (Airview) with state-of-the-art facilities and conducive learning environments." />
      </Helmet>

      <Navigation />

      <div className="bg-blue-900 py-16 md:py-20 text-white">
        <div className="container">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">Our Campuses</h1>
          <p className="text-blue-100 mt-4 text-center md:text-left max-w-2xl">
            Modern facilities designed for excellence in education
          </p>
        </div>
      </div>
      
      <main className="container py-8 md:py-12 flex-grow">
        <div className="max-w-6xl mx-auto">
          <p className="text-xl text-gray-600 mb-8 text-center">
            Stevens Integrated Schools operates multiple campuses equipped with modern facilities
            to ensure a conducive learning environment for all students.
          </p>
          
          <Tabs defaultValue="nairobi" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="nairobi">Nairobi Campus</TabsTrigger>
              <TabsTrigger value="kitengela">Kitengela Campus</TabsTrigger>
            </TabsList>
            
            <TabsContent value="nairobi">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Card>
                    <div className="h-64 w-full overflow-hidden">
                      <img 
                        src="/placeholder.svg" 
                        alt="Nairobi Campus" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-serif text-blue-800">Nairobi Campus</CardTitle>
                      <CardDescription>Our main campus located in Imara Daima</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="prose">
                        <p>
                          Located in Imara Daima, our main campus offers modern facilities and a conducive learning 
                          environment for students. The campus features spacious classrooms, state-of-the-art laboratories,
                          a well-stocked library, and excellent sporting facilities.
                        </p>
                        <p>
                          The Nairobi campus serves all educational levels from kindergarten through junior school, with 
                          dedicated spaces for each age group.
                        </p>
                        <h3 className="text-lg font-medium mt-4">Facilities</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Modern classrooms with digital learning capabilities</li>
                          <li>Science and computer laboratories</li>
                          <li>Large library with extensive resources</li>
                          <li>Multipurpose hall for events and performances</li>
                          <li>Sports fields and courts</li>
                          <li>Secure play areas for younger students</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                        <span>Imara Daima, Nairobi</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-2 text-blue-600" />
                        <a 
                          href="tel:+254712345678"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          +254 712 345 678
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-blue-600" />
                        <span>Mon-Fri: 7:30 AM - 4:30 PM</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 mr-2 text-blue-600" />
                        <a href="mailto:stevensintegratedschools@gmail.com" className="text-blue-600 hover:underline">stevensintegratedschools@gmail.com</a>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Virtual Tour</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Take a virtual tour of our campus facilities.</p>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded px-4 py-2 w-full">
                        Start Tour
                      </button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="kitengela">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Card>
                    <div className="h-64 w-full overflow-hidden">
                      <img 
                        src="/placeholder.svg" 
                        alt="Kitengela Campus" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-serif text-blue-800">Kitengela Campus</CardTitle>
                      <CardDescription>Our spacious campus in Airview</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="prose">
                        <p>
                          Our Airview campus in Kitengela provides a spacious and serene environment for learning, with state-of-the-art 
                          facilities. The campus is set on expansive grounds, offering ample space for both academic and 
                          recreational activities.
                        </p>
                        <p>
                          The campus caters to all levels of education, with specialized facilities for different age groups
                          and learning needs.
                        </p>
                        <h3 className="text-lg font-medium mt-4">Facilities</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Spacious, well-equipped classrooms</li>
                          <li>Advanced science and technology labs</li>
                          <li>Resource center and digital library</li>
                          <li>Large indoor sports hall</li>
                          <li>Extensive outdoor sports fields</li>
                          <li>Dedicated arts and music spaces</li>
                          <li>School garden for environmental studies</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                        <span>Airview, Kitengela</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-2 text-blue-600" />
                        <a 
                          href="tel:+254798765432"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          +254 798 765 432
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-blue-600" />
                        <span>Mon-Fri: 7:30 AM - 4:30 PM</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 mr-2 text-blue-600" />
                        <a href="mailto:stevensintegratedschools@gmail.com" className="text-blue-600 hover:underline">stevensintegratedschools@gmail.com</a>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Virtual Tour</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Take a virtual tour of our campus facilities.</p>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded px-4 py-2 w-full">
                        Start Tour
                      </button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Campuses;

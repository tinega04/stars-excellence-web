
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Shaping Tomorrow's
                <span className="text-blue-900 block">Leaders Today</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Excellence Academy, we nurture young minds through innovative education, 
                character development, and a commitment to academic excellence that prepares 
                students for success in an ever-changing world.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-4">
                Schedule Tour
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">500+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">50+</div>
                <div className="text-gray-600">Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-200 to-indigo-300 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=800"
                alt="Students learning together"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-2xl font-bold text-blue-900">A+</div>
              <div className="text-gray-600">School Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

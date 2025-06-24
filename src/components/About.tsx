
import { Award, Users, BookOpen, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Our rigorous curriculum and dedicated faculty ensure every student reaches their full potential."
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "A nurturing environment where students, teachers, and families work together towards success."
    },
    {
      icon: BookOpen,
      title: "Innovative Learning",
      description: "Modern teaching methods and technology integration prepare students for the digital age."
    },
    {
      icon: Target,
      title: "Character Development",
      description: "We focus on building strong moral values and leadership skills alongside academic achievement."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Excellence Academy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over two decades, we've been committed to providing exceptional education 
            that prepares students not just for tests, but for life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To provide a transformative educational experience that empowers students 
                to become confident, compassionate, and capable leaders who will make a 
                positive impact in their communities and the world.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that every child has unique potential, and our role is to 
                nurture, challenge, and inspire them to discover and develop their talents 
                in a supportive and inclusive environment.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400"
                alt="School community"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Palette, Calculator, Globe } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Elementary Program",
      description: "Building strong foundations in literacy, numeracy, and social skills.",
      grade: "Grades K-5",
      highlights: ["Small class sizes", "Integrated curriculum", "Character education"]
    },
    {
      icon: Calculator,
      title: "Middle School",
      description: "Preparing students for academic challenges with personalized learning.",
      grade: "Grades 6-8",
      highlights: ["STEM focus", "Leadership opportunities", "Extracurricular activities"]
    },
    {
      icon: Globe,
      title: "High School",
      description: "College preparatory curriculum with advanced placement options.",
      grade: "Grades 9-12",
      highlights: ["AP courses", "College counseling", "Career guidance"]
    },
    {
      icon: Palette,
      title: "Arts & Culture",
      description: "Comprehensive arts education fostering creativity and expression.",
      grade: "All Grades",
      highlights: ["Music program", "Visual arts", "Drama club"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Academic Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive education programs designed to meet the unique needs of students 
            at every stage of their academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                        <Icon className="h-6 w-6 text-blue-900" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">
                        {program.title}
                      </CardTitle>
                      <CardDescription className="text-blue-600 font-medium">
                        {program.grade}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {program.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white">
            View Detailed Curriculum
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;

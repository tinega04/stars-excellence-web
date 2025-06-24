
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, FileText, Users } from "lucide-react";

const Admissions = () => {
  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete our online application form with required documents."
    },
    {
      icon: Calendar,
      title: "Schedule Interview",
      description: "Meet with our admissions team and tour our facilities."
    },
    {
      icon: Users,
      title: "Assessment Day",
      description: "Student evaluation and parent information session."
    },
    {
      icon: CheckCircle,
      title: "Enrollment",
      description: "Receive admission decision and complete enrollment process."
    }
  ];

  const requirements = [
    "Completed application form",
    "Previous academic records",
    "Birth certificate",
    "Medical records and immunizations",
    "Two recommendation letters",
    "Application fee payment"
  ];

  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our School Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We welcome students who are eager to learn, grow, and contribute to our 
            vibrant academic community. Start your journey with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Admission Process
            </h3>
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                        <Icon className="h-5 w-5 text-blue-900" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Application Requirements</CardTitle>
                <CardDescription>
                  Please ensure you have all required documents before submitting your application.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Applications for the upcoming academic year are now open. 
            Don't miss this opportunity to join our exceptional learning community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-900 hover:bg-gray-100">
              Start Application
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Schedule Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;

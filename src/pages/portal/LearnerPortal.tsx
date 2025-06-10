
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { BookOpen, Calendar, Award, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import { useToast } from "@/hooks/use-toast";

const LearnerPortal = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Welcome to Learner Portal",
      description: "Logged into Learning Portal as Guest",
    });
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Learner Portal | Stevens Integrated Schools</title>
        <meta name="description" content="Access your learning materials, assignments, and track your academic progress." />
      </Helmet>

      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Learner Portal
            </h1>
            <p className="text-lg text-gray-600">
              Welcome back! Let's continue your learning journey.
            </p>
          </div>

          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
              <TabsTrigger value="homework">Homework</TabsTrigger>
              <TabsTrigger value="results">Exam Results</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <p className="text-xs text-muted-foreground">This term</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-600">3</div>
                    <p className="text-xs text-muted-foreground">Due this week</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
                    <Award className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">B+</div>
                    <p className="text-xs text-muted-foreground">Current term</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                    <CardDescription>Your latest learning activities</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Mathematics Assignment Submitted</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Science Quiz Completed</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">English Essay Draft</p>
                        <p className="text-xs text-gray-500">3 days ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Important dates and deadlines</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">Science Fair Project</p>
                        <p className="text-xs text-gray-500">Due in 5 days</p>
                      </div>
                      <div className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                        Urgent
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">Mathematics Test</p>
                        <p className="text-xs text-gray-500">Next Monday</p>
                      </div>
                      <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        Exam
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">Field Trip Registration</p>
                        <p className="text-xs text-gray-500">Closes Friday</p>
                      </div>
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        Event
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="attendance">
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Record</CardTitle>
                  <CardDescription>Your attendance history and statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>This Week</span>
                      <span className="font-semibold text-green-600">5/5 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>This Month</span>
                      <span className="font-semibold text-green-600">19/20 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>This Term</span>
                      <span className="font-semibold text-green-600">57/60 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="homework">
              <Card>
                <CardHeader>
                  <CardTitle>Homework & Assignments</CardTitle>
                  <CardDescription>Track your assignments and submissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Mathematics - Algebra Problems</h4>
                        <p className="text-sm text-gray-500">Due: Tomorrow</p>
                      </div>
                      <Button size="sm">Submit</Button>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Science - Lab Report</h4>
                        <p className="text-sm text-gray-500">Due: Friday</p>
                      </div>
                      <Button size="sm" variant="outline">Draft</Button>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg bg-green-50">
                      <div>
                        <h4 className="font-medium">English - Essay</h4>
                        <p className="text-sm text-green-600">Submitted</p>
                      </div>
                      <Button size="sm" variant="ghost" disabled>Completed</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results">
              <Card>
                <CardHeader>
                  <CardTitle>Exam Results</CardTitle>
                  <CardDescription>Your academic performance and grades</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Mathematics Mid-Term</h4>
                        <p className="text-sm text-gray-500">Term 2, 2024</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-blue-600">B+</div>
                        <div className="text-sm text-gray-500">85%</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Science Quiz</h4>
                        <p className="text-sm text-gray-500">Term 2, 2024</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-green-600">A-</div>
                        <div className="text-sm text-gray-500">92%</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">English Composition</h4>
                        <p className="text-sm text-gray-500">Term 2, 2024</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-blue-600">B</div>
                        <div className="text-sm text-gray-500">78%</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LearnerPortal;

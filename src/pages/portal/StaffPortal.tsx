
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Users, Upload, Calendar, BarChart3, FileText, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import { useToast } from "@/hooks/use-toast";

const StaffPortal = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Welcome to Staff Portal",
      description: "Logged into Staff Portal as Guest",
    });
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Staff Portal | Stevens Integrated Schools</title>
        <meta name="description" content="Manage classes, upload resources, and track student performance." />
      </Helmet>

      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Staff Portal
            </h1>
            <p className="text-lg text-gray-600">
              Manage classes, upload resources, and track performance.
            </p>
          </div>

          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">156</div>
                    <p className="text-xs text-muted-foreground">Across all classes</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Classes Today</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">6</div>
                    <p className="text-xs text-muted-foreground">2 completed</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-600">12</div>
                    <p className="text-xs text-muted-foreground">Assignments to grade</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                    <CardDescription>Latest classroom activities</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Uploaded Math Quiz Results</p>
                        <p className="text-xs text-gray-500">1 hour ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Created Science Lesson Plan</p>
                        <p className="text-xs text-gray-500">3 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Graded English Essays</p>
                        <p className="text-xs text-gray-500">Yesterday</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Class Performance</CardTitle>
                    <CardDescription>Student progress overview</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">Grade 5A - Mathematics</p>
                        <p className="text-xs text-gray-500">Average: 82%</p>
                      </div>
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        Excellent
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">Grade 4B - Science</p>
                        <p className="text-xs text-gray-500">Average: 76%</p>
                      </div>
                      <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        Good
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">Grade 6A - English</p>
                        <p className="text-xs text-gray-500">Average: 69%</p>
                      </div>
                      <div className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                        Needs Focus
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="materials">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upload Learning Materials</CardTitle>
                    <CardDescription>Share resources with your students</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Material Title</label>
                        <Input placeholder="Enter material title" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Subject</label>
                        <Input placeholder="Select subject" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Upload File</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">Drag and drop files here, or click to browse</p>
                        <Button className="mt-4">Choose Files</Button>
                      </div>
                    </div>
                    <Button className="w-full">Upload Material</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Uploads</CardTitle>
                    <CardDescription>Your recently uploaded materials</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">Algebra Worksheets</h4>
                          <p className="text-sm text-gray-500">Mathematics • Uploaded 2 hours ago</p>
                        </div>
                        <Button size="sm" variant="outline">Edit</Button>
                      </div>
                      <div className="flex justify-between items-center p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">Science Lab Instructions</h4>
                          <p className="text-sm text-gray-500">Science • Uploaded yesterday</p>
                        </div>
                        <Button size="sm" variant="outline">Edit</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="schedule">
              <Card>
                <CardHeader>
                  <CardTitle>Class Schedules</CardTitle>
                  <CardDescription>Manage your teaching timetable</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg bg-blue-50">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium">Mathematics</h4>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Grade 5A</span>
                        </div>
                        <p className="text-sm text-gray-600">8:00 AM - 9:00 AM</p>
                        <p className="text-xs text-gray-500">Room 101</p>
                      </div>
                      <div className="p-4 border rounded-lg bg-green-50">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium">Science</h4>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Grade 4B</span>
                        </div>
                        <p className="text-sm text-gray-600">10:00 AM - 11:00 AM</p>
                        <p className="text-xs text-gray-500">Lab 1</p>
                      </div>
                      <div className="p-4 border rounded-lg bg-orange-50">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium">English</h4>
                          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">Grade 6A</span>
                        </div>
                        <p className="text-sm text-gray-600">2:00 PM - 3:00 PM</p>
                        <p className="text-xs text-gray-500">Room 205</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Reports</CardTitle>
                  <CardDescription>Generate and view student performance reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Term 2 Grade Summary</h4>
                        <p className="text-sm text-gray-500">All classes • Generated last week</p>
                      </div>
                      <Button size="sm">Download</Button>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Attendance Report</h4>
                        <p className="text-sm text-gray-500">Monthly summary • Auto-generated</p>
                      </div>
                      <Button size="sm">View</Button>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Assessment Analytics</h4>
                        <p className="text-sm text-gray-500">Grade trends and insights</p>
                      </div>
                      <Button size="sm">Generate</Button>
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

export default StaffPortal;

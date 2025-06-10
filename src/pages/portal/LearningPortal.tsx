
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FileText, Video, Link as LinkIcon, Download, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import { useToast } from "@/hooks/use-toast";

const LearningPortal = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Welcome to Learning Portal",
      description: "Logged into Learning Portal as Guest",
    });
  }, [toast]);

  const resources = [
    {
      id: 1,
      title: "Mathematics Grade 5 - Fractions",
      type: "PDF",
      subject: "Mathematics",
      icon: FileText,
      size: "2.3 MB",
      downloads: 45,
      color: "text-red-600"
    },
    {
      id: 2,
      title: "Science Experiment: Water Cycle",
      type: "Video",
      subject: "Science",
      icon: Video,
      size: "15.2 MB",
      downloads: 32,
      color: "text-blue-600"
    },
    {
      id: 3,
      title: "English Grammar Exercises",
      type: "PDF",
      subject: "English",
      icon: FileText,
      size: "1.8 MB",
      downloads: 67,
      color: "text-red-600"
    },
    {
      id: 4,
      title: "Interactive History Timeline",
      type: "Link",
      subject: "History",
      icon: LinkIcon,
      size: "External",
      downloads: 23,
      color: "text-green-600"
    },
    {
      id: 5,
      title: "Art Techniques Tutorial",
      type: "Video",
      subject: "Art",
      icon: Video,
      size: "8.7 MB",
      downloads: 18,
      color: "text-blue-600"
    },
    {
      id: 6,
      title: "Geography Maps Collection",
      type: "PDF",
      subject: "Geography",
      icon: FileText,
      size: "5.1 MB",
      downloads: 41,
      color: "text-red-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Learning Portal | Stevens Integrated Schools</title>
        <meta name="description" content="Find class notes, assignments, and extra reading materials here." />
      </Helmet>

      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Learning Portal
            </h1>
            <p className="text-lg text-gray-600">
              Find class notes, assignments, and extra reading materials here.
            </p>
          </div>

          <Tabs defaultValue="all" className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <TabsList>
                <TabsTrigger value="all">All Resources</TabsTrigger>
                <TabsTrigger value="pdfs">PDFs</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="links">Links</TabsTrigger>
              </TabsList>
              
              <div className="w-full md:w-auto">
                <Input placeholder="Search resources..." className="md:w-64" />
              </div>
            </div>

            <TabsContent value="all" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => {
                  const IconComponent = resource.icon;
                  return (
                    <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <IconComponent className={`h-6 w-6 ${resource.color}`} />
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {resource.subject}
                          </span>
                        </div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <span>{resource.type}</span>
                          <span>•</span>
                          <span>{resource.size}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Download className="h-4 w-4" />
                            <span>{resource.downloads} downloads</span>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="pdfs">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.filter(r => r.type === "PDF").map((resource) => {
                  const IconComponent = resource.icon;
                  return (
                    <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <IconComponent className={`h-6 w-6 ${resource.color}`} />
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {resource.subject}
                          </span>
                        </div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <span>{resource.type}</span>
                          <span>•</span>
                          <span>{resource.size}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Download className="h-4 w-4" />
                            <span>{resource.downloads} downloads</span>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.filter(r => r.type === "Video").map((resource) => {
                  const IconComponent = resource.icon;
                  return (
                    <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <IconComponent className={`h-6 w-6 ${resource.color}`} />
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {resource.subject}
                          </span>
                        </div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <span>{resource.type}</span>
                          <span>•</span>
                          <span>{resource.size}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Download className="h-4 w-4" />
                            <span>{resource.downloads} downloads</span>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="links">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.filter(r => r.type === "Link").map((resource) => {
                  const IconComponent = resource.icon;
                  return (
                    <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <IconComponent className={`h-6 w-6 ${resource.color}`} />
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {resource.subject}
                          </span>
                        </div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <span>{resource.type}</span>
                          <span>•</span>
                          <span>{resource.size}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Download className="h-4 w-4" />
                            <span>{resource.downloads} visits</span>
                          </div>
                          <Button size="sm">
                            <LinkIcon className="h-4 w-4 mr-1" />
                            Open Link
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LearningPortal;

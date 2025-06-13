
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, BookOpen, Calendar, ClipboardList, Award, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const navigation = [
  { name: 'Dashboard', href: '/portal/learner', icon: LayoutDashboard },
  { name: 'Learning Materials', href: '/portal/learner/materials', icon: BookOpen },
  { name: 'Attendance', href: '/portal/learner/attendance', icon: Calendar },
  { name: 'Assignments', href: '/portal/learner/assignments', icon: ClipboardList },
  { name: 'Exam Results', href: '/portal/learner/results', icon: Award },
  { name: 'Announcements', href: '/portal/learner/announcements', icon: Bell },
];

const LearningMaterials = () => {
  const materials = {
    'Term 1': [
      { subject: 'Mathematics', title: 'Algebra Basics', type: 'PDF', size: '2.5 MB' },
      { subject: 'Science', title: 'Chemistry Introduction', type: 'PDF', size: '3.1 MB' },
      { subject: 'English', title: 'Grammar Rules', type: 'PDF', size: '1.8 MB' },
    ],
    'Term 2': [
      { subject: 'Mathematics', title: 'Geometry Fundamentals', type: 'PDF', size: '2.8 MB' },
      { subject: 'Science', title: 'Physics Principles', type: 'PDF', size: '4.2 MB' },
      { subject: 'English', title: 'Essay Writing Guide', type: 'PDF', size: '2.1 MB' },
      { subject: 'Social Studies', title: 'World History', type: 'PDF', size: '5.5 MB' },
    ]
  };

  return (
    <PortalLayout portalType="learner" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Learning Materials</h2>
          <p className="text-muted-foreground">
            Access your study materials and resources for Grade 4
          </p>
        </div>
        
        <Tabs defaultValue="Term 2" className="space-y-6">
          <TabsList>
            <TabsTrigger value="Term 1">Term 1</TabsTrigger>
            <TabsTrigger value="Term 2">Term 2 (Current)</TabsTrigger>
          </TabsList>

          {Object.entries(materials).map(([term, termMaterials]) => (
            <TabsContent key={term} value={term}>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {termMaterials.map((material, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">{material.subject}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-medium">{material.title}</h4>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{material.type}</span>
                          <span>{material.size}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </PortalLayout>
  );
};

export default LearningMaterials;

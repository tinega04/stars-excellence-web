
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, BookOpen, Calendar, ClipboardList, Award, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Dashboard', href: '/portal/learner', icon: LayoutDashboard },
  { name: 'Learning Materials', href: '/portal/learner/materials', icon: BookOpen },
  { name: 'Attendance', href: '/portal/learner/attendance', icon: Calendar },
  { name: 'Assignments', href: '/portal/learner/assignments', icon: ClipboardList },
  { name: 'Exam Results', href: '/portal/learner/results', icon: Award },
  { name: 'Announcements', href: '/portal/learner/announcements', icon: Bell },
];

const LearnerAssignments = () => {
  const assignments = {
    upcoming: [
      { subject: 'Mathematics', title: 'Algebra Problems', dueDate: 'Tomorrow', priority: 'high' },
      { subject: 'Science', title: 'Lab Report', dueDate: 'Friday', priority: 'medium' },
    ],
    inProgress: [
      { subject: 'English', title: 'Essay Draft', dueDate: 'Next Monday', priority: 'medium' },
    ],
    submitted: [
      { subject: 'Mathematics', title: 'Geometry Quiz', submittedDate: '2 days ago', grade: 'B+' },
      { subject: 'Science', title: 'Chemistry Worksheet', submittedDate: '1 week ago', grade: 'A-' },
    ]
  };

  return (
    <PortalLayout portalType="learner" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Assignments</h2>
          <p className="text-muted-foreground">
            Track your assignments and submissions
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="inProgress">In Progress</TabsTrigger>
            <TabsTrigger value="submitted">Submitted</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="space-y-4">
              {assignments.upcoming.map((assignment, index) => (
                <Card key={index}>
                  <CardContent className="flex justify-between items-center p-4">
                    <div>
                      <h4 className="font-medium">{assignment.subject} - {assignment.title}</h4>
                      <p className="text-sm text-muted-foreground">Due: {assignment.dueDate}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        assignment.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {assignment.priority}
                      </span>
                      <Button size="sm">Start</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="inProgress">
            <div className="space-y-4">
              {assignments.inProgress.map((assignment, index) => (
                <Card key={index}>
                  <CardContent className="flex justify-between items-center p-4">
                    <div>
                      <h4 className="font-medium">{assignment.subject} - {assignment.title}</h4>
                      <p className="text-sm text-muted-foreground">Due: {assignment.dueDate}</p>
                    </div>
                    <Button size="sm" variant="outline">Continue</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="submitted">
            <div className="space-y-4">
              {assignments.submitted.map((assignment, index) => (
                <Card key={index}>
                  <CardContent className="flex justify-between items-center p-4">
                    <div>
                      <h4 className="font-medium">{assignment.subject} - {assignment.title}</h4>
                      <p className="text-sm text-muted-foreground">Submitted: {assignment.submittedDate}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-blue-600">{assignment.grade}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PortalLayout>
  );
};

export default LearnerAssignments;

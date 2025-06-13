
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { 
  LayoutDashboard, 
  BookOpen, 
  ClipboardList, 
  Users, 
  Calendar,
  FileText,
  MessageSquare,
  Plus,
  Edit
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const navigation = [
  { name: 'Dashboard', href: '/portal/educator', icon: LayoutDashboard },
  { name: 'My Subjects', href: '/portal/educator/subjects', icon: BookOpen },
  { name: 'Results Submission', href: '/portal/educator/results', icon: ClipboardList },
  { name: 'Learning Materials', href: '/portal/educator/materials', icon: FileText },
  { name: 'Teaching Resources', href: '/portal/educator/resources', icon: BookOpen },
  { name: 'Timetable', href: '/portal/educator/timetable', icon: Calendar },
  { name: 'System Messages', href: '/portal/educator/messages', icon: MessageSquare },
  { name: 'Document Center', href: '/portal/educator/documents', icon: FileText },
];

const Subjects = () => {
  const subjects = [
    {
      name: 'Mathematics',
      classes: ['Grade 6A', 'Grade 7A', 'Grade 7B'],
      students: 42,
      assignments: 8
    },
    {
      name: 'Science',
      classes: ['Grade 6B', 'Grade 8A'],
      students: 35,
      assignments: 6
    },
    {
      name: 'English Literature',
      classes: ['Grade 8A', 'Grade 9A'],
      students: 28,
      assignments: 5
    },
    {
      name: 'History',
      classes: ['Grade 9A'],
      students: 22,
      assignments: 4
    }
  ];

  return (
    <PortalLayout portalType="educator" navigation={navigation}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">My Subjects & Classes</h2>
            <p className="text-muted-foreground">
              Manage your assigned subjects and class groupings
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Assignment
          </Button>
        </div>

        <div className="grid gap-6">
          {subjects.map((subject, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{subject.name}</CardTitle>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Manage
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <h4 className="font-medium mb-2">Assigned Classes</h4>
                    <div className="flex flex-wrap gap-2">
                      {subject.classes.map((className, idx) => (
                        <Badge key={idx} variant="outline">{className}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Total Students</h4>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-lg font-semibold">{subject.students}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Active Assignments</h4>
                    <div className="flex items-center gap-2">
                      <ClipboardList className="h-4 w-4 text-muted-foreground" />
                      <span className="text-lg font-semibold">{subject.assignments}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
};

export default Subjects;

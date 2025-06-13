
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, BookOpen, Calendar, ClipboardList, Award, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const navigation = [
  { name: 'Dashboard', href: '/portal/learner', icon: LayoutDashboard },
  { name: 'Learning Materials', href: '/portal/learner/materials', icon: BookOpen },
  { name: 'Attendance', href: '/portal/learner/attendance', icon: Calendar },
  { name: 'Assignments', href: '/portal/learner/assignments', icon: ClipboardList },
  { name: 'Exam Results', href: '/portal/learner/results', icon: Award },
  { name: 'Announcements', href: '/portal/learner/announcements', icon: Bell },
];

const LearnerAnnouncements = () => {
  const announcements = [
    { 
      id: 1, 
      title: 'Midterm Exams Begin', 
      content: 'All students should prepare for midterm examinations starting July 6th, 2024.',
      date: '6th July 2024', 
      type: 'important' 
    },
    { 
      id: 2, 
      title: 'Sports Day Registration', 
      content: 'Registration for annual sports day is now open. Please submit your forms by July 8th.',
      date: '10th July 2024', 
      type: 'event' 
    },
    { 
      id: 3, 
      title: 'Library Hours Extended', 
      content: 'The school library will now be open until 6 PM to support students during exam period.',
      date: '15th July 2024', 
      type: 'info' 
    },
    { 
      id: 4, 
      title: 'Parent-Teacher Meeting', 
      content: 'All parents are invited to attend the quarterly parent-teacher meeting.',
      date: '20th July 2024', 
      type: 'important' 
    },
  ];

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'important': return 'destructive';
      case 'event': return 'default';
      default: return 'secondary';
    }
  };

  return (
    <PortalLayout portalType="learner" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Announcements</h2>
          <p className="text-muted-foreground">
            Stay updated with school news and important dates
          </p>
        </div>

        <div className="space-y-4">
          {announcements.map((announcement) => (
            <Card key={announcement.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{announcement.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{announcement.date}</p>
                  </div>
                  <Badge variant={getBadgeVariant(announcement.type)}>
                    {announcement.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{announcement.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
};

export default LearnerAnnouncements;

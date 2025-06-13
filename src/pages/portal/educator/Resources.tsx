
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
  Download,
  Search
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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

const Resources = () => {
  const resources = [
    { 
      name: 'Mathematics Curriculum Guide 2024.pdf', 
      subject: 'Mathematics', 
      grade: 'Grade 6-9', 
      size: '2.4 MB', 
      date: '15 Jun 2024',
      type: 'PDF'
    },
    { 
      name: 'Science Lab Safety Guidelines.docx', 
      subject: 'Science', 
      grade: 'All Grades', 
      size: '890 KB', 
      date: '14 Jun 2024',
      type: 'Word'
    },
    { 
      name: 'English Literature Reading List.pdf', 
      subject: 'English', 
      grade: 'Grade 8-9', 
      size: '1.2 MB', 
      date: '13 Jun 2024',
      type: 'PDF'
    },
    { 
      name: 'History Timeline Activities.xlsx', 
      subject: 'History', 
      grade: 'Grade 7-9', 
      size: '567 KB', 
      date: '12 Jun 2024',
      type: 'Excel'
    },
    { 
      name: 'Assessment Rubrics Template.pdf', 
      subject: 'General', 
      grade: 'All Grades', 
      size: '345 KB', 
      date: '11 Jun 2024',
      type: 'PDF'
    },
  ];

  return (
    <PortalLayout portalType="educator" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Teaching Resources Library</h2>
          <p className="text-muted-foreground">
            Access pre-approved teaching materials and school-issued content
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search resources..." className="pl-9" />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Available Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent cursor-pointer">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{resource.name}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <p className="text-xs text-muted-foreground">{resource.subject}</p>
                      <p className="text-xs text-muted-foreground">{resource.grade}</p>
                      <p className="text-xs text-muted-foreground">{resource.size} • {resource.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{resource.type}</Badge>
                    <Download className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
};

export default Resources;

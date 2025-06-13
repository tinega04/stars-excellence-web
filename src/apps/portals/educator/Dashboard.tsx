
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
  Upload,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

const EducatorDashboard = () => {
  const recentUploads = [
    { name: 'Mathematics Quiz - Grade 7', type: 'Assignment', status: 'Pending Approval', date: '15 Jun 2024' },
    { name: 'Science Notes - Chapter 3', type: 'Learning Material', status: 'Published', date: '14 Jun 2024' },
    { name: 'English Literature Essay', type: 'Assignment', status: 'Pending Approval', date: '13 Jun 2024' },
    { name: 'History Worksheet', type: 'Learning Material', status: 'Published', date: '12 Jun 2024' },
  ];

  const upcomingClasses = [
    { subject: 'Mathematics', class: 'Grade 7A', time: '9:00 AM', room: 'Room 15' },
    { subject: 'Science', class: 'Grade 6B', time: '11:30 AM', room: 'Lab 2' },
    { subject: 'English', class: 'Grade 8A', time: '2:00 PM', room: 'Room 12' },
  ];

  const notices = [
    { 
      id: 1, 
      title: 'Parent-Teacher Meeting Reminder', 
      message: 'Scheduled for 20th June. Prepare progress reports for all assigned students.', 
      type: 'info',
      date: '15 Jun 2024'
    },
    { 
      id: 2, 
      title: 'Results Submission Deadline', 
      message: 'All term 2 results must be submitted by 25th June for approval.', 
      type: 'warning',
      date: '14 Jun 2024'
    },
    { 
      id: 3, 
      title: 'New Teaching Resources Available', 
      message: 'Updated curriculum materials now available in Teaching Resources section.', 
      type: 'success',
      date: '13 Jun 2024'
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Pending Approval': return <Badge variant="outline" className="text-orange-600">Pending</Badge>;
      case 'Published': return <Badge variant="default" className="text-green-600">Published</Badge>;
      default: return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getNoticeIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case 'success': return <CheckCircle className="h-4 w-4 text-green-600" />;
      default: return <MessageSquare className="h-4 w-4 text-blue-600" />;
    }
  };

  return (
    <PortalLayout portalType="educator" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Educator Dashboard</h2>
          <p className="text-muted-foreground">
            Teaching tools and resources for Stevens Excellence Schools
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Students Assigned</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">127</div>
              <p className="text-xs text-muted-foreground">Across all subjects</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subjects Taught</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">4</div>
              <p className="text-xs text-muted-foreground">Math, Science, English, History</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Classes</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">3</div>
              <p className="text-xs text-muted-foreground">Today's schedule</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">2</div>
              <p className="text-xs text-muted-foreground">Awaiting DOS review</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Today's Classes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Today's Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingClasses.map((class_, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{class_.subject}</h4>
                      <p className="text-xs text-muted-foreground">{class_.class} • {class_.room}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{class_.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Uploads */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Recent Uploads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentUploads.map((upload, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{upload.name}</h4>
                      <p className="text-xs text-muted-foreground">{upload.type} • {upload.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(upload.status)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Internal Notices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Internal Notices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notices.map((notice) => (
                <div key={notice.id} className="flex items-start gap-3 p-3 border rounded-lg">
                  {getNoticeIcon(notice.type)}
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{notice.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{notice.message}</p>
                    <p className="text-xs text-muted-foreground mt-2">{notice.date}</p>
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

export default EducatorDashboard;

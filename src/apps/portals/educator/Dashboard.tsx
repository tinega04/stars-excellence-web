
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, ClipboardList, Users, FileText, AlertTriangle, Database, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const navigation = [
  { name: 'Dashboard', href: '/portal/educator', icon: LayoutDashboard },
  { name: 'Student Results', href: '/portal/educator/results', icon: ClipboardList },
];

const EducatorDashboard = () => {
  const documents = [
    { name: 'Staff Handbook 2024.pdf', type: 'PDF', size: '2.4 MB', date: '15 Jun 2024' },
    { name: 'Student Records Template.xlsx', type: 'Excel', size: '156 KB', date: '12 Jun 2024' },
    { name: 'Term 2 Timetable.pdf', type: 'PDF', size: '890 KB', date: '10 Jun 2024' },
    { name: 'Fee Structure 2024.docx', type: 'Word', size: '234 KB', date: '8 Jun 2024' },
    { name: 'Academic Calendar.pdf', type: 'PDF', size: '1.2 MB', date: '5 Jun 2024' },
  ];

  const systemMessages = [
    { 
      id: 1, 
      title: 'System Maintenance Scheduled', 
      message: 'System maintenance on 10th June from 2:00 AM - 4:00 AM', 
      type: 'warning',
      date: '8 Jun 2024'
    },
    { 
      id: 2, 
      title: 'New Feature: Bulk SMS', 
      message: 'Send announcements to parents via SMS directly from the portal', 
      type: 'info',
      date: '6 Jun 2024'
    },
    { 
      id: 3, 
      title: 'Backup Completed', 
      message: 'Daily backup completed successfully at 3:00 AM', 
      type: 'success',
      date: '6 Jun 2024'
    },
    { 
      id: 4, 
      title: 'Database Update Required', 
      message: 'Please update student information before term begins', 
      type: 'warning',
      date: '4 Jun 2024'
    },
  ];

  const getMessageIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'success': return <ClipboardList className="h-4 w-4 text-green-600" />;
      default: return <FileText className="h-4 w-4 text-blue-600" />;
    }
  };

  const getMessageBadge = (type: string) => {
    switch (type) {
      case 'warning': return 'destructive';
      case 'success': return 'default';
      default: return 'secondary';
    }
  };

  return (
    <PortalLayout portalType="educator" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Educator Dashboard</h2>
          <p className="text-muted-foreground">
            Educational resources and system management for Stars Excellence Schools
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">842</div>
              <p className="text-xs text-muted-foreground">Active this term</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Staff Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">67</div>
              <p className="text-xs text-muted-foreground">Teaching & support staff</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Actions</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">15</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Status</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Online</div>
              <p className="text-xs text-muted-foreground">All systems operational</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Document Center */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Document Center
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent cursor-pointer">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{doc.name}</h4>
                      <p className="text-xs text-muted-foreground">{doc.size} • {doc.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{doc.type}</Badge>
                      <Download className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Messages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                System Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemMessages.map((message) => (
                  <div key={message.id} className="flex items-start gap-3 p-3 border rounded-lg">
                    {getMessageIcon(message.type)}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium text-sm">{message.title}</h4>
                        <Badge variant={getMessageBadge(message.type)} className="ml-2">
                          {message.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{message.message}</p>
                      <p className="text-xs text-muted-foreground mt-2">{message.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PortalLayout>
  );
};

export default EducatorDashboard;

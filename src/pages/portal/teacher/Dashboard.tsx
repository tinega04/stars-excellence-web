
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, BookOpen, Users, Upload, Clock, FileText, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Dashboard', href: '/portal/educator', icon: LayoutDashboard },
  { name: 'Learning Materials', href: '/portal/educator/materials', icon: BookOpen },
  { name: 'Class Management', href: '/portal/educator/classes', icon: Users },
];

const TeacherDashboard = () => {
  const teachingSchedule = [
    { subject: 'Mathematics', time: '08:00 - 09:00', class: 'Grade 6 Blue', room: 'Room 201' },
    { subject: 'Science', time: '09:30 - 10:30', class: 'Grade 5 Red', room: 'Lab 1' },
    { subject: 'Mathematics', time: '11:00 - 12:00', class: 'Grade 6 Green', room: 'Room 201' },
    { subject: 'Science', time: '14:00 - 15:00', class: 'Grade 5 Blue', room: 'Lab 1' },
  ];

  const classInfo = [
    { class: 'Grade 6 Blue', students: 34, subject: 'Mathematics' },
    { class: 'Grade 6 Green', students: 32, subject: 'Mathematics' },
    { class: 'Grade 5 Red', students: 28, subject: 'Science' },
    { class: 'Grade 5 Blue', students: 30, subject: 'Science' },
  ];

  const recentUploads = [
    { name: 'Math Worksheet - Fractions', date: '2 hours ago', type: 'PDF' },
    { name: 'Science Lab Instructions', date: '1 day ago', type: 'DOC' },
    { name: 'Quiz - Algebra Basics', date: '3 days ago', type: 'PDF' },
  ];

  const announcements = [
    { id: 1, title: 'Faculty Meeting Tomorrow', date: '5th July 2024', type: 'important' },
    { id: 2, title: 'New Curriculum Guidelines', date: '8th July 2024', type: 'info' },
    { id: 3, title: 'Parent-Teacher Conference Prep', date: '15th July 2024', type: 'event' },
  ];

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'important': return 'destructive';
      case 'event': return 'default';
      default: return 'secondary';
    }
  };

  return (
    <PortalLayout portalType="educator" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Good morning, Mr. Kimani!</h2>
          <p className="text-muted-foreground">
            Ready to inspire young minds today?
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Classes Today</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">4</div>
              <p className="text-xs text-muted-foreground">Scheduled lessons</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">124</div>
              <p className="text-xs text-muted-foreground">Across all classes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Materials Uploaded</CardTitle>
              <Upload className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">12</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">8</div>
              <p className="text-xs text-muted-foreground">Assignments to grade</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Teaching Schedule */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Teaching Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Class</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teachingSchedule.map((lesson, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{lesson.subject}</TableCell>
                      <TableCell>{lesson.time}</TableCell>
                      <TableCell>{lesson.class}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Class Information */}
          <Card>
            <CardHeader>
              <CardTitle>Assigned Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classInfo.map((cls, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{cls.class}</h4>
                      <p className="text-sm text-muted-foreground">{cls.subject}</p>
                    </div>
                    <Badge variant="outline">{cls.students} students</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Learning Materials Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Learning Materials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-4">
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">Drag and drop files here</p>
                <Button className="mt-2" size="sm">Choose Files</Button>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Recent Uploads:</h4>
                {recentUploads.map((file, index) => (
                  <div key={index} className="flex items-center justify-between text-sm p-2 border rounded">
                    <span>{file.name}</span>
                    <Badge variant="outline">{file.type}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Announcements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Announcements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="flex items-start justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{announcement.title}</h4>
                      <p className="text-sm text-muted-foreground">{announcement.date}</p>
                    </div>
                    <Badge variant={getBadgeVariant(announcement.type)}>
                      {announcement.type}
                    </Badge>
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

export default TeacherDashboard;

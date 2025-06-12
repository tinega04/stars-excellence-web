
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, BookOpen, Receipt, Calendar, Award, FileText, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const navigation = [
  { name: 'Dashboard', href: '/portal/learner', icon: LayoutDashboard },
  { name: 'Learning Materials', href: '/portal/learner/materials', icon: BookOpen },
  { name: 'Fee Statements', href: '/portal/learner/fees', icon: Receipt },
];

const LearnerDashboard = () => {
  const examResults = [
    { subject: 'Mathematics', score: 89, grade: 'A-', term: 'Term 2' },
    { subject: 'English', score: 75, grade: 'B+', term: 'Term 2' },
    { subject: 'Science', score: 82, grade: 'B+', term: 'Term 2' },
    { subject: 'Social Studies', score: 78, grade: 'B', term: 'Term 2' },
    { subject: 'Kiswahili', score: 85, grade: 'A-', term: 'Term 2' },
  ];

  const announcements = [
    { id: 1, title: 'Midterm Exams Begin', date: '6th July 2024', type: 'important' },
    { id: 2, title: 'Sports Day Registration', date: '10th July 2024', type: 'event' },
    { id: 3, title: 'Library Hours Extended', date: '15th July 2024', type: 'info' },
    { id: 4, title: 'Parent-Teacher Meeting', date: '20th July 2024', type: 'important' },
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-green-600';
    if (grade.startsWith('B')) return 'text-blue-600';
    if (grade.startsWith('C')) return 'text-yellow-600';
    return 'text-red-600';
  };

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
          <h2 className="text-3xl font-bold tracking-tight">Welcome back, Sarah!</h2>
          <p className="text-muted-foreground">
            Here's what's happening with your studies today.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fee Balance</CardTitle>
              <Receipt className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">KSh 13,000</div>
              <p className="text-xs text-muted-foreground">Term 2 Balance</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">12/15</div>
              <p className="text-xs text-muted-foreground">Days present this term</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">B+</div>
              <p className="text-xs text-muted-foreground">Current term average</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assignments Due</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">3</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Exam Results */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Exam Results</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {examResults.map((result, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{result.subject}</TableCell>
                      <TableCell>{result.score}%</TableCell>
                      <TableCell className={`font-semibold ${getGradeColor(result.grade)}`}>
                        {result.grade}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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

        {/* Fee Summary Detail */}
        <Card>
          <CardHeader>
            <CardTitle>Fee Summary - Term 2 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Total Fees</p>
                <p className="text-2xl font-bold">KSh 45,000</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Amount Paid</p>
                <p className="text-2xl font-bold text-green-600">KSh 32,000</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Balance</p>
                <p className="text-2xl font-bold text-orange-600">KSh 13,000</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
};

export default LearnerDashboard;

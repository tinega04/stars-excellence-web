
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, TrendingUp, Users, BookOpen, Award, Receipt, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const navigation = [
  { name: 'Dashboard', href: '/portal/guardian', icon: LayoutDashboard },
  { name: 'Progress', href: '/portal/guardian/progress', icon: TrendingUp },
  { name: 'Achievements', href: '/portal/guardian/achievements', icon: Award },
  { name: 'Payments', href: '/portal/guardian/payments', icon: Receipt },
  { name: 'Newsletters', href: '/portal/guardian/newsletters', icon: Mail },
  { name: 'Blog', href: '/portal/guardian/blog', icon: BookOpen },
];

const GuardianProgress = () => {
  const students = [
    {
      name: 'Sarah Johnson',
      grade: 'Grade 8',
      subjects: [
        { name: 'Mathematics', progress: 85, grade: 'A-' },
        { name: 'English', progress: 92, grade: 'A' },
        { name: 'Science', progress: 78, grade: 'B+' },
        { name: 'History', progress: 88, grade: 'A-' },
      ]
    },
    {
      name: 'Michael Johnson',
      grade: 'Grade 5',
      subjects: [
        { name: 'Mathematics', progress: 75, grade: 'B' },
        { name: 'English', progress: 82, grade: 'B+' },
        { name: 'Science', progress: 90, grade: 'A-' },
        { name: 'Art', progress: 95, grade: 'A' },
      ]
    }
  ];

  return (
    <PortalLayout portalType="guardian" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Academic Progress</h2>
          <p className="text-muted-foreground">
            Track your children's academic performance and progress
          </p>
        </div>

        {students.map((student, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                {student.name} - {student.grade}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {student.subjects.map((subject, subIndex) => (
                  <div key={subIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{subject.name}</span>
                      <span className="text-sm font-semibold text-blue-600">{subject.grade}</span>
                    </div>
                    <Progress value={subject.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">{subject.progress}% completed</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardHeader>
            <CardTitle>Overall Performance Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h3 className="text-2xl font-bold text-green-600">A-</h3>
                <p className="text-sm text-muted-foreground">Average Grade</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600">85%</h3>
                <p className="text-sm text-muted-foreground">Attendance Rate</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <h3 className="text-2xl font-bold text-purple-600">12</h3>
                <p className="text-sm text-muted-foreground">Assignments Due</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
};

export default GuardianProgress;

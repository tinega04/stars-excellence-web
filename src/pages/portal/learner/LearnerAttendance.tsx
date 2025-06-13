
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

const LearnerAttendance = () => {
  const attendanceData = {
    term1: [
      { date: '2024-01-15', status: 'Present' },
      { date: '2024-01-16', status: 'Present' },
      { date: '2024-01-17', status: 'Absent' },
      { date: '2024-01-18', status: 'Present' },
      { date: '2024-01-19', status: 'Present' },
    ],
    term2: [
      { date: '2024-04-15', status: 'Present' },
      { date: '2024-04-16', status: 'Present' },
      { date: '2024-04-17', status: 'Present' },
      { date: '2024-04-18', status: 'Late' },
      { date: '2024-04-19', status: 'Present' },
    ]
  };

  return (
    <PortalLayout portalType="learner" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Attendance Record</h2>
          <p className="text-muted-foreground">
            View your daily attendance by term
          </p>
        </div>

        <Tabs defaultValue="term2" className="space-y-6">
          <TabsList>
            <TabsTrigger value="term1">Term 1</TabsTrigger>
            <TabsTrigger value="term2">Term 2 (Current)</TabsTrigger>
          </TabsList>

          <TabsContent value="term1">
            <Card>
              <CardHeader>
                <CardTitle>Term 1 Attendance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {attendanceData.term1.map((record, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <span className="font-medium">{record.date}</span>
                      <span className={`px-2 py-1 rounded text-sm ${
                        record.status === 'Present' ? 'bg-green-100 text-green-800' :
                        record.status === 'Absent' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {record.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="term2">
            <Card>
              <CardHeader>
                <CardTitle>Term 2 Attendance (Current)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {attendanceData.term2.map((record, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <span className="font-medium">{record.date}</span>
                      <span className={`px-2 py-1 rounded text-sm ${
                        record.status === 'Present' ? 'bg-green-100 text-green-800' :
                        record.status === 'Absent' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {record.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PortalLayout>
  );
};

export default LearnerAttendance;

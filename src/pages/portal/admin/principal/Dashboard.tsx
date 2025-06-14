
import React from 'react';
import { AdminLayout } from '@/components/portal/admin/AdminLayout';
import { Shield, AlertTriangle, Users, Megaphone, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrincipalDashboard = () => {
  const navigation = [
    { name: 'Dashboard', href: '/portal/admin/principal', icon: Shield },
    { name: 'Discipline Records', href: '/portal/admin/principal/discipline', icon: AlertTriangle },
    { name: 'School Communications', href: '/portal/admin/principal/communications', icon: Megaphone },
    { name: 'Daily Operations', href: '/portal/admin/principal/operations', icon: FileText },
    { name: 'Staff Management', href: '/portal/admin/principal/staff', icon: Users },
  ];

  return (
    <AdminLayout role="principal" navigation={navigation} roleTitle="Principal">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-blue-600" />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Principal Dashboard</h2>
            <p className="text-muted-foreground">
              Student welfare and daily operations management
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Daily Attendance</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">94.2%</div>
              <p className="text-xs text-muted-foreground">1,173 of 1,245 students</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Discipline Cases</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">8</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">School Communications</CardTitle>
              <Megaphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">3</div>
              <p className="text-xs text-muted-foreground">Announcements this week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Discipline Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Late Arrival</p>
                      <p className="text-sm text-muted-foreground">Grade 4 Student - John Smith</p>
                    </div>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Minor</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Action: Verbal warning given</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Uniform Violation</p>
                      <p className="text-sm text-muted-foreground">Grade 6 Student - Sarah Jones</p>
                    </div>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Minor</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Action: Parent contacted</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Disruptive Behavior</p>
                      <p className="text-sm text-muted-foreground">Grade 5 Student - Michael Brown</p>
                    </div>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Major</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Action: Suspension pending review</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>School-wide Communications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium">Midterm Examinations Notice</h4>
                  <p className="text-sm text-muted-foreground mb-2">All students should prepare for midterm examinations starting July 15th, 2024.</p>
                  <p className="text-xs text-muted-foreground">Sent: Today 9:00 AM</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium">Sports Day Registration</h4>
                  <p className="text-sm text-muted-foreground mb-2">Registration is now open for annual sports day. Submit forms by July 20th.</p>
                  <p className="text-xs text-muted-foreground">Sent: Yesterday 2:00 PM</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium">Library Hours Update</h4>
                  <p className="text-sm text-muted-foreground mb-2">Library will remain open until 6:00 PM during exam period.</p>
                  <p className="text-xs text-muted-foreground">Sent: 2 days ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PrincipalDashboard;

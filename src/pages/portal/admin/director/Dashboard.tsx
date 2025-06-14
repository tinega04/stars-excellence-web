
import React from 'react';
import { AdminLayout } from '@/components/portal/admin/AdminLayout';
import { Crown, Users, DollarSign, TrendingUp, BarChart, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DirectorDashboard = () => {
  const navigation = [
    { name: 'Dashboard', href: '/portal/admin/director', icon: Crown },
    { name: 'All Portals Access', href: '/portal/admin/director/portals', icon: Users },
    { name: 'Fee Analysis', href: '/portal/admin/director/fees', icon: DollarSign },
    { name: 'Performance Reports', href: '/portal/admin/director/performance', icon: BarChart },
    { name: 'Activity Logs', href: '/portal/admin/director/activity', icon: Activity },
  ];

  return (
    <AdminLayout role="director" navigation={navigation} roleTitle="Director">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Crown className="h-8 w-8 text-blue-600" />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Director Dashboard</h2>
            <p className="text-muted-foreground">
              Executive overview and strategic management
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">1,245</div>
              <p className="text-xs text-muted-foreground">+12% from last term</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Annual Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">KSh 45.2M</div>
              <p className="text-xs text-muted-foreground">This academic year</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Staff Performance</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">92%</div>
              <p className="text-xs text-muted-foreground">Average rating</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Admissions</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">187</div>
              <p className="text-xs text-muted-foreground">This term</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>School-wide Activity Feed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">Learner Portal - Grade 5 Results Published</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">Educator Portal - New Materials Uploaded</p>
                    <p className="text-sm text-muted-foreground">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">Guardian Portal - Fee Payment Received</p>
                    <p className="text-sm text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Executive Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium">Financial Health</h4>
                  <p className="text-sm text-muted-foreground">Fee collection at 84.8% with outstanding balance of KSh 2.3M</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium">Academic Performance</h4>
                  <p className="text-sm text-muted-foreground">School average at 78.5% with 15 pending approvals</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium">System Status</h4>
                  <p className="text-sm text-muted-foreground">99.8% uptime with 1,387 active users</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DirectorDashboard;


import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, TrendingUp, Users, BookOpen, Award, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const navigation = [
  { name: 'Dashboard', href: '/portal/director', icon: LayoutDashboard },
  { name: 'School Analytics', href: '/portal/director/analytics', icon: TrendingUp },
  { name: 'Staff Overview', href: '/portal/director/staff', icon: Users },
];

const DirectorDashboard = () => {
  const schoolMetrics = [
    { title: 'Total Enrollment', value: '842', trend: '+12%', color: 'text-blue-600' },
    { title: 'Staff Members', value: '67', trend: '+3%', color: 'text-green-600' },
    { title: 'Academic Performance', value: '84%', trend: '+5%', color: 'text-purple-600' },
    { title: 'Fee Collection Rate', value: '91%', trend: '+8%', color: 'text-orange-600' },
  ];

  const pendingApprovals = [
    { type: 'Learning Resource', educator: 'Ms. Jane Doe', subject: 'Mathematics', status: 'pending' },
    { type: 'Student Results', educator: 'Mr. John Smith', subject: 'Science', status: 'pending' },
    { type: 'Curriculum Update', educator: 'Ms. Sarah Wilson', subject: 'English', status: 'review' },
  ];

  const recentActivities = [
    { action: 'New student enrollment', details: 'Grade 5 - 3 new students', time: '2 hours ago' },
    { action: 'Staff performance review', details: 'Q2 evaluations completed', time: '1 day ago' },
    { action: 'Fee payment received', details: 'KSh 450,000 collected', time: '2 days ago' },
    { action: 'Academic results approved', details: 'Term 2 Mathematics results', time: '3 days ago' },
  ];

  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'pending': return 'destructive';
      case 'review': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <PortalLayout portalType="director" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Director Dashboard</h2>
          <p className="text-muted-foreground">
            Executive overview of Stars Excellence Schools performance and operations
          </p>
        </div>

        {/* School Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {schoolMetrics.map((metric, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                <p className="text-xs text-green-600 font-medium">{metric.trend} from last term</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Pending Approvals Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Pending Approvals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingApprovals.map((approval, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{approval.type}</h4>
                      <p className="text-xs text-muted-foreground">
                        {approval.educator} • {approval.subject}
                      </p>
                    </div>
                    <Badge variant={getBadgeVariant(approval.status)}>
                      {approval.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                    <Award className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{activity.action}</h4>
                      <p className="text-xs text-muted-foreground">{activity.details}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Executive Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Academic Excellence</p>
                <p className="text-2xl font-bold text-green-600">Above Target</p>
                <p className="text-xs text-muted-foreground">84% average performance across all grades</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Financial Health</p>
                <p className="text-2xl font-bold text-blue-600">Strong</p>
                <p className="text-xs text-muted-foreground">91% fee collection rate this term</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Staff Performance</p>
                <p className="text-2xl font-bold text-purple-600">Excellent</p>
                <p className="text-xs text-muted-foreground">High satisfaction and retention rates</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
};

export default DirectorDashboard;


import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, Users, Settings, Database, BarChart, Shield, Crown, GraduationCap, DollarSign, Server, ClipboardList } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Dashboard', href: '/portal/admin', icon: LayoutDashboard },
  { name: 'User Management', href: '/portal/admin/users', icon: Users },
  { name: 'System Settings', href: '/portal/admin/settings', icon: Settings },
];

// Mock user role - in real app this would come from auth context
const currentUser = {
  role: 'director' as 'director' | 'principal' | 'dos' | 'itadmin' | 'bursar',
  name: 'John Doe'
};

const AdminDashboard = () => {
  const getRoleTitle = (role: string) => {
    switch (role) {
      case 'director': return 'Director';
      case 'principal': return 'Principal';
      case 'dos': return 'Director of Studies';
      case 'itadmin': return 'IT Administrator';
      case 'bursar': return 'Bursar';
      default: return 'Admin';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'director': return Crown;
      case 'principal': return Shield;
      case 'dos': return GraduationCap;
      case 'itadmin': return Server;
      case 'bursar': return DollarSign;
      default: return Shield;
    }
  };

  const DirectorView = () => (
    <div className="space-y-6">
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
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
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
            <CardTitle className="text-sm font-medium">Admissions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">187</div>
            <p className="text-xs text-muted-foreground">New this term</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const DirectorOfStudiesView = () => (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">15</div>
            <p className="text-xs text-muted-foreground">Resources & Results</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Academic Reports</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">24</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Performance</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">78%</div>
            <p className="text-xs text-muted-foreground">School-wide</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Approval Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { type: 'Learning Resource', subject: 'Mathematics', educator: 'Mrs. Johnson', status: 'pending' },
              { type: 'Exam Results', subject: 'Science', educator: 'Mr. Smith', status: 'pending' },
              { type: 'Learning Resource', subject: 'English', educator: 'Ms. Davis', status: 'approved' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">{item.type} - {item.subject}</h4>
                  <p className="text-sm text-muted-foreground">By {item.educator}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={item.status === 'pending' ? 'destructive' : 'default'}>
                    {item.status}
                  </Badge>
                  {item.status === 'pending' && (
                    <Button size="sm">Review</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderRoleBasedContent = () => {
    switch (currentUser.role) {
      case 'director':
        return <DirectorView />;
      case 'dos':
        return <DirectorOfStudiesView />;
      case 'principal':
      case 'itadmin':
      case 'bursar':
        return (
          <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
            <div className="text-center">
              <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">{getRoleTitle(currentUser.role)} features coming soon...</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
            <div className="text-center">
              <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">Access denied. Invalid role.</p>
            </div>
          </div>
        );
    }
  };

  const RoleIcon = getRoleIcon(currentUser.role);

  return (
    <PortalLayout portalType="admin" navigation={navigation}>
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <RoleIcon className="h-8 w-8 text-blue-600" />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              {getRoleTitle(currentUser.role)} Dashboard
            </h2>
            <p className="text-muted-foreground">
              Welcome back, {currentUser.name}
            </p>
          </div>
        </div>

        {renderRoleBasedContent()}
      </div>
    </PortalLayout>
  );
};

export default AdminDashboard;

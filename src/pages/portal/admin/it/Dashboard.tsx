
import React from 'react';
import { AdminLayout } from '@/components/portal/admin/AdminLayout';
import { Server, Users, Settings, Activity, Shield, Database, UserPlus, UsersIcon, UserCog } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ITDashboard = () => {
  const navigation = [
    { name: 'Dashboard', href: '/portal/admin/it', icon: Server },
    { 
      name: 'User Management', 
      href: '/portal/admin/it/users', 
      icon: Users,
      subItems: [
        { name: 'Create New User', href: '/portal/admin/it/users/create', icon: UserPlus },
        { name: 'User Directory', href: '/portal/admin/it/users/directory', icon: UsersIcon },
        { name: 'Manage Accounts', href: '/portal/admin/it/users/manage', icon: UserCog },
      ]
    },
    { name: 'System Settings', href: '/portal/admin/it/settings', icon: Settings },
    { name: 'System Logs', href: '/portal/admin/it/logs', icon: Activity },
    { name: 'Security', href: '/portal/admin/it/security', icon: Shield },
    { name: 'Database', href: '/portal/admin/it/database', icon: Database },
  ];

  return (
    <AdminLayout role="it" navigation={navigation} roleTitle="IT Administrator">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Server className="h-8 w-8 text-blue-600" />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">IT Administration Dashboard</h2>
            <p className="text-muted-foreground">
              System management and technical support
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
              <Server className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">99.8%</div>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">1,387</div>
              <p className="text-xs text-muted-foreground">Currently online</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Security Status</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Secure</div>
              <p className="text-xs text-muted-foreground">No threats detected</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">2,543</div>
              <p className="text-xs text-muted-foreground">All registered accounts</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Quick User Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg hover:bg-accent cursor-pointer">
                  <div className="flex items-center gap-3">
                    <UserPlus className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Create New User</p>
                      <p className="text-sm text-muted-foreground">Add new Educator, Guardian, or Learner</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg hover:bg-accent cursor-pointer">
                  <div className="flex items-center gap-3">
                    <UsersIcon className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">User Directory</p>
                      <p className="text-sm text-muted-foreground">Browse and search all users</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg hover:bg-accent cursor-pointer">
                  <div className="flex items-center gap-3">
                    <UserCog className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-medium">Manage Accounts</p>
                      <p className="text-sm text-muted-foreground">Reset passwords, suspend accounts</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent User Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">New Educator Registration</p>
                    <p className="text-sm text-muted-foreground">Sarah Johnson (Mathematics)</p>
                  </div>
                  <div className="text-sm text-muted-foreground">2 hours ago</div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Password Reset Request</p>
                    <p className="text-sm text-muted-foreground">Michael Smith (Guardian)</p>
                  </div>
                  <div className="text-sm text-muted-foreground">5 hours ago</div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Account Suspended</p>
                    <p className="text-sm text-muted-foreground">Former Staff - John Doe</p>
                  </div>
                  <div className="text-sm text-muted-foreground">1 day ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ITDashboard;

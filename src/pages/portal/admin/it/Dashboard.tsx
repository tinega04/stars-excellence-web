
import React from 'react';
import { AdminLayout } from '@/components/portal/admin/AdminLayout';
import { Server, Users, Settings, Activity, Shield, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ITDashboard = () => {
  const navigation = [
    { name: 'Dashboard', href: '/portal/admin/it', icon: Server },
    { name: 'User Management', href: '/portal/admin/it/users', icon: Users },
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
              <CardTitle className="text-sm font-medium">Backup Status</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Complete</div>
              <p className="text-xs text-muted-foreground">Last backup: 2 hours ago</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent User Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">New User Registration</p>
                    <p className="text-sm text-muted-foreground">Sarah Johnson (Guardian)</p>
                  </div>
                  <div className="text-sm text-muted-foreground">2 hours ago</div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Password Reset Request</p>
                    <p className="text-sm text-muted-foreground">Michael Smith (Educator)</p>
                  </div>
                  <div className="text-sm text-muted-foreground">5 hours ago</div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Role Permission Update</p>
                    <p className="text-sm text-muted-foreground">Emily Davis (Admin)</p>
                  </div>
                  <div className="text-sm text-muted-foreground">1 day ago</div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">System Access Granted</p>
                    <p className="text-sm text-muted-foreground">New IT Support Staff</p>
                  </div>
                  <div className="text-sm text-muted-foreground">2 days ago</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Health & Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Database Backup Completed</p>
                      <p className="text-sm text-muted-foreground">Automatic backup successful</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Success</span>
                  </div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Failed Login Attempt</p>
                      <p className="text-sm text-muted-foreground">Multiple attempts from IP: 192.168.1.100</p>
                    </div>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Warning</span>
                  </div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Security Update Applied</p>
                      <p className="text-sm text-muted-foreground">Latest security patches installed</p>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Info</span>
                  </div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Performance Optimization</p>
                      <p className="text-sm text-muted-foreground">Database indexing completed</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Success</span>
                  </div>
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

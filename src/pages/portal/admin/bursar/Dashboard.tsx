
import React from 'react';
import { AdminPortalLayout } from '../common/AdminPortalLayout';
import { DollarSign, Receipt, TrendingUp, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BursarDashboard = () => {
  return (
    <AdminPortalLayout role="bursar">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <DollarSign className="h-8 w-8 text-blue-600" />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Bursar Dashboard</h2>
            <p className="text-muted-foreground">
              Financial management and fee administration
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Term Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">KSh 12.8M</div>
              <p className="text-xs text-muted-foreground">Current term</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Outstanding Balances</CardTitle>
              <Receipt className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">KSh 2.3M</div>
              <p className="text-xs text-muted-foreground">245 students</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">84.8%</div>
              <p className="text-xs text-muted-foreground">This term</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recent Payments</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">127</div>
              <p className="text-xs text-muted-foreground">Today</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Outstanding Fee Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Grade 1</p>
                    <p className="text-sm text-muted-foreground">45 students</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-orange-600">KSh 340,000</p>
                    <p className="text-sm text-muted-foreground">Outstanding</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Grade 2</p>
                    <p className="text-sm text-muted-foreground">38 students</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-orange-600">KSh 285,000</p>
                    <p className="text-sm text-muted-foreground">Outstanding</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Grade 3</p>
                    <p className="text-sm text-muted-foreground">52 students</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-orange-600">KSh 410,000</p>
                    <p className="text-sm text-muted-foreground">Outstanding</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Payment Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">Grade 5 - Full Term Payment</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">KSh 15,000</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Sarah Smith</p>
                    <p className="text-sm text-muted-foreground">Grade 3 - Partial Payment</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">KSh 7,500</p>
                    <p className="text-sm text-muted-foreground">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Michael Johnson</p>
                    <p className="text-sm text-muted-foreground">Grade 1 - Transport Fee</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">KSh 3,000</p>
                    <p className="text-sm text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminPortalLayout>
  );
};

export default BursarDashboard;

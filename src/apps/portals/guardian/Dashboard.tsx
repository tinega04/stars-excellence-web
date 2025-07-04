
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, Users, Calendar, Receipt, TrendingUp, Award, Mail, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const navigation = [
  { name: 'Dashboard', href: '/portal/guardian', icon: LayoutDashboard },
  { name: 'Progress', href: '/portal/guardian/progress', icon: TrendingUp },
  { name: 'Achievements', href: '/portal/guardian/achievements', icon: Award },
  { name: 'Payments', href: '/portal/guardian/payments', icon: Receipt },
  { name: 'Newsletters', href: '/portal/guardian/newsletters', icon: Mail },
  { name: 'Blog', href: '/portal/guardian/blog', icon: BookOpen },
];

const GuardianDashboard = () => {
  return (
    <PortalLayout portalType="guardian" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Guardian Dashboard</h2>
          <p className="text-muted-foreground">
            Monitor your children's academic progress and school activities
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Children Enrolled</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">2</div>
              <p className="text-xs text-muted-foreground">Active students</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Outstanding Fees</CardTitle>
              <Receipt className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">KSh 25,000</div>
              <p className="text-xs text-muted-foreground">Total balance</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">3</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
          <div className="text-center">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">Additional guardian features coming soon...</p>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
};

export default GuardianDashboard;

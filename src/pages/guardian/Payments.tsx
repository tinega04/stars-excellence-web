
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, TrendingUp, Users, BookOpen, Award, Receipt, Mail, CreditCard, Calendar, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const navigation = [
  { name: 'Dashboard', href: '/portal/guardian', icon: LayoutDashboard },
  { name: 'Progress', href: '/portal/guardian/progress', icon: TrendingUp },
  { name: 'Achievements', href: '/portal/guardian/achievements', icon: Award },
  { name: 'Payments', href: '/portal/guardian/payments', icon: Receipt },
  { name: 'Newsletters', href: '/portal/guardian/newsletters', icon: Mail },
  { name: 'Blog', href: '/portal/guardian/blog', icon: BookOpen },
];

const GuardianPayments = () => {
  const paymentHistory = [
    {
      id: 'PAY-001',
      description: 'Term 2 School Fees - Sarah Johnson',
      amount: 45000,
      date: '2024-06-15',
      status: 'completed',
      method: 'M-Pesa'
    },
    {
      id: 'PAY-002', 
      description: 'Term 2 School Fees - Michael Johnson',
      amount: 35000,
      date: '2024-06-15',
      status: 'completed',
      method: 'Bank Transfer'
    },
    {
      id: 'PAY-003',
      description: 'Transport Fee - Sarah Johnson',
      amount: 8000,
      date: '2024-06-01',
      status: 'completed',
      method: 'M-Pesa'
    },
    {
      id: 'PAY-004',
      description: 'Lunch Fee - Michael Johnson',
      amount: 5000,
      date: '2024-05-28',
      status: 'pending',
      method: 'Bank Transfer'
    }
  ];

  const outstandingFees = [
    {
      student: 'Sarah Johnson',
      items: [
        { description: 'Term 3 School Fees', amount: 45000, dueDate: '2024-08-15' },
        { description: 'Sports Equipment', amount: 3500, dueDate: '2024-07-20' }
      ]
    },
    {
      student: 'Michael Johnson',
      items: [
        { description: 'Term 3 School Fees', amount: 35000, dueDate: '2024-08-15' },
        { description: 'Art Supplies', amount: 2000, dueDate: '2024-07-25' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <PortalLayout portalType="guardian" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Payments & Fees</h2>
          <p className="text-muted-foreground">
            Manage your children's school fees and payment history
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Outstanding Balance</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">KSh 85,500</div>
              <p className="text-xs text-muted-foreground">Across all children</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Paid This Term</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">KSh 93,000</div>
              <p className="text-xs text-muted-foreground">4 transactions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Due Date</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">July 20</div>
              <p className="text-xs text-muted-foreground">Sports equipment fee</p>
            </CardContent>
          </Card>
        </div>

        {/* Outstanding Fees */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-600" />
              Outstanding Fees
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {outstandingFees.map((studentFees, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-3">{studentFees.student}</h4>
                  <div className="space-y-2">
                    {studentFees.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{item.description}</p>
                          <p className="text-sm text-muted-foreground">Due: {item.dueDate}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">KSh {item.amount.toLocaleString()}</p>
                          <Button size="sm" className="mt-1">Pay Now</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment History */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {paymentHistory.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">{payment.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{payment.date}</span>
                      <span>{payment.method}</span>
                      <Badge className={getStatusColor(payment.status)}>
                        {payment.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">KSh {payment.amount.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">{payment.id}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
};

export default GuardianPayments;

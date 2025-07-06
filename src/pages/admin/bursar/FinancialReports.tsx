
import React, { useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePickerWithRange } from '@/components/ui/date-picker';
import { DollarSign, Download, FileText, TrendingUp, Users } from 'lucide-react';
import { fetchPayments } from '@/services/supabase/fetchPayments';
import { fetchStudentBalances } from '@/services/supabase/fetchStudentBalances';
import type { ExtendedDatabase } from '@/types/supabase-extensions';

type PaymentWithDetails = ExtendedDatabase['public']['Tables']['payments']['Row'] & {
  students: ExtendedDatabase['public']['Tables']['students']['Row'] | null;
  payment_items: ExtendedDatabase['public']['Tables']['payment_items']['Row'][];
};

type StudentBalanceWithDetails = ExtendedDatabase['public']['Tables']['student_balances']['Row'] & {
  students: ExtendedDatabase['public']['Tables']['students']['Row'] | null;
  fee_structures: ExtendedDatabase['public']['Tables']['fee_structures']['Row'] | null;
};

const FinancialReports: React.FC = () => {
  const [reportPeriod, setReportPeriod] = useState('current-term');
  const [dateRange, setDateRange] = useState<any>(null);

  const { data: payments, error: paymentsError } = useQuery({
    queryKey: ['payments'],
    queryFn: fetchPayments,
  });

  const { data: balances, error: balancesError } = useQuery({
    queryKey: ['student-balances'],
    queryFn: fetchStudentBalances,
  });

  const navigation = [
    { name: 'Dashboard', href: '/admin/bursar', icon: DollarSign },
    { name: 'Fee Management', href: '/admin/bursar/fees', icon: DollarSign },
    { name: 'Payment Tracking', href: '/admin/bursar/payments', icon: DollarSign },
    { name: 'Financial Reports', href: '/admin/bursar/reports', icon: DollarSign },
    { name: 'Fee Structures', href: '/admin/bursar/structures', icon: DollarSign },
  ];

  // Calculate statistics with safety checks
  const totalCollected = payments?.reduce((sum, payment) => 
    payment.payment_status === 'completed' ? sum + (payment.amount || 0) : sum, 0
  ) || 0;

  const totalOutstanding = balances?.reduce((sum, balance) => 
    sum + (balance.balance || 0), 0
  ) || 0;

  const paymentMethods = payments?.reduce((acc, payment) => {
    if (payment.payment_status === 'completed') {
      const method = payment.payment_method || 'unknown';
      acc[method] = (acc[method] || 0) + (payment.amount || 0);
    }
    return acc;
  }, {} as Record<string, number>) || {};

  if (paymentsError || balancesError) {
    console.error('Error loading financial data:', paymentsError || balancesError);
    return (
      <AdminLayout role="bursar" navigation={navigation} roleTitle="Bursar">
        <div className="space-y-6">
          <div className="text-center py-8">
            <p className="text-red-600">Error loading financial data. Please try again.</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout role="bursar" navigation={navigation} roleTitle="Bursar">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Financial Reports</h2>
            <p className="text-muted-foreground">
              Generate comprehensive financial reports and analytics
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>

        <div className="flex gap-4">
          <Select value={reportPeriod} onValueChange={setReportPeriod}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-term">Current Term</SelectItem>
              <SelectItem value="last-term">Last Term</SelectItem>
              <SelectItem value="current-year">Current Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          {reportPeriod === 'custom' && (
            <DatePickerWithRange date={dateRange} setDate={setDateRange} />
          )}
          <Button>Generate Report</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Collected</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                KSh {totalCollected.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">Current term</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">
                KSh {totalOutstanding.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">Total balance</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {totalCollected + totalOutstanding > 0 
                  ? Math.round((totalCollected / (totalCollected + totalOutstanding)) * 100)
                  : 0}%
              </div>
              <p className="text-xs text-muted-foreground">Current term</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">
                {balances?.length || 0}
              </div>
              <p className="text-xs text-muted-foreground">With balances</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(paymentMethods).length > 0 ? Object.entries(paymentMethods).map(([method, amount]) => (
                  <div key={method} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="capitalize">{method.replace('_', ' ')}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">KSh {amount.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">
                        {totalCollected > 0 ? Math.round((amount / totalCollected) * 100) : 0}%
                      </div>
                    </div>
                  </div>
                )) : (
                  <p className="text-muted-foreground text-center py-4">No payment data available</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Outstanding Balances by Grade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {balances && balances.length > 0 ? Array.from(new Set(balances.map(b => b.students?.grade_level).filter(Boolean)))
                  .map(grade => {
                    const gradeBalances = balances.filter(b => b.students?.grade_level === grade);
                    const totalBalance = gradeBalances.reduce((sum, b) => sum + (b.balance || 0), 0);
                    return (
                      <div key={grade} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                          <span>Grade {grade}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">KSh {totalBalance.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">
                            {gradeBalances.length} students
                          </div>
                        </div>
                      </div>
                    );
                  }) : (
                    <p className="text-muted-foreground text-center py-4">No balance data available</p>
                  )}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Payment Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              Chart component will be implemented here
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default FinancialReports;

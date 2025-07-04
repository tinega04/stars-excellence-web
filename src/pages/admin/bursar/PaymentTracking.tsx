
import React, { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DollarSign, Plus, Search, Filter, Download } from 'lucide-react';
import { fetchPayments } from '@/services/supabase/fetchPayments';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/types/supabase';

type PaymentWithDetails = Database['public']['Tables']['payments']['Row'] & {
  students: Database['public']['Tables']['students']['Row'] | null;
  payment_items: Database['public']['Tables']['payment_items']['Row'][];
};

const PaymentTracking: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data: payments, isLoading, refetch } = useQuery({
    queryKey: ['payments'],
    queryFn: fetchPayments,
  });

  // Real-time subscription for payments
  useEffect(() => {
    const channel = supabase
      .channel('payments-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'payments'
        },
        () => {
          refetch();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [refetch]);

  const navigation = [
    { name: 'Dashboard', href: '/admin/bursar', icon: DollarSign },
    { name: 'Fee Management', href: '/admin/bursar/fees', icon: DollarSign },
    { name: 'Payment Tracking', href: '/admin/bursar/payments', icon: DollarSign },
    { name: 'Financial Reports', href: '/admin/bursar/reports', icon: DollarSign },
    { name: 'Fee Structures', href: '/admin/bursar/structures', icon: DollarSign },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: 'default',
      pending: 'secondary',
      failed: 'destructive',
      cancelled: 'outline'
    } as const;
    return <Badge variant={variants[status as keyof typeof variants] || 'secondary'}>{status}</Badge>;
  };

  const getMethodBadge = (method: string) => {
    const colors = {
      mpesa: 'bg-green-100 text-green-800',
      bank_deposit: 'bg-blue-100 text-blue-800',
      cheque: 'bg-yellow-100 text-yellow-800',
      cash: 'bg-purple-100 text-purple-800',
      card: 'bg-gray-100 text-gray-800'
    } as const;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[method as keyof typeof colors] || 'bg-gray-100 text-gray-800'}`}>
        {method.replace('_', ' ').toUpperCase()}
      </span>
    );
  };

  const filteredPayments = payments?.filter(payment =>
    payment.students?.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.students?.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.payment_reference?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout role="bursar" navigation={navigation} roleTitle="Bursar">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Payment Tracking</h2>
            <p className="text-muted-foreground">
              Monitor all payment transactions in real-time
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Record Payment
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Record New Payment</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Payment recording form will be implemented here
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search by student name or payment reference..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-12 bg-gray-100 rounded animate-pulse"></div>
                ))}
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reference</TableHead>
                    <TableHead>Student</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPayments?.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.payment_reference}</TableCell>
                      <TableCell>
                        {payment.students ? (
                          <div>
                            <div className="font-medium">
                              {payment.students.first_name} {payment.students.last_name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Grade {payment.students.grade_level}
                            </div>
                          </div>
                        ) : (
                          'Unknown Student'
                        )}
                      </TableCell>
                      <TableCell className="font-medium text-green-600">
                        KSh {payment.amount.toLocaleString()}
                      </TableCell>
                      <TableCell>{getMethodBadge(payment.payment_method)}</TableCell>
                      <TableCell>{getStatusBadge(payment.payment_status)}</TableCell>
                      <TableCell>
                        {new Date(payment.payment_date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredPayments?.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        No payments found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default PaymentTracking;

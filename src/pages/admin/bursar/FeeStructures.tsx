
import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Archive, Copy, Edit, Trash2 } from 'lucide-react';
import { fetchFeeStructures } from '@/services/supabase/fetchFeeStructures';
import type { Database } from '@/types/supabase';

type FeeStructureWithItems = Database['public']['Tables']['fee_structures']['Row'] & {
  fee_structure_items: Database['public']['Tables']['fee_structure_items']['Row'][];
};

const FeeStructures: React.FC = () => {
  const { data: feeStructures, isLoading } = useQuery({
    queryKey: ['fee-structures'],
    queryFn: fetchFeeStructures,
  });

  const navigation = [
    { name: 'Dashboard', href: '/admin/bursar', icon: DollarSign },
    { name: 'Fee Management', href: '/admin/bursar/fees', icon: DollarSign },
    { name: 'Payment Tracking', href: '/admin/bursar/payments', icon: DollarSign },
    { name: 'Financial Reports', href: '/admin/bursar/reports', icon: DollarSign },
    { name: 'Fee Structures', href: '/admin/bursar/structures', icon: DollarSign },
  ];

  const activeStructures = feeStructures?.filter(s => s.is_active) || [];
  const archivedStructures = feeStructures?.filter(s => !s.is_active) || [];

  return (
    <AdminLayout role="bursar" navigation={navigation} roleTitle="Bursar">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Fee Structures</h2>
          <p className="text-muted-foreground">
            Manage and organize fee structures across different terms and grades
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Active Structures</h3>
            {isLoading ? (
              <div className="grid gap-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <CardContent className="p-6">
                      <div className="h-6 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded mb-4"></div>
                      <div className="flex gap-2">
                        <div className="h-6 w-16 bg-gray-200 rounded"></div>
                        <div className="h-6 w-20 bg-gray-200 rounded"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid gap-4">
                {activeStructures.map((structure) => (
                  <Card key={structure.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{structure.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {structure.academic_year} - {structure.term} | Grade {structure.grade_level}
                          </p>
                          {structure.description && (
                            <p className="text-sm text-muted-foreground mt-1">
                              {structure.description}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" title="Edit">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" title="Clone">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" title="Archive">
                            <Archive className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Base Amount:</span>
                          <span className="font-bold text-green-600 text-lg">
                            KSh {structure.base_amount.toLocaleString()}
                          </span>
                        </div>
                        
                        {structure.fee_structure_items && structure.fee_structure_items.length > 0 && (
                          <div className="border-t pt-4">
                            <h4 className="font-medium mb-3">Fee Components:</h4>
                            <div className="space-y-2">
                              {structure.fee_structure_items.map((item) => (
                                <div key={item.id} className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded">
                                  <div>
                                    <span className="font-medium">{item.name}</span>
                                    <Badge 
                                      variant={item.is_mandatory ? 'default' : 'secondary'} 
                                      className="ml-2 text-xs"
                                    >
                                      {item.is_mandatory ? 'Mandatory' : 'Optional'}
                                    </Badge>
                                    {item.description && (
                                      <p className="text-xs text-muted-foreground mt-1">
                                        {item.description}
                                      </p>
                                    )}
                                  </div>
                                  <span className="font-semibold">
                                    KSh {item.amount.toLocaleString()}
                                  </span>
                                </div>
                              ))}
                            </div>
                            <div className="border-t mt-3 pt-3 flex justify-between items-center font-bold">
                              <span>Total Amount:</span>
                              <span className="text-green-600 text-lg">
                                KSh {(
                                  structure.base_amount + 
                                  structure.fee_structure_items.reduce((sum, item) => 
                                    sum + item.amount, 0
                                  )
                                ).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {activeStructures.length === 0 && (
                  <Card>
                    <CardContent className="text-center py-8">
                      <p className="text-muted-foreground">No active fee structures found</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>

          {archivedStructures.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Archived Structures</h3>
              <div className="grid gap-4">
                {archivedStructures.map((structure) => (
                  <Card key={structure.id} className="opacity-60">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{structure.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {structure.academic_year} - {structure.term} | Grade {structure.grade_level}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary">Archived</Badge>
                          <Button variant="ghost" size="sm" title="Restore">
                            <Archive className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" title="Delete Permanently">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Base Amount:</span>
                        <span className="font-bold text-green-600">
                          KSh {structure.base_amount.toLocaleString()}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default FeeStructures;


import React, { useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DollarSign, Plus, Edit, Archive, Copy } from 'lucide-react';
import { fetchFeeStructures } from '@/services/supabase/fetchFeeStructures';

const FeeManagement: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingStructure, setEditingStructure] = useState<any>(null);

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

  const handleCreateStructure = () => {
    setEditingStructure(null);
    setIsDialogOpen(true);
  };

  const handleEditStructure = (structure: any) => {
    setEditingStructure(structure);
    setIsDialogOpen(true);
  };

  return (
    <AdminLayout role="bursar" navigation={navigation} roleTitle="Bursar">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Fee Management</h2>
            <p className="text-muted-foreground">
              Create and manage fee structures for different classes and terms
            </p>
          </div>
          <Button onClick={handleCreateStructure}>
            <Plus className="h-4 w-4 mr-2" />
            New Fee Structure
          </Button>
        </div>

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
            {feeStructures?.map((structure) => (
              <Card key={structure.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{structure.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {structure.academic_year} - {structure.term} | Grade {structure.grade_level}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant={structure.is_active ? 'default' : 'secondary'}>
                        {structure.is_active ? 'Active' : 'Inactive'}
                      </Badge>
                      <Button variant="ghost" size="sm" onClick={() => handleEditStructure(structure)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Archive className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Base Amount:</span>
                      <span className="font-bold text-green-600">
                        KSh {structure.base_amount?.toLocaleString()}
                      </span>
                    </div>
                    {structure.fee_structure_items && structure.fee_structure_items.length > 0 && (
                      <div className="pt-2 border-t">
                        <p className="text-sm font-medium mb-2">Fee Breakdown:</p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          {structure.fee_structure_items.map((item: any) => (
                            <div key={item.id} className="flex justify-between">
                              <span>{item.name}</span>
                              <span>KSh {item.amount?.toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingStructure ? 'Edit Fee Structure' : 'Create New Fee Structure'}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Structure Name</Label>
                  <Input id="name" placeholder="e.g., Term 1 2024 Fees" />
                </div>
                <div>
                  <Label htmlFor="grade">Grade Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Grade 1</SelectItem>
                      <SelectItem value="2">Grade 2</SelectItem>
                      <SelectItem value="3">Grade 3</SelectItem>
                      <SelectItem value="4">Grade 4</SelectItem>
                      <SelectItem value="5">Grade 5</SelectItem>
                      <SelectItem value="6">Grade 6</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="year">Academic Year</Label>
                  <Input id="year" placeholder="2024" />
                </div>
                <div>
                  <Label htmlFor="term">Term</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select term" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Term 1</SelectItem>
                      <SelectItem value="2">Term 2</SelectItem>
                      <SelectItem value="3">Term 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="base-amount">Base Amount (KSh)</Label>
                <Input id="base-amount" type="number" placeholder="15000" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Brief description of this fee structure" />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>
                  {editingStructure ? 'Update' : 'Create'} Structure
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default FeeManagement;

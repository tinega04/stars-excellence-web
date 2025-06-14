
import React, { useState } from 'react';
import { AdminLayout } from '@/components/portal/admin/AdminLayout';
import { Server, Users, Settings, Activity, Shield, Database, UserPlus, UsersIcon, UserCog } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const CreateUser = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    phoneNumber: '',
    address: '',
    classAssigned: '',
    subject: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.role) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate user creation
    toast({
      title: "User Created Successfully",
      description: `${formData.fullName} has been created as a ${formData.role}.`,
    });

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      role: '',
      phoneNumber: '',
      address: '',
      classAssigned: '',
      subject: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AdminLayout role="it" navigation={navigation} roleTitle="IT Administrator">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <UserPlus className="h-8 w-8 text-blue-600" />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Create New User</h2>
            <p className="text-muted-foreground">
              Add new users to the Stevens Integrated Schools portal
            </p>
          </div>
        </div>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>User Registration Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="user@stevens.edu"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">User Role *</Label>
                <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select user role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="educator">Educator</SelectItem>
                    <SelectItem value="guardian">Guardian</SelectItem>
                    <SelectItem value="learner">Learner</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    placeholder="+254 700 000 000"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    placeholder="Enter address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                </div>
              </div>

              {formData.role === 'educator' && (
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject/Department</Label>
                  <Input
                    id="subject"
                    placeholder="e.g., Mathematics, English, Science"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                  />
                </div>
              )}

              {(formData.role === 'learner' || formData.role === 'guardian') && (
                <div className="space-y-2">
                  <Label htmlFor="classAssigned">Class/Grade</Label>
                  <Select value={formData.classAssigned} onValueChange={(value) => handleInputChange('classAssigned', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grade-1">Grade 1</SelectItem>
                      <SelectItem value="grade-2">Grade 2</SelectItem>
                      <SelectItem value="grade-3">Grade 3</SelectItem>
                      <SelectItem value="grade-4">Grade 4</SelectItem>
                      <SelectItem value="grade-5">Grade 5</SelectItem>
                      <SelectItem value="grade-6">Grade 6</SelectItem>
                      <SelectItem value="grade-7">Grade 7</SelectItem>
                      <SelectItem value="grade-8">Grade 8</SelectItem>
                      <SelectItem value="form-1">Form 1</SelectItem>
                      <SelectItem value="form-2">Form 2</SelectItem>
                      <SelectItem value="form-3">Form 3</SelectItem>
                      <SelectItem value="form-4">Form 4</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="flex gap-4">
                <Button type="submit" className="flex-1">
                  Create User Account
                </Button>
                <Button type="button" variant="outline" onClick={() => setFormData({
                  fullName: '',
                  email: '',
                  role: '',
                  phoneNumber: '',
                  address: '',
                  classAssigned: '',
                  subject: ''
                })}>
                  Clear Form
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default CreateUser;

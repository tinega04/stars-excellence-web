
import React, { useState } from 'react';
import { AdminLayout } from '@/components/portal/admin/AdminLayout';
import { Server, Users, Settings, Activity, Shield, Database, UserPlus, UsersIcon, UserCog, Search, RotateCcw, UserCheck, UserX, Edit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ManageAccounts = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<any>(null);

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

  // Mock user data
  const mockUsers = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah.johnson@stevens.edu', role: 'educator', status: 'active', phone: '+254 700 123 456', address: 'Nairobi, Kenya' },
    { id: 2, name: 'Michael Smith', email: 'michael.smith@guardian.com', role: 'guardian', status: 'active', phone: '+254 701 234 567', address: 'Kisumu, Kenya' },
    { id: 3, name: 'Emily Davis', email: 'emily.davis@stevens.edu', role: 'educator', status: 'active', phone: '+254 702 345 678', address: 'Mombasa, Kenya' },
    { id: 4, name: 'John Brown', email: 'john.brown@stevens.edu', role: 'learner', status: 'active', phone: '+254 703 456 789', address: 'Nakuru, Kenya' },
    { id: 5, name: 'Lisa Wilson', email: 'lisa.wilson@guardian.com', role: 'guardian', status: 'suspended', phone: '+254 704 567 890', address: 'Eldoret, Kenya' },
  ];

  const filteredUsers = mockUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleResetPassword = (userId: number, userName: string) => {
    toast({
      title: "Password Reset",
      description: `Password reset email sent to ${userName}.`,
    });
  };

  const handleSuspendAccount = (userId: number, userName: string) => {
    toast({
      title: "Account Suspended",
      description: `${userName}'s account has been suspended.`,
    });
  };

  const handleReactivateAccount = (userId: number, userName: string) => {
    toast({
      title: "Account Reactivated",
      description: `${userName}'s account has been reactivated.`,
    });
  };

  const handleUpdateUser = (user: any) => {
    toast({
      title: "User Updated",
      description: `${user.name}'s information has been updated.`,
    });
    setSelectedUser(null);
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <AdminLayout role="it" navigation={navigation} roleTitle="IT Administrator">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <UserCog className="h-8 w-8 text-blue-600" />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Manage Accounts</h2>
            <p className="text-muted-foreground">
              Reset passwords, suspend accounts, and update user information
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Account Management</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell className="capitalize">{user.role}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(user.status)}>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleResetPassword(user.id, user.name)}
                        >
                          <RotateCcw className="h-4 w-4 mr-1" />
                          Reset Password
                        </Button>
                        
                        {user.status === 'active' ? (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleSuspendAccount(user.id, user.name)}
                          >
                            <UserX className="h-4 w-4 mr-1" />
                            Suspend
                          </Button>
                        ) : (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleReactivateAccount(user.id, user.name)}
                          >
                            <UserCheck className="h-4 w-4 mr-1" />
                            Reactivate
                          </Button>
                        )}

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => setSelectedUser(user)}
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Edit User Information</DialogTitle>
                              <DialogDescription>
                                Update user details and contact information.
                              </DialogDescription>
                            </DialogHeader>
                            {selectedUser && (
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <Label htmlFor="edit-name">Full Name</Label>
                                  <Input
                                    id="edit-name"
                                    defaultValue={selectedUser.name}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="edit-email">Email</Label>
                                  <Input
                                    id="edit-email"
                                    type="email"
                                    defaultValue={selectedUser.email}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="edit-phone">Phone</Label>
                                  <Input
                                    id="edit-phone"
                                    defaultValue={selectedUser.phone}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="edit-address">Address</Label>
                                  <Input
                                    id="edit-address"
                                    defaultValue={selectedUser.address}
                                  />
                                </div>
                                <div className="flex gap-2">
                                  <Button onClick={() => handleUpdateUser(selectedUser)}>
                                    Update User
                                  </Button>
                                  <Button variant="outline" onClick={() => setSelectedUser(null)}>
                                    Cancel
                                  </Button>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default ManageAccounts;

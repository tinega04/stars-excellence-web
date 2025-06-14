
import React, { useState } from 'react';
import { AdminLayout } from '@/components/portal/admin/AdminLayout';
import { Server, Users, Settings, Activity, Shield, Database, UserPlus, UsersIcon, UserCog, Search, Filter, Eye, UserX } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const UserDirectory = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

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
    { id: 1, name: 'Sarah Johnson', email: 'sarah.johnson@stevens.edu', role: 'educator', status: 'active', lastLogin: '2024-01-15', class: 'Mathematics Dept' },
    { id: 2, name: 'Michael Smith', email: 'michael.smith@guardian.com', role: 'guardian', status: 'active', lastLogin: '2024-01-14', class: 'Grade 5' },
    { id: 3, name: 'Emily Davis', email: 'emily.davis@stevens.edu', role: 'educator', status: 'active', lastLogin: '2024-01-15', class: 'English Dept' },
    { id: 4, name: 'John Brown', email: 'john.brown@stevens.edu', role: 'learner', status: 'active', lastLogin: '2024-01-13', class: 'Form 2' },
    { id: 5, name: 'Lisa Wilson', email: 'lisa.wilson@guardian.com', role: 'guardian', status: 'suspended', lastLogin: '2024-01-10', class: 'Grade 3' },
    { id: 6, name: 'David Martinez', email: 'david.martinez@stevens.edu', role: 'educator', status: 'active', lastLogin: '2024-01-15', class: 'Science Dept' },
  ];

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'educator': return 'bg-blue-100 text-blue-800';
      case 'guardian': return 'bg-green-100 text-green-800';
      case 'learner': return 'bg-purple-100 text-purple-800';
      case 'principal': return 'bg-red-100 text-red-800';
      case 'bursar': return 'bg-yellow-100 text-yellow-800';
      case 'dos': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const handleDeactivateUser = (userId: number, userName: string) => {
    toast({
      title: "User Deactivated",
      description: `${userName} has been deactivated.`,
    });
  };

  return (
    <AdminLayout role="it" navigation={navigation} roleTitle="IT Administrator">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <UsersIcon className="h-8 w-8 text-blue-600" />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">User Directory</h2>
            <p className="text-muted-foreground">
              Browse and manage all registered users
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Users</CardTitle>
            <div className="flex gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="educator">Educators</SelectItem>
                  <SelectItem value="guardian">Guardians</SelectItem>
                  <SelectItem value="learner">Learners</SelectItem>
                  <SelectItem value="principal">Principals</SelectItem>
                  <SelectItem value="bursar">Bursars</SelectItem>
                  <SelectItem value="dos">Directors of Studies</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Class/Department</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge className={getRoleColor(user.role)}>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.class}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(user.status)}>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleDeactivateUser(user.id, user.name)}
                        >
                          <UserX className="h-4 w-4" />
                        </Button>
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

export default UserDirectory;

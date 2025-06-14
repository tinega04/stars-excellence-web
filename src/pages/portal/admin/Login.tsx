
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, ArrowLeft } from 'lucide-react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For development - redirect based on username
    const roleMap: { [key: string]: string } = {
      'director@stevens': '/portal/admin/director',
      'principal@stevens': '/portal/admin/principal',
      'dos@stevens': '/portal/admin/studies',
      'it@stevens': '/portal/admin/it',
      'bursar@stevens': '/portal/admin/bursar'
    };

    const route = roleMap[username];
    if (route) {
      navigate(route);
    } else {
      alert('Invalid credentials. Please use one of the predefined admin accounts.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">
      {/* Back to Main Site Link */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Main Site
      </Link>

      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <CardTitle className="text-2xl font-bold">Admin Portal</CardTitle>
          <CardDescription>Stevens Integrated Schools Administration</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <Input
                type="text"
                placeholder="Enter admin username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Development Access:</p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>director@stevens - Director Dashboard</p>
              <p>principal@stevens - Principal Dashboard</p>
              <p>dos@stevens - Director of Studies</p>
              <p>it@stevens - IT Admin Dashboard</p>
              <p>bursar@stevens - Bursar Dashboard</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;

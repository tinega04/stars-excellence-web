
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AccessDenied = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Shield className="h-16 w-16 text-destructive mx-auto mb-4" />
          <CardTitle className="text-2xl font-bold text-destructive">Access Denied</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            You don't have permission to access this admin portal section.
          </p>
          <p className="text-sm text-muted-foreground">
            Please contact your system administrator if you believe this is an error.
          </p>
          <div className="flex flex-col gap-2">
            <Button asChild>
              <Link to="/portal/admin">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Admin Portal
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/">Go to Main Site</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccessDenied;

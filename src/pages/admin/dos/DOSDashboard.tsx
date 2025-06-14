
import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { GraduationCap, CheckSquare, FileText, TrendingUp, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const DOSDashboard = () => {
  const navigation = [
    { name: 'Dashboard', href: '/admin/dos', icon: GraduationCap },
    { name: 'Approve Materials', href: '/admin/dos/materials', icon: CheckSquare },
    { name: 'Approve Results', href: '/admin/dos/results', icon: FileText },
    { name: 'Academic Reports', href: '/admin/dos/reports', icon: TrendingUp },
    { name: 'Educator Logs', href: '/admin/dos/logs', icon: AlertCircle },
  ];

  return (
    <AdminLayout role="dos" navigation={navigation} roleTitle="Director of Studies">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-8 w-8 text-blue-600" />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Director of Studies Dashboard</h2>
            <p className="text-muted-foreground">
              Academic oversight and content approval
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Term Performance</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">78.5%</div>
              <p className="text-xs text-muted-foreground">Average school performance</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <CheckSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">15</div>
              <p className="text-xs text-muted-foreground">Materials & Results</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Academic Reports</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">24</div>
              <p className="text-xs text-muted-foreground">Generated this term</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Learning Materials Approval Queue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: 'Learning Material', subject: 'Mathematics', educator: 'Mrs. Johnson', status: 'pending' },
                  { type: 'Assignment', subject: 'Science', educator: 'Mr. Smith', status: 'pending' },
                  { type: 'Learning Notes', subject: 'English', educator: 'Ms. Davis', status: 'approved' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{item.type} - {item.subject}</h4>
                      <p className="text-sm text-muted-foreground">By {item.educator}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={item.status === 'pending' ? 'destructive' : 'default'}>
                        {item.status}
                      </Badge>
                      {item.status === 'pending' && (
                        <Button size="sm">Review</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Results Approval Queue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: 'Midterm Results', subject: 'Mathematics', grade: 'Grade 5', status: 'pending' },
                  { type: 'Assignment Grades', subject: 'Science', grade: 'Grade 4', status: 'pending' },
                  { type: 'Quiz Results', subject: 'English', grade: 'Grade 6', status: 'approved' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{item.type} - {item.subject}</h4>
                      <p className="text-sm text-muted-foreground">{item.grade}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={item.status === 'pending' ? 'destructive' : 'default'}>
                        {item.status}
                      </Badge>
                      {item.status === 'pending' && (
                        <Button size="sm">Review</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DOSDashboard;

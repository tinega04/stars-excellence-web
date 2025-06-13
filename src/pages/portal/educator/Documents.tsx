
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { 
  LayoutDashboard, 
  BookOpen, 
  ClipboardList, 
  Calendar,
  FileText,
  MessageSquare
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const navigation = [
  { name: 'Dashboard', href: '/portal/educator', icon: LayoutDashboard },
  { name: 'My Subjects', href: '/portal/educator/subjects', icon: BookOpen },
  { name: 'Results Submission', href: '/portal/educator/results', icon: ClipboardList },
  { name: 'Learning Materials', href: '/portal/educator/materials', icon: FileText },
  { name: 'Teaching Resources', href: '/portal/educator/resources', icon: BookOpen },
  { name: 'Timetable', href: '/portal/educator/timetable', icon: Calendar },
  { name: 'System Messages', href: '/portal/educator/messages', icon: MessageSquare },
  { name: 'Document Center', href: '/portal/educator/documents', icon: FileText },
];

const Documents = () => {
  return (
    <PortalLayout portalType="educator" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Document Center</h2>
          <p className="text-muted-foreground">
            Access official school documents and policies
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Official Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Document Center (Coming Soon)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
};

export default Documents;

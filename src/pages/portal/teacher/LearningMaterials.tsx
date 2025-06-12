
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, BookOpen, Users } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/portal/educator', icon: LayoutDashboard },
  { name: 'Learning Materials', href: '/portal/educator/materials', icon: BookOpen },
  { name: 'Class Management', href: '/portal/educator/classes', icon: Users },
];

const TeacherLearningMaterials = () => {
  return (
    <PortalLayout portalType="educator" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Learning Materials</h2>
          <p className="text-muted-foreground">
            Manage and share educational resources with your students
          </p>
        </div>
        
        <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
          <div className="text-center">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">Coming soon...</p>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
};

export default TeacherLearningMaterials;

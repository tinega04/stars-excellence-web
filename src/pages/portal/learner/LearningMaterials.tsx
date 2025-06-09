
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { LayoutDashboard, BookOpen, Receipt } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/portal/learner', icon: LayoutDashboard },
  { name: 'Learning Materials', href: '/portal/learner/materials', icon: BookOpen },
  { name: 'Fee Statements', href: '/portal/learner/fees', icon: Receipt },
];

const LearningMaterials = () => {
  return (
    <PortalLayout portalType="learner" navigation={navigation}>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Learning Materials</h2>
          <p className="text-muted-foreground">
            Access your study materials and resources
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

export default LearningMaterials;

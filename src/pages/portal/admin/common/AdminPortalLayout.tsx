
import React from 'react';
import { PortalLayout } from '@/components/layouts/portal/PortalLayout';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  Activity, 
  Megaphone,
  UserCheck,
  AlertTriangle,
  FileText,
  CheckSquare,
  BarChart,
  Shield,
  Database,
  Bug,
  DollarSign,
  Receipt,
  TrendingUp,
  CreditCard
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface AdminPortalLayoutProps {
  children: React.ReactNode;
  role: 'director' | 'principal' | 'studies' | 'it' | 'bursar';
}

const getNavigationByRole = (role: string): NavigationItem[] => {
  const baseRoute = `/portal/admin/${role}`;
  
  switch (role) {
    case 'director':
      return [
        { name: 'Dashboard', href: baseRoute, icon: LayoutDashboard },
        { name: 'Activity Log', href: `${baseRoute}/activity`, icon: Activity },
        { name: 'School Announcements', href: `${baseRoute}/announcements`, icon: Megaphone },
      ];
    
    case 'principal':
      return [
        { name: 'Dashboard', href: baseRoute, icon: LayoutDashboard },
        { name: 'Admissions', href: `${baseRoute}/admissions`, icon: UserCheck },
        { name: 'Student Discipline', href: `${baseRoute}/discipline`, icon: AlertTriangle },
      ];
    
    case 'studies':
      return [
        { name: 'Dashboard', href: baseRoute, icon: LayoutDashboard },
        { name: 'Approve Content', href: `${baseRoute}/approve-content`, icon: CheckSquare },
        { name: 'Approve Results', href: `${baseRoute}/approve-results`, icon: FileText },
        { name: 'Academic Reports', href: `${baseRoute}/reports`, icon: BarChart },
      ];
    
    case 'it':
      return [
        { name: 'Dashboard', href: baseRoute, icon: LayoutDashboard },
        { name: 'User Accounts', href: `${baseRoute}/users`, icon: Users },
        { name: 'System Settings', href: `${baseRoute}/settings`, icon: Settings },
        { name: 'System Logs', href: `${baseRoute}/logs`, icon: Bug },
      ];
    
    case 'bursar':
      return [
        { name: 'Dashboard', href: baseRoute, icon: LayoutDashboard },
        { name: 'Fee Statements', href: `${baseRoute}/fees`, icon: Receipt },
        { name: 'Term Summaries', href: `${baseRoute}/summaries`, icon: TrendingUp },
        { name: 'Payment Logs', href: `${baseRoute}/payments`, icon: CreditCard },
      ];
    
    default:
      return [
        { name: 'Dashboard', href: baseRoute, icon: LayoutDashboard },
      ];
  }
};

export const AdminPortalLayout: React.FC<AdminPortalLayoutProps> = ({ children, role }) => {
  const navigation = getNavigationByRole(role);
  
  return (
    <PortalLayout portalType="admin" navigation={navigation}>
      {children}
    </PortalLayout>
  );
};

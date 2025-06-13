
import React from 'react';
import { Navigate } from 'react-router-dom';

// Mock user role - in real app this would come from auth context
const getCurrentUserRole = (): 'director' | 'principal' | 'studies' | 'it' | 'bursar' | null => {
  // This would typically come from your authentication context/state
  // For demo purposes, returning 'director' - you can change this to test different roles
  return 'director';
};

const AdminDashboard = () => {
  const userRole = getCurrentUserRole();
  
  // If no role or invalid role, redirect to access denied
  if (!userRole) {
    return <Navigate to="/portal/admin/access-denied" replace />;
  }
  
  // Redirect to role-specific dashboard
  return <Navigate to={`/portal/admin/${userRole}`} replace />;
};

export default AdminDashboard;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';

// Main pages
import Index from '@/pages/Index';
import About from '@/pages/About';
import Academics from '@/pages/Academics';
import Campuses from '@/pages/Campuses';
import Calendar from '@/pages/Calendar';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import Portals from '@/pages/Portals';
import Admissions from '@/pages/Admissions';
import FaqDemo from '@/pages/FaqDemo';
import StaffDemo from '@/pages/StaffDemo';  
import NewsletterDemo from '@/pages/NewsletterDemo';
import TourDemo from '@/pages/TourDemo';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';

// Admin pages
import AdminLogin from '@/pages/admin/AdminLogin';
import PrincipalDashboard from '@/pages/admin/principal/PrincipalDashboard';
import DirectorDashboard from '@/pages/admin/director/DirectorDashboard';
import DOSDashboard from '@/pages/admin/dos/DOSDashboard';
import ITDashboard from '@/pages/admin/it/ITDashboard';

// Bursar pages
import BursarDashboard from '@/pages/admin/bursar/BursarDashboard';
import FeeManagement from '@/pages/admin/bursar/FeeManagement';
import PaymentTracking from '@/pages/admin/bursar/PaymentTracking';
import FinancialReports from '@/pages/admin/bursar/FinancialReports';
import FeeStructures from '@/pages/admin/bursar/FeeStructures';

// Portal pages
import LearnerPortal from '@/pages/portal/LearnerPortal';
import StaffPortal from '@/pages/portal/StaffPortal';

// Guardian Portal pages
import GuardianDashboard from '@/apps/portals/guardian/Dashboard';
import GuardianProgress from '@/pages/guardian/Progress';
import GuardianAchievements from '@/pages/guardian/Achievements';
import GuardianPayments from '@/pages/guardian/Payments';
import GuardianNewsletters from '@/pages/guardian/Newsletters';
import GuardianBlog from '@/pages/guardian/Blog';
import GuardianBlogPost from '@/pages/guardian/BlogPost';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function QueryClient({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

function App() {
  return (
    <QueryClient>
      <Router>
        <div className="min-h-screen bg-background">
          <Toaster />
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/campuses" element={<Campuses />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/portals" element={<Portals />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/faq-demo" element={<FaqDemo />} />
            <Route path="/staff-demo" element={<StaffDemo />} />
            <Route path="/newsletter-demo" element={<NewsletterDemo />} />
            <Route path="/tour-demo" element={<TourDemo />} />
            <Route path="/login" element={<Login />} />

            {/* Admin Portal Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/principal" element={<PrincipalDashboard />} />
            <Route path="/admin/director" element={<DirectorDashboard />} />
            <Route path="/admin/dos" element={<DOSDashboard />} />
            <Route path="/admin/it" element={<ITDashboard />} />
            
            {/* Bursar Portal Routes */}
            <Route path="/admin/bursar" element={<BursarDashboard />} />
            <Route path="/admin/bursar/fees" element={<FeeManagement />} />
            <Route path="/admin/bursar/payments" element={<PaymentTracking />} />
            <Route path="/admin/bursar/reports" element={<FinancialReports />} />
            <Route path="/admin/bursar/structures" element={<FeeStructures />} />

            {/* Portal Routes */}
            <Route path="/portal/learner" element={<LearnerPortal />} />
            <Route path="/portal/staff" element={<StaffPortal />} />
            
            {/* Guardian Portal Routes */}
            <Route path="/portal/guardian" element={<GuardianDashboard />} />
            <Route path="/portal/guardian/progress" element={<GuardianProgress />} />
            <Route path="/portal/guardian/achievements" element={<GuardianAchievements />} />
            <Route path="/portal/guardian/payments" element={<GuardianPayments />} />
            <Route path="/portal/guardian/newsletters" element={<GuardianNewsletters />} />
            <Route path="/portal/guardian/blog" element={<GuardianBlog />} />
            <Route path="/portal/guardian/blog/:slug" element={<GuardianBlogPost />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </QueryClient>
  );
}

export default App;

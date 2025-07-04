import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

// Lazy load pages for better performance
import { lazy } from "react";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Academics = lazy(() => import("./pages/Academics"));
const Campuses = lazy(() => import("./pages/Campuses"));
const Admissions = lazy(() => import("./pages/Admissions"));
const Contact = lazy(() => import("./pages/Contact"));
const Portals = lazy(() => import("./pages/Portals"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Main Portal imports
const LearnerDashboard = lazy(() => import("./apps/portals/learner/Dashboard"));
const EducatorDashboard = lazy(() => import("./apps/portals/educator/Dashboard"));
const GuardianDashboard = lazy(() => import("./apps/portals/guardian/Dashboard"));

// Learner portal sub-routes
const LearnerMaterials = lazy(() => import("./pages/portal/learner/LearningMaterials"));
const LearnerAttendance = lazy(() => import("./pages/portal/learner/LearnerAttendance"));
const LearnerAssignments = lazy(() => import("./pages/portal/learner/LearnerAssignments"));
const LearnerResults = lazy(() => import("./pages/portal/learner/LearnerResults"));
const LearnerAnnouncements = lazy(() => import("./pages/portal/learner/LearnerAnnouncements"));

// Educator portal sub-routes
const EducatorSubjects = lazy(() => import("./pages/portal/educator/Subjects"));
const EducatorResults = lazy(() => import("./apps/portals/educator/StudentResults"));
const EducatorMaterials = lazy(() => import("./pages/portal/teacher/LearningMaterials"));
const EducatorResources = lazy(() => import("./pages/portal/educator/Resources"));
const EducatorTimetable = lazy(() => import("./pages/portal/educator/Timetable"));
const EducatorMessages = lazy(() => import("./pages/portal/educator/Messages"));
const EducatorDocuments = lazy(() => import("./pages/portal/educator/Documents"));

// Guardian portal sub-routes
const GuardianProgress = lazy(() => import("./pages/guardian/Progress"));
const GuardianAchievements = lazy(() => import("./pages/guardian/Achievements"));
const GuardianPayments = lazy(() => import("./pages/guardian/Payments"));
const GuardianNewsletters = lazy(() => import("./pages/guardian/Newsletters"));
const GuardianBlog = lazy(() => import("./pages/guardian/Blog"));
const GuardianBlogPost = lazy(() => import("./pages/guardian/BlogPost"));

// Legacy portal imports for backward compatibility
const LearnerPortal = lazy(() => import("./pages/portal/LearnerPortal"));
const StaffPortal = lazy(() => import("./pages/portal/StaffPortal"));
const LearningPortal = lazy(() => import("./pages/portal/LearningPortal"));

// Admin portal imports
const AdminLogin = lazy(() => import("./pages/portal/admin/Login"));
const AdminDirectorDashboard = lazy(() => import("./pages/portal/admin/director/Dashboard"));
const AdminPrincipalDashboard = lazy(() => import("./pages/portal/admin/principal/Dashboard"));
const AdminStudiesDashboard = lazy(() => import("./pages/portal/admin/studies/Dashboard"));
const AdminITDashboard = lazy(() => import("./pages/portal/admin/it/Dashboard"));
const AdminBursarDashboard = lazy(() => import("./pages/portal/admin/bursar/Dashboard"));
const AdminAccessDenied = lazy(() => import("./pages/portal/admin/common/AccessDenied"));

// IT Admin user management routes
const CreateUser = lazy(() => import("./pages/portal/admin/it/CreateUser"));
const UserDirectory = lazy(() => import("./pages/portal/admin/it/UserDirectory"));
const ManageAccounts = lazy(() => import("./pages/portal/admin/it/ManageAccounts"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Loading component for suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <LoadingSpinner size="lg" className="mx-auto mb-4" />
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Main site routes */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/campuses" element={<Campuses />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portals" element={<Portals />} />
              <Route path="/login" element={<Login />} />
              
              {/* Main Portal Routes */}
              <Route path="/portal/learner" element={<LearnerDashboard />} />
              <Route path="/portal/educator" element={<EducatorDashboard />} />
              <Route path="/portal/guardian" element={<GuardianDashboard />} />
              
              {/* Guardian portal sub-routes */}
              <Route path="/portal/guardian/progress" element={<GuardianProgress />} />
              <Route path="/portal/guardian/achievements" element={<GuardianAchievements />} />
              <Route path="/portal/guardian/payments" element={<GuardianPayments />} />
              <Route path="/portal/guardian/newsletters" element={<GuardianNewsletters />} />
              <Route path="/portal/guardian/blog" element={<GuardianBlog />} />
              <Route path="/portal/guardian/blog/:slug" element={<GuardianBlogPost />} />
              
              {/* Admin Portal Routes */}
              <Route path="/portal/admin" element={<AdminLogin />} />
              <Route path="/portal/admin/director" element={<AdminDirectorDashboard />} />
              <Route path="/portal/admin/principal" element={<AdminPrincipalDashboard />} />
              <Route path="/portal/admin/studies" element={<AdminStudiesDashboard />} />
              <Route path="/portal/admin/it" element={<AdminITDashboard />} />
              <Route path="/portal/admin/bursar" element={<AdminBursarDashboard />} />
              <Route path="/portal/admin/access-denied" element={<AdminAccessDenied />} />
              
              {/* IT Admin User Management Routes */}
              <Route path="/portal/admin/it/users/create" element={<CreateUser />} />
              <Route path="/portal/admin/it/users/directory" element={<UserDirectory />} />
              <Route path="/portal/admin/it/users/manage" element={<ManageAccounts />} />
              
              {/* Learner portal sub-routes */}
              <Route path="/portal/learner/dashboard" element={<LearnerDashboard />} />
              <Route path="/portal/learner/materials" element={<LearnerMaterials />} />
              <Route path="/portal/learner/attendance" element={<LearnerAttendance />} />
              <Route path="/portal/learner/assignments" element={<LearnerAssignments />} />
              <Route path="/portal/learner/results" element={<LearnerResults />} />
              <Route path="/portal/learner/announcements" element={<LearnerAnnouncements />} />
              
              {/* Educator portal sub-routes */}
              <Route path="/portal/educator/subjects" element={<EducatorSubjects />} />
              <Route path="/portal/educator/results" element={<EducatorResults />} />
              <Route path="/portal/educator/materials" element={<EducatorMaterials />} />
              <Route path="/portal/educator/resources" element={<EducatorResources />} />
              <Route path="/portal/educator/timetable" element={<EducatorTimetable />} />
              <Route path="/portal/educator/messages" element={<EducatorMessages />} />
              <Route path="/portal/educator/documents" element={<EducatorDocuments />} />
              
              {/* Redirects from old routes to educator routes */}
              <Route path="/portal/staff" element={<Navigate to="/portal/educator" replace />} />
              <Route path="/portal/staff/*" element={<Navigate to="/portal/educator" replace />} />
              <Route path="/portal/teacher" element={<Navigate to="/portal/educator" replace />} />
              <Route path="/portal/teacher/*" element={<Navigate to="/portal/educator" replace />} />
              
              {/* Legacy portal routes - for backward compatibility */}
              <Route path="/portal/learner-portal" element={<LearnerPortal />} />
              <Route path="/portal/staff-portal" element={<StaffPortal />} />
              <Route path="/portal/learning" element={<LearningPortal />} />
              
              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

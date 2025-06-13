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
const AdminDashboard = lazy(() => import("./apps/portals/admin/Dashboard"));
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

// Legacy portal imports for backward compatibility
const LearnerPortal = lazy(() => import("./pages/portal/LearnerPortal"));
const StaffPortal = lazy(() => import("./pages/portal/StaffPortal"));
const LearningPortal = lazy(() => import("./pages/portal/LearningPortal"));

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
              
              {/* 4 Main Portal Routes */}
              <Route path="/portal/learner" element={<LearnerDashboard />} />
              <Route path="/portal/educator" element={<EducatorDashboard />} />
              <Route path="/portal/admin" element={<AdminDashboard />} />
              <Route path="/portal/guardian" element={<GuardianDashboard />} />
              
              {/* Learner portal sub-routes */}
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

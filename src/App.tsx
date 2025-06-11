import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// Portal imports
const LearnerDashboard = lazy(() => import("./pages/portal/learner/Dashboard"));
const LearnerMaterials = lazy(() => import("./pages/portal/learner/LearningMaterials"));
const LearnerFees = lazy(() => import("./pages/portal/learner/FeeStatements"));
const TeacherDashboard = lazy(() => import("./pages/portal/teacher/Dashboard"));
const TeacherMaterials = lazy(() => import("./pages/portal/teacher/LearningMaterials"));
const TeacherClasses = lazy(() => import("./pages/portal/teacher/ClassManagement"));
const StaffDashboard = lazy(() => import("./pages/portal/staff/Dashboard"));
const StaffResults = lazy(() => import("./pages/portal/staff/StudentResults"));

// New portal pages
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
              
              {/* New portal routes */}
              <Route path="/portal/learner" element={<LearnerPortal />} />
              <Route path="/portal/staff" element={<StaffPortal />} />
              <Route path="/portal/learning" element={<LearningPortal />} />
              
              {/* Existing detailed portal routes */}
              <Route path="/portal/learner/dashboard" element={<LearnerDashboard />} />
              <Route path="/portal/learner/materials" element={<LearnerMaterials />} />
              <Route path="/portal/learner/fees" element={<LearnerFees />} />
              
              {/* Teacher portal routes */}
              <Route path="/portal/teacher" element={<TeacherDashboard />} />
              <Route path="/portal/teacher/materials" element={<TeacherMaterials />} />
              <Route path="/portal/teacher/classes" element={<TeacherClasses />} />
              
              {/* Staff portal detailed routes */}
              <Route path="/portal/staff/dashboard" element={<StaffDashboard />} />
              <Route path="/portal/staff/results" element={<StaffResults />} />
              
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


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Campuses from "./pages/Campuses";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Portal imports
import LearnerDashboard from "./pages/portal/learner/Dashboard";
import LearnerMaterials from "./pages/portal/learner/LearningMaterials";
import LearnerFees from "./pages/portal/learner/FeeStatements";
import TeacherDashboard from "./pages/portal/teacher/Dashboard";
import TeacherMaterials from "./pages/portal/teacher/LearningMaterials";
import TeacherClasses from "./pages/portal/teacher/ClassManagement";
import StaffDashboard from "./pages/portal/staff/Dashboard";
import StaffResults from "./pages/portal/staff/StudentResults";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main site routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/campuses" element={<Campuses />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Learner portal routes */}
            <Route path="/portal/learner" element={<LearnerDashboard />} />
            <Route path="/portal/learner/materials" element={<LearnerMaterials />} />
            <Route path="/portal/learner/fees" element={<LearnerFees />} />
            
            {/* Teacher portal routes */}
            <Route path="/portal/teacher" element={<TeacherDashboard />} />
            <Route path="/portal/teacher/materials" element={<TeacherMaterials />} />
            <Route path="/portal/teacher/classes" element={<TeacherClasses />} />
            
            {/* Staff portal routes */}
            <Route path="/portal/staff" element={<StaffDashboard />} />
            <Route path="/portal/staff/results" element={<StaffResults />} />
            
            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

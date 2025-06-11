
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import HeroSection from "@/components/admissions/HeroSection";
import WhyJoinSection from "@/components/admissions/WhyJoinSection";
import AdmissionsProcessSection from "@/components/admissions/AdmissionsProcessSection";
import RequirementsSection from "@/components/admissions/RequirementsSection";
import EnrollmentSection from "@/components/admissions/EnrollmentSection";
import CallToActionSection from "@/components/admissions/CallToActionSection";

const Admissions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Admissions | Stevens Integrated Schools</title>
        <meta name="description" content="Learn about our admissions process and join our learning community that celebrates every child's potential." />
      </Helmet>

      <Navigation />

      <HeroSection />

      <main className="flex-grow">
        <WhyJoinSection />
        <AdmissionsProcessSection />
        <RequirementsSection />
        <EnrollmentSection />
        <CallToActionSection />
      </main>

      <Footer />
    </div>
  );
};

export default Admissions;

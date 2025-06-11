
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Eye, UserCheck, Check } from "lucide-react";

const AdmissionsProcessSection = () => {
  const admissionSteps = [
    {
      step: 1,
      icon: FileText,
      title: "Inquire",
      description: "Contact the school or fill out the online inquiry form."
    },
    {
      step: 2,
      icon: Eye,
      title: "Visit",
      description: "Schedule a school tour and meet the team."
    },
    {
      step: 3,
      icon: FileText,
      title: "Apply",
      description: "Fill out the application form and submit necessary documents."
    },
    {
      step: 4,
      icon: UserCheck,
      title: "Interview & Assessment",
      description: "We assess readiness and fit."
    },
    {
      step: 5,
      icon: Check,
      title: "Acceptance",
      description: "Receive offer letter and complete registration."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -4,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconBounce = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.2
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Enroll Your Child
          </h2>
          <p className="text-lg text-gray-600">
            Follow these simple steps to begin your child's journey with us
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {admissionSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover="hover"
              initial="rest"
              className="relative"
            >
              <Card className="text-center hover:shadow-xl transition-all duration-300 h-full">
                <motion.div variants={cardHover}>
                  <CardContent className="p-6">
                    <motion.div 
                      className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {step.step}
                    </motion.div>
                    <motion.div variants={iconBounce}>
                      <step.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    </motion.div>
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </CardContent>
                </motion.div>
              </Card>
              
              {/* Connecting line for larger screens */}
              {index < admissionSteps.length - 1 && (
                <motion.div 
                  className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-200"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionsProcessSection;

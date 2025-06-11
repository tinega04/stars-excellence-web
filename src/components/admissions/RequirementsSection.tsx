
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const RequirementsSection = () => {
  const requirements = [
    "Completed application form",
    "Child's birth certificate",
    "Recent passport-size photo",
    "Most recent school report (if transferring)",
    "Copy of parent/guardian ID"
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
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

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Need
            </h2>
            <p className="text-lg text-gray-600">
              Ensure you have all the required documents for a smooth application process
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover="hover"
          >
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <motion.div variants={cardHover}>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">Required Documents</CardTitle>
                  <CardDescription>Please prepare the following items for your application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {requirements.map((requirement, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="bg-green-100 p-1 rounded-full"
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Check className="h-4 w-4 text-green-600" />
                        </motion.div>
                        <span className="text-gray-700">{requirement}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;

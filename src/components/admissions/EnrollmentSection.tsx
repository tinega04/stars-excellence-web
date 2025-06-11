
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const EnrollmentSection = () => {
  const enrollmentDates = [
    {
      intake: "January Intake",
      description: "Nursery to Grade 8",
      available: true
    },
    {
      intake: "May Mid-Year Entry",
      description: "Subject to availability",
      available: false
    },
    {
      intake: "September Intake",
      description: "Main Admissions for all classes",
      available: true
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

  return (
    <section className="py-16 bg-gray-50">
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
              Key Dates
            </h2>
            <p className="text-lg text-gray-600">
              Plan your application around our intake schedules
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {enrollmentDates.map((date, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover="hover"
                initial="rest"
              >
                <Card className={`shadow-lg hover:shadow-xl transition-all duration-300 ${date.available ? 'border-blue-200' : 'border-gray-200'}`}>
                  <motion.div variants={cardHover}>
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Calendar className={`h-5 w-5 ${date.available ? 'text-blue-600' : 'text-gray-400'}`} />
                        </motion.div>
                        <CardTitle className={`text-lg ${date.available ? 'text-blue-700' : 'text-gray-500'}`}>
                          {date.intake}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-3">{date.description}</p>
                      <motion.div 
                        className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                          date.available 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {date.available ? 'Open for Applications' : 'Limited Availability'}
                      </motion.div>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;

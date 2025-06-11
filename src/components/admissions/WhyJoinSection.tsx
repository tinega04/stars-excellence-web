
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Code, Shield, Heart } from "lucide-react";

const WhyJoinSection = () => {
  const whyJoinFeatures = [
    {
      icon: Users,
      text: "Small class sizes for personalized attention"
    },
    {
      icon: Award,
      text: "Strong academic performance across all subjects"
    },
    {
      icon: Code,
      text: "Innovative programs in coding, chess, debate & music"
    },
    {
      icon: Shield,
      text: "Safe and inclusive environment"
    },
    {
      icon: Heart,
      text: "Highly qualified and passionate staff"
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
    <section className="py-16 bg-white">
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
            A Holistic Environment for Every Learner
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe in nurturing well-rounded students prepared for tomorrow's challenges. 
            Our school fosters academic excellence, character development, and personal growth.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {whyJoinFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover="hover"
              initial="rest"
            >
              <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <motion.div variants={cardHover}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="bg-blue-100 p-3 rounded-full"
                        variants={iconBounce}
                      >
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </motion.div>
                      <p className="text-gray-700 font-medium">{feature.text}</p>
                    </div>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoinSection;

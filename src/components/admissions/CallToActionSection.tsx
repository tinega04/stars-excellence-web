
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join a learning community that celebrates every child's potential.
          </p>
          
          <motion.div 
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95"
                asChild
              >
                <Link to="/contact">
                  Apply Now
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;

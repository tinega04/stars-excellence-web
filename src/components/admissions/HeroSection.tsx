
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-blue-900 to-blue-800 py-20 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.h1 
          className="font-serif text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Admissions
        </motion.h1>
        <motion.p 
          className="text-xl text-blue-100 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Join a learning community that celebrates every child's potential and prepares them for tomorrow's challenges.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroSection;

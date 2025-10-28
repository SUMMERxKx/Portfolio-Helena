import { motion } from 'framer-motion';
import { Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-background/80">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center mb-8"
        >
          <img
            src="/assets/helena.jpeg"
            alt="Helena Zhao"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-accent shadow-2xl mb-6"
            onLoad={() => console.log('Image loaded successfully')}
            onError={(e) => console.log('Image failed to load:', e)}
            loading="lazy"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary text-center">
            Helena Zhao
          </h1>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="w-24 h-1 bg-accent mx-auto mb-8"
        />
        
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-primary/80 mb-3 font-medium"
        >
          Finance & MIS @ SFU
        </motion.p>
        
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-primary/70 mb-8 sm:mb-12"
        >
          Industry Funding @ WorkSafeBC
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/helenazzhao/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent text-white px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <Linkedin size={20} />
            LinkedIn
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:helenaminzhizhao@gmail.com"
            className="flex items-center gap-2 border-2 border-accent text-accent px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-accent hover:text-white transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <Mail size={20} />
            Email
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-primary text-primary px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <FileText size={20} />
            Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

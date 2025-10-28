import { motion } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-display font-semibold mb-6">
            Let's Connect
          </h3>
          
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/helenazzhao/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:helenaminzhizhao@gmail.com"
              className="text-white hover:text-accent transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/helenazhao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>
          </div>
          
          <div className="border-t border-white/20 pt-6">
            <p className="text-white/70 text-sm">
              © {currentYear} Helena Zhao. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

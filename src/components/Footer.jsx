import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-accent text-background py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-display font-semibold mb-4">
            Let's Connect
          </h3>
          <p className="text-background/80 mb-8 text-base sm:text-lg max-w-2xl mx-auto">
            I'm always excited to chat about data storytelling, community building, and new experiences in Vancouver and beyond.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/helenazzhao/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-background/90 text-accent font-semibold rounded-cozy px-6 py-3 shadow-cozy border border-highlight/70 hover:bg-background transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
              LinkedIn
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:helenaminzhizhao@gmail.com"
              className="flex items-center justify-center gap-2 bg-background/90 text-accent font-semibold rounded-cozy px-6 py-3 shadow-cozy border border-highlight/70 hover:bg-background transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={22} />
              helenaminzhizhao@gmail.com
            </motion.a>
          </div>

          <div className="bg-background/15 border border-highlight/50 rounded-cozy px-6 py-5 mb-10">
            <h4 className="text-xl font-display font-semibold text-background mb-3">
              Languages & Interests
            </h4>
            <p className="text-background/80 text-sm sm:text-base">
              English (Fluent) · Cantonese (Intermediate) · Mandarin (Beginner) · Portuguese (Beginner)
            </p>
          </div>
          
          <div className="border-t border-background/30 pt-6">
            <p className="text-background/70 text-sm">
              © {currentYear} Helena Zhao. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

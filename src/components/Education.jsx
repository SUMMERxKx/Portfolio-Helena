import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { education } from '../data/education';
import { MapPin } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-highlight/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01, boxShadow: '0 10px 24px rgba(0,0,0,0.32)' }}
              className="bg-highlight/85 backdrop-blur-sm border border-accent/30 rounded-cozy shadow-cozy p-6 sm:p-8 transition-transform duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-display font-semibold text-primary mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-accent font-medium mb-2">
                    {edu.institution}
                  </p>
                  {edu.location && (
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <MapPin size={16} className="text-accent" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-sm text-primary/70 font-medium bg-highlight/70 rounded-full px-4 py-2">
                    {edu.period}
                  </span>
                </div>
              </div>
              
              {edu.bullets && (
                <ul className="space-y-2">
                  {edu.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                      <span className="text-primary/75">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

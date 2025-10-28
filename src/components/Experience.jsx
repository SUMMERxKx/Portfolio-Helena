import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '../data/experience';

const Experience = () => {
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-display font-semibold text-primary mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-accent font-medium mb-2">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-primary/60 font-medium bg-primary/5 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                  {exp.location && (
                    <p className="text-sm text-primary/60 mt-1">
                      {exp.location}
                    </p>
                  )}
                </div>
              </div>
              
              <p className="text-primary/80 mb-4">
                {exp.description}
              </p>
              
              <ul className="space-y-2">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span className="text-primary/70">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

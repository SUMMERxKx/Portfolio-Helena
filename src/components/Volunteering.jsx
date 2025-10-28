import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { volunteering } from '../data/volunteering';

const Volunteering = () => {
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
    <section id="volunteering" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary mb-4">
            Volunteering
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {volunteering.map((vol, index) => (
            <motion.div
              key={vol.id}
              variants={itemVariants}
              className="bg-background rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-display font-semibold text-primary mb-1">
                    {vol.role}
                  </h3>
                  <p className="text-lg text-accent font-medium mb-2">
                    {vol.organization}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-primary/60 font-medium bg-primary/5 px-3 py-1 rounded-full">
                    {vol.period}
                  </span>
                  {vol.location && (
                    <p className="text-sm text-primary/60 mt-1">
                      {vol.location}
                    </p>
                  )}
                </div>
              </div>
              
              <ul className="space-y-2">
                {vol.bullets.map((bullet, bulletIndex) => (
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

export default Volunteering;

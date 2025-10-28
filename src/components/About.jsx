import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary mb-12">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-primary/80 leading-relaxed">
            <p>
              I'm a Finance and Management Information Systems student at Simon Fraser University, 
              passionate about using data and technology to improve financial and operational outcomes. 
              At WorkSafeBC, I've worked on industry funding initiatives that connect strategy, 
              analytics, and process improvement.
            </p>
            
            <p>
              My experience spans from hands-on customer service and team leadership at Sharetea to 
              strategic project management in student organizations like Enactus SFU. I believe in 
              the power of combining analytical thinking with collaborative leadership to drive 
              meaningful change in both business and social contexts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

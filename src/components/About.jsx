import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactDetails = [
    { icon: <MapPin size={18} />, label: 'Location', value: 'Vancouver, BC' },
    { icon: <Mail size={18} />, label: 'Email', value: 'helenaminzhizhao@gmail.com', href: 'mailto:helenaminzhizhao@gmail.com' },
    { icon: <Phone size={18} />, label: 'Phone', value: '(778)-991-8226', href: 'tel:17789918226' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/helenazzhao', href: 'https://www.linkedin.com/in/helenazzhao/' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary mb-10">
            About Me
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-primary/80 leading-relaxed">
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <div className="bg-highlight/80 backdrop-blur-sm border border-accent/30 rounded-cozy shadow-cozy p-6 sm:p-8">
            <h3 className="text-2xl font-display font-semibold text-primary mb-4">
              Meet Helena
            </h3>
            <p className="text-primary/80 text-base sm:text-lg mb-6">
              Currently based in Vancouver, Helena enjoys collaborating with multidisciplinary teams, translating insights from data, and building supportive communities through mentorship and student leadership.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {contactDetails.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3 bg-highlight/40 rounded-cozy px-4 py-3">
                  <span className="text-accent mt-1">{icon}</span>
                  <div>
                    <p className="text-sm text-muted uppercase tracking-wide">{label}</p>
                    <p className="text-primary font-medium break-all">
                      {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="underline break-all hover:text-accent">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-highlight/80 backdrop-blur-sm border border-accent/30 rounded-cozy shadow-cozy p-6 sm:p-8">
            <h3 className="text-2xl font-display font-semibold text-primary mb-4">
              Highlights
            </h3>
            <ul className="space-y-3 text-left text-primary/80 text-base sm:text-lg">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent"></span>
                <span>Skilled in Microsoft Office Suite (Excel, Word, PowerPoint, Access) and Power BI for reporting, data cleaning, and insight generation.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent"></span>
                <span>Strong interpersonal, adaptability, and organizational skills developed through 4+ years in customer service and team management.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent"></span>
                <span>Active contributor to student clubs and leadership initiatives, supporting peers through mentorship and community engagement.</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

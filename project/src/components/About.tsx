import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">About Me</h2>

          <div className="max-w-3xl mx-auto text-left text-subtext1 leading-relaxed space-y-6">
            <p className="leading-relaxed">
              I’m an IT Professional with a strong foundation in systems administration, user support, and infrastructure operations.
              I focus on keeping systems stable, secure, and efficient while supporting end users and business critical services 
              in real world environments.
            </p>

            <p className="leading-relaxed">
              My background spans desktop support, Linux and Windows system administration, and cloud-based infrastructure.
              I enjoy working close to the systems themselves, troubleshooting issues, improving reliability, and 
              automating repetitive tasks to reduce operational friction.
            </p>

            <p className="leading-relaxed">
              I bring a practical, hands-on mindset to IT operations, understanding how systems behave in production, responding 
              calmly under pressure, and continuously improving processes through documentation and automation. I'm especially interested
              in roles where I can grow deeper into systems administration while contributing to operational excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

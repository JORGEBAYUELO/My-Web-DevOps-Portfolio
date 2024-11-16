import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-base">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-text mb-8">About Me</h2>
          <div className="space-y-6 text-left text-subtext1">
            <p className="leading-relaxed">
              I'm a Junior System Administrator and DevOps Engineer transitioning from a decade-long career as a 
              technical 3D artist into the dynamic world of IT. My journey is fueled by a passion for technology, 
              creative problem-solving, and a commitment to continuous learning in this fast-evolving field.
            </p>
            
            <p className="leading-relaxed">
              I have recently obtained my AWS Certified Cloud Practitioner certification, marking an important 
              milestone in my cloud computing journey. Currently, I'm focused on pursuing RHCSA certification to 
              strengthen my system administration expertise, gaining more hands-on experience with AWS cloud 
              computing, and building the foundational skills required for a successful DevOps career.
            </p>
            
            <p className="leading-relaxed">
              My background in 3D artistry has honed my ability to approach challenges with a unique perspective, 
              combining creativity with logical problem-solving. Paired with strong communication and leadership 
              skills, I'm equipped to tackle complex IT challenges and contribute to dynamic, collaborative 
              environments.
            </p>
            
            <p className="leading-relaxed">
              I'm excited to grow in both system administration and DevOps roles, leveraging my skills to deliver 
              innovative solutions and drive technological excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
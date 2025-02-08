import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
              I've always been the kind of person who loves solving technical
              puzzles. My journey with technology started when I was 13 years
              old, tinkering with computers, troubleshooting issues, and
              eventually building my own PCs. That hands-on passion for IT
              naturally grew over the years, leading me to explore Linux, system
              administration, and cloud technologies.
            </p>

            <p className="leading-relaxed">
              I originally worked as a Technical Artist in Unreal Engine, where
              I spent years troubleshooting complex issues, automating
              workflows, and optimizing 3D environments. But over time, I
              realized my real passion was in IT Support and System
              Administration, so I made the leap into the field.
            </p>

            <p className="leading-relaxed">
              Now, I focus on keeping systems running smoothly, solving IT
              problems, and making technology work better for people. I've
              earned my AWS Certified Cloud Practitioner and CompTIA A+
              certifications, and I'm currently working on my CompTIA Network+
              to strengthen my networking knowledge.
            </p>

            <p className="leading-relaxed">
              I've had hands-on experience with Linux system administration, AWS
              cloud services, IT troubleshooting, and system support. I love
              digging into technical issues, figuring things out, and making IT
              operations more efficient.
            </p>

            <p className="leading-relaxed">
              Right now, I'm looking for opportunities in IT Support and System
              Administration, but my long-term goal is to grow into a DevOps
              Engineer, where I can combine my love for automation, cloud
              computing, and problem-solving.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

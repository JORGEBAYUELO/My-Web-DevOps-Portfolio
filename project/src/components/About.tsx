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
              I’m a Cloud DevOps Engineer passionate about building infrastructure that helps teams move faster, deploy confidently, 
              and operate reliably. My focus is on bridging the gap between development and operations, designing systems that are 
              scalable, secure, and maintainable in production environments.
            </p>

            <p className="leading-relaxed">
              I help organizations streamline delivery pipelines, improve reliability, and reduce operational friction by combining 
              automation, Infrastructure as Code, and cloud best practices. My toolkit includes AWS, Terraform, Kubernetes, Linux, 
              Docker, and CI/CD pipelines, with an emphasis on security, efficiency, and continuous improvement.
            </p>

            <p className="leading-relaxed">
              I've worked on building and optimizing AWS environments, automating deployment workflows, and managing 
              containerized systems that support business-critical applications. My background in Linux systems administration and 
              troubleshooting allows me to diagnose complex infrastructure issues and design solutions that scale sustainably.
            </p>

            <p className="leading-relaxed">
              What motivates me is creating systems that empower teams, making delivery faster, processes smoother, and systems 
              more resilient. I thrive in environments that value collaboration, transparency, and a culture of learning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

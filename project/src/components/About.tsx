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
              I’m a CompTIA Security+ certified professional with hands-on experience supporting enterprise users,
              managing endpoints, troubleshooting Windows and Linux systems, and maintaining secure access in
              production environments.
            </p>

            <p className="leading-relaxed">
              My background as a Desktop Support Technician has given me direct exposure to how real business
              systems operate, how incidents impact users, and how to investigate technical issues efficiently under
              pressure. That operational experience translates naturally into security monitoring, alert triage, endpoint
              defense, and incident escalation.
            </p>

            <p className="leading-relaxed">
              I'm currently focused on transitioning into a SOC Analyst Level 1 role, where I can apply my foundation in
              IT operations alongside growing skills in SIEM monitoring, log analysis, phishing investigation, vulnerability
              management, and threat detection. I bring a calm, analytical mindset and a strong commitment to
              continuous improvement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

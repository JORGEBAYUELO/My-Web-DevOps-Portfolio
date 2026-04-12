import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "Linux/Unix Systems", level: 90 },
  { name: "Windows Systems (Desktop & Server)", level: 85 },
  { name: "User & Access Management (Permissions, SSH, IAM concepts)", level: 85 },
  { name: "System Troubleshooting & Incident Resolution", level: 90 },
  { name: "Hardware & Software Support", level: 85 },
  { name: "Networking Fundamentals (DNS, TCP/IP, Firewalls)", level: 75 },
  { name: "Bash Scripting", level: 85 },
  { name: "Python (Automation & Utilities)", level: 75 },
  { name: "AWS/Cloud Platforms", level: 80 },
  { name: "Infrastructure as Code (Terraform)", level: 75 },
  { name: "Docker", level: 80 },
  { name: "CI/CD", level: 75 },
  { name: "Kubernetes (Foundational)", level: 70 },
  { name: "Monitoring & Logging", level: 80 },
  { name: "Security Fundamentals & Best Practices", level: 80 },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 relative">
      {/* SOFT AMBIENT LIGHT */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent/6 blur-[140px] rounded-full" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-16 text-center">
          Technical Skills
        </h2>

        <div ref={ref} className="relative">
          
          {/* GLASS CONTAINER */}
          <div className="glass glass-elevated rounded-2xl p-6 md:p-8 space-y-8">

            {/* INNER LIGHT (inside glass) */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none z-1 z-100">
          
              {/* TOP LEFT LIGHT */}
              <div className="absolute top-[-1%] left-[-2%] w-[460px] h-[460px] bg-accent/5 blur-[60px] rounded-full" />

              {/* BOTTOM RIGHT LIGHT */}
              <div className="absolute bottom-[-5%] right-[-5%] w-[580px] h-[400px] bg-accent/5 blur-[60px] rounded-full" />

            </div>

            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">

                {/* Skill header */}
                 <div className="flex justify-between items-center text-sm md:text-base">
                    <span className="text-text font-medium">{skill.name}</span>
                    <span className="text-accent font-semibold">{skill.level}%</span>
                 </div>

                {/* Progress bar container */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-emerald-300 shadow-[0_0_10px_rgba(166,227,161,0.4)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

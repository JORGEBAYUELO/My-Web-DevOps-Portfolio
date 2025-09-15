import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "Linux/Unix Systems", level: 90 },
  { name: "Bash Scripting", level: 85 },
  { name: "AWS/Cloud Platforms", level: 90 },
  { name: "Kubernetes", level: 80 },
  { name: "Terraform", level: 85 },
  { name: "Docker", level: 95 },
  { name: "CI/CD", level: 90 },
  { name: "Infrastructure as Code", level: 88 },
  { name: "Python", level: 75 },
  { name: "Monitoring & Logging", level: 85 },
  { name: "Security & Compliance", level: 90 },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-base">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-text mb-12 text-center">
          Technical Skills
        </h2>

        <div ref={ref} className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-subtext1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-3 bg-surface0 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-blue to-mauve"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

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
              workflows, and optimizing 3D environments. Over time, I realized
              my real passion was in IT operations, automation, and cloud
              computing, so I transitioned into System Administration and DevOps
              to pursue what truly excites me.
            </p>

            <p className="leading-relaxed">
              Now, I focus on keeping systems running smoothly, automating IT
              operations, and optimizing cloud infrastructure. I have hands-on
              experience with Linux system administration, cloud services,
              automation with Bash and Python, and IT troubleshooting. I am also
              expanding my expertise in Infrastructure as Code, CI/CD pipelines,
              containerization, and monitoring solutions to build scalable and
              efficient systems.
            </p>

            <p className="leading-relaxed">
              I'm currently seeking opportunities in System Administration and
              DevOps, where I can leverage my experience in automation, cloud
              computing, and infrastructure management. My long-term goal is to
              become a DevOps Engineer, designing and implementing cloud-native
              solutions that improve efficiency and reliability.
            </p>

            <p className="leading-relaxed">
              Technology is always evolving, and I thrive on learning new tools
              and solving complex challenges. Whether it's optimizing workflows,
              automating repetitive tasks, or deploying infrastructure, I'm
              always looking for ways to make technology work better. If you
              share a passion for cloud computing, automation, or DevOps, let's
              connect!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

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
              I'm a DevOps Engineer with 4+ years of experience building scalable cloud
              infrastructure, automating deployments, and streamlining CI/CD workflows. My expertise
              spans AWS, Terraform, Kubernetes, Linux systems, and Bash scripting, with a strong
              focus on automation, reliability, and security.
            </p>

            <p className="leading-relaxed">
              I've designed and deployed secure, production-ready AWS environments using
              Infrastructure as Code, optimized EC2 networking and S3 configuration, and
              implemented CI/CD pipelines that reduce deployment friction while increasing stability. I
              thrive on troubleshooting complex infrastructure challenges and ensuring seamless
              collaboration between development and operations.
            </p>

            <p className="leading-relaxed">
              What sets me apart is a strong foundation in system administration and hands-on 
              problem solving across Linux servers, cloud platforms, and containerized environments.
              I'm passionate about building resilient systems that scale efficiently, reduce manual effort,
              effort, and align with best practices.
            </p>

            <p className="leading-relaxed">
              I’m passionate about bridging the gap between development and
              operations by ensuring reliable, automated, and secure
              deployments. Whether it’s designing highly available AWS
              architectures, troubleshooting Linux-based systems, or optimizing
              CI/CD pipelines, I thrive on solving challenging infrastructure
              problems that others may struggle with.
            </p>

            <p className="leading-relaxed">
              What sets me apart is my ability to troubleshoot across multiple
              environments, from Linux servers to cloud-based deployments. My
              expertise in AWS, Terraform, Bash scripting, and system
              administration allows me to deliver scalable, efficient, and
              resilient infrastructures.
            </p>

            <p className="leading-relaxed">
              As I continue refining my DevOps toolkit, I look forward to
              leveraging my skills to automate, optimize, and innovate within
              cloud environments, making technology work smarter, not harder.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

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
              My journey into DevOps started with a strong technical foundation
              in 3D artistry and system administration, where I mastered
              troubleshooting, scripting, and infrastructure management. Over
              time, I transitioned into the DevOps field, combining my passion
              for automation, cloud technologies, and system optimization to
              streamline workflows and enhance operational efficiency.
            </p>

            <p className="leading-relaxed">
              One of my recent DevOps accomplishments was deploying a secure and
              scalable AWS infrastructure using Terraform. I successfully
              automated AWS resource provisioning, resolved S3 bucket versioning
              and security group configuration issues, and optimized EC2
              instance connectivity. This project reinforced my expertise in
              Infrastructure as Code (IaC), AWS security best practices, and
              cloud automation.
            </p>

            <p className="leading-relaxed">
              As part of my continuous learning, I have been preparing for the
              CompTIA Network+ certification, diving deep into networking
              fundamentals, security, and troubleshooting. This has strengthened
              my ability to design and maintain reliable network architectures,
              ensuring seamless connectivity for cloud-based environments.
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

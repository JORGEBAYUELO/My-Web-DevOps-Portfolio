import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Youtube, FileText } from "lucide-react";

const Hero = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      const navbarHeight = 64; // 4rem or h-16
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-base text-text px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue via-mauve to-pink bg-clip-text text-transparent animate-gradient">
            Hi, I'm Jorge Bayuelo
          </h1>
          <p className="text-2xl md:text-3xl text-subtext1 mb-4">
            Cloud DevOps Engineer
          </p>
          <p className="text-lg text-subtext0 mb-8 max-w-2xl mx-auto leading-relaxed">
            I specialize in automation, cloud computing, and system reliability,
            ensuring secure and high-performing IT environments. With expertise
            in Linux, AWS, Infrastructure as Code, and CI/CD pipelines, I help
            streamline operations and enhance scalability.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <SocialLink
              href="https://github.com/JORGEBAYUELO"
              icon={<Github />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/jorgebayuelo/"
              icon={<Linkedin />}
            />
            <SocialLink
              href="mailto:jlbayuelo@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect!"
              icon={<Mail />}
            />
            <SocialLink
              href="https://www.youtube.com/@jbtechhub"
              icon={<Youtube />}
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#projects"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-mauve text-base px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors inline-flex items-center justify-center gap-2 min-w-[180px]"
            >
              View My Work
            </motion.a>

            <motion.a
              href="/JorgeBayuelo_DevOps_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-mauve text-base px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors inline-flex items-center justify-center gap-2 min-w-[180px]"
            >
              <FileText size={20} />
              My Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    className="text-subtext0 hover:text-mauve transition-colors"
  >
    {icon}
  </motion.a>
);

export default Hero;

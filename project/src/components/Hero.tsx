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
      className="relative min-h-screen flex items-center justify-center text-text px-4 pt-16"
    >
      {/* LIGHT SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(166,227,161,0.04),transparent_60%)]">

        {/* MAIN LIGHT (center focus) */}
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-accent/20 blur-[140px] rounded-full" />

        {/* LIGHT FALLOFF */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,255,156,0.08),transparent_60%)]" />

        {/* SECONDARY LIGHT (cool contrast) */}
        <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-sky/6 blur-[120px] rounded-full" />
        
        {/* FADE TO DARK (VERY IMPORTANT for transition) */}
        <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-b from-transparent via-[#0b0f1a]/40 to-[#0b0f1a]" />

        {/* VIGNETTE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,#0b0f1a_100%)]" />

      </div>
      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.25] pb-1 mb-8 md:mb-10 text-accent drop-shadow-[0_0_12px_rgba(166,227,161,0.25)]">
            Hi, I'm Jorge Bayuelo
          </h1>

          {/* ROLE */}
          <p className="text-2xl md:text-3xl text-subtext1 mb-4">
            SOC Analyst
          </p>
          
          {/* DESCRIPTION */}
          <p className="text-lg text-subtext0 mb-12 max-w-2xl mx-auto leading-relaxed">
            Hands on IT professional with experience supporting enterprise users, troubleshooting endpoints,
            managing access controls, and maintaining Windows & Linux environments. Focused on security operations
            including alert triage, incident escalation, vulnerability remediation, phishing analysis, and defensive
            monitoring. CompTIA Security+ certified and ready to contribute in a SOC Analyst Level 1 environment.
          </p>

          {/* SOCIALS (GLASS STYLE) */}
          <div className="flex justify-center gap-6 mb-16">
            <SocialLink
              href="https://github.com/JORGEBAYUELO"
              icon={<Github />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/jorgebayuelo/"
              icon={<Linkedin />}
            />
            <SocialLink
              href="mailto:jorgebayuelontech@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect!"
              icon={<Mail />}
            />
            <SocialLink
              href="https://www.youtube.com/@jbtechhub"
              icon={<Youtube />}
            />
          </div>

          {/* CTA BUTTONS (GLASS + CYBER) */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#projects"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.04, y: -2, boxShadow: "0 8px 20px rgba(166,277,161,0.15)" }}
              whileTap={{ scale: 0.97, y: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="glass glass-button glass-primary px-8 py-3 font-medium inline-flex items-center justify-center gap-2 min-w-[180px]"
            >
              View My Work
            </motion.a>

            <motion.a
              href="/Jorge_Bayuelo_SOC_Analyst.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -1, boxShadow: "0 6px 16px rgba(0,0,0,0.25)" }}
              whileTap={{ scale: 0.97, y: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="glass glass-button glass-secondary px-8 py-3 font-medium inline-flex items-center justify-center gap-2 min-w-[180px]"
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
    whileHover={{ scale: 1.08, rotate: 3, opacity: 1 }}
    whileTap={{ scale: 0.96, rotate: 0 }}
    transition={{ type: "spring", stiffness: 220, damping: 18 }}
    className="glass p-3 text-subtext0 opacity-70 hover:text-accent"
  >
    {icon}
  </motion.a>
);

export default Hero;

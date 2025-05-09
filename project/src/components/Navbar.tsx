import React from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const menuItems = [
  { title: "Home", href: "#home", isExternal: false },
  { title: "About", href: "#about", isExternal: false },
  { title: "Projects", href: "#projects", isExternal: false },
  { title: "Skills", href: "#skills", isExternal: false },
  { title: "My Blog", href: "https://jorgebayuelo.blog/", isExternal: true },
  { title: "Contact", href: "#contact", isExternal: false },
];

const Navbar = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (href === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = 64; // 4rem or h-16
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  // Handle click based on whether link is external or internal
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isExternal: boolean
  ) => {
    if (isExternal) {
      // Allow the default behavior for external links
      // This will open the link in the current tab
      return;
    }

    // Use the scroll function for internal links
    scrollToSection(e, href);
  };

  return (
    <nav className="fixed w-full bg-base/80 backdrop-blur-sm z-50 border-b border-surface0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center space-x-2 text-mauve hover:text-text transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Terminal size={24} />
            <span className="font-bold text-lg">JB</span>
          </motion.a>

          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <motion.a
                key={item.title}
                href={item.href}
                onClick={(e) => handleClick(e, item.href, item.isExternal)}
                className="text-subtext1 hover:text-mauve hover:bg-base/60 px-4 py-2 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target={item.isExternal ? "_blank" : ""}
                rel={item.isExternal ? "noopener noreferrer" : ""}
              >
                {item.title}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const menuItems = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Projects', href: '#projects' },
  { title: 'Skills', href: '#skills' },
  { title: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = 64; // 4rem or h-16
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="fixed w-full bg-base/80 backdrop-blur-sm z-50 border-b border-surface0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
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
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-subtext1 hover:text-mauve hover:bg-base/60 px-4 py-2 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
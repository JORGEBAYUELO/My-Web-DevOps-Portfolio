import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Cloud Infrastructure Automation',
    description: 'Terraform modules for multi-cloud infrastructure with automated deployment pipelines.',
    tags: ['Terraform', 'AWS', 'CI/CD', 'Python'],
    github: 'https://github.com',
    demo: '#'
  },
  {
    title: 'Kubernetes Cluster Management',
    description: 'Custom Kubernetes operators and automation tools for cluster management.',
    tags: ['Kubernetes', 'Go', 'Docker', 'Helm'],
    github: 'https://github.com',
    demo: '#'
  },
  {
    title: 'Monitoring Dashboard',
    description: 'Real-time monitoring dashboard with Prometheus and Grafana integration.',
    tags: ['Prometheus', 'Grafana', 'React', 'Node.js'],
    github: 'https://github.com',
    demo: '#'
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-mantle">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-text mb-12 text-center">
          Featured Projects
        </h2>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-base/40 backdrop-blur-sm rounded-xl p-6 hover:bg-base/60 transition-colors duration-300 border border-surface0"
            >
              <h3 className="text-xl font-semibold text-text mb-3">
                {project.title}
              </h3>
              <p className="text-subtext1 mb-6 text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs bg-surface0/50 text-subtext0 rounded-full backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-surface0">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-sm text-subtext1 hover:text-mauve transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-2 text-sm text-subtext1 hover:text-mauve transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Terraform AWS DevOps Pipeline EKS ECR Helm and Hashicorp Vault",
    description:
      "Full end-toend DevOps pipeline implemented and demostrated with Terraform, AWS (ECR, EKS), Helm, ArgoCD, Prometheus, Grafana, and Hashicorp Vault.",
    tags: [
      "Terraform",
      "AWS EC2, S3, ECR, EKS",
      "ArgoCD",
      "GitHub Actions",
      "Docker",
      "Helm",
      "Prometheus",
      "Grafana",
      "Hashicorp Vault",
    ],
    github: "https://github.com/JORGEBAYUELO/terraform-aws-devops-pipeline-eks-ecr-helm-vault",
    demo: "https://jorgebayuelo.blog/posts/building-a-full-devops-pipeline-on-aws-with-terraform-eks-ecr-helm-prometheus-grafana-and-vault/",
  },
  {
    title: "React App on AWS EKS with ArgoCD (GitOps + CI/CD)",
    description:
      "Deployoment of React Web Application on AWS EKS (Elastic Kubernetes Service) using ArgoCD for GitOps-based deployment.",
    tags: [
      "Kubernetes",
      "AWS EKS",
      "AWS EC2",
      "GitHub Actions",
      "Docker",
      "ArgoCD",
      "Nginx",
    ],
    github: "https://github.com/JORGEBAYUELO/Catppuccino_App",
    demo: "https://jorgebayuelo.blog/posts/react-app-on-aws-eks-with-aegocd-gitops-+-cicd/",
  },
  {
    title: "Secure and Automated CI/CD Deployment in AWS",
    description:
      "Secure and Automated CI/CD Deployment of a React APP with Secrets Management on AWS.",
    tags: [
      "Terraform",
      "AWS EC2",
      "AWS Secret Store Management",
      "GitHub Actions",
      "Docker",
      "SSH",
      "Security Groups",
    ],
    github: "https://github.com/JORGEBAYUELO/secure-and-automated-cicd",
    demo: "https://jorgebayuelo.blog/posts/secure-and-automated-ci-cd-deployment-of-a-react-app-with-secrets-management-on-aws/",
  },
  {
    title: "React App CI/CD AWS S3 Deployment",
    description:
      "React App CI/CD Pipeline With AWS S3 + CloudFront + GitHub Actions + Terraform + WAF",
    tags: [
      "Terraform",
      "AWS S3",
      "AWS CloudFront",
      "GitHub Actions",
      "AWS WAF",
      "React",
    ],
    github: "https://github.com/JORGEBAYUELO/react-s3-deploy",
    demo: "https://jorgebayuelo.blog/posts/from-react-to-resilience---how-i-deployed-my-app-on-aws-using-cicd-terraform-and-waf/",
  },
  {
    title: "AWS Infrastructure Automation with Terraform",
    description:
      "Automated AWS infrastructure setup using Terraform with EC2, S3, and DynamoDB.",
    tags: [
      "Terraform",
      "AWS EC2",
      "AWS S3",
      "DynamoDB",
      "SSH",
      "Security Groups",
      "Bash Script",
    ],
    github:
      "https://github.com/JORGEBAYUELO/Automated-AWS-Terraform-Infrastructure",
    demo: "https://jorgebayuelo.blog/posts/how-i-built-a-fully-automated-aws-infrastructure-using-terraform/",
  },
  {
    title: "DevOps Network Lab With Raspberry Pi 5",
    description:
      "Built a fully automated, observable, and secure home network monitoring stack using Raspberry Pi 5.",
    tags: [
      "DNS",
      "DHCP",
      "Docker",
      "Pi-hole",
      "VPN, WireGuard",
      "Prometheus",
      "Grafana",
      "SSH",
    ],
    github:
      "https://github.com/JORGEBAYUELO/network-lab-devops",
    demo: "https://jorgebayuelo.blog/posts/building-my-first-pi-hole-powered-home-network-monitor-with-grafana-and-prometheus-on-a-raspberry-pi/",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-mantle">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-text mb-12 text-center">
          Featured Projects
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
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
                  <span>Read About It</span>
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

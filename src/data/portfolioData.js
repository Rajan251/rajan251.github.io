export const personalInfo = {
  name: "Rajan Kumar",
  title: "DevOps Engineer",
  email: "rajankumar936199@gmail.com",
  phone: "+91 9217444548",
  location: "Delhi, India",
  github: "https://github.com/Rajan251",
  linkedin: "https://linkedin.com/in/rajankumar25",
  resumeUrl: "./Rajan_Kumar.pdf",
  badge: "DEVOPS ENGINEER · DELHI, INDIA",
  headline: "I build and automate reliable infrastructure.",
  subtitle: "DevOps Engineer with 2+ years of experience working across AWS, CI/CD, containers, observability and production infrastructure.",
  coreStack: ["AWS", "Docker", "Jenkins", "Kubernetes", "Terraform"],
  status: "Open to Full-Time Roles & Freelance DevOps Projects"
};

export const impactMetrics = [
  {
    value: "2+",
    label: "Years Experience",
    subtext: "Production DevOps & Systems"
  },
  {
    value: "8+",
    label: "Applications in CI/CD",
    subtext: "Automated via Jenkins & AWS"
  },
  {
    value: "60%",
    label: "Deployment Time Reduced",
    subtext: "Via containerization & caching"
  },
  {
    value: "99.9%",
    label: "Reported Uptime",
    subtext: "Auto-scaling & self-healing infra"
  }
];

export const servicesData = [
  {
    id: "cicd",
    number: "01",
    title: "CI/CD Pipeline Automation",
    tagline: "Accelerate delivery without sacrificing safety",
    description: "Designing zero-touch build, test, and release pipelines using Jenkins, Docker, and GitHub Actions. Integrated automated testing, SonarQube security gates, and multi-environment rollouts.",
    deliverables: ["Automated build & test pipelines", "Quality gates & vulnerability scanning", "Zero-downtime deployment workflows", "Rollback automation"]
  },
  {
    id: "aws",
    number: "02",
    title: "AWS Cloud Infrastructure",
    tagline: "Resilient, auto-scaling cloud architecture",
    description: "Architecting high-availability infrastructure on AWS with VPC network segregation, Application Load Balancers (ALB), Auto Scaling Groups, and CloudWatch alarms targeting 99.9% uptime.",
    deliverables: ["VPC network & security groups", "Auto Scaling & Load Balancing", "S3, IAM & RDS provisioning", "CloudWatch alerts & cost tuning"]
  },
  {
    id: "containers",
    number: "03",
    title: "Docker & Kubernetes Orchestration",
    tagline: "Lean container builds & scalable cluster deployments",
    description: "Containerizing backend services with multi-stage Docker builds (reducing image size by up to 40%). Deploying multi-node Kubernetes microservices with Helm, HPA, and Ingress routing.",
    deliverables: ["Multi-stage Dockerfile optimization", "Kubernetes cluster configuration", "Helm charts & declarative manifests", "Dynamic HPA workload scaling"]
  },
  {
    id: "observability",
    number: "04",
    title: "Observability & Alerting Stack",
    tagline: "Sub-second visibility to cut MTTR by 30%",
    description: "Deploying production-grade telemetry stacks combining Prometheus for time-series metrics, Grafana for visual dashboards, Loki for central logging, and New Relic APM for database query tuning.",
    deliverables: ["Custom Grafana production dashboards", "Prometheus alerts & threshold rules", "Centralized Loki container logs", "APM query & latency profiling"]
  },
  {
    id: "automation",
    number: "05",
    title: "Disaster Recovery & Automation",
    tagline: "Eliminating manual toil with Python & Shell",
    description: "Building automated backup systems achieving a 100% success rate, executing minimal-downtime database migrations with automated rollback procedures, and automating OS security patch cycles.",
    deliverables: ["100% automated backup routines", "Zero-downtime DB migration scripts", "Python & Bash operations scripts", "SSL renewal & patch management"]
  }
];

export const aboutData = {
  heading: "A little about me",
  bio: "DevOps Engineer focused on building reliable infrastructure, automating software delivery and improving production visibility. My experience spans AWS, Docker, Jenkins, monitoring, Linux systems and hybrid cloud/on-premises environments.",
  currentRole: "DevOps Engineer @ DJT Corporation Investments",
  availability: "Available for full-time engineering roles and targeted freelance DevOps consulting projects."
};

export const experienceData = [
  {
    company: "DJT Corporation Investments Pvt. Ltd.",
    role: "DevOps Engineer",
    period: "July 2024 — Present",
    location: "Noida",
    points: [
      "Built Jenkins CI/CD pipelines for 8+ applications using Docker and AWS, reducing deployment time by 60%.",
      "Managed AWS infrastructure using EC2, ALB, Auto Scaling, VPC and CloudWatch.",
      "Implemented observability with Prometheus, Grafana, Loki, CloudWatch and New Relic, reducing MTTR by 30%.",
      "Automated deployments, backups and maintenance using Python and Shell, eliminating 70% of manual effort."
    ],
    techRow: ["AWS", "Jenkins", "Docker", "Python", "Prometheus", "Grafana", "MongoDB"]
  },
  {
    company: "Reticen8 Technology",
    role: "DevOps Intern",
    period: "January 2024 — July 2024",
    location: "Gurgaon",
    points: [
      "Managed Proxmox infrastructure supporting 15+ development, QA and production VMs.",
      "Worked on FreeBSD firewall infrastructure, restricted access and network troubleshooting.",
      "Implemented Nagios monitoring and PKI-based authentication."
    ],
    techRow: ["Proxmox", "FreeBSD", "Nagios", "PKI", "Networking"]
  }
];

export const projectsData = [
  {
    number: "01",
    title: "Multi-Environment CI/CD",
    tag: "Production Architecture",
    technologies: ["Jenkins", "Docker", "AWS", "SonarQube", "GitHub"],
    description: "Automated build, test and deployment workflow across development, staging and production with Docker and SonarQube quality gates.",
    highlight: "40% smaller Docker images",
    flow: ["GitHub", "Jenkins", "SonarQube", "Docker", "AWS"],
    telemetry: {
      buildTime: "1m 42s",
      securityGate: "PASSED (A-Grade)",
      imageReduction: "-40% footprint",
      environments: "Dev → Staging → Prod"
    }
  },
  {
    number: "02",
    title: "Kubernetes Cluster",
    tag: "Personal Project",
    technologies: ["Kubernetes", "Docker", "Helm", "AWS"],
    description: "Multi-node Kubernetes environment for containerized microservices with Helm, HPA, ingress and persistent storage.",
    highlight: "Auto-Scales on Traffic",
    flow: ["Ingress", "Services", "Pods", "Persistent Storage"],
    telemetry: {
      clusterType: "Multi-Node Microservices",
      scaler: "Horizontal Pod Autoscaler (HPA)",
      packaging: "Declarative Helm Charts",
      routing: "TLS Ingress Controller"
    }
  }
];

export const techStackCategories = [
  {
    category: "Cloud",
    skills: ["AWS", "Azure", "EC2", "EKS", "VPC", "ALB", "S3", "IAM"]
  },
  {
    category: "Containers",
    skills: ["Docker", "Kubernetes", "Helm"]
  },
  {
    category: "CI/CD",
    skills: ["Jenkins", "GitHub Actions", "GitLab CI/CD"]
  },
  {
    category: "Observability",
    skills: ["Prometheus", "Grafana", "Loki", "CloudWatch", "New Relic"]
  },
  {
    category: "Automation",
    skills: ["Terraform", "Ansible", "Python", "Bash", "Shell"]
  }
];

export const secondarySkills = [
  "MongoDB", "MySQL", "Linux", "Nginx", "Git", "SonarQube"
];

export const architectureData = {
  heading: "How I approach delivery",
  sentence: "Automate the path from code commit to production while keeping infrastructure observable and recoverable.",
  stages: [
    { name: "Developer", sub: "Source Code" },
    { name: "Git", sub: "Version Control" },
    { name: "CI/CD", sub: "Jenkins · SonarQube" },
    { name: "Docker", sub: "Multi-Stage Build" },
    { name: "AWS", sub: "EC2 · ALB · VPC" },
    { name: "Monitoring", sub: "Prometheus · Grafana · CloudWatch" }
  ]
};

export const educationData = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Sanskar Educational Group",
    period: "2020–2023"
  },
  {
    degree: "Diploma — Computer Engineering",
    school: "Rajokari Institute of Technology",
    period: "2017–2020"
  }
];

export const certificationsData = [
  {
    title: "DevOps Professional",
    issuer: "Technical Guftgu"
  },
  {
    title: "Linux System Administration",
    issuer: "Udemy"
  }
];

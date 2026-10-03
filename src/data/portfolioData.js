export const personalInfo = {
  name: "Rajan Kumar",
  title: "DevOps Engineer",
  email: "rajankumar936199@gmail.com",
  phone: "+91 9217444548",
  location: "Delhi, India",
  github: "https://github.com/Rajan251",
  githubHandle: "github.com/Rajan251",
  linkedin: "https://linkedin.com/in/rajankumar25",
  linkedinHandle: "linkedin.com/in/rajankumar25",
  resumeUrl: "./Rajan_Kumar.pdf",
  status: "DevOps Engineer · Open to Opportunities",
  headline: "Building Reliable Infrastructure, Automating Delivery.",
  subtitle: "DevOps Engineer specializing in AWS, CI/CD, containerization, observability, and production infrastructure."
};

export const aboutData = {
  intro: "DevOps Engineer with production experience in automating CI/CD pipelines, provisioning resilient AWS cloud infrastructure, container orchestration with Docker & Kubernetes, and architecting end-to-end observability stacks.",
  domains: [
    {
      title: "NBFC Banking Platforms",
      desc: "Delivering secure, highly available deployment pipelines and operational reliability for financial infrastructure."
    },
    {
      title: "Enterprise Internal Systems",
      desc: "Streamlining continuous integration, patch management, and automated maintenance across core enterprise services."
    },
    {
      title: "E-Commerce Applications",
      desc: "Managing full CI/CD lifecycle and high-traffic operational stability for platforms like Deerika hyperlocal e-commerce."
    },
    {
      title: "Hybrid Cloud & On-Premises",
      desc: "Hands-on experience across AWS, Azure, and on-premises infrastructure including Proxmox virtual environments and Unix/FreeBSD systems."
    }
  ],
  pillars: [
    {
      title: "CI/CD & Delivery Automation",
      desc: "Eliminating manual release steps with automated testing, multi-stage container builds, and zero-downtime rollouts."
    },
    {
      title: "High Availability & Reliability",
      desc: "Engineering auto-scaling cloud architectures on AWS with 99.9% reported uptime and automated rollback strategies."
    },
    {
      title: "Observability & APM",
      desc: "Full telemetry with Prometheus, Grafana, Loki, New Relic, and CloudWatch to cut MTTR and isolate production bottlenecks."
    },
    {
      title: "Production Troubleshooting",
      desc: "Systematic root cause analysis, Linux kernel/network tuning, SSL lifecycle management, and disaster recovery automation."
    }
  ]
};

export const metricsData = [
  {
    id: "apps",
    value: "8+",
    label: "Applications Supported",
    description: "Multi-service architectures deployed through automated Jenkins CI/CD pipelines",
    badge: "CI/CD Scale"
  },
  {
    id: "deployment-speed",
    value: "60%",
    label: "Deployment Time Reduction",
    description: "Achieved via Jenkins automation, optimized Docker caching, and pipeline standardization",
    badge: "Delivery Velocity"
  },
  {
    id: "uptime",
    value: "99.9%",
    label: "Reported Uptime",
    description: "Maintained through auto-scaling groups, ALB health checks, and robust failover",
    badge: "Production SLA"
  },
  {
    id: "reliability",
    value: "45%",
    label: "Reliability Improvement",
    description: "System stability gain on AWS infrastructure through automated scaling & self-healing",
    badge: "Cloud Resiliency"
  },
  {
    id: "mttr",
    value: "30%",
    label: "MTTR Reduction",
    description: "Faster incident triage with integrated Prometheus, Grafana, and Loki log telemetry",
    badge: "Incident Response"
  },
  {
    id: "automation",
    value: "70%",
    label: "Manual Effort Eliminated",
    description: "Replaced repetitive operational overhead with Python and Shell automation scripts",
    badge: "Operational Efficiency"
  },
  {
    id: "vms",
    value: "15+",
    label: "VMs Managed",
    description: "Orchestrated across Dev, QA, and Production environments using Proxmox VE",
    badge: "Virtualization"
  }
];

export const skillCategories = [
  {
    category: "Cloud & Infrastructure",
    icon: "Cloud",
    skills: [
      "AWS", "EC2", "EKS", "ALB", "VPC", "CloudWatch", 
      "Auto Scaling", "S3", "IAM", "RDS", "Azure", "Proxmox"
    ]
  },
  {
    category: "Containers & Orchestration",
    icon: "Boxes",
    skills: ["Docker", "Kubernetes", "Helm", "Microservices"]
  },
  {
    category: "CI/CD & Delivery",
    icon: "GitBranch",
    skills: ["Jenkins", "GitLab CI/CD", "GitHub Actions", "Continuous Integration"]
  },
  {
    category: "Infrastructure as Code",
    icon: "Layers",
    skills: ["Terraform", "Ansible", "AWS CloudFormation", "Configuration Management"]
  },
  {
    category: "Monitoring & Observability",
    icon: "Activity",
    skills: ["Prometheus", "Grafana", "Loki", "New Relic APM", "Nagios", "Uptime Kuma", "CloudWatch"]
  },
  {
    category: "Programming & Scripting",
    icon: "Terminal",
    skills: ["Python", "Bash", "Shell Scripting", "YAML", "JSON", "Automation"]
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    skills: ["MongoDB", "MySQL", "SQL", "Database Migration", "Backup Automation"]
  },
  {
    category: "Security & DevSecOps",
    icon: "ShieldCheck",
    skills: ["SonarQube", "RBAC", "SSL/TLS", "PKI Authentication", "Firewall Operations", "Access Control"]
  },
  {
    category: "OS & Networking",
    icon: "Server",
    skills: ["Linux", "Ubuntu", "Unix", "FreeBSD", "TCP/IP", "DNS", "Nginx", "Apache", "Load Balancing", "Packet Analysis"]
  },
  {
    category: "Version Control",
    icon: "GitCommit",
    skills: ["Git", "GitHub", "GitLab"]
  }
];

export const experienceData = [
  {
    title: "DevOps Engineer",
    company: "DJT Corporation Investments Pvt. Ltd.",
    location: "Noida, India",
    period: "July 2024 – Present",
    type: "Full-time",
    summary: "Leading end-to-end DevOps lifecycle across NBFC banking platforms, enterprise internal applications, and Deerika hyperlocal e-commerce.",
    highlights: [
      "Architected Jenkins CI/CD pipelines for 8+ applications with Docker containerization and AWS deployment, reducing deployment time by 60%.",
      "Engineered auto-scaling infrastructure on AWS using EC2, ALB, Auto Scaling, VPC, and CloudWatch, improving system reliability by 45% and maintaining 99.9% reported uptime.",
      "Deployed and maintained an observability stack using Prometheus, Grafana, and Loki, cutting incident resolution time (MTTR) by 30%.",
      "Automated HOB service deployment and core operational workflows using Python and Shell scripting, eliminating 70% of manual effort.",
      "Executed minimal-downtime database migrations with automated rollback procedures, sustaining 99.9% uptime during complex data transfers.",
      "Implemented New Relic APM for database and service query optimization, driving a 40% reduction in query response time.",
      "Engineered automated database backup routines achieving a 100% backup success rate and verified disaster recovery capability.",
      "Administered production SSL certificate renewal cycles, automated OS security patch management, log rotation, and 24x7 production troubleshooting."
    ],
    techStack: ["AWS (EC2, ALB, VPC, Auto Scaling, S3, RDS)", "Docker", "Jenkins", "Prometheus", "Grafana", "Loki", "New Relic APM", "Python", "Bash", "MySQL", "MongoDB"]
  },
  {
    title: "DevOps Intern",
    company: "Reticen8 Technology",
    location: "Gurgaon, India",
    period: "January 2024 – July 2024",
    type: "Internship",
    summary: "Managed bare-metal and virtualized infrastructure, hardened network gateways, and implemented enterprise monitoring systems.",
    highlights: [
      "Managed Proxmox virtual environment, provisioning and supporting 15+ virtual machines across development, QA, and production environments.",
      "Provisioned Unix servers with automated patch management routines, cutting server update cycle time by 50%.",
      "Built custom ISO and FreeBSD-based images from source code and deployed on next-generation firewall hardware with restricted rshell security.",
      "Implemented Nagios monitoring for firewall infrastructure and network hosts, increasing operational visibility by 80%.",
      "Configured PKI-based authentication with secret key management for secure administrative and production access.",
      "Conducted packet analysis, network routing troubleshooting, and perimeter firewall security configurations."
    ],
    techStack: ["Proxmox VE", "FreeBSD", "Unix", "Linux", "Nagios", "PKI / SSL", "Restricted Shell (rshell)", "Network Firewalls", "Bash"]
  }
];

export const projectsData = [
  {
    id: "cicd-pipeline",
    title: "Multi-Environment CI/CD Pipeline",
    category: "Automation & DevSecOps",
    technologies: ["Jenkins", "Docker", "AWS", "SonarQube", "GitHub"],
    description: "Architected an automated build, test, and continuous deployment pipeline supporting microservices architectures across development, staging, and production environments. Features container image optimization and automated static code security verification.",
    keyMetrics: [
      { label: "Image Size Reduction", value: "40%" },
      { label: "Deployment Velocity", value: "50% Faster" },
      { label: "Security Scanning", value: "Automated Quality Gates" }
    ],
    architectureSteps: [
      { step: "1", title: "Developer Push", desc: "Code committed to GitHub branch triggers webhook" },
      { step: "2", title: "Jenkins Trigger", desc: "Multi-branch pipeline triggers automated build agent" },
      { step: "3", title: "Automated Testing", desc: "Unit and integration test suites run in isolated containers" },
      { step: "4", title: "SonarQube Scan", desc: "Static code analysis, vulnerabilities check & quality gates" },
      { step: "5", title: "Multi-Stage Docker", desc: "Optimized Docker build reduces image footprint by 40%" },
      { step: "6", title: "Image Registry", desc: "Tagged image pushed securely to container registry" },
      { step: "7", title: "AWS Deployment", desc: "Automated deployment to Dev, Staging & Production with rollback" }
    ]
  },
  {
    id: "k8s-cluster",
    title: "Kubernetes Cluster Deployment",
    category: "Container Orchestration",
    technologies: ["Kubernetes", "Docker", "Helm", "AWS"],
    description: "Engineered a multi-node Kubernetes cluster configuration tailored for containerized microservices. Implemented declarative package management with Helm, automated Horizontal Pod Autoscaling (HPA) to adapt to traffic spikes, persistent storage volumes, and resilient Ingress routing.",
    keyMetrics: [
      { label: "Architecture", value: "Multi-Node Cluster" },
      { label: "Packaging", value: "Declarative Helm Charts" },
      { label: "Scaling", value: "Horizontal Pod Autoscaler" }
    ],
    architectureComponents: [
      { name: "Ingress Controller", role: "TLS termination & intelligent path-based routing" },
      { name: "Microservice Pods", role: "Stateless containerized application instances" },
      { name: "Horizontal Pod Autoscaler (HPA)", role: "Dynamic CPU/memory-based pod scaling" },
      { name: "Persistent Volumes (PV/PVC)", role: "Stateful storage provisioning for persistence" },
      { name: "Cluster Worker Nodes", role: "Isolated multi-node compute running on AWS" }
    ]
  }
];

export const devopsArchitectureData = {
  title: "How I Think About Infrastructure",
  subtitle: "A holistic blueprint combining automated delivery pipelines, resilient AWS cloud topology, and proactive observability layers.",
  flowStages: [
    {
      id: "source",
      title: "1. Source & Trigger",
      icon: "GitBranch",
      color: "border-sky-500/40 text-sky-400",
      bg: "bg-sky-500/10",
      items: ["Developer commit", "GitHub repository", "Webhooks & branch rules"]
    },
    {
      id: "pipeline",
      title: "2. CI/CD & DevSecOps",
      icon: "Cpu",
      color: "border-cyan-500/40 text-cyan-400",
      bg: "bg-cyan-500/10",
      items: ["Jenkins pipeline orchestration", "SonarQube quality gates", "Multi-stage Docker build"]
    },
    {
      id: "cloud",
      title: "3. AWS Cloud Topology",
      icon: "Cloud",
      color: "border-emerald-500/40 text-emerald-400",
      bg: "bg-emerald-500/10",
      items: ["Application Load Balancer (ALB)", "Auto Scaling Groups (EC2)", "VPC Public/Private Subnets"]
    },
    {
      id: "data",
      title: "4. Data & Persistence",
      icon: "Database",
      color: "border-amber-500/40 text-amber-400",
      bg: "bg-amber-500/10",
      items: ["AWS RDS & MongoDB", "Automated backup routines", "Zero-downtime migrations"]
    },
    {
      id: "observability",
      title: "5. Observability & APM",
      icon: "Activity",
      color: "border-violet-500/40 text-violet-400",
      bg: "bg-violet-500/10",
      items: ["Prometheus & Grafana metrics", "Loki central log aggregation", "New Relic APM & CloudWatch"]
    }
  ]
};

export const certificationsData = [
  {
    title: "Docker and Kubernetes / DevOps Professional",
    issuer: "Technical Guftgu",
    focus: "Container lifecycle, Kubernetes architecture, deployments, services, pods, and DevOps tooling ecosystem."
  },
  {
    title: "Linux System Administration",
    issuer: "Udemy",
    focus: "Enterprise Linux administration, user & permission control, systemd, shell scripting, networking, and security hardening."
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Sanskar Educational Group of Engineering",
    location: "Ghaziabad, Uttar Pradesh",
    period: "2020 – 2023",
    focus: "Core computer science, distributed computing, operating systems, algorithms, networking fundamentals."
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Rajokari Institute of Technology",
    location: "Delhi BTE",
    period: "2017 – 2020",
    focus: "Foundational computer hardware, Linux systems, network architecture, and programming."
  }
];

export const terminalDemoCommands = [
  {
    cmd: "docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'",
    output: [
      "NAMES               STATUS          PORTS",
      "nbfc-api-gateway    Up 14 days      0.0.0.0:443->8443/tcp",
      "deerika-commerce    Up 9 days       0.0.0.0:80->8080/tcp",
      "auth-service        Up 14 days      0.0.0.0:9000->9000/tcp"
    ]
  },
  {
    cmd: "kubectl get pods -n production -o wide",
    output: [
      "NAME                               READY   STATUS    RESTARTS   AGE",
      "order-service-7bb5df7488-82x4k     1/1     Running   0          42d",
      "order-service-7bb5df7488-mz71p     1/1     Running   0          42d",
      "payment-worker-59b8dcf96b-k9vwq    1/1     Running   0          18d",
      "ingress-nginx-controller-j98sl     1/1     Running   0          98d"
    ]
  },
  {
    cmd: "terraform plan -out=tfplan",
    output: [
      "Terraform will perform the following actions:",
      "  + aws_alb.main_alb (alb-production)",
      "  + aws_autoscaling_group.app_asg (min: 2, max: 8)",
      "  + aws_cloudwatch_metric_alarm.high_cpu",
      "Plan: 3 to add, 0 to change, 0 to destroy."
    ]
  },
  {
    cmd: "git push origin main",
    output: [
      "Enumerating objects: 12, done.",
      "Writing objects: 100% (12/12), 4.2 KiB | 4.2 MiB/s, done.",
      "Total 12 (delta 8), reused 0 (delta 0)",
      "To github.com:Rajan251/production-infra.git",
      "   9bf410e..a823e41  main -> main",
      "→ Jenkins Webhook triggered: build #184 queued"
    ]
  }
];

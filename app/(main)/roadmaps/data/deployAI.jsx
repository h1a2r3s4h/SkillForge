const deployAISquadRoadmap = {
  "Deploy & AI Squad 🚀": {
    title: "Deploy and AI Squad 🚀",
    objective:
      "Master the deployment of web applications to the cloud, ensuring scalability, security, and high availability. Then dive into AI-powered applications, Vector Databases, RAG systems, image/text AI tools, and creative AI ideas.",
    sections: [
      {
        title: "1. Introduction to Cloud Deployment – The Basics of Scaling Apps",
        points: [
          "What is cloud deployment and why it’s essential for modern applications",
          "Overview of different cloud providers: AWS, Azure, Google Cloud",
          "Understanding high availability, scalability, and fault tolerance in the cloud",
          "Benefits of cloud computing in terms of flexibility, cost, and performance",
          "Key Concepts: Cloud deployment, Scalability, High availability, Fault tolerance",
        ],
      },
      {
        title: "2. AWS EC2 – Virtual Servers in the Cloud",
        points: [
          "What is Amazon EC2 (Elastic Compute Cloud)?",
          "Setting up an EC2 instance to host your application",
          "Understanding EC2 instance types, regions, and availability zones",
          "Connecting to EC2 instances using SSH and setting up security credentials",
          "Key Concepts: EC2 Instances, Regions, Availability Zones, SSH",
        ],
      },
      {
        title: "3. Configuring EC2 Security Groups – Controlling Access to Your Instance",
        points: [
          "What are security groups and why they are critical for security?",
          "Setting inbound and outbound rules for EC2 instances",
          "Restricting access to your EC2 instance using security group configurations",
          "Best practices for EC2 security group management",
          "Key Concepts: Security groups, Inbound and outbound rules, Port management",
        ],
      },
      {
        title: "4. Load Balancers – Ensuring High Availability and Reliability",
        points: [
          "What is a Load Balancer and why it’s important for scalability and availability?",
          "Introduction to Elastic Load Balancing (ELB) in AWS",
          "Configuring an Application Load Balancer (ALB) for HTTP/HTTPS traffic",
          "Setting up health checks to monitor instance health",
          "Key Concepts: Load Balancing, Application Load Balancer (ALB), Health checks",
        ],
      },
      {
        title: "5. AWS CloudFront – Content Delivery Network for Faster Load Times",
        points: [
          "Introduction to AWS CloudFront and why it’s crucial for performance optimization",
          "Configuring CloudFront distributions to serve static assets (images, scripts, stylesheets)",
          "Understanding caching, edge locations, and how CloudFront speeds up content delivery",
          "Integrating CloudFront with your S3 bucket for static website hosting",
          "Key Concepts: CloudFront, Caching, Edge locations, Content delivery",
        ],
      },
      {
        title: "6. Docker – Containerization for Consistency and Portability",
        points: [
          "Introduction to Docker and its benefits for application deployment",
          "Creating Docker images and running containers locally",
          "Understanding Dockerfiles and how to write them for your application",
          "Setting up multi-container applications using Docker Compose",
          "Key Concepts: Docker, Containers, Dockerfiles, Docker Compose",
        ],
      },
      {
        title: "7. AWS ECS – Elastic Container Service for Running Docker Containers",
        points: [
          "What is AWS ECS and why it’s used for deploying Docker containers?",
          "Setting up an ECS cluster to run Docker containers on EC2 instances",
          "Creating ECS tasks and services to manage containerized applications",
          "Configuring ECS with Application Load Balancer (ALB) for traffic distribution",
          "Key Concepts: ECS, Containers, ECS Tasks, ECS Services, ALB",
        ],
      },
      {
        title: "8. AWS ECR – Elastic Container Registry for Storing Docker Images",
        points: [
          "What is Amazon ECR and how it works with ECS and Docker?",
          "Pushing and pulling Docker images to/from Amazon ECR",
          "Securing your ECR repository with IAM permissions and access control",
          "Best practices for managing container images in ECR",
          "Key Concepts: ECR, Container registry, IAM, Pushing and pulling Docker images",
        ],
      },
      {
        title: "9. Target Groups – Directing Traffic to the Right Containers",
        points: [
          "What are Target Groups and how do they work with Load Balancers?",
          "Configuring Target Groups in AWS to route traffic to ECS services",
          "Setting up health checks for Target Groups to ensure only healthy containers receive traffic",
          "Understanding weighted routing and path-based routing in Target Groups",
          "Key Concepts: Target Groups, Routing, Health checks, Weighted routing",
        ],
      },
      {
        title: "10. Security Rules & IAM Roles – Managing Permissions for Security",
        points: [
          "Introduction to AWS Identity and Access Management (IAM) for managing permissions",
          "Setting up IAM roles and policies to grant permissions to EC2, ECS, and other services",
          "Best practices for securing your AWS infrastructure using IAM",
          "Configuring VPC security groups and network ACLs to restrict access",
          "Key Concepts: IAM, Roles, Policies, Permissions, VPC Security Groups, Network ACLs",
        ],
      },
      {
        title: "11. Scaling and Auto Scaling – Adjusting Resources Based on Demand",
        points: [
          "Introduction to Auto Scaling and how it helps scale EC2 instances based on demand",
          "Setting up Auto Scaling groups with EC2 instances and configuring scaling policies",
          "Using ECS Auto Scaling to scale Docker containers in response to traffic spikes",
          "Key Concepts: Auto Scaling, Scaling policies, Load balancing, Scaling EC2 and ECS",
        ],
      },
      {
        title: "12. Continuous Deployment (CI/CD) – Automating the Deployment Pipeline",
        points: [
          "Introduction to CI/CD pipelines and why they’re essential for modern web apps",
          "Setting up CI/CD with GitHub Actions",
          "Automating Docker container builds and deployment to ECS/ECR",
          "Rolling updates and blue/green deployments with ECS for zero downtime",
          "Key Concepts: CI/CD, Code Pipeline, Code Build, GitHub Actions, Docker deployment, Blue/Green deployments",
        ],
      },
      {
        title: "13. Monitoring and Logging – Keeping Your Application Healthy",
        points: [
          "Introduction to AWS CloudWatch for monitoring EC2, ECS, and other resources",
          "Setting up CloudWatch alarms for resource utilization and application health",
          "Using AWS CloudTrail for logging and auditing API calls in your AWS account",
          "Integrating logging libraries (e.g., Winston, Morgan) into your Docker containers",
          "Key Concepts: CloudWatch, Monitoring, CloudTrail, Logging, Winston, Morgan",
        ],
      },
      {
        title: "14. Cost Optimization – Managing Your AWS Resources Efficiently",
        points: [
          "Best practices for managing AWS costs and avoiding unnecessary expenses",
          "Using AWS Trusted Advisor and Cost Explorer to monitor and optimize costs",
          "Setting up AWS Budgets and alerts to track spending",
          "Key Concepts: Cost optimization, AWS Budgets, Trusted Advisor, Cost Explorer",
        ],
      },
      {
        title: "15. Security Best Practices – Keeping Your Application Secure in the Cloud",
        points: [
          "Setting up Web Application Firewalls (WAF) to protect against common attacks",
          "Using SSL/TLS certificates for secure communication in your application",
          "Regularly auditing IAM roles and security policies to minimize the risk of unauthorized access",
          "Securing Docker containers and images with scanning tools and security patches",
          "Key Concepts: Security, WAF, SSL/TLS, Docker security, IAM auditing",
        ],
      },
      {
        title: "16. Introduction to AI – AI-Powered Applications",
        points: [
          "What is AI and why it’s transforming technology",
          "AI-powered applications: Chatbots, recommendation systems, and automation",
          "Vector Databases (e.g., Pinecone) and their use cases",
          "RAG (Retrieval-Augmented Generation) systems and applications",
          "Image background removal, image generation, text summarization",
          "Creative ideas and practical applications with AI",
          "Key Concepts: AI, Vector Databases, RAG systems, AI tools, Generative AI",
        ],
      },
    ],
  },
};

export default deployAISquadRoadmap;

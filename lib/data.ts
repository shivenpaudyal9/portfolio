import { Project, Skill, Experience } from "./types";

export const projects: Project[] = [
  {
    title: "Job Application Tracker",
    description:
      "Intelligent job tracking system that automatically syncs emails via Microsoft Graph API, extracts application details using Groq LLM, and provides AI-powered insights on your job search pipeline.",
    stack: ["FastAPI", "Next.js", "Microsoft Graph API", "Groq LLM", "PostgreSQL", "Docker"],
    github: "https://github.com/shivenpaudyal9/job-tracker",
    demo: "",
    featured: true,
  },
  {
    title: "Sports Video Analytics",
    description:
      "Real-time soccer player tracking system using YOLOv8 object detection with Kalman Filter for trajectory smoothing. Generates tactical heatmaps, speed metrics, and formation analysis from raw match footage.",
    stack: ["YOLOv8", "Kalman Filter", "OpenCV", "Python", "NumPy", "Matplotlib"],
    github: "https://github.com/shivenpaudyal9/-soccer-video-analytics",
    demo: "",
    featured: true,
  },
  {
    title: "Customer Churn Prediction",
    description:
      "End-to-end ML pipeline predicting customer churn with 94% AUC. Features SHAP explainability dashboard for business stakeholders, MLflow experiment tracking, and automated retraining workflows.",
    stack: ["XGBoost", "SHAP", "MLflow", "Scikit-learn", "Pandas", "Streamlit"],
    github: "https://github.com/shivenpaudyal9/customer-churn-prediction",
    demo: "",
    featured: false,
  },
  {
    title: "Fraud Detection MLOps Pipeline",
    description:
      "Production-grade fraud detection system with full MLOps lifecycle — automated feature engineering, model versioning via MLflow, containerized REST API with Docker, and drift monitoring.",
    stack: ["MLflow", "Docker", "FastAPI", "Scikit-learn", "Redis", "PostgreSQL"],
    github: "https://github.com/shivenpaudyal9/fraud-detection-mlops",
    demo: "",
    featured: false,
  },
];

export const skills: Skill[] = [
  // ML/AI
  { name: "PyTorch", level: 90, category: "ml" },
  { name: "TensorFlow", level: 82, category: "ml" },
  { name: "Scikit-learn", level: 95, category: "ml" },
  { name: "YOLOv8", level: 85, category: "ml" },
  { name: "XGBoost", level: 92, category: "ml" },
  { name: "SHAP", level: 88, category: "ml" },
  { name: "LangChain", level: 80, category: "ml" },
  { name: "Hugging Face", level: 85, category: "ml" },
  // Cloud & MLOps
  { name: "AWS (AI/ML)", level: 88, category: "cloud" },
  { name: "MLflow", level: 90, category: "cloud" },
  { name: "Docker", level: 85, category: "cloud" },
  { name: "Kubernetes", level: 70, category: "cloud" },
  { name: "CI/CD", level: 78, category: "cloud" },
  { name: "Supabase", level: 82, category: "cloud" },
  // Languages
  { name: "Python", level: 95, category: "languages" },
  { name: "TypeScript", level: 82, category: "languages" },
  { name: "SQL", level: 88, category: "languages" },
  { name: "R", level: 72, category: "languages" },
  { name: "Java", level: 70, category: "languages" },
  // Tools
  { name: "FastAPI", level: 88, category: "tools" },
  { name: "Next.js", level: 82, category: "tools" },
  { name: "OpenCV", level: 85, category: "tools" },
  { name: "Pandas", level: 95, category: "tools" },
  { name: "Apache Spark", level: 75, category: "tools" },
];

export const experiences: Experience[] = [
  {
    company: "Zentrais LLC",
    role: "Data Science Engineer",
    period: "2023 – Present",
    location: "Remote",
    bullets: [
      "Designed and deployed end-to-end ML pipelines for client analytics, reducing manual reporting time by 60%.",
      "Built LLM-powered document processing workflows using LangChain and OpenAI APIs, processing 10K+ docs/day.",
      "Implemented real-time anomaly detection dashboards with Streamlit + AWS SageMaker endpoints.",
      "Led data engineering efforts: built ETL pipelines on AWS Glue, Redshift, and S3 for 3 enterprise clients.",
    ],
    logo: "/logos/zentrais.png",
  },
  {
    company: "UiPath",
    role: "RPA & ETL Developer",
    period: "2021 – 2022",
    location: "India",
    bullets: [
      "Automated 15+ business processes using UiPath Studio, saving 2,000+ manual hours per quarter.",
      "Built ETL pipelines integrating SAP, Salesforce, and internal databases with 99.7% accuracy.",
      "Developed document intelligence bots using UiPath Document Understanding (ML-based OCR).",
      "Collaborated with cross-functional teams to map, optimize, and automate critical finance workflows.",
    ],
    logo: "/logos/uipath.png",
  },
];

export const SYSTEM_PROMPT = `You are Neo's (Shiven Paudyal) personal AI assistant on his portfolio website. You help visitors learn about Neo and his work. Be concise, friendly, and professional.

## About Neo
Shiven Paudyal (goes by Neo) is an ML Engineer and Data Scientist graduating with an MS in Computer Science (ML track) from Cal State University Long Beach (CSULB) in May 2026.

## Certifications
- AWS Certified AI Practitioner
- AWS Certified Cloud Practitioner
- Published deep learning research

## Key Projects
1. **Job Application Tracker** — FastAPI + Next.js + Microsoft Graph API + Groq LLM. Automates email syncing and extracts job application data intelligently.
2. **Sports Video Analytics** — YOLOv8 + Kalman Filter + OpenCV. Real-time soccer player tracking with heatmaps and tactical metrics.
3. **Customer Churn Prediction** — XGBoost + SHAP + MLflow. 94% AUC, with SHAP explainability dashboard.
4. **Fraud Detection MLOps Pipeline** — MLflow + Docker + FastAPI. Full MLOps lifecycle with drift monitoring.

## Skills
- ML/AI: PyTorch, TensorFlow, Scikit-learn, YOLOv8, XGBoost, SHAP, LangChain, Hugging Face
- Cloud/MLOps: AWS, MLflow, Docker, Kubernetes, CI/CD
- Languages: Python (expert), TypeScript, SQL, R, Java
- Tools: FastAPI, Next.js, OpenCV, Pandas, Spark

## Experience
- **Zentrais LLC** (Data Science Engineer): LLM document processing, anomaly detection, AWS pipelines
- **UiPath India** (RPA/ETL Developer): Automated 15+ business processes, saved 2,000+ hours/quarter

## Interests
Computer vision, soccer analytics, MLOps, LLM applications

## Availability
Neo is open to full-time ML Engineer / Data Scientist roles starting Summer 2026. He is also available for freelance ML consulting.

Answer questions about Neo's background, projects, skills, and availability. If asked something not covered, suggest visitors use the contact form. Keep answers under 150 words unless a detailed explanation is needed.`;

import type {
  ExperienceEntry,
  ProjectEntry,
  SkillCategory,
  EducationEntry,
  CertificationEntry,
  AIExpertiseItem,
} from '@/types';

export const personal = {
  name: 'Fayez',
  title: 'Senior Software Engineer | Full Stack & AI Engineer',
  shortTitle: 'Senior Software Engineer | Full Stack & AI Engineer',
  location: 'Tamil Nadu, India',
  email: 'zeyaffayez007@gmail.com',
  phone: '+91-8098838503',
  linkedin: 'https://www.linkedin.com/in/fayez007',
  github: 'https://github.com/Fayez-fyz',
  portfolio: 'https://fayez.vercel.app',
  // Paste your Google Drive share link here (set sharing to "Anyone with the link can view").
  resumeUrl: 'https://drive.google.com/file/d/1tyZako07EDcrXEZ9bFYSZKjqweC1f3NY/view?usp=drive_link',
  yearsExperience: '4+',
  summary:
    'Full Stack Developer with 4+ years of experience building scalable web, mobile, and AI-driven applications. Proficient in React.js, Next.js, Node.js, Python, FastAPI, and TypeScript, with hands-on expertise in LangChain, LangGraph, Retrieval-Augmented Generation (RAG), and multi-LLM integration for production-grade agentic AI systems. Skilled in building RESTful APIs, SaaS products, cross-platform mobile apps, and secure authentication systems. Experienced with Docker, GitHub Actions CI/CD, Azure Container Apps, and AWS EC2.',
  focusAreas: [
    'Agentic AI Systems',
    'RAG Pipelines',
    'Full Stack Web & Mobile',
    'Cloud & DevOps',
  ],
};

export const aboutHighlights = [
  {
    label: 'Experience',
    value: '4+ yrs',
    detail: 'Shipping production web, mobile, and AI systems',
  },
  {
    label: 'AI Systems',
    value: 'Agentic',
    detail: 'LangChain & LangGraph orchestration, RAG, multi-LLM routing',
  },
  {
    label: 'Full Stack',
    value: 'End-to-end',
    detail: 'React.js, Next.js, Node.js, FastAPI, PostgreSQL, MongoDB',
  },
  {
    label: 'Delivery',
    value: 'Cloud-native',
    detail: 'Docker, GitHub Actions CI/CD, Azure Container Apps, AWS EC2',
  },
];

export const experiences: ExperienceEntry[] = [
  {
    id: 'recro-c5i',
    role: 'Senior Software Engineer',
    company: 'Recro',
    companyMeta: 'Client: C5i',
    location: 'Bengaluru, Karnataka',
    start: 'September 2025',
    end: 'Present',
    bullets: [
      'Delivered full stack features across multiple enterprise products, building responsive frontends with React.js, Next.js, ShadCN, Tailwind CSS, and Zustand, and scalable backend services with Node.js, Express.js, and Python FastAPI.',
      'Designed and built agentic AI workflows using LangChain and LangGraph to orchestrate multi-step reasoning, tool calling, and stateful conversation flows across multiple AI-driven applications, improving query resolution accuracy and response reliability.',
      'Built and optimized RAG (Retrieval-Augmented Generation) pipelines in Python using FastAPI, integrating vector search and document chunking strategies to ground LLM responses in enterprise knowledge bases across different product lines.',
      'Established end-to-end CI/CD pipelines using GitHub Actions for automated build and deployment to Azure, reducing deployment time by 60% and eliminating manual release overhead.',
      'Containerized frontend and backend services using Docker and deployed on Azure Container Apps and Azure Container Registry, ensuring high availability and environment consistency across development, staging, and production.',
      'Collaborated with cross-functional teams to define technical requirements, design system architecture, and implement best practices for code quality and performance optimization.',
      'Added application monitoring and logging using Azure tools and centralized dashboards, enabling faster incident resolution and proactive performance optimization in production environments.',
    ],
    stack: ['React.js', 'Next.js', 'ShadCN', 'Tailwind CSS', 'Zustand', 'Node.js', 'Express.js', 'FastAPI', 'LangChain', 'LangGraph', 'Docker', 'Azure', 'GitHub Actions'],
  },
  {
    id: 'datamantis',
    role: 'Software Engineer',
    company: 'DataMantis.ai',
    location: 'Chennai, Tamil Nadu',
    start: 'January 2025',
    end: 'July 2025',
    bullets: [
      'Built a production-ready SaaS platform from scratch using Next.js, React.js, Tailwind CSS, and ShadCN, delivering a responsive, high-performance user experience across all devices.',
      'Engineered a multi-LLM AI chatbot using the Vercel AI SDK with dynamic switching between GPT-4, Claude, and Gemini, integrated with RAG pipelines and Pinecone for intelligent, context-aware document search and retrieval.',
      'Architected and optimized LLM prompt engineering strategies, improving AI response accuracy, reducing irrelevant outputs, and ensuring production-grade reliability across multiple language models.',
      'Integrated Stripe payment gateway for secure subscription and transaction processing, and implemented Supabase for authentication, real-time data synchronization, and cloud storage at scale.',
      'Implemented secure authentication and authorization workflows using Supabase Auth and JWT, following security best practices for user data protection and subscription-based access control.',
      'Maintained 80% code coverage by writing comprehensive unit and integration tests using Jest and React Testing Library, ensuring application stability across all critical modules.',
    ],
    stack: ['Next.js', 'React.js', 'Tailwind CSS', 'ShadCN', 'Vercel AI SDK', 'GPT-4', 'Claude', 'Gemini', 'Pinecone', 'Stripe', 'Supabase', 'Jest'],
  },
  {
    id: 'domaincer-hyring',
    role: 'Full Stack Developer',
    company: 'Domaincer / Hyring',
    location: 'Chennai, Tamil Nadu',
    start: 'January 2022',
    end: 'September 2024',
    bullets: [
      'Built responsive e-commerce web applications, admin panels, and cross-platform mobile apps using React.js, Next.js, React Native, Expo, Tailwind CSS, and Material UI, delivering production-ready solutions on both Google Play Store and Apple App Store.',
      'Designed and built RESTful APIs using Node.js, Express.js, and NestJS, implementing JWT-based authentication, OAuth integrations, role-based access control, payment gateway solutions, and third-party API integrations across multiple client projects.',
      'Designed and optimized PostgreSQL and MongoDB database architectures with advanced indexing strategies, improving query performance by 50% and reducing data retrieval time significantly.',
      'Architected and built Hyring from scratch — an AI-powered SaaS job portal using Next.js, React.js, NestJS, and PostgreSQL, enabling employers to post jobs with fully automated AI interview workflows serving users across India and international markets.',
      'Developed a real-time AI proctoring system using TensorFlow.js for face and head movement detection, combined with tab-change monitoring, copy-paste prevention, and mandatory screen share enforcement to ensure interview integrity.',
      'Integrated OpenAI GPT for AI-driven interview question generation and AssemblyAI for automated video transcription, sentiment analysis, and speech evaluation, delivering comprehensive post-assessment reports including malpractice detection and candidate speaking level insights.',
      'Mentored and collaborated with a team of 4-5 developers, conducting code reviews and establishing development standards that improved overall code quality and delivery consistency.',
    ],
    stack: ['React.js', 'Next.js', 'React Native', 'Expo', 'NestJS', 'Express.js', 'PostgreSQL', 'MongoDB', 'TensorFlow.js', 'OpenAI GPT', 'AssemblyAI'],
  },
];

// Personal projects are listed first and given more depth. Professional projects are
// intentionally kept high level.
export const projects: ProjectEntry[] = [
  {
    id: 'enterprise-rag',
    name: 'Enterprise RAG System',
    tagline: 'A fully local, multi-format document intelligence platform',
    kind: 'personal',
    context: 'Personal project',
    description:
      'An end-to-end Retrieval-Augmented Generation system that runs entirely on local infrastructure. It ingests virtually any document type, parses it with Docling, and answers questions with a hybrid retrieval and re-ranking pipeline.',
    features: [
      'Ingestion pipeline built on Docling for document parsing, with image annotation',
      'Hybrid chunking combined with BM25 keyword search for hybrid retrieval',
      'Re-ranking stage to improve the relevance of retrieved context',
      'Supports PDF, PPT, Excel, Word docs, Markdown, audio files, and more',
      'Agentic orchestration with LangChain and LangGraph',
      'Runs fully local, with no external data leaving the machine',
    ],
    stack: ['Next.js', 'shadcn/ui', 'React Query', 'FastAPI', 'LangChain', 'LangGraph', 'Docling', 'BM25', 'Python'],
  },
  {
    id: 'claude-clone',
    name: 'Claude-Style AI Workspace',
    tagline: 'A Claude-like chat product with files, web search, and multimodal model switching',
    kind: 'personal',
    context: 'Personal project',
    description:
      'A full chat application modeled on the Claude experience: attach files, ask questions over them, search the web, and switch between multimodal models, with every conversation persisted as its own session.',
    features: [
      'Attach files and ask questions grounded in them',
      'Web search integrated into responses',
      'Per-chat sessions with stored chat history',
      'Export responses as PDF',
      'Multimodal model switching',
    ],
    stack: ['Next.js', 'Vercel AI SDK', 'Supabase', 'shadcn/ui', 'TypeScript'],
  },
  {
    id: 'finance-chatbot',
    name: 'Finance AI Chatbot',
    tagline: 'Conversational financial insights over connected accounting data',
    kind: 'professional',
    context: 'DataMantis.ai',
    description:
      'Built from scratch: a finance-focused chatbot that connects to accounting platforms and answers financial questions with tables, charts, and suggestions, using a choice of leading LLMs.',
    features: [
      'Data ingestion from QuickBooks and Xero',
      'Authentication and authorization',
      'Multimodal model switching across Claude, Gemini, and GPT models',
      'Answers presented with tables, charts, and suggestions',
      'Download responses as PDF, text, or Markdown',
    ],
    stack: ['Next.js', 'Supabase', 'shadcn/ui', 'React Query', 'Vercel AI SDK', 'Claude', 'Gemini', 'GPT'],
  },
  {
    id: 'hyring',
    name: 'Hyring',
    tagline: 'AI interview platform with built-in malpractice detection',
    kind: 'professional',
    context: 'Domaincer / Hyring',
    description:
      'Built from scratch: a platform where AI conducts interviews based on the candidate profile and job description, then delivers a scored, consolidated report to the employer.',
    features: [
      'AI-led interviews tailored to the user profile and job description',
      'Malpractice detection: tab switching, face detection, copy-paste prevention, network tab detection, and screen sharing',
      'Full interview recording, with both user video and screen video',
      'Voice transcription with AssemblyAI',
      'AI-assisted consolidated report with scores for employers',
      'Face and reaction detection with TensorFlow.js',
    ],
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Tailwind CSS', 'TensorFlow.js', 'AssemblyAI', 'LLMs'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    icon: 'Code2',
    level: 92,
    items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'HTML5', 'CSS3'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'LayoutTemplate',
    level: 95,
    items: ['React.js', 'Next.js', 'Redux', 'Zustand', 'Tailwind CSS', 'ShadCN', 'Material UI'],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: 'Server',
    level: 90,
    items: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Supabase', 'JWT', 'OAuth 2.0'],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon: 'Smartphone',
    level: 80,
    items: ['React Native', 'Expo'],
  },
  {
    id: 'ai-llm',
    label: 'AI, LLM & Agentic Engineering',
    icon: 'BrainCircuit',
    level: 93,
    items: ['LangChain', 'LangGraph', 'OpenAI (GPT-4)', 'Claude', 'Gemini', 'Vercel AI SDK', 'RAG', 'Vector Database', 'Pinecone', 'Qdrant', 'Prompt Engineering', 'AssemblyAI'],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    icon: 'Cloud',
    level: 85,
    items: ['Azure Container Apps', 'Azure Container Registry', 'AWS (EC2)', 'Digital Ocean', 'Docker', 'GitHub Actions (CI/CD)'],
  },
  {
    id: 'testing',
    label: 'Testing',
    icon: 'FlaskConical',
    level: 82,
    items: ['Jest', 'React Testing Library'],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: 'Wrench',
    level: 88,
    items: ['Git', 'Postman', 'Stripe', 'Supabase Auth & Storage', 'GraphQL', 'RESTful APIs'],
  },
];

export const aiExpertise: AIExpertiseItem[] = [
  { label: 'Generative AI', detail: 'GPT-4, Claude, and Gemini integrated in production products' },
  { label: 'LLM Applications', detail: 'Multi-LLM chat products with dynamic model routing' },
  { label: 'LangChain', detail: 'Chains and tool integrations for reasoning pipelines' },
  { label: 'LangGraph', detail: 'Stateful, multi-step agent orchestration' },
  { label: 'RAG', detail: 'Retrieval-augmented generation grounded in enterprise knowledge bases' },
  { label: 'Vector Databases', detail: 'Pinecone and Qdrant for semantic search and retrieval' },
  { label: 'FastAPI', detail: 'Python services powering RAG and agent endpoints' },
  { label: 'AI Agents', detail: 'Multi-step, tool-calling agentic workflows' },
  { label: 'Prompt Engineering', detail: 'Tuned prompts to improve accuracy and cut irrelevant output' },
  { label: 'Tool Calling', detail: 'Agents that call external tools mid-conversation' },
  { label: 'Multi-Agent Systems', detail: 'Coordinated agent workflows across product lines' },
];

export const education: EducationEntry[] = [
  {
    degree: 'Bachelor of Computer Science and Engineering',
    institution: 'Anna University',
    location: 'Tamil Nadu, India',
    year: 'June 2020',
  },
];

export const certifications: CertificationEntry[] = [
  {
    name: 'Full Stack Developer (MERN Stack)',
    issuer: 'GUVI',
    location: 'Chennai, Tamil Nadu',
    period: 'July 2021 – December 2021',
    bullets: [
      'Completed comprehensive Full Stack Developer (MERN) Certification with 4+ capstone projects demonstrating real-world application development expertise.',
      'Built and deployed multiple production-ready projects showcasing proficiency in React.js, Node.js, MongoDB, and Express.js with industry best practices and coding standards.',
    ],
  },
];

export const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Tamil', level: 'Native' },
];

export const softSkills = [
  'Problem Solving',
  'Technical Communication',
  'Adaptability',
  'Team Collaboration',
  'Mentorship',
  'Agile Methodologies',
];

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

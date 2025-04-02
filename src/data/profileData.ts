// Profile data
export const profileData = {
  name: "Khondoker Md Mamunur Rashid",
  title: "Senior Software Engineer & AI Solutions Architect",
  location: "Doha, Qatar",
  email: "charlicoder@gmail.com",
  secondaryEmail: "contact@charlicoder.com",
  phone: "+97433665851",
  imgUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&h=500",
  available: true,
  bio: "Versatile Senior Software Engineer with extensive experience in full-stack development, data engineering, and cloud infrastructure. My expertise spans:\n\nBackend Development: Expert in Python (Django, DRF, FastAPI, Celery, Streamlit) and Node.js (Express) with strong focus on microservices, event-driven architecture, and RESTful APIs.\n\nFrontend Development: Proficient in React, HTML5, CSS3, JavaScript, TailwindCSS, and Material Design for creating responsive user interfaces.\n\nData Engineering: Advanced skills in database systems (PostgreSQL, MongoDB, Snowflake) and vector databases (Qdrant, ChromaDB, Pinecone, FAISS), with strong ETL pipeline automation using NumPy, Pandas, and Polars.\n\nMachine Learning: Specialized in semantic search, classification, and AI chatbots leveraging LLMs through frameworks like LangChain, LangGraph, CrewAI, and HuggingFace.\n\nDevOps & Cloud: Proficient with AWS services (EC2, Lambda, SQS, S3, Fargate, ECS, RDS), Docker, Kubernetes, and CI/CD pipelines for robust deployment architectures.\n\nThrough my career, I've delivered scalable web applications, implemented ML solutions for real-world problems, automated complex data workflows, and designed effective microservice architectures. I emphasize test-driven development and foster team collaboration through effective communication and agile methodologies.",
};

// Skills data
export const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", level: "expert" as const },
      { name: "TypeScript", level: "advanced" as const },
      { name: "Python", level: "advanced" as const },
      { name: "Solidity", level: "intermediate" as const },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "expert" as const },
      { name: "Next.js", level: "advanced" as const },
      { name: "Tailwind CSS", level: "advanced" as const },
      { name: "HTML/CSS", level: "expert" as const },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Django", level: "advanced" as const },
      { name: "FastAPI", level: "advanced" as const },
      { name: "Node.js", level: "advanced" as const },
      { name: "Express", level: "advanced" as const },
      { name: "REST APIs", level: "advanced" as const },
      { name: "GraphQL", level: "intermediate" as const },
      { name: "Celery", level: "advanced" as const },
      { name: "RabbitMQ", level: "intermediate" as const },
    ],
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "PostgreSQL", level: "advanced" as const },
      { name: "MongoDB", level: "advanced" as const },
      { name: "Snowflake", level: "intermediate" as const },
      { name: "NumPy", level: "advanced" as const },
      { name: "Pandas", level: "advanced" as const },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS Cloud Services", level: "advanced" as const },
      { name: "Docker", level: "advanced" as const },
      { name: "Kubernetes", level: "intermediate" as const },
      { name: "CI/CD", level: "advanced" as const },
    ],
  },
  {
    category: "ML & Agentic AI",
    skills: [
      { name: "LangChain", level: "advanced" as const },
      { name: "LangGraph", level: "intermediate" as const },
      { name: "CrewAI", level: "intermediate" as const },
      { name: "HuggingFace", level: "intermediate" as const },
      { name: "VectorDB", level: "advanced" as const },
    ],
  },
];

// Social links data
export const socialLinks = [
  { platform: "github" as const, url: "https://github.com/charlicoder/" },
  { platform: "linkedin" as const, url: "https://www.linkedin.com/in/charlicoder/" },
  { platform: "twitter" as const, url: "https://twitter.com" },
  { platform: "email" as const, url: `mailto:${profileData.email}` },
];

// Certifications data
export const certifications = [
  {
    name: "Introduction to LangGraph",
    issuer: "LangChain Academy",
    date: "2024",
    credentialLink: "https://academy.langchain.com/certificates/y5jjxc4jxh",
  },
  {
    name: "AWS S3 Basics",
    issuer: "Coursera",
    date: "2023",
    credentialLink: "https://www.coursera.org/account/accomplishments/certificate/49JFDX4HFABA",
  },
  {
    name: "Problem Solving",
    issuer: "HackerRank",
    date: "2022",
    credentialLink: "https://www.hackerrank.com/certificates/iframe/0d419525697d",
  },
];

// Work experience data
export const workExperience = [
  {
    company: "Cloud Custom Solution",
    location: "Arizona, USA (Remote)",
    position: "Senior Software Engineer",
    type: "Part Time, contract",
    period: "Aug 2024 - current",
    description: "Project Modernization: Upgrading a legacy project from Python 3.6/Django 2 to Python 3.12/Django 5.1 and replacing Google Task with Celery for enhanced task management and developing an AI chatbot using RAG and OpenAI.",
  },
  {
    company: "Savvie International Corp",
    location: "Canada (Remote)",
    position: "Senior Software Engineer",
    type: "Full Time, contract",
    period: "Apr 2024 - Aug 2024",
    description: "ETL Pipelines & Vector Search: Built ETL pipelines with Snowpark, AWS Batch, S3, ECS, and integrated vector search for e-commerce using Pinecone, FastAPI, and Sentence Transformers.",
  },
  {
    company: "W3Engineers Ltd",
    location: "Dhaka, Bangladesh",
    position: "Senior Software Engineer",
    type: "",
    period: "Apr 2023 - Mar 2024",
    description: "Data Pipeline Architecture: Designed ETL pipelines with Python (NumPy, Pandas, PyArrow, PySpark) and AWS (SQS, Glue, S3, RDS, DynamoDB) for efficient data management.\n\nFull-Stack Development: Led Django projects, modernized legacy codebases, and built scalable, API-driven infrastructures using Kubernetes, Docker, and AWS.",
  },
  {
    company: "EkkBaz Ltd",
    location: "Dhaka, Bangladesh (Remote)",
    position: "Senior Software Engineer & DevOps",
    type: "Full Time, contract",
    period: "Apr 2022 - Dec 2022",
    description: "Startup Impact: Contributed to EkkBaz, a B2B marketplace app for small businesses, by migrating legacy APIs to Python/Django and introducing automation tools for better workflows.\n\nBackend Development: Built RESTful APIs with Python and Node.js, integrated SQL/NoSQL databases, and streamlined team collaboration using MS Teams and Planner.",
  },
  {
    company: "Cloud Custom Solutions",
    location: "Arizona, USA (Remote)",
    position: "Full Stack Web Developer",
    type: "Full Time, contract",
    period: "Jan 2019 - Feb 2021",
    description: "Application Development: Collaborated remotely with PM Ben Fatola at Cloud Custom Solutions, building impactful apps like LinkFusion, Procurement Solutions, and Champion, including a US Army project using Django and PostGIS.\n\nFull-Stack Expertise: Managed end-to-end development with Python Django, DRF, PostgreSQL, Celery, Elasticsearch, React, AWS, and Docker, enhancing technical versatility and problem-solving skills.",
  },
  {
    company: "Scom.ca (Paul Kudla)",
    location: "Ontario, Canada (Remote)",
    position: "Full Stack Web Developer",
    type: "Full Time, contract",
    period: "May 2014 - Sep 2017",
    description: "Collaborative Development: Worked with Paul Kudla, an experienced IT consultant, to design and develop web applications for clients like Premier Elevator, Volvo Trucks North America, and iMeter24, addressing business process limitations.\n\nCustom Solutions: Delivered management systems for inventory, procurement, sales, and electric meter interfacing using Python, Django, PostgreSQL, Bootstrap, Angular, Elasticsearch, and Git, enhancing operational efficiency.",
  },
  {
    company: "Supreme Support Pty Ltd",
    location: "Dhaka, Bangladesh",
    position: "Python Developer",
    type: "Part Time",
    period: "Sep 2013 - Apr 2014",
    description: "Automated Testing & Feature Development: Conducted automated testing and implemented complex features to ensure robust application performance.\n\nUS Army Project: Resolved issues in a location-based PostGIS application for the US Army, overcoming challenges in a previously incomplete project.",
  },
  {
    company: "Publiseek",
    location: "Dubai, UAE (Remote)",
    position: "Software Engineer",
    type: "Full Time, contract",
    period: "Apr 2013 - Aug 2013",
    description: "Publiseek Web Application: Developed a scalable Django-based web app with custom features, third-party integrations, and secure data management, streamlining operations and enhancing their digital presence.",
  },
  {
    company: "NewsCred Inc (Currently Optimizely)",
    location: "Dhaka, Bangladesh",
    position: "Software Developer",
    type: "",
    period: "Jan 2012 - Mar 2013",
    description: "Backend Development: Contributed to developing CMS and control panels at NewsCred as a backend developer using Python, Django, and PostgreSQL.\n\nProcess Improvement: Introduced Behavior Driven Development (BDD) using Selenium, Lettuce, and Cucumber, enhancing project quality with senior guidance.",
  },
  {
    company: "Onecall Solutions Limited",
    location: "Dhaka, Bangladesh",
    position: "Assistant Network Engineer",
    type: "",
    period: "May 2008 - Jan 2009",
    description: "Provided assistance to network users, Worked to maintain the confidentiality of information and network data.",
  },
];

// Recommendations data
export const recommendations = [
  {
    name: "Ron Dyck",
    position: "CTO, Entrepreneur, Savvie International Corp",
    text: "Mamunur Rashid was a great asset to our team. When thrown some very challenging problems, I found him to be very resourceful and hard working. I would highly recommend him.",
    imgUrl: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Iraj Islam",
    position: "Co-founder and CTO of NewsCred.com",
    text: "Mamunur Rashid is an intelligent, hard working and driven software engineer. During his time at NewsCred he was both a Software Engineer and a SQA Engineer. He contributed to feature development of various products and also made sure quality was maintained. We are grateful for his time at NewsCred and wish him a bright future as a successful Software Engineer.",
    imgUrl: "https://randomuser.me/api/portraits/men/27.jpg",
  },
];

// Companies data
export const companies = [
  {
    name: "NewsCred",
    url: "https://www.newscred.com",
    imgUrl: "https://randomuser.me/api/portraits/lego/1.jpg",
  },
  {
    name: "Cloud Custom Solutions",
    url: "https://cloudcustomsolutions.com",
    imgUrl: "https://randomuser.me/api/portraits/lego/2.jpg",
  },
  {
    name: "Savvie",
    url: "https://savvie.app",
    imgUrl: "https://randomuser.me/api/portraits/lego/3.jpg",
  },
  {
    name: "EkkBaz",
    url: "https://ekkbaz.com",
    imgUrl: "https://randomuser.me/api/portraits/lego/4.jpg",
  },
  {
    name: "W3Engineers",
    url: "https://w3engineers.com",
    imgUrl: "https://randomuser.me/api/portraits/lego/5.jpg",
  },
  {
    name: "SCOM.ca",
    url: "https://scom.ca",
    imgUrl: "https://randomuser.me/api/portraits/lego/6.jpg",
  },
  {
    name: "Publiseek",
    url: "https://publiseek.com",
    imgUrl: "https://randomuser.me/api/portraits/lego/7.jpg",
  },
];

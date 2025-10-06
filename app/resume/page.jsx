import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    Download,
    Mail,
    Phone,
    MapPin,
    Globe,
    Github,
    Linkedin,
    Calendar,
    Award,
    GraduationCap,
    Briefcase,
    Code,
    Star,
} from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
    const personalInfo = {
        name: "K Md Mamunur Rashid",
        title: "Senior Python Developer & AI Solutions Architect",
        email: "contact@charlicoder.com",
        phone: "+97451235119",
        location: "Doha, Qatar",
        website: "charlicoder.com",
        github: "github.com/charliecoder",
        linkedin: "linkedin.com/in/charliecoder",
    };

    const summary =
        "Experienced Python developer with 14+ years of expertise in building scalable web applications, data pipelines, chatbots, and AI-driven solutions. Proven track record of leading development teams, optimizing system performance, and delivering enterprise-grade software solutions. Passionate about leveraging cutting-edge technologies to solve complex business problems.";

    const experience = [
        {
            title: "Senior Full Stack Developer",
            company: "Vraxa",
            location: "Full time",
            period: "July 2025 - Continue",
            achievements: [
                "Developing a rental application similar to Airbnb, tailored for the Gulf region.",
                "Incorporating innovative features to enhance user experience and compliance.",
                "Utilizing a modern tech stack for scalable and efficient deployment.",
            ],
            technologies: [
                "Next.js",
                "FastAPI",
                "AWS SQS",
                "AWS SNS",
                "API Gateway",
                "AWS RDS",
                "Docker",
            ],
        },
        {
            title: "Full Stack Python Developer",
            company: "Cloud Custom Solutions",
            location: "Arizona (Remote, Part time)",
            period: "Aug 2024 - Apr 2025",
            achievements: [
                "Modernized a legacy system from Python 3.6/Django 2 to Python 3.12/Django 5.1, enhancing security and performance.",
                "Boosted system scalability by replacing Google Tasks with a Celery + Redis architecture for robust asynchronous processing.",
                "Designed and implemented an Agentic AI-powered RAG chatbot using LangChain, LangGraph, and ChromaDB.",
                "Led development of AI-driven marketing automation tools by orchestrating LangChain, LangGraph, and n8n.",
            ],
            technologies: [
                "Python",
                "Django",
                "Celery",
                "Redis",
                "LangChain",
                "LangGraph",
                "ChromaDB",
                "AWS SQS",
                "Twilio",
                "n8n",
            ],
        },
        {
            title: "Senior Software Engineer",
            company: "Savvie International Corp",
            location: "Canada (Remote, Contract)",
            period: "Apr 2024 - Aug 2024",
            achievements: [
                "Optimized and automated ETL pipelines using Snowflake Snowpark and AWS, significantly improving data processing speed.",
                "Engineered a high-performance vector-based semantic search system using FastAPI and Pinecone, dramatically improving product discovery.",
                "Developed robust machine learning models for product classification with high accuracy using TensorFlow and Keras.",
                "Designed and deployed scalable, cloud-native architectures on AWS, ensuring high availability for real-time workloads.",
            ],
            technologies: [
                "Snowflake Snowpark",
                "AWS",
                "ECS",
                "FastAPI",
                "Pinecone",
                "Sentence-Transformers",
                "TensorFlow",
                "Keras",
                "Scikit-learn",
                "Celery",
                "Redis",
            ],
        },
        {
            title: "Senior Software Engineer",
            company: "W3Engineers Ltd",
            location: "Dhaka",
            period: "Apr 2023 - Mar 2024",
            achievements: [
                "Designed and optimized large-scale ETL pipelines using Python and PySpark for fast, reliable data ingestion.",
                "Led full-cycle development of Django applications, building high-performance APIs with Django REST Framework.",
                "Engineered resilient cloud-native architectures using Kubernetes and Docker, delivering seamless CI/CD pipelines.",
                "Developed a machine learning-powered cost prediction system to provide accurate forecasting and business insights.",
            ],
            technologies: [
                "Python",
                "PySpark",
                "Pandas",
                "Django",
                "DRF",
                "Celery",
                "Redis",
                "Kubernetes",
                "Docker",
                "AWS",
                "LangChain",
            ],
        },
        {
            title: "Senior Software Engineer (Lead) & DevOps",
            company: "EkkBaz",
            location: "Dhaka",
            period: "Apr 2022 - Dec 2022",
            achievements: [
                "Contributed as a core developer to a B2B marketplace startup, streamlining inventory management and digital financing.",
                "Led the migration of legacy APIs to a modern Python/Django REST framework, improving system scalability and performance.",
                "Designed and implemented robust RESTful APIs to ensure seamless integration between frontend and backend systems.",
                "Optimized data architecture by integrating both SQL (AWS RDS) and NoSQL databases for high-volume data handling.",
            ],
            technologies: [
                "Python",
                "Django (DRF)",
                "React",
                "RabbitMQ",
                "AWS",
                "API Gateway",
                "RDS",
                "EC2",
                "Node.js",
            ],
        },
        {
            title: "Full Stack Web Developer",
            company: "Cloud Custom Solutions",
            location: "Arizona (Remote, Full Time)",
            period: "Jan 2019 - Feb 2021",
            achievements: [
                "Architected and developed a seamless B2B procurement system to enhance supplier-buyer collaboration.",
                "Engineered a high-performance matchmaking platform, leveraging intelligent algorithms to optimize user pairing.",
                "Built a robust multi-level marketing (MLM) platform, automating complex referral structures and payout mechanisms.",
                "Contributed to a mission-critical geospatial intelligence platform for the US Army using Django and PostGIS.",
            ],
            technologies: [
                "Python",
                "Django",
                "React",
                "Elasticsearch",
                "PostgreSQL",
                "Redis",
                "Celery",
                "Twilio",
                "AWS",
                "PostGIS",
            ],
        },
        {
            title: "Full Stack Web Developer",
            company: "Scom.ca (Paul Kudla)",
            location: "Ontario, Canada (Remote, Full Time)",
            period: "May 2014 - Sep 2017",
            achievements: [
                "Delivered custom business solutions for high-profile clients including Premier Elevator and Volvo Trucks North America.",
                "Developed systems for product and inventory management, invoicing, procurement, sales, and driver scheduling.",
                "Designed and implemented a stock and supply management system for iMeter24.",
                "Developed a real-time digital meter interface for live readings, remote control, and automated invoicing.",
            ],
            technologies: [
                "Python",
                "Django",
                "PostgreSQL",
                "Bootstrap",
                "jQuery",
                "Angular",
                "Elasticsearch",
            ],
        },
        {
            title: "Python Django Developer",
            company: "Supreme Supports Pty Ltd",
            location: "Dhaka",
            period: "Sep 2013 - Apr 2014",
            achievements: [
                "Developed complex features and implemented automated testing to ensure high code quality and reliability.",
                "Played a key role in resolving critical geospatial issues for a US Army location-based application.",
                "Utilized PostGIS to troubleshoot and rebuild a previously broken system, significantly enhancing data accuracy and performance.",
            ],
            technologies: ["Python", "Django", "PostGIS"],
        },
        {
            title: "Software Engineer",
            company: "PubliSeek",
            location: "Dubai (Remote, Full Time)",
            period: "Apr 2013 - Aug 2013",
            achievements: [
                "Developed a robust and scalable web application with a strong focus on seamless user experience and efficient data management.",
                "Designed and implemented custom features and integrated third-party APIs tailored to business needs.",
                "Streamlined operational workflows and enhanced the company's digital presence.",
            ],
            technologies: ["Python", "Django"],
        },
        {
            title: "Software Engineer",
            company: "NewsCred Inc",
            location: "Dhaka",
            period: "Jan 2012 - Mar 2013",
            achievements: [
                "Developed and enhanced CMS and control panel systems using Python, Django, and PostgreSQL.",
                "Championed and successfully integrated Behavior Driven Development (BDD) into the development workflow.",
                "Utilized Selenium, Lettuce, and Cucumber to implement BDD, leading to improved test coverage and early bug detection.",
            ],
            technologies: [
                "Python",
                "Django",
                "PostgreSQL",
                "Selenium",
                "Lettuce",
                "Cucumber",
            ],
        },
        {
            title: "Web Developer",
            company: "Kazi IT Center Ltd",
            location: "Dhaka",
            period: "Sep 2011 - Dec 2011",
            achievements: [
                "Contributed to the development and maintenance of client websites for atoztasks.com.",
                "Provided effective troubleshooting and issue resolution to ensure optimal application performance and stability.",
            ],
            technologies: ["Python", "Django", "Bootstrap", "PostgreSQL"],
        },
        {
            title: "Assistant Network Engineer",
            company: "Onecall Solutions Limited",
            location: "Dhaka",
            period: "May 2008 - Jun 2009",
            achievements: [
                "Provided timely and effective technical support and troubleshooting to network users, minimizing downtime.",
                "Delivered procedural guidance and training to ensure proper use of network resources.",
                "Maintained strict confidentiality and security of sensitive network data.",
            ],
            technologies: [],
        },
    ];

    const skills = [
        {
            category: "Programming Languages",
            items: ["Python", "JavaScript", "TypeScript", "SQL", "Bash", "Solidity"],
            level: 95,
        },
        {
            category: "Web Frameworks",
            items: ["Django", "FastAPI", "React", "Next.js"],
            level: 90,
        },
        {
            category: "Databases",
            items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "FAISS", "Chroma", "QDrant"],
            level: 85,
        },
        {
            category: "Cloud & DevOps",
            items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
            level: 80,
        },
        {
            category: "AI & ML",
            items: [
                "Scikit-learn",
                "OpenAI API",
                "LangGraph",
                "LangChain",
                "HuggingFace",
                "LLAMA3",
                "CrewAI",
                "AutoGen"
            ],
            level: 85,
        },
        {
            category: "Data Engineering",
            items: ["SnowFlake", "Pandas", "NumPy", "ETL", "Data Pipelines"],
            level: 90,
        },
    ];

    const education = [
        {
            degree: "Master of Science in Computer Science & Engineering",
            school: "Noth South University",
            location: "Dhaka, Bangladesh",
            period: "2008 - 2010",
            details:
                "Thesis not completed. 30 credit out of 36 credits is done",
        },
        {
            degree: "Bachelor of Science in Physics",
            school: "National University of Bangladesh",
            location: "Gazipur, Bangladesh",
            period: "2000 - 2004",
            details: "BSc honors in Physics",
        },
        {
            degree: "Diploma On Software Engineering",
            school: "Shahjalal University of Science and Technology",
            location: "Sylhet, Bangladesh",
            period: "2006 - 2007",
            details: "One Year Diploma On Software Engineering",
        },
        {
            degree: "Diploma On Computer Networking",
            school: "Shahjalal University of Science and Technology",
            location: "Sylhet, Bangladesh",
            period: "2004 - 2005",
            details: "One Year Diploma Training on CCNA Certification sponsorded by CISCO",
        },
    ];

    const certifications = [
        {
            name: "Introduction to LangGraph",
            issuer: "LangChain Academy",
            year: "2025",
        },
        {
            name: "Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI",
            issuer: "Coursera",
            year: "2025",
        },
        {
            name: "Architecting Solutions on AWS",
            issuer: "Coursera",
            year: "2024",
        },
        {
            name: "Generative AI Advance Fine-Tuning for LLMs",
            issuer: "Coursera",
            year: "2025",
        },
        {
            name: "Generative AI: Prompt Engineering Basics",
            issuer: "Coursera",
            year: "2025",
        },
        {
            name: "Generative AI and LLMs: Architecture and Data Preparation",
            issuer: "Coursera",
            year: "2025",
        },
    ];

    const projects = [
        {
            name: "Agentic AI-Powered RAG Chatbot",
            description: "Designed and implemented a highly responsive RAG-based conversational system for LinkFusion using an agentic architecture to handle complex user queries and tasks seamlessly.",
            technologies: [
                "Python",
                "LangChain",
                "LangGraph",
                "ChromaDB",
                "AWS SQS",
                "Twilio"
            ],
            impact: "Delivered a scalable, multi-channel conversational AI that significantly improved user engagement and automated complex interactions.",
        },
        {
            name: "High-Performance Semantic Search System",
            description: "Engineered a vector-based semantic search engine from the ground up to power a more intuitive and accurate product discovery experience, moving beyond keyword limitations.",
            technologies: [
                "FastAPI",
                "Pinecone",
                "Sentence-Transformers",
                "Python",
                "AWS"
            ],
            impact: "Dramatically improved product discovery relevance and user experience, leading to higher engagement and conversion rates.",
        },
        {
            name: "Mission-Critical Geospatial Intelligence Platform",
            description: "Contributed to a vital geospatial platform for the US Army, utilizing Django and PostGIS to process, visualize, and analyze spatial data for operational planning.",
            technologies: [
                "Python",
                "Django",
                "PostGIS",
                "PostgreSQL"
            ],
            impact: "Enhanced analysis, decision-making, and operational readiness for defense use cases by enabling powerful spatial data insights.",
        },
        {
            name: "AI-Driven Marketing Automation Tools",
            description: "Currently leading the development of intelligent marketing tools by orchestrating LangChain, LangGraph, and n8n to automate complex campaign workflows from start to finish.",
            technologies: [
                "Python",
                "LangChain",
                "LangGraph",
                "n8n",
                "Celery",
                "Redis"
            ],
            impact: "Automating campaign workflows and enabling real-time intelligent decision-making to significantly enhance customer engagement and marketing ROI.",
        },
        {
            name: "Scalable Rental Application (Gulf Region)",
            description: "Leading the development of a modern rental application, similar to Airbnb, specifically tailored for the Gulf region with a focus on user experience and regulatory compliance.",
            technologies: [
                "Next.js",
                "FastAPI",
                "Python",
                "Docker",
                "AWS (SQS, SNS, RDS)"
            ],
            impact: "Building a scalable, feature-rich platform designed to capture a niche market by addressing unique regional needs and enhancing user trust.",
        }
    ]

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-6xl mx-auto">
                {/* Header with Download Button */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-foreground">
                            Resume
                        </h1>
                        <p className="text-muted-foreground">
                            Professional experience and qualifications
                        </p>
                    </div>
                    <Button className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        <Link target="_blank" href={"/Resume_Of_K_Md_Mamunur_Rashid_2025_v3.pdf"}>
                            Download PDF
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Personal Info & Skills */}
                    <div className="space-y-6">
                        {/* Personal Information */}
                        <Card>
                            <CardHeader className="text-center">
                                <div className="w-32 h-32 mx-auto mb-4">
                                    <img
                                        src="/mamun_pic.jpeg"
                                        alt="Charlie Coder"
                                        className="w-full h-full rounded-full object-cover border-4 border-secondary"
                                    />
                                </div>
                                <CardTitle className="text-xl">
                                    {personalInfo.name}
                                </CardTitle>
                                <p className="text-muted-foreground text-sm">
                                    {personalInfo.title}
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-center gap-2 text-sm">
                                    <Mail className="h-4 w-4 text-secondary" />
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        {personalInfo.email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Phone className="h-4 w-4 text-secondary" />
                                    <a
                                        href={`tel:${personalInfo.phone}`}
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        {personalInfo.phone}
                                    </a>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <MapPin className="h-4 w-4 text-secondary" />
                                    <span className="text-muted-foreground">
                                        {personalInfo.location}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Globe className="h-4 w-4 text-secondary" />
                                    <a
                                        href={`https://${personalInfo.website}`}
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        {personalInfo.website}
                                    </a>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Github className="h-4 w-4 text-secondary" />
                                    <a
                                        href={`https://${personalInfo.github}`}
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        {personalInfo.github}
                                    </a>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Linkedin className="h-4 w-4 text-secondary" />
                                    <a
                                        href={`https://${personalInfo.linkedin}`}
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        {personalInfo.linkedin}
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Skills */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Code className="h-5 w-5 text-secondary" />
                                    Technical Skills
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {skills.map((skillGroup, index) => (
                                    <div key={index}>
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-sm font-medium text-foreground">
                                                {skillGroup.category}
                                            </h4>
                                            <span className="text-xs text-muted-foreground">
                                                {skillGroup.level}%
                                            </span>
                                        </div>
                                        <Progress
                                            value={skillGroup.level}
                                            className="h-2 mb-2"
                                        />
                                        <div className="flex flex-wrap gap-1">
                                            {skillGroup.items.map((skill) => (
                                                <Badge
                                                    key={skill}
                                                    variant="secondary"
                                                    className="text-xs"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Certifications */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Award className="h-5 w-5 text-secondary" />
                                    Certifications
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {certifications.map((cert, index) => (
                                    <div
                                        key={index}
                                        className="border-l-2 border-secondary pl-3"
                                    >
                                        <h4 className="text-sm font-medium text-foreground">
                                            {cert.name}
                                        </h4>
                                        <p className="text-xs text-muted-foreground">
                                            {cert.issuer}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {cert.year}
                                        </p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Experience & Education */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Professional Summary */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Professional Summary</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    {summary}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Experience */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Briefcase className="h-5 w-5 text-secondary" />
                                    Professional Experience
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {experience.map((job, index) => (
                                    <div
                                        key={index}
                                        className="border-l-2 border-secondary pl-6 relative"
                                    >
                                        <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary rounded-full"></div>
                                        <div className="mb-2">
                                            <h3 className="text-lg font-semibold text-foreground">
                                                {job.title}
                                            </h3>
                                            <p className="text-secondary font-medium">
                                                {job.company}
                                            </p>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {job.period}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="h-3 w-3" />
                                                    {job.location}
                                                </span>
                                            </div>
                                        </div>
                                        <ul className="space-y-1 mb-3">
                                            {job.achievements.map(
                                                (achievement, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="text-sm text-muted-foreground flex items-start gap-2"
                                                    >
                                                        <Star className="h-3 w-3 text-secondary mt-0.5 flex-shrink-0" />
                                                        {achievement}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <div className="flex flex-wrap gap-1">
                                            {job.technologies.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="outline"
                                                    className="text-xs"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Key Projects */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Key Projects</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className="border border-border rounded-lg p-4"
                                    >
                                        <h3 className="text-lg font-semibold text-foreground mb-2">
                                            {project.name}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-3">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1 mb-2">
                                            {project.technologies.map(
                                                (tech) => (
                                                    <Badge
                                                        key={tech}
                                                        variant="secondary"
                                                        className="text-xs"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                )
                                            )}
                                        </div>
                                        <p className="text-secondary text-sm font-medium">
                                            Impact: {project.impact}
                                        </p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Education */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <GraduationCap className="h-5 w-5 text-secondary" />
                                    Education
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {education.map((edu, index) => (
                                    <div
                                        key={index}
                                        className="border-l-2 border-secondary pl-6 relative"
                                    >
                                        <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary rounded-full"></div>
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-secondary font-medium">
                                            {edu.school}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {edu.period}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="h-3 w-3" />
                                                {edu.location}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            {edu.details}
                                        </p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Footer CTA */}
                <Card className="mt-12 bg-muted">
                    <CardContent className="p-8 text-center">
                        <h2 className="text-2xl font-bold text-foreground mb-4">
                            Interested in Working Together?
                        </h2>
                        <p className="text-muted-foreground mb-6 text-pretty">
                            I'm always open to discussing new opportunities and
                            challenging projects. Let's connect and see how I
                            can help bring your ideas to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild>
                                <a href="/contact">Get In Touch</a>
                            </Button>
                            <Button asChild variant="outline">
                                <a href="/services">View My Services</a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

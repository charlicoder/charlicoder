import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Calendar,
    MapPin,
    Award,
    Users,
    Code2,
    Zap,
    ExternalLink,
} from "lucide-react";

export default function AboutPage() {
    const timeline = [
        {
            year: "July 2025 - Continue",
            title: "Senior Full Stack Developer",
            company: "Vraxa (Full time)",
            description:
                "Developing a rental application similar to Airbnb, tailored for the Gulf region, incorporating innovative features to enhance user experience and compliance.",
            technologies: [
                "Next.js",
                "FastAPI",
                "AWS (SQS, SNS, API Gateway, RDS)",
                "Docker",
            ],
        },
        {
            year: "Aug 2024 - Apr 2025",
            title: "Full Stack Python Developer",
            company: "Cloud Custom Solutions, Arizona (Remote, Part time)",
            description:
                "Modernized a mission-critical legacy system and boosted system scalability by replacing Google Tasks with a Celery + Redis architecture. Designed and implemented an Agentic AI-powered chatbot and am currently leading the development of AI-driven marketing automation tools.",
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
            year: "Apr 2024 - Aug 2024",
            title: "Senior Software Engineer",
            company: "Savvie International Corp, Canada (Remote, Contract)",
            description:
                "Optimized and automated ETL pipelines, engineered a high-performance vector-based semantic search system, developed robust machine learning models for product classification, and designed scalable, cloud-native architectures on AWS.",
            technologies: [
                "Snowflake Snowpark",
                "AWS Batch",
                "S3",
                "ECS",
                "CloudFormation",
                "FastAPI",
                "Pinecone",
                "Sentence-Transformers",
                "TensorFlow",
                "Keras",
                "Scikit-learn",
                "NumPy",
                "Pandas",
                "Celery",
                "Redis",
            ],
        },
        {
            year: "Apr 2023 - Mar 2024",
            title: "Senior Software Engineer",
            company: "W3Engineers Ltd, Dhaka",
            description:
                "Designed and optimized large-scale ETL pipelines, led full-cycle development of Django-based applications, modernized complex legacy codebases, engineered resilient cloud-native architectures, and developed a machine learning–powered cost prediction system.",
            technologies: [
                "Python",
                "NumPy",
                "Pandas",
                "PyArrow",
                "PySpark",
                "Django REST Framework",
                "Celery",
                "Redis",
                "Kubernetes",
                "Docker",
                "AWS",
                "Scikit-learn",
                "LangChain",
            ],
        },
        {
            year: "Apr 2022 - Dec 2022",
            title: "Senior Software Engineer (Lead) & DevOps",
            company: "EkkBaz, Dhaka",
            description:
                "Contributed as a core developer to a B2B marketplace startup, led the migration of legacy APIs, designed and implemented robust RESTful APIs, and optimized data architecture using both SQL and NoSQL databases.",
            technologies: [
                "Python",
                "Django (DRF)",
                "React",
                "RabbitMQ",
                "AWS (API Gateway, RDS, EC2, ELB, S3)",
                "Node.js",
            ],
        },
        {
            year: "Jan 2019 - Feb 2021",
            title: "Full Stack Web Developer",
            company: "Cloud Custom Solutions, Arizona (Remote, Full Time)",
            description:
                "Collaborated on designing and delivering innovative, scalable web applications including a B2B procurement system, a matchmaking platform, an MLM marketing application, and a mission-critical geospatial intelligence platform for the US Army.",
            technologies: [
                "Python",
                "Django",
                "React",
                "Elasticsearch",
                "PostgreSQL",
                "Redis",
                "Celery",
                "Twilio",
                "AWS Cloud Infrastructure",
                "PostGIS",
            ],
        },
        {
            year: "May 2014 - Sep 2017",
            title: "Full Stack Web Developer",
            company:
                "Scom.ca (Paul Kudla), Ontario, Canada (Remote, Full Time)",
            description:
                "Delivered multiple custom business solutions for high-profile clients including Premier Elevator and Volvo Trucks. Designed and implemented a stock and supply management system and a real-time digital meter interface.",
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
            year: "Sep 2013 - Apr 2014",
            title: "Python Django Developer",
            company: "Supreme Supports Pty Ltd, Dhaka",
            description:
                "Developed complex features, implemented automated testing, and played a key role in resolving critical geospatial issues for a mission-critical, location-based application for the US Army using PostGIS.",
            technologies: ["Python", "Django", "PostGIS"],
        },
        {
            year: "Apr 2013 - Aug 2013",
            title: "Software Engineer",
            company: "PubliSeek, Dubai (Remote, Full Time)",
            description:
                "Developed a robust and scalable web application, designed and implemented custom features, integrated third-party services and APIs, and applied best practices to ensure application security, performance, and scalability.",
            technologies: ["Django"],
        },
        {
            year: "Jan 2012 - Mar 2013",
            title: "Software Engineer",
            company: "NewsCred Inc, Dhaka",
            description:
                "Developed and enhanced CMS and control panel systems, championed the adoption of Behavior Driven Development (BDD), and effectively utilized tools such as Selenium, Lettuce, and Cucumber.",
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
            year: "Sep 2011 - Dec 2011",
            title: "Web Developer",
            company: "Kazi IT Center Ltd, Dhaka",
            description:
                "Contributed to the development and maintenance of client websites, providing effective troubleshooting and issue resolution across web applications.",
            technologies: ["Python", "Django", "Bootstrap", "PostgreSQL"],
        },
        {
            year: "May 2008 - Jun 2009",
            title: "Assistant Network Engineer",
            company: "Onecall Solutions Limited, Dhaka",
            description:
                "Provided timely and effective technical support and troubleshooting to network users, delivered procedural guidance and training, and maintained strict confidentiality and security of sensitive information and network data.",
            technologies: [],
        },
    ];

    const achievements = [
        {
            icon: Award,
            title: "20+ Projects Delivered",
            description:
                "Successfully completed over 20 projects ranging from small web apps to enterprise-scale systems",
        },
        {
            icon: Users,
            title: "Team Leadership",
            description:
                "Led and mentored teams of 5-15 developers across multiple projects and organizations",
        },
        {
            icon: Code2,
            title: "Open Source Contributor",
            description:
                "Active contributor to Python ecosystem with several popular libraries and tools",
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description:
                "Specialized in optimizing applications for high performance and scalability",
        },
    ];

    const expertise = [
        {
            category: "Backend Development",
            skills: [
                "Python",
                "Django",
                "FastAPI",
                "Flask",
                "Node.js",
                "RESTful APIs",
                "GraphQL",
            ],
        },
        {
            category: "Frontend Development",
            skills: [
                "React",
                "Next.js",
                "TypeScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
            ],
        },
        {
            category: "Data & AI",
            skills: [
                "Machine Learning",
                "TensorFlow",
                "PyTorch",
                "Data Pipelines",
                "ETL",
                "Pandas",
                "Snowflake",
            ],
        },
        {
            category: "Databases",
            skills: [
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "MySQL",
                "Elasticsearch",
                "FIASS",
                "Chroma",
                "Qdrant",
            ],
        },
        {
            category: "DevOps & Cloud",
            skills: [
                "Docker",
                "Kubernetes",
                "AWS",
                "CI/CD",
                "Terraform",
                "Monitoring",
            ],
        },
        {
            category: "Chatbots & AI Agnets",
            skills: [
                "Conversational AI",
                "OpenAI API",
                "Langchain",
                "LangGraph",
                "CrewAI",
                "Autogen",
            ],
        },
    ];

    const certifications = [
        {
            title: "Generative AI and LLMs: Architecture and Data Preparation",
            issuer: "Coursera",
            year: "2025",
            image: "/generative_ai_and_llm_data_preparations.png",
            verificationLink:
                "https://coursera.org/share/3e33d8da6723bd0e9835cef244e262e1",
            description:
                "Explore how LLMs are built and how to prepare data for optimal model performance.",
        },
        {
            title: "Generative AI: Prompt Engineering Basics",
            issuer: "Coursera",
            year: "2025",
            image: "/prompt-engineering-basic.png",
            verificationLink:
                "https://coursera.org/share/e65d7780bcd78c5164df2f11170ff436",
            description:
                "Learn how to craft effective prompts to get the best results from generative AI models.",
        },
        {
            title: "Generative AI Advance Fine-Tuning for LLMs",
            issuer: "Coursera",
            year: "2025",
            image: "/generative_ai_fine_tuning_llm.png",
            verificationLink:
                "https://coursera.org/share/4f8f7797a353915371f6529ce80933d6",
            description:
                "Master advanced techniques to fine-tune large language models for specialized tasks.",
        },
        {
            title: "Architecting Solutions on AWS",
            issuer: "Coursera",
            year: "2024",
            image: "/architecting-solutions-on-aws.png",
            verificationLink:
                "https://coursera.org/share/590955070c32d345b0e7bc72a930e72d",
            description:
                "Design and deploy scalable, secure, and cost-effective cloud architectures on AWS.",
        },
        {
            title: "Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI",
            issuer: "Coursera",
            year: "2025",
            image: "/agentic-ai-langgraph.png",
            verificationLink:
                "https://coursera.org/share/e7be8e07003c379c2af7c6825a2e8506",
            description:
                "Build intelligent, multi-agent AI systems using modern frameworks like LangGraph and CrewAI.",
        },
        {
            title: "Introduction to LangGraph",
            issuer: "LangChain Academy",
            year: "2025",
            image: "/introduction-to-langgraph.png",
            verificationLink:
                "https://academy.langchain.com/certificates/y5jjxc4jxh",
            description:
                "Get started with LangGraph to design and orchestrate complex AI workflows and agent interactions.",
        },
    ];

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                        About Me
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        A passionate Python developer with over 14 years of
                        experience building scalable solutions, leading teams,
                        and driving innovation in web development, data
                        engineering, and AI.
                    </p>
                </div>

                {/* Personal Story */}
                <section className="mb-20">
                    <Card className="max-w-4xl mx-auto">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">
                                My Journey
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                My journey into technology began over a decade
                                ago, starting with network engineering before I
                                discovered my true passion in software
                                development with Python and Django. This
                                foundation quickly propelled me into building
                                full-stack applications, where I honed my skills
                                on everything from B2B procurement systems to
                                mission-critical geospatial platforms for the US
                                Army.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Throughout my career, I've embraced the
                                challenge of engineering complex, scalable
                                solutions. I've designed and optimized
                                large-scale ETL pipelines on AWS, engineered
                                high-performance vector search systems with
                                FastAPI and Pinecone, and modernized legacy
                                systems to enhance performance and
                                maintainability. My expertise is rooted in
                                building resilient, cloud-native architectures
                                using Docker, Kubernetes, and a wide array of
                                AWS services to support both real-time and
                                asynchronous workloads.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Today, my focus is at the intersection of
                                full-stack development and artificial
                                intelligence. I am passionate about building the
                                next generation of intelligent applications,
                                from developing AI-powered chatbots with
                                LangChain and RAG-based systems to creating
                                AI-driven marketing automation tools. I thrive
                                on leveraging modern tech stacks like Next.js
                                and FastAPI to build sophisticated solutions
                                that solve real-world problems and deliver
                                tangible business value.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Timeline */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                        Professional Timeline
                    </h2>
                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <Card
                                key={index}
                                className="max-w-4xl mx-auto hover:shadow-lg transition-shadow duration-300"
                            >
                                <CardContent className="p-8">
                                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                                        <div className="md:w-1/4">
                                            <div className="flex items-center gap-2 text-secondary font-semibold mb-2">
                                                <Calendar className="h-4 w-4" />
                                                {item.year}
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                                <MapPin className="h-4 w-4" />
                                                {item.company}
                                            </div>
                                        </div>
                                        <div className="md:w-3/4">
                                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                                {item.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {item.technologies.map(
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
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Professional Certifications */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                        Professional Certifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-all duration-300 group"
                            >
                                <CardContent className="p-6">
                                    <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                                        <img
                                            src={
                                                cert.image || "/placeholder.svg"
                                            }
                                            alt={`${cert.title} Certificate`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-semibold text-foreground text-balance leading-tight">
                                            {cert.title}
                                        </h3>
                                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                                            <span className="font-medium">
                                                {cert.issuer}
                                            </span>
                                            <Badge variant="secondary">
                                                {cert.year}
                                            </Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground text-pretty">
                                            {cert.description}
                                        </p>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors bg-transparent"
                                            asChild
                                        >
                                            <a
                                                href={cert.verificationLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                                Verify Certificate
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Key Achievements */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                        Key Achievements
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => {
                            const Icon = achievement.icon;
                            return (
                                <Card
                                    key={index}
                                    className="text-center hover:shadow-lg transition-shadow duration-300"
                                >
                                    <CardContent className="p-6">
                                        <Icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                                        <h3 className="text-lg font-semibold text-foreground mb-3">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm text-pretty">
                                            {achievement.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </section>

                {/* Technical Expertise */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                        Technical Expertise
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {expertise.map((area, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-shadow duration-300"
                            >
                                <CardHeader>
                                    <CardTitle className="text-lg text-secondary">
                                        {area.category}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {area.skills.map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant="outline"
                                                className="text-xs"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Personal Touch */}
                <section>
                    <Card className="max-w-4xl mx-auto bg-muted">
                        <CardContent className="p-8 text-center">
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                Beyond Code
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                When I'm not coding, you'll find me exploring
                                the latest developments in AI and machine
                                learning, contributing to open-source projects,
                                or sharing knowledge through technical writing
                                and mentoring. I believe in continuous learning
                                and staying curious about emerging technologies
                                that can solve real-world problems.
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    );
}

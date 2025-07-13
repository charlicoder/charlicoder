import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownBio = `
🚀 **Full Stack Developer | AI Agent Architect | Blockchain Enthusiast**

Experienced in building intelligent, scalable software solutions for web, AI automation, and decentralized applications.

---

### 🧠 AI & Agentic Systems
- Developed **LLM-powered agents**, **RAG-based chatbots**, and **semantic search** platforms.
- Proficient with **LangChain**, **LangGraph**, **Autogen**, **n8n**, and **HuggingFace**.
- Integrated **vector DBs**: \`Qdrant\`, \`ChromaDB\`, \`Pinecone\`, \`FAISS\`.

---

### 🛠 Backend Engineering
- Strong in **Python** (\`Django\`, \`DRF\`, \`FastAPI\`, \`Celery\`) and **Node.js** (\`Express\`).
- Architected **microservices** and **event-driven systems**.
- Built robust and secure **RESTful APIs**.

---

### 🎨 Frontend Technologies
- Built modern UI with **React**, **Tailwind CSS**, **Material UI**, **Bootstrap**.
- Also worked with **Angular**, **jQuery**, and **Next.js**.

---

### 📊 Data Engineering
- Designed **ETL pipelines** and automated workflows.
- Hands-on with **Snowflake**, **PostgreSQL**, **MongoDB**, **Polars**, **Pandas**.

---

### ☁️ DevOps & Cloud
- Proficient with **Docker**, **Kubernetes**, **AWS** (EC2, S3, RDS, SQS, ECS, CloudFormation).
- Experience building **CI/CD pipelines** for production-grade systems.

---

### 🔗 Blockchain Development
- Built smart contracts using **Solidity**, **Truffle**, **HardHat**, and **Ganache**.
- Deployed dApps and integrated blockchain with web2 services.

---

### 🧪 Testing & Automation
- Skilled in **Test-Driven Development (TDD)**.
- Tools: \`Celery\`, \`Redis\`, \`Selenium\`, \`Pytest\`, \`Lettuce\`, \`Cucumber\`.

---

### 📦 Tools & Technologies

- **Languages**: \`Python\`, \`JavaScript\`, \`Solidity\`, \`SQL\`  
- **Databases**: \`PostgreSQL\`, \`MongoDB\`, \`Snowflake\`, \`Redis\`, \`Elasticsearch\`  
- **Vector DBs**: \`Qdrant\`, \`Pinecone\`, \`FAISS\`, \`ChromaDB\`  
- **Frameworks**: \`Django\`, \`DRF\`, \`FastAPI\`, \`Express\`  
- **Frontend**: \`React\`, \`Tailwind\`, \`Angular\`, \`Bootstrap\`, \`jQuery\`  
- **AI/ML**: \`LangChain\`, \`HuggingFace\`, \`TensorFlow\`, \`Keras\`, \`Scikit-learn\`  
- **Cloud & DevOps**: \`AWS\`, \`Docker\`, \`Kubernetes\`, \`CI/CD\`  
- **Blockchain**: \`Solidity\`, \`HardHat\`, \`Truffle\`, \`Ganache\`  
- **Project Tools**: Microsoft Teams, Planner  

---

✅ Passionate about building next-gen systems that blend **AI**, **data**, and **decentralization**.
`;

const AboutSection = () => {
    const handleDownload = () => {
        const resumeUrl = "https://charlicoder.s3.us-east-1.amazonaws.com/media/new_resume_mamun_v4.pdf";
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.setAttribute("download", "Khondoker_Md_Mamunur_Rashid_Resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Card className="mt-6">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>About</CardTitle>
                    <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1"
                        onClick={handleDownload}
                    >
                        <Download size={16} />
                        <span>Resume</span>
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="prose prose-sm sm:prose-base max-w-none text-gray-800">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownBio}</ReactMarkdown>
            </CardContent>
        </Card>
    );
};

export default AboutSection;

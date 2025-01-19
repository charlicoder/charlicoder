// import { FileDown, FileText } from 'lucide-react';

function Resume() {
    // Using Adobe's sample PDF that allows embedding
    const resumeUrl = "https://charlicoder.s3.us-east-1.amazonaws.com/media/Resume_Of_K_Md_Mamunur_Rashid_2025.pdf";
    // import pdf from "../../assets/resume.pdf";

    return (
        <div className="min-h-screen bg-gray-100 p-6" style={{ marginTop: "100px" }}>
            <div className="max-w-5xl mx-auto">


                {/* PDF Preview */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <iframe
                        src={resumeUrl}
                        className="w-full h-[800px] border-0 rounded-lg"
                        title="Resume Preview"
                        allow="fullscreen"
                    />
                </div>
            </div>
        </div>
    );
}

export default Resume;
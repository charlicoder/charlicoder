import React from "react";
import MainNav from "@/components/NavigationMenu";
import { Mail, Phone, MessageCircle, UserCircle2 } from "lucide-react";

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <MainNav />
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <div className="max-w-xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8 text-center">Contact Me</h1>

                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                        <div className="flex justify-center mb-6">
                            <img
                                src="https://s3.eu-north-1.amazonaws.com/charlicoder.com/static/mamun.jpg?auto=format&fit=crop&w=500&h=500" // Replace with your image path or external URL
                                alt="Profile"
                                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                            />
                        </div>
                        <h2 className="text-2xl font-semibold mb-2">Khondoker Md Mamunur Rashid</h2>
                        <p className="text-gray-600 mb-4">Full Stack Developer | Agentic AI & AI Automation Engineer | Blockchain Developer</p>

                        <div className="space-y-4 text-left text-gray-700">
                            <div className="flex items-center gap-3">
                                <Mail className="text-blue-500" size={20} />
                                <a href="mailto:contact@charlicoder.com" className="hover:underline">
                                    contact@charlicoder.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-green-600" size={20} />
                                <a href="tel:+97451235119" className="hover:underline">
                                    +97451235119
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <MessageCircle className="text-green-500" size={20} />
                                <a href="https://wa.me/97451235119" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    WhatsApp: +97451235119
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <UserCircle2 className="text-indigo-600" size={20} />
                                <span>Discord: charlicoder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;

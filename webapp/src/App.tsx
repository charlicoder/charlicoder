import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Pre from "./components/Pre";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About";
import ResumeNew from "./pages/Resume/index";
import Chatbot from './pages/Chatbot'

const App: React.FC = () => {
    const [load, upadateLoad] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 1200);

        // Cleanup on component unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <Pre load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <NavBar />
                <ScrollToTop />
                <main className="min-h-svh">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/resume" element={<ResumeNew />} />
                        <Route path="/chatbot" element={<Chatbot />} />
                        <Route path="*" element={<Navigate to="/" />} />

                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

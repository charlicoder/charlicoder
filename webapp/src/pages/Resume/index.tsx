import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/Simple_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";


import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from "../../components/Particle";

// Configure the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ResumeNew: React.FC = () => {
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    // Update the window width when resizing the browser


    const goToNextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    const goToPreviousPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    return (
        <div>
            <Container fluid className="resume-section" style={{ overflow: 'hidden' }}>
                <Particle />

                {/* Download CV Button */}
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>

                {/* Pagination Controls */}
                <Row style={{ justifyContent: "center", position: "relative", margin: "20px auto" }}>
                    <Button
                        variant="secondary"
                        onClick={goToPreviousPage}
                        disabled={pageNumber === 1}
                        style={{ marginRight: "10px", width: "100px" }}
                    >
                        Previous
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={goToNextPage}
                        disabled={pageNumber === numPages}
                        style={{ marginRight: "10px", width: "100px" }}
                    >
                        Next
                    </Button>
                </Row>

                {/* PDF Viewer */}
                <Row className="resume" style={{ display: "block" }}>
                    <Document
                        file={pdf}
                        className="d-flex justify-content-center"
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {/* Render current page */}
                        <div key={`page_${pageNumber}`} style={{ marginBottom: '20px' }}>
                            <Page
                                pageNumber={pageNumber}

                            />
                        </div>
                    </Document>

                    {/* Page Navigation */}
                    <p style={{ textAlign: 'center' }}>
                        Page {pageNumber} of {numPages}
                    </p>
                </Row>

                {/* Download CV Button (again, at the bottom) */}
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    );
};

export default ResumeNew;
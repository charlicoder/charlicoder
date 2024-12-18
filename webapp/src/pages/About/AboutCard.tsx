import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Khondoker Md Mamunur Rashid </span>
                        from <span className="purple"> Sylhet, Bangladesh.</span>
                        <br />
                        <br />
                        I am available to hire as a Freelance Web Application developer or Data Engineer.
                        <br />
                        <br />
                        I have completed Integrated BSc in Physics from National University of Bangladesh
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Writing Tech Blogs
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">charlicoder</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;

import { Col, Row } from "react-bootstrap";

import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
} from "react-icons/di";
import {
    SiRedis,
    SiFirebase,
    SiDjango,
    SiSolidity,
    SiPostgresql,
    SiCelery,
    SiRabbitmq,
    SiElasticsearch,
    SiHuggingface,
    SiOllama
} from "react-icons/si";

import { FaRegSnowflake } from "react-icons/fa";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDjango />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaRegSnowflake />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedis />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiCelery />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRabbitmq />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiElasticsearch />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSolidity />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiHuggingface />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiOllama />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiHuggingface />
            </Col>

        </Row>
    );
}

export default Techstack;

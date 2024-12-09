import { Col, Row } from "react-bootstrap";
import { VscVscode } from "react-icons/vsc";
import {
    SiPostman,
    SiSlack,
    SiMacos
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiMacos />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaAws />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSlack />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <VscVscode />
            </Col>
        </Row>
    );
}

export default Toolstack;

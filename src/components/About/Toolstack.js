import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudio,
  SiPostman,
  SiSlack,
  SiDocker,
  SiWindows,
  SiVisualstudiocode,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>Windows</strong></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>Visual Studio</strong></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>Visual Studio Code</strong></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>Postman</strong></div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>Docker</strong></div>

      </Col>
    </Row>
  );
}

export default Toolstack;

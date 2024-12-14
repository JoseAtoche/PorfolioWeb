import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaDatabase } from "react-icons/fa";
import { SiDotnet, SiCsharp, SiDocker, SiRedis, SiReact, SiGithub, SiMicrosoftsqlserver, SiJavascript, SiTypescript, SiAngular, SiKubernetes, SiAzuredevops, SiCrystal } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Backend Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>C#</strong></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>.NET Framework</strong></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>.NET Core</strong></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>SQL Server</strong></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>Entity Framework</strong></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>Redis Cache</strong></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCrystal />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>Crystal Reports</strong></div>
      </Col>

      {/* Frontend Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>React JS</strong></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>Angular JS</strong></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>JavaScript</strong></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>TypeScript</strong></div>
      </Col>

      {/* DevOps & Infrastructure */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>Docker</strong></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>Kubernetes</strong></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>Azure DevOps</strong></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>GitHub</strong></div>
      </Col>

      {/* Additional Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>Clean Code</strong></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
        <div><strong className="purple" style={{ fontSize: "0.5em" }}>Arquitectura por capas</strong></div>
      </Col>
    </Row>
  );
}

export default Techstack;
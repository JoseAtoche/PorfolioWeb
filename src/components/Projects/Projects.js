import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import atenea from "../../Assets/Projects/ATENEA.png";
import apolo from "../../Assets/Projects/APOLO.png";
import zeus from "../../Assets/Projects/ZEUS.png";
import hades from "../../Assets/Projects/HADES.png";
import chronos from "../../Assets/Projects/CHRONOS.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Proyectos </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apolo}
              isBlog={false}
              title="API (Project Apollo)"
              description="Realicé esta pequeña API para una prueba técnica, con una Arquitectura por capas"
              ghLink="https://github.com/JoseAtoche/ProyectoAPI"
              demoLink=""
              tecnologias=".NET 8, Layered Architecture, SQLite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atenea}
              isBlog={false}
              title="Front + API (Project Athena)"
              description="Realizado para una prueba tecnica, tiene un front en React y una API con consumo de APIs externas"
              ghLink="https://github.com/JoseAtoche/ProjectLayeredArchitecture"
              demoLink=""
              tecnologias=".NET 8, Layered Architecture, SQL Server, React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zeus}
              isBlog={false}
              title="Project Zeus (próximamente)"
              description="Una aplicación utilizando Arquitectura DDD y CQRS con Event Sourcing para manejar eventos, integrando RabbitMQ, Docker, SQL Server y MediaR para la lógica de comandos y consultas."
              ghLink=""
              demoLink=""
              tecnologias=".NET 8, DDD, CQRS, Event Sourcing, RabbitMQ, Docker, SQL Server, MediaR"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hades}
              isBlog={false}
              title="Project Hades (próximamente)"
              description="Una aplicación con Arquitectura Hexagonal, implementando CQRS y Event Sourcing con Kafka para mensajería en tiempo real, ejecutada en Docker y orquestada en Kubernetes en AWS, utilizando SQL Server, CosmosDB y MediaR."
              ghLink=""
              demoLink=""
              tecnologias=".NET 8, Arquitectura Hexagonal, CQRS, Event Sourcing, Kafka, Docker, Kubernetes, AWS, CosmosDB, MediaR"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chronos}
              isYTChannel={true}
              title="Youtube (Project Chronos)"
              description="En este canal subo los directos que hago aprendiendo distintas tecnologías o en mis proyectos personales"
              ghLink=""
              demoLink="https://www.youtube.com/@atochejose" 
              tecnologias="¡Pásate por mi canal a descubrir cuales!"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

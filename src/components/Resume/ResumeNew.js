import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/ATOCHE CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { FaArrowDown } from "react-icons/fa"; // Icono para el indicador
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null); // Almacena el número total de páginas

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Función para manejar la carga del documento y establecer el número de páginas
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Container fluid className="resume-section" style={{ position: "relative" }}>
        <Particle />
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

        {/* Indicador de scroll */}
        <div
          style={{
            position: "fixed",
            right: "15%",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            zIndex: 1000,
            background: "#f8f9fa",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          <p style={{ margin: 0, fontSize: "14px", color: "#333", textAlign: "center" }}>
            ¡Hazme scroll!
          </p>
          <FaArrowDown style={{ fontSize: "24px", color: "#007bff" }} />
        </div>

        {/* Contenedor para scroll */}
        <Row
          className="resume"
          style={{
            maxHeight: "80vh", // Altura máxima visible
            overflowY: "scroll", // Scroll vertical
          }}
        >
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex flex-column align-items-center"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width > 786 ? 1.7 : 0.6}
                style={{
                  marginBottom: "1rem", // Espaciado entre páginas
                }}
              />
            ))}
          </Document>
        </Row>

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
}

export default ResumeNew;

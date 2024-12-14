import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Cuento con <span className="purple">5 años de experiencia</span> en proyectos de sectores como el financiero, educativo y sanitario.
          <br/><br />
          Soy desarrollador de software especializado en <span className="purple">backend</span>, 
          trabajando con tecnologías como <span className="purple">.NET, C#, SQL Server</span> y más.
          <br /><br />
          Siempre busco seguir <span className="purple">aprendiendo</span> con mis proyectos personales
          <br /><br />
          Además de mi pasión por la programación, disfruto con otras actividades:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos con historias profundas
            </li>
            <li className="about-activity">
              <ImPointRight /> Leer libros que amplíen mi perspectiva
            </li>
            <li className="about-activity">
              <ImPointRight /> Reflexionar y aprender de las experiencias
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "El paso más dificil no es el primero, es el siguiente, siempre es el siguiente"{" "}
          </p>
          <footer className="blockquote-footer">José Ángel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

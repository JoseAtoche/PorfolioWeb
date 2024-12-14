import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTEME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Desde siempre he tenido una gran curiosidad por la informática, desmontando cosas para ver cómo funcionaban. 
              Hoy, esa curiosidad me ha llevado a ser desarrollador backend con tecnologías como{" "}
              <b className="purple">.NET</b>, <b className="purple">C#</b> y{" "}
              <b className="purple">SQL Server</b>.
              <br />
              <br />
              Me apasiona crear soluciones escalables, limpias y bien organizadas, siguiendo principios de{" "}
              <i>
                <b className="purple">Clean Code</b>
              </i>
              . También disfruto aprendiendo sobre nuevas herramientas y nuevas areas{" "}
              {/* <b className="purple">infraestructura en la nube</b>. */}
              <br />
              <br />
              Mi filosofía es siempre buscar la mejor manera de hacer las cosas, porque creo que 
              <b className="purple"> la eficiencia</b> es clave para el éxito, tanto personal como profesional.
              <br />
              <br />
              En mi tiempo libre, soy alguien que valora la familia, me gusta jugar videojuegos con buena narrativa y leer historias que aporten algo nuevo. 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {/* <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt> */}
          </Col>
        </Row>
        <Row>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Siéntete libre de <span className="purple">conectar </span>conmigo a través de mi mail:</h1>
            <br></br>
            <p>
               <h2> <b className="purple">atochejoseangel@gmail.com</b></h2>
            </p>
            <br></br>

            <br></br>

            <h1>También puedes conocerme más a través de <span className="purple">los siguientes canales: </span></h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JoseAtoche"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jose-atoche/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@atochejose"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

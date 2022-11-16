import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import instagram from '../Imagenes/instagram.png';
import facebook from '../Imagenes/facebook.png';

const Footer = () => {
  return (  
    <Fragment>
      <footer className="pie">
        <Container>
          <Row className="row justify-content-md-center">
            <Col md="auto">
              <p>Rick and Morty ® 2022 - Todos los derechos reservados</p>
            </Col>
            <Col xs={1}></Col>
            <Col md="auto">
              <p>Nuestras Redes: </p>
            </Col>
            <Col md="auto">
              <a href="https://www.instagram.com/rickandmorty/"><img src={instagram} alt="Instagram" width="40px"></img></a>
            </Col>
            <Col md="auto">
              <a href="https://www.facebook.com/RickandMorty/"><img src={facebook} alt="Facebook" width="40px"></img></a>
            </Col>
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
}
 
export default Footer;
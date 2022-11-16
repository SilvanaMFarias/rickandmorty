import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row,Container } from 'react-bootstrap';
import rym1 from '../Imagenes/rickandmorty_1.png'
import rym2 from '../Imagenes/rickandmorty_2.png'

const Header = () => {

  return (  

    <Fragment>
    
      <header className="encabezado fixed-top">
        <Container fluid>
          <Row className="justify-content-md-center" id="cabecera">
            <Col xs={1}>
            <img src={rym1} height="100px"/>
            </Col>
            <Col xs={3}>
              <img src={rym2} height="100px"/>
            </Col>
            <Col xs={5}>
              <Form className="d-flex p-4">
                  <Form.Control
                type="search"
                placeholder="¿Qué estás buscando?"
                className="me-2"
                aria-label="Search"
                variant="secondary"
              />
              <Button variant="light">Buscar</Button>
             </Form>
            </Col>
            <Col>
              <h5>Hola, @usuario</h5>
            </Col>
            <Col>
              <h5>Ocultar Mis Favoritos </h5>
            </Col>
          </Row>
          <br></br>
          <Row className="justify-content-md-center">
            <Col className="align-self-center">
              <div id="navegador_menu">
                <ul>
                  <li><a href="">Inicio</a></li>
                  <li id="menuSeleccionado"><a href="">Personajes</a></li>
                  <li><a href="">Mundos</a></li>
                  <li><a href="">Episodios</a></li>
                  <li><a href="">Reparto</a></li>
                </ul>
              </div>
            </Col> 
          </Row> 

        </Container>
      </header>
    </Fragment>


  );
}
 
export default Header;
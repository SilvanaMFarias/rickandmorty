import React, { Fragment } from 'react';
import '../Estilos/hojadeestilo.css';
import { Card, Container,Row,Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const Favoritos = ({personaje,favoritos, editarFavoritos}) => {

  const eliminarPersonaje = (id)=> {

    const nuevosPersonajes = favoritos.filter(personaje => personaje.id !== id);
    editarFavoritos(nuevosPersonajes);
    console.log("Eliminé el personaje");
    console.log(personaje);

  };

  
  return ( 
    <Fragment>
      
      <br></br>
      <div className="favoritos">
        <Container>
          <Row className="row justify-content-md-center" id="itemfavorito">
            <Col md="auto"><img src={personaje.image} alt={personaje.name} width="100px"/></Col>
            <Col xs={6}>
              <h5>{personaje.name}</h5>
              <p>Especie: {personaje.species}</p>
              <p>Estado: {personaje.status}</p>
            </Col>
            <Col md="auto"> 
              <Button
                variant="secondary"
                 onClick={ () => eliminarPersonaje(personaje.id)}
              >
                Quitar
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
  
    </Fragment>
 );
}



export default Favoritos;






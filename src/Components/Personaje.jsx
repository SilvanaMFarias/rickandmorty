import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import { v4 as uuid } from 'uuid';


const Personaje = ({personaje, personajes, favoritos, editarFavoritos}) => {
    

  //Extraigo los valores de personaje
  const {id,name,status,species,image} = personaje;
  
  //Función para seleccionar un personaje para agregar a favoritos
  const seleccionarPersonaje = (id)=> {
 
    const personaje = personajes.find(
      personaje => personaje.id === id
    );

    const estaEnFavoritos = favoritos.find(
      favorito => favorito.id === id
    );

    if (!estaEnFavoritos){

    editarFavoritos([
      //... para que favoritos no se sobreescriba
      ...favoritos,
      personaje]
    )

    console.log("Agregué un elemento a favoritos");
    console.log("El elemento es:");
    console.log(personaje);
    }
    else{
      console.log("No agregué el personaje");
      console.log(personaje.name);
      console.log("porque ya estaba");
    }


  }


  return (
    <Fragment>
      <Card className='text-center bg-dark' style={{width: '17rem'}}>
      <Card.Img objectfit="cover" variant="top" src={image}/>
      <Card.Body className='text-light'>
        <p className="oculto">{id}</p>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>Especie: {species}</Card.Subtitle>
        <Card.Text>Estado: {status}</Card.Text>
        <Button 
            variant="secondary"
            onClick={ () => seleccionarPersonaje(id)}
        >
           Agregar a Favoritos
        </Button>
      </Card.Body>
    </Card>
    </Fragment>
  );
}
 
export default Personaje;
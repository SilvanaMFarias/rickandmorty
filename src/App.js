import { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Row,Container } from 'react-bootstrap';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Personaje from './Components/Personaje';
import Favoritos from './Components/Favoritos';


function App() {

//Creamos un hook para guardar los personajes que trae la a API
let [personajes, editar] = useState([]);

//La función se llama solo una vez, cuando el componente se monta y realiza una única solicitud a una
//API remota para obtener datos

useEffect(() => {

  async function consultarAPI() {

    try{
   
      //Llamado a la API
      const api = await fetch('https://rickandmortyapi.com/api/character');
      const resultado = await api.json();
      
      editar(resultado.results);

    }catch(error){
       console.log(error);
    };
  };

  consultarAPI();

}, []); 


//Busco si tengo algo en la caché
let favoritosInicial = JSON.parse(localStorage.getItem('favoritos'));
  
//Si no había nada en la caché, lo inicializo como una lista vacía
  if(!favoritosInicial){
    favoritosInicial=[];
    }

let [favoritos, editarFavoritos] = useState(favoritosInicial);
  
useEffect(
  //Cuando pasa algo, hacé algo
  () => {
    //Si existe favoritos inicial, voy a guardar la lista
    //el primero parámetros es el nombre de la lista, y luego la lista de favoritos
    if(favoritosInicial){
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    } else{
      localStorage.setItem('favoritos', JSON.stringify([]));
    }
    },[favoritosInicial]
    //Sobre que elemento estoy operando
  );

  
//Cambiamos el título del área de favoritos si no hay nada en él

let titulo = favoritos.length === 0 ? "Aún no hay ítems en Mis Favoritos" : "Mis Favoritos";

return (
  <Fragment>
    
    <Header/>

      <div id ="contenido">
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col className="personajes">
              <h3>Personajes</h3>
                {
                  personajes.map(personaje => (
                    <Personaje
                      personaje={personaje}
                      personajes={personajes}
                      key={personaje.id}
                      favoritos={favoritos}
                      editarFavoritos= {editarFavoritos}
                    />
              ))
              }
            </Col>
              <Col xs={4} className="favoritos">
                <h3>{titulo}</h3>
                {
                  favoritos.map(personaje => (
                    <Favoritos
                      personaje={personaje}
                      key={personaje.id}
                      favoritos={favoritos}
                      editarFavoritos={editarFavoritos}
                    />
                  ))}
              </Col>
        </Row >
      </Container>
    </div>

    <Footer/>

  </Fragment>
  );
}

export default App;

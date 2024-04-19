import React, { useState } from 'react';
import Trabajadores from './Trabajadores';

//Importo trabajadores para meterlos dentro del container.
// En el container únicamente hay un H3 con el texto. La X se sustituye por numeroTrabajadores

const Cabecera = () => {

  // Con el hoock useState inicializo numeroTrabajadores a 0.
  // Actualizaremos ese valor con el setter.
  const [numeroTrabajadores, setNumeroTrabajadores] = useState(0);

  //Funcion para actualizar el numero de trabajadores.
  const modificaTrabajadores = (numero) => {
    setNumeroTrabajadores(numero);
  };

  // el h3 pues irá actualizando el numero según la función de arriba.
  //Trabajadores es quien actualiza el numero de trabajadores
  //Trabajadores importa del componente trabajadores.
  //actualizaTrabajadores existe en Trabajadores.jsx y actualiza los trabaajadores y el numero

  return (
    <section className="container">
      <h3>Tenemos una plantilla de {numeroTrabajadores} trabajadores</h3> 
      <Trabajadores actualizaTrabajadores={modificaTrabajadores} />
    </section>
  );
};

export default Cabecera;

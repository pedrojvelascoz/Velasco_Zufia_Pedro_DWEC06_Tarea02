import React, { useState, useEffect } from 'react';

// Defino un componente trabajadores, que recibe la llamada de Cabecera.
// Además, usa muestraTrabajadores, para que se actualice
const Trabajadores = ({ actualizaTrabajadores }) => {
  //Defino trabajadores, para almacenarlos. 
  const [trabajadores, setTrabajadores] = useState([]);

  //Llamada a la api usando el método de apuntes
  useEffect(() => {
    const fetchTrabajadores = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Error fetching trabajadores');
        }
        const data = await response.json();
        //La respuesta la paso al set para guardar los trabajadores
        setTrabajadores(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrabajadores();
  }, []);

  // Se actualiza cada vez que cambie la lista de trabajadores.
  //Actualiza la lista y la longitud. Esto lo usa Cabecera
  useEffect(() => {
    actualizaTrabajadores(trabajadores.length);
  }, [trabajadores, actualizaTrabajadores]);

  //Para eliminar un trabajador según el id pulsado
  const borraTrabajador = id => {
    //Actualizo el set creando una lista si nese id. Devuelvo la lista para que se actualice.
    setTrabajadores(prevTrabajadores => {
      const nuevosTrabajadores = prevTrabajadores.filter(trabajador => trabajador.id !== id);
      return nuevosTrabajadores;
    });
  };


  // Y mostramos las cosas según el html dado.
  // En el boton, le damos función onClick. S ise hace, llama a borrar con ese id.
  return (
    <div>
      {trabajadores.map(({ id, name, email, phone }) => (
        <article className="person" key={id}>
          <img src={`https://randomuser.me/api/portraits/men/${id}.jpg`} alt="" />
          <div>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{phone}</p>
          </div>
          <button type='button' className='delete-btn' onClick={() => borraTrabajador(id)}>
            <img src='./src/trash.png' alt="Delete" />
          </button>
        </article>
      ))}
    </div>

  );
};

export default Trabajadores;

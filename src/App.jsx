import React from 'react';
import './index.css';
import Cabecera from './Cabecera';

// Para cumplir con el requisito de tener tres componentes, hago este, la cabecera con el texto de plantilla y el de los trabajadores.
// A trabajadores voy a importarlo desde cabecera para que el contenido salga dentro.
// App por tanto tiene el div general, el mail y dentro los dos elementos a importar

const App = () => {
 
  return (
    <div id="root">
      <main>
        <Cabecera />
      </main>
    </div>
  );
};

export default App;

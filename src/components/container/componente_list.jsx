import React from 'react'
import { Contacto } from '../../models/contacto.class';
import ComponenteB from '../pure/componenteB';

const ComponenteLista = () => {

    const defaultContacto = new Contacto('Gabriel', 'Lloveras', 'gabriellloveras@gmail.com', false);

  return (
    <div>
        <div>
            <h1>Información sobre el contacto: </h1>
        </div>
        <ComponenteB contacto={ defaultContacto}></ComponenteB>
    </div>
  )
}

export default ComponenteLista;
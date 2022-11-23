import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'

const Estado = ({ contacto }) => {
  return (
    <div>
        <h2>
            Nombre: { contacto.name }
        </h2>
        <h2>
            Apellido: { contacto.last }
        </h2>
        <h2>
            Mail: { contacto.mail }
        </h2>
        <h3>
            Estado: { contacto.estado ? 'Contacto en línea' : 'Contacto no disponible' }
        </h3>
    </div>
  )
}
 Estado.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
 };

export default Estado

import React, { useContext } from 'react'
import { Contexto } from '../context/MiContexto';

const EjemploContexto = () => {

    // const {color, titulo} = useContext(Contexto)
    const {state} = useContext(Contexto)

    console.log(useContext(Contexto));

  return (
    <div>
        {/* <h2 style={{color: color}}>
            {titulo}
        </h2> */}
        <h2>
            {state.data}
        </h2>
    </div>  )
}

export default EjemploContexto
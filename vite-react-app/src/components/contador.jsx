
// componentes funcionales

import { useState } from 'react'

function Contador () {
    let edad = 33
    const [edadState, setEdadState] = useState(33)
    let numeroRandom = Math.random ()

    const [contador, setContador] =useState(0)
    
    
    setTimeout(() => {
        edad = 40
        setEdadState(40)
    }, 5000)

    function incrementar() {
        setContador ( contador +1)
    }

   // () => setContador(contador +1)
   
    function decrementar() {
        if(contador >0)
        setContador (contador -1)
        else
            console.log("No se puede tener menos de cero en el contador")
    }

    return (
        <>
        <h1>La edad es: {edad}</h1>
        <h2>La edad con state es {edadState}</h2>
        <h3>Contador: {Contador}</h3>

        <button onClick={ ()=> setContador(contador+1)}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        </>
    )
}

export default Contador;

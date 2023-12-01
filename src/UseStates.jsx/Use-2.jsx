import { useState } from "react"


export default ()=>{

    const [texto, setTexto] = useState('visivel')

    const alternar = ()=>{
        texto === 'visivel' ? setTexto('invisivel') : setTexto('visivel')
        // chat gpt colocou a condicao dentro do setTexto
    }


    return(
        <div>
            <p>{texto}</p>
            <br />

            <button onClick={alternar}>Alternar</button>
        </div>
    )
}

// **Exercício 2**: Crie um componente React chamado `AlternarTexto`. Ele deve exibir um botão "Alternar" 
// e um texto. Ao clicar no botão "Alternar", o texto deve alternar entre "Visível" e "Invisível".
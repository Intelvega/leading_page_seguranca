import { useState } from "react"


export default ()=>{

    const [mostrarTxt, setMostrarTxt] = useState(false)

    const texto = () =>{
        setMostrarTxt(!mostrarTxt)
    }


    return(
        <div>
            <p>

            React.js, é fundamental compreender os conceitos de "Componentes" 
            <button onClick={texto}>Mostrar texto</button>
            {
                mostrarTxt ? (<p>
                e "Estado" para criar aplicações eficientes e 
                interativas. Além disso, existem várias bibliotecas e ferramentas que podem ser utilizadas em conjunto com o React
                para melhorar o desenvolvimento, como o React Router para roteamento, o Redux para gerenciamento de estado global e 
                o Axios para fazer requisições HTTP. Aqui estão alguns conceitos e exemplos simples:

                Componentes: Os componentes são blocos de construção fundamentais no React. Eles podem ser funcionais ou de classe.
                Aqui está um exemplo simples de um componente de função:
            </p>) : null
            }
            
            
            </p>
        </div>
    )
}
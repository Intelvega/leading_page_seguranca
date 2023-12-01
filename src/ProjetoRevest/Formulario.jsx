import { useState } from "react";


export default ()=> {

    const [img, setImg] = useState([''])
    const [botao, setBotao] = useState('false')


    const handleSubmit = (event) => {
        event.preventDefault();
      };

      function PegaIMG (e){
        setImg(e.target.value)
      }

      function btn (e){
        botao === 'false' ? setBotao('verdadeiro'): setBotao('false')
      }


    return(
        <div>
            <h1>Formulario</h1>

            <form onSubmit={handleSubmit}>
                <br /><br />
                <label htmlFor="">Digite o titulo</label> <br />
                <input type="text" />

                <br /><br />
                <label htmlFor="">Faça upload da imagem</label> <br />
                <input onChange={PegaIMG} type="file" /> 

                <br /><br />
                <button onClick={btn} >{botao}</button>
                
                {
                    botao === 'verdadeiro' ? (<img src={img} alt="" />) : <p>{img}</p>
                }
                        
            </form>
        </div>
    )
}
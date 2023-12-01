


export default ()=>{

    // Exercício 2:
// Desenvolva um componente que receba uma lista de nomes como propriedade. Use um if moderno para renderizar uma 
// lista não ordenada (ul) com os nomes que começam com a letra "A".

//  1 passo criar um array com nomes

    const ListaNomes = ['Matheus', 'Adriane', 'Alita', 'Nego', 'urnio']

    const NomesComA = ListaNomes.filter((nomes) => nomes.startsWith("A"))

    return(
        <div>
            {
                NomesComA.map((nome)=> (
                    <ul>
                        <li>{nome}</li>
                    </ul>
                ))
            }
        </div>
    )
}
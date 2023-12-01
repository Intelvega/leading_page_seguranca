import { useState } from "react"


export default ()=>{

    const [numero, setNumero] = useState(0)

    const incrementar = ()=>{
        setNumero(numero + 1)
    }

    const decrementar = ()=>{
        setNumero(numero - 1)
    }


    return(
        <div>
            <h1>{numero}</h1>

            <button onClick={incrementar} >Incrementar</button>
            <button onClick={decrementar} >Decrementar</button>
        </div>
    )
}


// **Exercício 1**: Crie um componente React chamado `Contador`. Ele deve exibir um número inicializado como 
// 0 e ter dois botões, "Incrementar" e "Decrementar", que atualizam o número quando clicados.

// **Exercício 2**: Crie um componente React chamado `AlternarTexto`. Ele deve exibir um botão "Alternar" 
// e um texto. Ao clicar no botão "Alternar", o texto deve alternar entre "Visível" e "Invisível".

// **Exercício 3**: Crie um componente React chamado `ListaTarefas`. Ele deve permitir que o usuário adicione
//  tarefas a uma lista. Mostre a lista de tarefas e forneça um botão "Concluir" ao lado de cada tarefa para 
//  removê-la da lista quando concluída.

// **Exercício 4**: Crie um componente React chamado `ContadorTempo`. Ele deve exibir um número que representa
//  segundos e um botão "Iniciar Contagem". Ao clicar no botão, inicie uma contagem regressiva a partir de 0 
//  segundos. Use `setInterval` para atualizar o contador a cada segundo.

// **Exercício 5**: Crie um componente React chamado `ListaCompras`. Ele deve permitir que o usuário adicione 
// itens a uma lista de compras. Mostre a lista de itens e forneça um botão "Remover" ao lado de cada 
// item para removê-lo da lista quando não for mais necessário.

// Esses exercícios abrangem diferentes cenários de uso do `useState` e ajudarão a fortalecer suas habilidades
//  de gerenciamento de estado no React. Lembre-se de criar os componentes, importar o `useState`,
//   e usar estados apropriados para cada exercício.
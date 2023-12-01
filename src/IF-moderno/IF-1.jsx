import React, { useState } from 'react';

export default () => {
  const [numero, setNumero] = useState('');

  const verificador = () => {
    // Convertemos o valor para um número inteiro para garantir que seja um número válido
    const valor = parseInt(numero, 10);

    if (!isNaN(valor)) {
      valor % 2 === 0 ? alert('Par') : alert('Ímpar');
    } else {
      alert('Digite um número válido.');
    }
  }

  const pegaNumero = (e) => {
    setNumero(e.target.value);
  }

  const exibirNumero = () => {
    numero === '' ? alert('Nenhum número digitado') : alert(`Número digitado: ${numero}`);
  }

  return (
    <div>
      <h1>
        <p>Digite um número</p>
        <input
          value={numero}
          onChange={pegaNumero}
          type="text"
          name=""
          id=""
        />
        <br />
        <button onClick={exibirNumero}>Exibir número</button>
        <br />
        <button onClick={verificador}>Verificar se o número digitado é par ou ímpar</button>
      </h1>
    </div>
  );
}






// Exercício 1:
// Crie um componente React que renderize um botão. Quando o botão for clicado, 
// verifique se um número é par ou ímpar e exiba uma mensagem indicando isso.

// Exercício 2:
// Desenvolva um componente que receba uma lista de nomes como propriedade. Use um if moderno para renderizar uma 
// lista não ordenada (ul) com os nomes que começam com a letra "A".

// Exercício 3:
// Crie um componente que mostre um campo de entrada de texto e um botão. Quando o botão for clicado, 
// verifique se o texto no campo de entrada contém a palavra "React" e exiba uma mensagem apropriada.

// Exercício 4:
// Desenvolva um componente que exiba a hora atual. Use um if moderno para mostrar "Bom dia", 
// "Boa tarde" ou "Boa noite" com base no horário atual.

// Exercício 5:
// Crie um componente que receba uma lista de números como propriedade. Use um if moderno para 
// renderizar a média dos números na lista apenas se essa média for maior do que 50. Caso contrário, 
// mostre uma mensagem informando que a média é menor ou igual a 50.

// Lembre-se de que você pode usar operadores condicionais, como o operador ternário, para simplificar 
// ainda mais a sintaxe do if moderno em React. Além disso, pratique a estrutura condicional e 
// a renderização condicional para ganhar mais familiaridade com essa parte importante do desenvolvimento em React.
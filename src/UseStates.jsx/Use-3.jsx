import React, { useState } from "react";

export default () => {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      nome: "imprimir",
    },
    {
      id: 2,
      nome: "imprimir",
    },
    {
      id: 3,
      nome: "imprimir",
    },
  ]);
  const [nova, setNova] = useState('');
  const [oi, setOi] = useState([]);

  const novaT = (e) => {
    setNova(e.target.value);
  };

  const addTarefa = () => {
    if (nova) {
      const novaTarefa = {
        id: tarefas.length + 1,
        nome: nova,
      };
      setTarefas([...tarefas, novaTarefa]);
      setNova('');
    }
  };

  const concluir = (id) => {
    const novaListaTarefas = tarefas.filter((elementoAntigo) => elementoAntigo.id !== id);
    setOi([...oi, tarefas.find((elementoAntigo) => elementoAntigo.id === id)]);
    setTarefas(novaListaTarefas);
  };

  return (
    <div>
      <h1>Adicionar tarefas à lista?</h1>
      <input value={nova} onChange={novaT} type="text" />
      <button onClick={addTarefa}>Adicionar</button>

      <h1>Lista de tarefas</h1>

      {tarefas.map((tare) => (
        <p key={tare.id}>
          {`Tarefa ${tare.id}: ${tare.nome}   `}
          <button onClick={() => concluir(tare.id)}>Concluir</button>
        </p>
      ))}
      
      <h1>Tarefas Concluídas</h1>
      <ul>
        {oi.map((tare, id) => (
          <li key={id}>{`Tarefa ${tare.id}: ${tare.nome}`}</li>
        ))}
      </ul>
    </div>
  );
};

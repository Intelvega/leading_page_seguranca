import React, { useState } from "react";

const VerificaTexto = () => {
  const [texto, setTexto] = useState("");

  const Verifica = (e) => {
    setTexto(e.target.value);
  };

  const Contem = () => {
    texto === "React" ? alert("Palavra React encontrada!") : alert("Palavra React não encontrada.");
  };

  return (
    <div>
      <input value={texto} onChange={Verifica} type="text" />
      <button onClick={Contem}>Contém a palavra React?</button>
    </div>
  );
};

export default VerificaTexto;

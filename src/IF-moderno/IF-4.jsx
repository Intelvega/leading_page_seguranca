import React from "react";

const SaudacaoHora = () => {
  const dataAtual = new Date();
  const hora = dataAtual.getHours();

  const saudacao =
        hora > 6 && hora < 12
      ? "Bom dia"
      : hora >= 12 && hora < 17
      ? "Boa tarde"
      : "Boa noite";

  return (
    <div>
      <p>{saudacao}</p>
    </div>
  );
};

export default SaudacaoHora;

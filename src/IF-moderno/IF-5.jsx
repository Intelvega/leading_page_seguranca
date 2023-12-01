import React, { useState } from "react";

const MediaMaiorQue50 = () => {
  const [numeros, setNumeros] = useState([50, 60, 40, 10]);

  // Calculando a média
  const TOTAL = numeros.reduce((contador, valor) => {
    return contador + valor;
  }, 0);
  const media = TOTAL / numeros.length;

  return (
    <div>
      <p>
        {media > 50 ? (
          <p>A média é maior do que 50: {media}</p>
        ) : (
          <p>A média é menor ou igual a 50: {media}</p>
        )}
      </p>
    </div>
  );
};

export default MediaMaiorQue50;

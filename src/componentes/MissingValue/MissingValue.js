import React from "react";
import "./style.css";

function MissingValue({ count, goal }) {
  const missingValue = (goal - count).toFixed(2);

  return (
    <>
      {missingValue > 0 ? (
        <div className="missingValue">
          Faltam <strong>R$ {missingValue}</strong> para obter
          <span className="freeShipping-txt">FRETE GRÁTIS</span>
        </div>
      ) : (
        <span className="freeShipping-txt">
          Parabéns voçê ganhou FRETE GRÁTIS
        </span>
      )}
    </>
  );
}

export default MissingValue;

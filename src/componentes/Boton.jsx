import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton(props){
  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '='); /*retorna directamente true si se cumple todo (SIN IF)*/
  };
  return(
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador':null}`}>
      {props.children}
    </div>
  );
}
export default Boton;
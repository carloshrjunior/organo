import React from 'react';
import './Colaborador.css';

const Colaborador = ({nome, cargo, imagem, corDestaque}) => {
  const corFundoCabecalho = {backgroundColor: corDestaque};
  const corNomeColaborador = {color: corDestaque};

  return (
    <div className='colaborador'>
      <div className='colaborador_cabecalho' style={corFundoCabecalho}>
        <img src={imagem} alt={nome}/>
      </div>
      <div className='colaborador_rodape'>
        <h4 style={corNomeColaborador}>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  )
}

export default Colaborador;
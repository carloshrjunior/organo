import Colaborador from '../Colaborador/Colaborador';
import './Time.css';

const Time = (props) => {
  const corFundoTime = {backgroundColor: props.corSecundaria};
  const corDestaqueTime = {borderColor: props.corPrimaria};

  return (
    (props.colaboradores.length > 0) ?
    <section className='time' style={corFundoTime}>
      <h3 style={corDestaqueTime}>{props.nomeTime}</h3>
      <div className='colaboradores'>
        {props.colaboradores.map( (colaborador) => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDestaque={props.corPrimaria}/>)}
      </div>
    </section>
    : ''
  )
}

export default Time;
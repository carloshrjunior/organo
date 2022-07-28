import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    const aoSelectionado = (evento) => {
        props.aoAlterado(evento.target.value);
    }
    
    return (
        <div className='lista_suspensa'>
            <label>{props.label}</label>
            <select onChange={aoSelectionado} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;
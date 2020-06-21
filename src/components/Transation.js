import React ,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transation = (props) => {

    const deleteTransaction = useContext(GlobalContext);

    const sign = props.transation.amount < 0 ? '-' : '+'
    return (
        <div>
            <li className={props.transation.amount < 0 ? 'minus' : 'plus'}    key = {props.transation.id} >

            {props.transation.text} <span>{sign}${Math.abs(props.transation.amount) }</span>
            <button onClick = {() => deleteTransaction.deleteTransaction(props.transation.id)} className="delete-btn">x</button>
            
            </li>
        </div>
    )
}

import React, {useContext} from 'react'
import {Transation} from './Transation'
import {GlobalContext} from '../context/GlobalState'


export const TransationList = () => {
const {transactions} = useContext(GlobalContext)


    return (
        <>
           <h3>History</h3>
           <ul  className="list">
            {transactions.map((trans) => {
              return (
                <Transation key = {trans.id} transation = {trans}/>
              )
            })}
          </ul>       
        </>
    )
}

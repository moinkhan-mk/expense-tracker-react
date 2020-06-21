import React, {useContext} from 'react'

import {GlobalContext} from '../context/GlobalState'

export const Balance = () => {
    const transation = useContext(GlobalContext)
    const amount =transation.transactions.map(transation =>(transation.amount))
    const total = amount.reduce((acc,item) => (acc + item),0);
    
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>{total}</h1>
        </div>
    )
}

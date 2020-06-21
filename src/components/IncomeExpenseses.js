import React,{useContext} from 'react'
import {GlobalContext, GlobalProvider} from '../context/GlobalState'


export const IncomeExpenseses = () => {
  const transation = useContext(GlobalContext)

  const amount = transation.transactions.map((trans) => {
    return (
      trans.amount
    )
  })
  const income = amount.filter((item) => item > 0).reduce((acc,item) => (acc + item),0).toFixed(2)

  const Expense = amount.filter((item) => item < 0).reduce((acc,item) => (acc + item),0).toFixed(2)
  console.log(Expense)


    return (
      <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p  className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p  className="money minus">-${Expense}</p>
      </div>
    </div>
    )
}

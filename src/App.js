import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenseses} from './components/IncomeExpenseses';
import {TransationList} from './components/TransationList';
import {TransationAdd} from './components/TransationAdd';
import './App.css';

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
          <Balance />
          <IncomeExpenseses />
          <TransationList />
          <TransationAdd />
      </div>
      </GlobalProvider>
  );
}

export default App;

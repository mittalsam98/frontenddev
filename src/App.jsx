import { useState } from 'react';
import './App.css';
import TransactionForm from './form/TransactionForm';
import { TransactionContext } from './transaction-context';
import TransactionHistory from './transaction-history/TransactionHistory';

export default function App() {
  const [allTransaction, setAllTransaction] = useState([]);

  const dispatchGetAllTransaction = (actionType, action) => {
    console.log(action);
    switch (actionType) {
      case 'FETCH_TRANSACTION':
        setAllTransaction(action.txn);
        return;
      default:
        return;
    }
  };
  return (
    <TransactionContext.Provider value={{ allTransaction, dispatchGetAllTransaction }}>
      <div class='wrapper'>
        <div class='sidebar__form'>
          <TransactionForm />
        </div>
        <div class='transaction__main'>
          <TransactionHistory />
        </div>
      </div>
    </TransactionContext.Provider>
  );
}

import { useState } from 'react';
import { TransactionContext } from '../contexts/transaction-context';
import './transaction.css';
import TransactionForm from './transaction-form';
import TransactionHistory from './transaction-history';

export default function Transactions() {
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

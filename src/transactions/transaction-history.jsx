import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { TXN_API_URL } from '../constants';
import { TransactionContext } from '../contexts/transaction-context';
import History from './history';

export default function TransactionHistory() {
  const { allTransaction, dispatchGetAllTransaction } = useContext(TransactionContext);

  useEffect(() => {
    axios.get(TXN_API_URL).then((res) => {
      dispatchGetAllTransaction('FETCH_TRANSACTION', { txn: [...res.data] });
    });
  }, []);
  return (
    <div>
      <h3>Transaction history</h3>
      {allTransaction.map((txn, i) => {
        return <History key={txn.transaction_id} datum={txn} index={i} />;
      })}
    </div>
  );
}

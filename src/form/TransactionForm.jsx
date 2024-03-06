import React, { useContext, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';
import { TransactionContext } from '../transaction-context';

export default function TransactionForm() {
  const [accountId, setAccountId] = useState('');
  const [amount, setAmount] = useState();
  const { dispatchGetAllTransaction, allTransaction } = useContext(TransactionContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      account_id: accountId,
      amount
    };
    axios.post(API_URL, data).then((response) => {
      dispatchGetAllTransaction('FETCH_TRANSACTION', {
        txn: [{ ...response.data }, ...allTransaction]
      });
    });
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Account Id</label>
        <input
          data-type='account-id'
          onChange={(e) => setAccountId(e.target.value)}
          value={accountId}
        />
        <label>Amount</label>
        <input
          data-type='amount'
          onChange={(e) => setAmount(e.target.value)}
          type='number'
          value={amount}
        />
        <input data-type='transaction-submit' disabled={!accountId || !amount} type='submit' />
      </form>
    </div>
  );
}

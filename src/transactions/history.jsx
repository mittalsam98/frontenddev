import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { ACCOUNT_API_URL } from '../constants';

export default function History({ datum, index }) {
  const [lastItemCurrentBalance, setLastItemCurrentBalance] = useState(null);

  useEffect(() => {
    if (index === 0)
      axios
        .get(`${ACCOUNT_API_URL}/${datum.account_id.trim()}`)
        .then((res) => setLastItemCurrentBalance(res.data.balance));
  }, [datum, index]);

  const getAmountTxt = (val) => {
    return val > 0 ? `$${val} to ` : `$${Math.abs(val)} from `;
  };

  return (
    <div
      data-type='transaction'
      data-account-id={datum.account_id}
      data-amount={datum.amount}
      data-balance='${current-account-balance}'
      className='single__Txn'
    >
      Transferred {getAmountTxt(datum?.amount)} account {datum.account_id}
      {index === 0 && <div>The current balance is ${lastItemCurrentBalance}</div>}
    </div>
  );
}

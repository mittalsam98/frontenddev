import React from 'react';
import '../App.css';

export default function History({ datum }) {
  console.log(datum);
  const getAmountTxt = () => {
    return datum?.amount > 0 ? `${datum.amount}$ to ` : `${Math.abs(datum.amount)}$ from `;
  };
  return (
    <div
      data-type='transaction'
      data-account-id={datum.account_id}
      data-amount={datum.amount}
      data-balance='${current-account-balance}'
      className='single__Txn'
    >
      Transferred {getAmountTxt()} account {datum.account_id}
    </div>
  );
}

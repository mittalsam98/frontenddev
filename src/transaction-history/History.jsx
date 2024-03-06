import React from 'react';
import '../App.css';

export default function History({ datum }) {
  console.log(datum);
  const getAmountTxt = () => {
    return datum?.amount > 0 ? `${datum.amount}$ to ` : `${Math.abs(datum.amount)}$ from `;
  };
  return (
    <div className='single__Txn'>
      Transferred {getAmountTxt()} account {datum.account_id}
    </div>
  );
}

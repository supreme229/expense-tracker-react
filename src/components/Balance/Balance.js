import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2);

  return (
    <div>
      <h3>Your balance</h3>
      <h1 id="balance">${total}</h1>
    </div>
  );
};

export default Balance;

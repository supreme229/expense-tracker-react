import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";

import "./AddTransaction.css";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };

    setText("");
    setAmount(0);

    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="add-transaction" onSubmit={(event) => onSubmit(event)}>
        <div className="form-field">
          <label>Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          ></input>
        </div>
        <div className="form-field">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(event) => {
              setAmount(event.target.value);
            }}
          ></input>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;

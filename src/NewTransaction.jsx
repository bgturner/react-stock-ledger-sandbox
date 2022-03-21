import React, { useState } from "react";

const NewTransaction = (props) => {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`submitted ${description} for ${date}`);
    props.handleSubmit(date, description);
  };
  return (
    <div>
      <h2>New Transaction</h2>{" "}
      <form action="" onSubmit={handleSubmit} className="new-transaction-form">
        <div class="inputs">
          <label for="date" className="date">
            Date
            <input
              id="newTransactionDate"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label for="newTransactionDescription" className="description">
            Description
            <input
              id="newTransactionDescription"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewTransaction;

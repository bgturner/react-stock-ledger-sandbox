import React, { useState } from "react";
import validateTime from "./validateTime";

const NewTransaction = (props) => {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [valMsg, setValMsg] = useState({ time: "" });

  const handleTimeChange = (evt) => {
    evt.preventDefault();
    const time = evt.target.value;
    const timeValidation = validateTime(time);
    if (timeValidation.valid) {
      setTime(time);
    }
    setValMsg({ ...valMsg, time: timeValidation.msg });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`submitted ${description} for ${date}`);
    props.handleSubmit(date, time, description);
  };
  return (
    <div>
      <h2>New Transaction</h2>
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
          <label for="time" className="time">
            <div className="validationMsg">{valMsg.time}</div>
            Time
            <input
              id="newTransactionTime"
              type="time"
              value={time}
              onChange={(e) => handleTimeChange(e)}
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

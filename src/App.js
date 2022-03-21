import "./App.css";
import { useState } from "react";
import NewTransaction from "./NewTransaction";
import TransactionList from "./TransactionList";
import startingTransactions from "./startingTransactions";

function App() {
  const [transactions, setTransactions] = useState(startingTransactions);

  const createTransaction = (date, time, description) => {
    const newTransaction = {
      date,
      time,
      description,
      items: [],
    };
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stock Ledger</h1>
      </header>
      <main>
        <NewTransaction
          handleSubmit={(date, time, description) =>
            createTransaction(date, time, description)
          }
        />
        <h2>Transactions</h2>
        <table id="transactions">
          <thead>
            <tr>
              <th>Date</th>
              <th className="description">Description</th>
              <th>Balanced</th>
            </tr>
          </thead>
          {
            // TODO: refactor this prop passing to be an imported hook
          }

          <TransactionList transactions={transactions} />
        </table>
      </main>
    </div>
  );
}

export default App;

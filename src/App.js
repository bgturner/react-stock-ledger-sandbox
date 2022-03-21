import "./App.css";
import { useState } from "react";
import NewTransaction from "./NewTransaction";
import TransactionList from "./TransactionList";
import startingTransactions from "./startingTransactions";

function App() {
  const [transactions, setTransactions] = useState(startingTransactions);

  const createTransaction = (date, description) => {
    const newTransaction = {
      date,
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
        <h2>Transactions</h2>
        <table id="transactions">
          <th>
            <tr>
              <td>Date</td>
              <td className="description">Description</td>
              <td>Balanced</td>
            </tr>
          </th>
          {
            // TODO: refactor this prop passing to be an imported hook
          }
          <TransactionList transactions={transactions} />
          <tfooter>
            <NewTransaction
              handleSubmit={(date, description) =>
                createTransaction(date, description)
              }
            />
          </tfooter>
        </table>
      </main>
    </div>
  );
}

export default App;

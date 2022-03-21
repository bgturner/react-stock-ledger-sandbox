import "./App.css";
import { useState } from "react";
import NewTransaction from "./NewTransaction";

const isBalanced = (transaction) => {
  return 0;
};

const startingTransactions = [
  {
    date: "2022-03-21",
    description: "Buy 3 shares of Microsoft",
    items: [
      {
        account: "Assets:Webull:Brokerage",
        amount: 3,
        commodity: "MSFT",
        avgPriceUSD: "300.43",
      },
      {
        account: "Assets:Webull:Cash",
        amount: -901.29,
        commodity: "$",
      },
    ],
  },
  {
    date: "2022-03-20",
    description: "Buy 4 shares of Coinbase",
    items: [
      {
        account: "Assets:Webull:Brokerage",
        amount: 4,
        avgPriceUSD: 185.5,
        commodity: "COIN",
      },
      {
        account: "Assets:Webull:Cash",
        amount: -742.0,
        commodity: "$",
      },
    ],
  },
];

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
          <tbody>
            {transactions.map((t) => {
              return (
                <tr>
                  <td>{t.date}</td>
                  <td className="description">
                    {t.description}
                    <table className="items">
                      {t.items.map((i) => {
                        return (
                          <tr className="item">
                            <td className="account">{i.account}</td>
                            <td className="amount">{i.amount}</td>
                            <td className="commodity">{i.commodity}</td>
                          </tr>
                        );
                      })}
                    </table>
                  </td>
                  <td>{isBalanced(t)}</td>
                </tr>
              );
            })}
          </tbody>
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

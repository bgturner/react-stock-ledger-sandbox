import React from "react";

const TransactionList = (props) => {
  const isBalanced = (transaction) => {
    return 0;
  };

  return (
    <tbody>
      {props.transactions.map((t) => {
        return (
          <tr key={`${t.date}-${t.time}`}>
            <td>
              {t.date} {t.time}
            </td>
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
  );
};

export default TransactionList;

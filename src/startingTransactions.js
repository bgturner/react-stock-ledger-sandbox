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

export default startingTransactions;

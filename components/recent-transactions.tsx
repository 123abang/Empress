import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const transactions = [
  { id: 1, type: "Buy", asset: "AAPL", amount: "$1,000", date: "2023-06-01" },
  { id: 2, type: "Sell", asset: "GOOGL", amount: "$1,500", date: "2023-05-28" },
  { id: 3, type: "Buy", asset: "MSFT", amount: "$800", date: "2023-05-25" },
  { id: 4, type: "Buy", asset: "AMZN", amount: "$1,200", date: "2023-05-22" },
]

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{transaction.asset}</p>
                <p className="text-sm text-muted-foreground">{transaction.date}</p>
              </div>
              <div className={transaction.type === "Buy" ? "text-green-500" : "text-red-500"}>
                {transaction.type === "Buy" ? "+" : "-"}
                {transaction.amount}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}


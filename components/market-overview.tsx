import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

const marketData = [
  { name: "S&P 500", value: "4,185.81", change: "+0.75%" },
  { name: "Nasdaq", value: "12,888.28", change: "-0.50%" },
  { name: "Dow Jones", value: "33,875.40", change: "+0.30%" },
  { name: "Bitcoin", value: "$29,123.45", change: "+2.10%" },
]

export function MarketOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {marketData.map((item) => (
            <li key={item.name} className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </div>
              <div
                className={
                  Number.parseFloat(item.change) >= 0
                    ? "text-green-500 flex items-center"
                    : "text-red-500 flex items-center"
                }
              >
                {Number.parseFloat(item.change) >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                <span>{item.change}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}


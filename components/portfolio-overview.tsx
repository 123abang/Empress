import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

export function PortfolioOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Total Value</p>
            <p className="text-2xl font-bold">$124,500.00</p>
          </div>
          <div className="text-green-500 flex items-center">
            <ArrowUpRight size={20} />
            <span>+2.5%</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Today's Gain/Loss</p>
            <p className="text-xl font-semibold">+$1,250.00</p>
          </div>
          <div className="text-green-500 flex items-center">
            <ArrowUpRight size={20} />
            <span>+1.2%</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Total Gain/Loss</p>
            <p className="text-xl font-semibold">+$24,500.00</p>
          </div>
          <div className="text-red-500 flex items-center">
            <ArrowDownRight size={20} />
            <span>-0.8%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


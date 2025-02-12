import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <Card className="mb-6">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h2 className="text-2xl font-bold">Welcome to Zenith, John</h2>
            <p className="text-muted-foreground">Here's your investment overview</p>
          </div>
          <Button>Add Funds</Button>
        </div>
      </CardContent>
    </Card>
  )
}


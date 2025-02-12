"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ["Stocks", "Bonds", "Real Estate", "Crypto", "Cash"],
  datasets: [
    {
      data: [45, 25, 15, 10, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
      ],
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
  },
}

export function AssetAllocation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Asset Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        <Pie data={data} options={options} />
      </CardContent>
    </Card>
  )
}


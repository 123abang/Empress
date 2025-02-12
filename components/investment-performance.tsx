"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Portfolio Value",
      data: [100000, 105000, 110000, 108000, 115000, 124500],
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "6 Month Performance",
    },
  },
}

export function InvestmentPerformance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Investment Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <Line data={data} options={options} />
      </CardContent>
    </Card>
  )
}


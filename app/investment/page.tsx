"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import Image from 'next/image';
import Img from './public/image.png'


const investmentData = [
  { month: "Jan", invested: 5000, returns: 5200 },
  { month: "Feb", invested: 5000, returns: 5300 },
  { month: "Mar", invested: 5000, returns: 5500 },
  { month: "Apr", invested: 5000, returns: 5800 },
  { month: "May", invested: 5000, returns: 6000 },
];

const investments = [
  { name: "Stocks", amount: "$5000", growth: "+12%", date: "Jan 2024" },
  { name: "Real Estate", amount: "$8000", growth: "+9%", date: "Feb 2024" },
  { name: "Crypto", amount: "$3000", growth: "-4%", date: "Mar 2024" },
];

const pieData = [
  { name: "Stocks", value: 5000 },
  { name: "Real Estate", value: 8000 },
  { name: "Crypto", value: 3000 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const InvestmentDashboard: React.FC = () => {
  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      {/* Profile Section */}
      <div className="flex items-center gap-4 border-b pb-4">
      <Image src={Img} alt="Profile" width={64} height={64} className="rounded-full" />
        <div>
          <h2 className="text-2xl font-semibold">Victoria Vergara</h2>
          <p className="text-gray-500">Investor</p>
        </div>
      </div>

      {/* Total Investment Section */}
      <div className="p-4 border rounded-lg shadow-sm text-center">
        <h3 className="text-lg font-semibold">Total Investment</h3>
        <p className="text-2xl font-bold text-green-600">$16,000</p>
      </div>

      <div className="p-4 border rounded-lg shadow-sm text-center">
        <h3 className="text-lg font-semibold">Total profit</h3>
        <p className="text-2xl font-bold text-green-600">$4,000</p>
      </div>

      {/* Investment Overview */}
      <h3 className="text-lg font-semibold">Investment Portfolio</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {investments.map((inv, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm">
            <h4 className="font-medium">{inv.name}</h4>
            <p className="text-gray-600">Invested: {inv.amount}</p>
            <p className="text-gray-600">Since: {inv.date}</p>
            <p className={inv.growth.startsWith("-") ? "text-red-500" : "text-green-500"}>{inv.growth}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <h3 className="text-lg font-semibold">Returns Over Time</h3>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={investmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="returns" stroke="#4CAF50" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Market Trends (Pie Chart) */}
      <h3 className="text-lg font-semibold">Market Trends</h3>
      <div className="w-full flex justify-center">
        <PieChart width={300} height={300}>
          <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default InvestmentDashboard;

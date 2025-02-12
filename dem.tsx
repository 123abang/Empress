"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart, Bar, PieChart, Pie, Cell, Area, AreaChart, RadialBarChart, RadialBar, Legend } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, PieChart as PieChartIcon, BarChart as BarChartIcon } from 'lucide-react';

const investmentData = [
  { month: "Jan", invested: 5000, returns: 5200, profit: 200 },
  { month: "Feb", invested: 5000, returns: 5300, profit: 300 },
  { month: "Mar", invested: 5000, returns: 5500, profit: 500 },
  { month: "Apr", invested: 5000, returns: 5800, profit: 800 },
  { month: "May", invested: 5000, returns: 6000, profit: 1000 },
  { month: "Jun", invested: 5000, returns: 6200, profit: 1200 },
];

const investments = [
  { name: "Stocks", amount: "$5000", growth: "+12%", date: "Jan 2024", color: "#0088FE" },
  { name: "Real Estate", amount: "$8000", growth: "+9%", date: "Feb 2024", color: "#00C49F" },
  { name: "Crypto", amount: "$3000", growth: "-4%", date: "Mar 2024", color: "#FFBB28" },
];

const pieData = [
  { name: "Stocks", value: 5000, fill: "#0088FE" },
  { name: "Real Estate", value: 8000, fill: "#00C49F" },
  { name: "Crypto", value: 3000, fill: "#FFBB28" },
];

const performanceData = [
  { name: "Stocks", value: 12, fill: "#0088FE" },
  { name: "Real Estate", value: 9, fill: "#00C49F" },
  { name: "Crypto", value: 4, fill: "#FFBB28" },
];

function InvestmentDashboard() {
  const [selectedChart, setSelectedChart] = useState('line');
  const [hoveredInvestment, setHoveredInvestment] = useState(null);

  const chartVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 border-b pb-4 bg-white rounded-lg p-6 shadow-sm"
      >
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-semibold"
          >
            Victoria Vergara
          </motion.h2>
          <p className="text-gray-500">Senior Investment Analyst</p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="p-6 bg-white rounded-lg shadow-sm"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Total Investment</h3>
            <DollarSign className="text-green-500" />
          </div>
          <p className="text-3xl font-bold text-green-600 mt-2">$16,000</p>
          <p className="text-sm text-gray-500 mt-1">+15% from last month</p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="p-6 bg-white rounded-lg shadow-sm"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Total Profit</h3>
            <TrendingUp className="text-green-500" />
          </div>
          <p className="text-3xl font-bold text-green-600 mt-2">$4,000</p>
          <p className="text-sm text-gray-500 mt-1">+8% from last month</p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="p-6 bg-white rounded-lg shadow-sm"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">ROI</h3>
            <PieChartIcon className="text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-blue-600 mt-2">25%</p>
          <p className="text-sm text-gray-500 mt-1">Annual return</p>
        </motion.div>
      </div>

      {/* Chart Controls */}
      <div className="flex gap-4 mb-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedChart('line')}
          className={`px-4 py-2 rounded-lg ${selectedChart === 'line' ? 'bg-blue-500 text-white' : 'bg-white'}`}
        >
          Line Chart
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedChart('area')}
          className={`px-4 py-2 rounded-lg ${selectedChart === 'area' ? 'bg-blue-500 text-white' : 'bg-white'}`}
        >
          Area Chart
        </motion.button>
      </div>

      {/* Dynamic Chart Section */}
      <motion.div
        variants={chartVariants}
        initial="hidden"
        animate="visible"
        className="bg-white p-6 rounded-lg shadow-sm"
      >
        <h3 className="text-lg font-semibold mb-4">Investment Performance</h3>
        <div className="w-full h-[400px]">
          <ResponsiveContainer>
            <AnimatePresence mode="wait">
              {selectedChart === 'line' ? (
                <LineChart data={investmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="returns" 
                    stroke="#4CAF50" 
                    strokeWidth={2}
                    dot={{ fill: '#4CAF50' }}
                    activeDot={{ r: 8 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="invested" 
                    stroke="#2196F3" 
                    strokeWidth={2}
                    dot={{ fill: '#2196F3' }}
                  />
                </LineChart>
              ) : (
                <AreaChart data={investmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="returns" 
                    stackId="1" 
                    stroke="#4CAF50" 
                    fill="#4CAF50" 
                    fillOpacity={0.6}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="invested" 
                    stackId="1" 
                    stroke="#2196F3" 
                    fill="#2196F3" 
                    fillOpacity={0.6}
                  />
                </AreaChart>
              )}
            </AnimatePresence>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Investment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {investments.map((inv, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onHoverStart={() => setHoveredInvestment(index)}
            onHoverEnd={() => setHoveredInvestment(null)}
            className="p-6 bg-white rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-center">
              <h4 className="font-medium text-lg">{inv.name}</h4>
              {inv.growth.startsWith('-') ? (
                <TrendingDown className="text-red-500" />
              ) : (
                <TrendingUp className="text-green-500" />
              )}
            </div>
            <p className="text-2xl font-bold mt-2" style={{ color: inv.color }}>{inv.amount}</p>
            <p className="text-sm text-gray-600">Since: {inv.date}</p>
            <p className={`text-sm font-medium ${inv.growth.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
              {inv.growth}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          variants={chartVariants}
          initial="hidden"
          animate="visible"
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-4">Portfolio Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          variants={chartVariants}
          initial="hidden"
          animate="visible"
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
          <div className="h-[300px]">
            <ResponsiveContainer>
              <RadialBarChart
                innerRadius="10%"
                outerRadius="80%"
                data={performanceData}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar
                  minAngle={15}
                  label={{ fill: '#666', position: 'insideStart' }}
                  background
                  clockWise={true}
                  dataKey="value"
                />
                <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" align="right" />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default InvestmentDashboard;
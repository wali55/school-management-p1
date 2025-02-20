"use client";

import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 3000,
    expense: 1400,
  },
  {
    name: 'Feb',
    income: 2000,
    expense: 2400,
  },
  {
    name: 'Mar',
    income: 1000,
    expense: 400,
  },
  {
    name: 'April',
    income: 2800,
    expense: 1400,
  },
  {
    name: 'May',
    income: 2500,
    expense: 1100,
  },
  {
    name: 'Jun',
    income: 100,
    expense: 400,
  },
  {
    name: 'Jul',
    income: 2000,
    expense: 1200,
  },
  {
    name: 'Aug',
    income: 1000,
    expense: 2400,
  },
  {
    name: 'Sep',
    income: 1200,
    expense: 2400,
  },
  {
    name: 'Oct',
    income: 2900,
    expense: 1700,
  },
  {
    name: 'Nov',
    income: 2500,
    expense: 1000,
  },
  {
    name: 'Dec',
    income: 2000,
    expense: 1400,
  },
]

const FinanceChart = () => {
  return (
    <div className="bg-white size-full rounded-lg p-4">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* Chart */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis axisLine={false} tickLine={false} tick={{fill: "#D1D5DB"}} tickMargin={10} dataKey="name" />
          <YAxis axisLine={false} tickLine={false} tick={{fill: "#D1D5DB"}} tickMargin={20} />
          <Tooltip contentStyle={{borderRadius: "10px", borderColor: "lightgrey"}} />
          <Legend align="center" verticalAlign="top" wrapperStyle={{paddingTop: "10px", paddingBottom: "30px"}} />
          <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;


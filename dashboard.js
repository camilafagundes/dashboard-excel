import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Button } from "@/components/ui/button";

const salesData = [
  { month: "Jan", revenue: 5000, sales: 200 },
  { month: "Feb", revenue: 7000, sales: 250 },
  { month: "Mar", revenue: 8000, sales: 270 },
  { month: "Apr", revenue: 6500, sales: 220 },
  { month: "May", revenue: 9000, sales: 300 },
  { month: "Jun", revenue: 7500, sales: 260 },
];

const productSales = [
  { name: "Produto A", value: 4000 },
  { name: "Produto B", value: 3000 },
  { name: "Produto C", value: 2000 },
  { name: "Produto D", value: 1000 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function SalesDashboard() {
  const [view, setView] = useState("bar");

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard de Vendas</h1>
      <div className="flex space-x-4">
        <Button onClick={() => setView("bar")}>Gráfico de Barras</Button>
        <Button onClick={() => setView("line")}>Gráfico de Linha</Button>
        <Button onClick={() => setView("pie")}>Gráfico de Pizza</Button>
      </div>

      <Card>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            {view === "bar" && (
              <BarChart data={salesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#8884d8" />
              </BarChart>
            )}
            {view === "line" && (
              <LineChart data={salesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
              </LineChart>
            )}
            {view === "pie" && (
              <PieChart>
                <Pie data={productSales} dataKey="value" nameKey="name" outerRadius={80}>
                  {productSales.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            )}
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

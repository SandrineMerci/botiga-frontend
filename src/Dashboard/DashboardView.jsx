import '../Dashboard/Dashboard-Styles/Dashboard.css';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import React, { PureComponent } from 'react';


const dataPie = [
  { name: " Units", value: 3 },
  { name: "Occupied Units", value: 1 },
];
const COLORS = ["#4a5bb0", "grey"];

const dataBar = [
  { month: "Feb", revenue: 2000, expenses: 3966 },
  { month: "Mar", revenue: 2500, expenses: 3200 },
  { month: "Apr", revenue: 2200, expenses: 4100 },
  { month: "May", revenue: 1500, expenses: 1800 },
  { month: "Jun", revenue: 2300, expenses: 2900 },
];



function Card({ children }) {
    return <div className="card">{children}</div>;
}  

function DashboardView() {
  return (
    <div className="dashboard-container">
      <div className="cards-container">
        <Card>
          <p><b>ONLINE COLLECTION</b></p>
          <p>USD $8,500</p>
        </Card>
        <Card>
          <p><b>OFFLINE COLLECTIONS</b></p>
          <p>USD $2,800</p>
        </Card>
        <Card>
          <p><b>KIOSK COLLECTIONS</b></p>
          <p>USD $11,000</p>
        </Card>
        <Card>
          <p><b>NET AMOUNT</b></p>
          <p>USD $55,000</p>
        </Card>
      </div>
      
      <div className="chart-container">
  <div className="chart-item">
    <h3>Vacancy Rate</h3>
    <PieChart width={200} height={200}>
      <Pie data={dataPie} cx={100} cy={100} innerRadius={40} outerRadius={80} fill="#4a5bb0" dataKey="value" />
    </PieChart>
  </div>
  <div className="chart-item">
    <h3>Revenue to Expenses</h3>
    <BarChart width={400} height={250} data={dataBar}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="revenue" fill="#4a5bb0" />
      <Bar dataKey="expenses" fill="grey" />
    </BarChart>
  </div>
</div>
</div>
    
  );
}

export default DashboardView;

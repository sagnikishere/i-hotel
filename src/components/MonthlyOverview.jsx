import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ArrowUp } from 'lucide-react';
import './MonthlyOverview.css';

// Fixed chart data so it does not auto-regenerate and animate on every render
const data = [
  { name: '01', revenue: 42000, occupancy: 55 },
  { name: '02', revenue: 48000, occupancy: 60 },
  { name: '03', revenue: 35000, occupancy: 45 },
  { name: '04', revenue: 52000, occupancy: 68 },
  { name: '05', revenue: 58000, occupancy: 72 },
  { name: '06', revenue: 61000, occupancy: 75 },
  { name: '07', revenue: 45000, occupancy: 58 },
  { name: '08', revenue: 39000, occupancy: 50 },
  { name: '09', revenue: 50000, occupancy: 65 },
  { name: '10', revenue: 56000, occupancy: 70 },
  { name: '11', revenue: 63000, occupancy: 78 },
  { name: '12', revenue: 47000, occupancy: 60 },
  { name: '13', revenue: 53000, occupancy: 67 },
  { name: '14', revenue: 59000, occupancy: 74 },
  { name: '15', revenue: 65000, occupancy: 80 },
  { name: '16', revenue: 48000, occupancy: 62 },
  { name: '17', revenue: 42000, occupancy: 55 },
  { name: '18', revenue: 51000, occupancy: 66 },
  { name: '19', revenue: 57000, occupancy: 71 },
  { name: '20', revenue: 64000, occupancy: 79 },
  { name: '21', revenue: 60000, occupancy: 76 },
  { name: '22', revenue: 46000, occupancy: 59 },
  { name: '23', revenue: 52000, occupancy: 68 },
  { name: '24', revenue: 58000, occupancy: 73 },
  { name: '25', revenue: 66000, occupancy: 82 },
  { name: '26', revenue: 62000, occupancy: 77 },
  { name: '27', revenue: 49000, occupancy: 63 },
  { name: '28', revenue: 54000, occupancy: 69 },
  { name: '29', revenue: 61000, occupancy: 75 },
  { name: '30', revenue: 67000, occupancy: 84 },
  { name: '31', revenue: 70000, occupancy: 88 },
];

const MonthlyOverview = () => {

  const stats = [
    { label: 'Occupancy Rate', value: '72%', increase: '8%' },
    { label: 'Average Daily Rate', value: '₹ 4,250', increase: '5%' },
    { label: 'Revenue', value: '₹ 1,25,000', increase: '10%' },
  ];

  return (
    <div className="monthly-overview-container">
      <div className="monthly-chart-card card">
        <div className="card-header">
          <h2 className="card-title text-lg">Monthly Overview</h2>
          <div className="chart-legend">
            <div className="legend-item"><span className="dot bg-green-main"></span> Revenue</div>
            <div className="legend-item"><span className="diamond"></span> Occupancy</div>
            <div className="legend-item"><span className="dot bg-purple"></span> Bookings</div>
          </div>
        </div>
        
        <div className="chart-area" style={{ height: '250px', marginTop: '1rem' }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#718096' }} />
              <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#718096' }} tickFormatter={(value) => `${value / 1000}K`} />
              <Bar yAxisId="left" dataKey="revenue" fill="#48BB78" radius={[2, 2, 0, 0]} barSize={8} />
              <Line yAxisId="left" type="monotone" dataKey="occupancy" stroke="#2F855A" strokeWidth={2} dot={{ r: 3, fill: '#2F855A' }} activeDot={{ r: 5 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="monthly-stats">
        {stats.map((stat, index) => (
          <div key={index} className="monthly-stat-card card">
            <div className="stat-card-content">
              <span className="stat-label">{stat.label}</span>
              <div className="stat-value-row">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-increase">
                  <ArrowUp size={12} /> {stat.increase}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyOverview;

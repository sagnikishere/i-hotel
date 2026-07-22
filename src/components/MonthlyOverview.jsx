import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ArrowUp } from 'lucide-react';
import './MonthlyOverview.css';

const MonthlyOverview = () => {
  // Generate mock data for the 31 days
  const data = Array.from({ length: 31 }, (_, i) => ({
    name: (i + 1).toString().padStart(2, '0'),
    revenue: Math.floor(Math.random() * 60000) + 20000,
    occupancy: Math.floor(Math.random() * 50) + 30,
  }));

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

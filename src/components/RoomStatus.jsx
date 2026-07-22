import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './RoomStatus.css';

const RoomStatus = () => {
  const data = [
    { name: 'Available', value: 24, percent: '32%', color: '#48BB78' },
    { name: 'Occupied', value: 31, percent: '41%', color: '#A0AEC0' },
    { name: 'Checked In', value: 14, percent: '19%', color: '#2F855A' },
    { name: 'Blocked', value: 3, percent: '4%', color: '#1A202C' },
    { name: 'Maintenance', value: 3, percent: '4%', color: '#E2E8F0' },
  ];

  return (
    <div className="room-status card">
      <h2 className="card-title text-lg mb-4">Room Status</h2>
      
      <div className="chart-container">
        <div className="donut-chart-wrapper">
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie
                data={data}
                innerRadius={50}
                outerRadius={70}
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="donut-inner-text">
            <span className="donut-label">Total</span>
            <span className="donut-total">75</span>
          </div>
        </div>
        
        <div className="status-legend">
          {data.map((item, index) => (
            <div key={index} className="status-legend-item">
              <div className="status-name">
                <span className="dot" style={{ backgroundColor: item.color }}></span>
                {item.name}
              </div>
              <div className="status-value">
                <span>{item.value}</span>
                <span className="status-percent">({item.percent})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="view-report-link">
        <span className="cursor-pointer">View Room Report →</span>
      </div>
    </div>
  );
};

export default RoomStatus;

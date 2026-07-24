import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './RoomStatus.css';

const RoomStatus = () => {
  const data = [
    { name: 'Blank / Vacant', value: 24, percent: '32%', color: '#22C55E' },
    { name: 'Today Expected', value: 25, percent: '33%', color: '#0EA5E9' },
    { name: 'Confirmed', value: 17, percent: '23%', color: '#EAB308' },
    { name: 'Blocked', value: 9, percent: '12%', color: '#EF4444' },
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

import React from 'react';
import { BedDouble, User, IndianRupee, BarChart3, ArrowUp } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import './StatCards.css';

const dummyData = [
  { value: 400 },
  { value: 300 },
  { value: 550 },
  { value: 400 },
  { value: 700 },
  { value: 600 },
  { value: 800 },
];

const StatCard = ({ title, value, increase, icon: Icon, color, strokeColor }) => (
  <div className={`stat-card card stat-card-${color}`}>
    <div className="stat-card-left">
      <div className={`icon-wrapper icon-wrapper-${color}`}>
        <Icon size={22} />
      </div>
    </div>
    
    <div className="stat-card-center">
      <h3 className="stat-title">{title}</h3>
      <div className="stat-value">{value}</div>
      <div className={`stat-increase stat-increase-${color}`}>
        <ArrowUp size={12} /> {increase} from yesterday
      </div>
    </div>
    
    <div className="stat-card-right">
      <ResponsiveContainer width="100%" height={40}>
        <LineChart data={dummyData}>
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={strokeColor} 
            strokeWidth={2} 
            dot={false} 
            isAnimationActive={false} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const StatCards = () => {
  const cards = [
    { title: 'Blank / Vacant Rooms', value: '24', increase: '12%', icon: BedDouble, color: 'green', strokeColor: '#22C55E' },
    { title: 'Today Expected', value: '25', increase: '8%', icon: User, color: 'blue', strokeColor: '#0EA5E9' },
    { title: 'Confirmed Rooms', value: '17', increase: '15%', icon: IndianRupee, color: 'yellow', strokeColor: '#EAB308' },
    { title: 'Blocked Rooms', value: '3', increase: '2%', icon: BarChart3, color: 'red', strokeColor: '#EF4444' },
  ];

  return (
    <div className="stat-cards-container">
      {cards.map((card, index) => (
        <StatCard key={index} {...card} />
      ))}
    </div>
  );
};

export default StatCards;

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

const StatCard = ({ title, value, increase, icon: Icon }) => (
  <div className="stat-card card">
    <div className="stat-card-left">
      <div className="icon-wrapper">
        <Icon size={24} className="text-green" />
      </div>
    </div>
    
    <div className="stat-card-center">
      <h3 className="stat-title">{title}</h3>
      <div className="stat-value">{value}</div>
      <div className="stat-increase">
        <ArrowUp size={12} /> {increase} from yesterday
      </div>
    </div>
    
    <div className="stat-card-right">
      <ResponsiveContainer width="100%" height={40}>
        <LineChart data={dummyData}>
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#48BB78" 
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
    { title: 'Available Rooms', value: '24', increase: '12%', icon: BedDouble },
    { title: 'Occupied Rooms', value: '81', increase: '8%', icon: User },
    { title: "Today's ARR", value: '₹ 5,200', increase: '15%', icon: IndianRupee },
    { title: 'Total Revenue', value: '₹ 1,25,000', increase: '10%', icon: BarChart3 },
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

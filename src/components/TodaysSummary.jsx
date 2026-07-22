import React from 'react';
import { LogIn, LogOut, FileText, Receipt, SprayCan } from 'lucide-react';
import './TodaysSummary.css';

const TodaysSummary = () => {
  const summaryItems = [
    { label: 'Check-in Today', value: '17', icon: LogIn },
    { label: 'Check-out Today', value: '13', icon: LogOut },
    { label: 'New Bookings', value: '12', icon: FileText },
    { label: 'Pending Payments', value: '₹ 53,000', icon: Receipt },
    { label: 'Housekeeping Pending', value: '8', icon: SprayCan },
  ];

  return (
    <div className="todays-summary card">
      <h2 className="card-title text-lg mb-4">Today's Summary</h2>
      
      <div className="summary-list">
        {summaryItems.map((item, index) => (
          <div key={index} className="summary-item">
            <div className="summary-item-left">
              <item.icon size={18} className="text-green" />
              <span className="summary-label">{item.label}</span>
            </div>
            <span className="summary-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysSummary;

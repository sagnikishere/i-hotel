import React from 'react';
import { User } from 'lucide-react';
import './ExpectedArrivalsList.css';

const ExpectedArrivalsList = () => {
  const arrivals = [
    { name: 'Sagnik Adhikary', room: 'Room 203', time: '02:00 PM' },
    { name: 'Sagnik Adhikary', room: 'Room 305', time: '03:30 PM' },
    { name: 'Sagnik Adhikary', room: 'Room 501', time: '04:00 PM' },
    { name: 'Sagnik Adhikary', room: 'Room 202', time: '05:00 PM' },
    { name: 'Sagnik Adhikary', room: 'Room 212', time: '06:00 PM' },
  ];

  return (
    <div className="expected-arrivals-list card">
      <h2 className="card-title text-lg mb-4">Expected Arrivals (5)</h2>
      
      <div className="arrivals-list">
        {arrivals.map((arrival, index) => (
          <div key={index} className="arrival-item">
            <div className="arrival-info">
              <User size={16} className="text-green" />
              <div>
                <div className="arrival-name">{arrival.name}</div>
                <div className="arrival-room">{arrival.room}</div>
              </div>
            </div>
            
            <div className="arrival-right">
              <span className="arrival-time">{arrival.time}</span>
              <button className="btn-checkin">Check-in</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="view-all-link mt-4">
        <span className="cursor-pointer">View All Arrivals →</span>
      </div>
    </div>
  );
};

export default ExpectedArrivalsList;

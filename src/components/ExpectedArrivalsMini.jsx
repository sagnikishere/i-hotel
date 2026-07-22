import React from 'react';
import { Plane } from 'lucide-react';
import './ExpectedArrivalsMini.css';

const ExpectedArrivalsMini = () => {
  const arrivals = [
    { name: 'Rahul Mehta', info: 'Room 205 • 02:00 PM', image: 'https://ui-avatars.com/api/?name=Rahul+Mehta&background=random' },
    { name: 'Priya Sharma', info: 'Room 306 • 03:30 PM', image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=random' },
    { name: 'Aman Verma', info: 'Room 412 • 04:00 PM', image: 'https://ui-avatars.com/api/?name=Aman+Verma&background=random' },
  ];

  return (
    <div className="expected-arrivals-mini card">
      <div className="card-header">
        <h3 className="card-title text-lg">Expected Arrivals</h3>
        <Plane size={16} className="text-muted" />
      </div>
      
      <div className="mini-arrivals-list">
        {arrivals.map((arrival, index) => (
          <div key={index} className="mini-arrival-item">
            <img src={arrival.image} alt={arrival.name} className="mini-avatar" />
            <div className="mini-arrival-info">
              <div className="mini-name">{arrival.name}</div>
              <div className="mini-room-time">{arrival.info}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpectedArrivalsMini;

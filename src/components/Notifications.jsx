import React from 'react';
import { User, Calendar, CreditCard, SprayCan, Wrench } from 'lucide-react';
import './Notifications.css';

const Notifications = () => {
  const notifications = [
    { text: 'Room 302 is ready for Check-in', time: '5 min ago', icon: User },
    { text: 'New Booking received for 15 Mar', time: '10 min ago', icon: Calendar },
    { text: 'Guest payment pending for Room 205', time: '15 min ago', icon: CreditCard },
    { text: 'Housekeeping completed for Floor 3', time: '20 min ago', icon: SprayCan },
    { text: 'Room 503 under maintenance', time: '25 min ago', icon: Wrench },
  ];

  return (
    <div className="notifications-widget card">
      <div className="card-header">
        <h3 className="card-title text-lg">Notifications</h3>
        <span className="view-all text-xs text-green cursor-pointer">View All</span>
      </div>
      
      <div className="notifications-list">
        {notifications.map((notif, index) => (
          <div key={index} className="notification-item">
            <div className="notif-icon-wrapper text-green">
              <notif.icon size={16} />
            </div>
            <div className="notif-content">
              <span className="notif-text">{notif.text}</span>
            </div>
            <span className="notif-time">{notif.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;

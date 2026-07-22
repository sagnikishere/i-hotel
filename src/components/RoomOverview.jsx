import React from 'react';
import './RoomOverview.css';

const RoomOverview = () => {
  const roomData = {
    Available: {
      count: 24,
      categories: {
        'Executive Room': ['201', '202', '203', '204', '205', '206'],
        'Junior Suite': ['301', '302', '303', '304', '305'],
        'Superior Room': ['501', '502', '503', '504', '505']
      }
    },
    Confirmed: {
      count: 17,
      categories: {
        'Executive Room': ['207', '208', '209', '210', '211'],
        'Junior Suite': ['306', '307', '308'],
        'Suite Room': ['601', '602']
      }
    },
    'Checked In': {
      count: 14,
      categories: {
        'Executive Room': ['212', '213', '214', '215'],
        'Junior Suite': ['310', '311'],
        'Suite Room': ['603', '604', '605']
      }
    },
    Blocked: {
      count: 3,
      categories: {
        'Executive Room': ['216'],
        'Junior Suite': ['312'],
        'Suite Room': ['606']
      }
    }
  };

  return (
    <div className="room-overview card">
      <div className="card-header">
        <h2 className="card-title text-lg">Room Overview</h2>
        <div className="legend">
          <div className="legend-item"><span className="dot dot-available"></span> Available</div>
          <div className="legend-item"><span className="dot dot-confirmed"></span> Confirmed</div>
          <div className="legend-item"><span className="dot dot-checkedin"></span> Checked In</div>
          <div className="legend-item"><span className="dot dot-blocked"></span> Blocked</div>
        </div>
      </div>
      
      <div className="room-columns">
        {Object.entries(roomData).map(([status, data]) => (
          <div key={status} className={`room-column col-${status.replace(' ', '').toLowerCase()}`}>
            <h3 className="column-title">{status} ({data.count})</h3>
            
            <div className="categories-list">
              {Object.entries(data.categories).map(([category, rooms]) => (
                <div key={category} className="category-group">
                  <h4 className="category-name">{category}</h4>
                  <div className="room-grid">
                    {rooms.map(room => (
                      <div 
                        key={room} 
                        className={`room-badge badge-${status.replace(' ', '').toLowerCase()}`}
                      >
                        {room}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomOverview;

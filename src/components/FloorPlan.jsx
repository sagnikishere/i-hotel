import React from 'react';
import './FloorPlan.css';

const FloorPlan = () => {
  const floor1 = [
    { num: '101', status: 'occupied' },
    { num: '102', status: 'occupied' },
    { num: '103', status: 'dirty' },
    { num: '104', status: 'vacant' },
    { num: '105', status: 'maintenance' },
    { num: '106', status: 'occupied' },
    { num: '107', status: 'vacant' },
    { num: '108', status: 'occupied' },
    { num: '111', status: 'vacant' },
    { num: '112', status: 'cleaning' },
    { num: '113', status: 'occupied' },
    { num: '114', status: 'vacant' },
  ];

  const floor2 = [
    { num: '201', status: 'occupied' },
    { num: '202', status: 'occupied' },
    { num: '203', status: 'vacant' },
    { num: '204', status: 'vacant' },
    { num: '205', status: 'dirty' },
    { num: '206', status: 'occupied' },
    { num: '207', status: 'vacant' },
    { num: '208', status: 'occupied' },
    { num: '210', status: 'occupied' },
    { num: '211', status: 'vacant' },
    { num: '212', status: 'maintenance' },
    { num: '214', status: 'vacant' },
  ];

  return (
    <div className="floor-plan card">
      <div className="card-header">
        <h2 className="card-title text-lg">Occupied Rooms (31)</h2>
        <span className="view-link cursor-pointer">View Floor Plan</span>
      </div>
      
      <div className="floors-container">
        <div className="floor">
          <h3 className="floor-title">1st Floor</h3>
          <div className="floor-grid">
            {floor1.map(room => (
              <div key={room.num} className={`floor-room bg-${room.status}`}>
                {room.num}
              </div>
            ))}
          </div>
        </div>

        <div className="floor">
          <h3 className="floor-title">2nd Floor</h3>
          <div className="floor-grid">
            {floor2.map(room => (
              <div key={room.num} className={`floor-room bg-${room.status}`}>
                {room.num}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="floor-legend">
        <div className="legend-item"><span className="dot bg-occupied-dot"></span> Occupied</div>
        <div className="legend-item"><span className="dot bg-dirty-dot"></span> Dirty</div>
        <div className="legend-item"><span className="dot bg-cleaning-dot"></span> Cleaning</div>
        <div className="legend-item"><span className="dot bg-maintenance-dot"></span> Maintenance</div>
        <div className="legend-item"><span className="dot bg-vacant-dot"></span> Vacant</div>
      </div>
    </div>
  );
};

export default FloorPlan;

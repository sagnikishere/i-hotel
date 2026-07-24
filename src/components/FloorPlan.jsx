import React from 'react';
import './FloorPlan.css';

const FloorPlan = () => {
  const floor1 = [
    { num: '101', status: 'expected' },
    { num: '102', status: 'expected' },
    { num: '103', status: 'confirmed' },
    { num: '104', status: 'vacant' },
    { num: '105', status: 'blocked' },
    { num: '106', status: 'expected' },
    { num: '107', status: 'vacant' },
    { num: '108', status: 'confirmed' },
    { num: '111', status: 'vacant' },
    { num: '112', status: 'confirmed' },
    { num: '113', status: 'expected' },
    { num: '114', status: 'vacant' },
  ];

  const floor2 = [
    { num: '201', status: 'expected' },
    { num: '202', status: 'confirmed' },
    { num: '203', status: 'vacant' },
    { num: '204', status: 'vacant' },
    { num: '205', status: 'blocked' },
    { num: '206', status: 'expected' },
    { num: '207', status: 'vacant' },
    { num: '208', status: 'expected' },
    { num: '210', status: 'confirmed' },
    { num: '211', status: 'vacant' },
    { num: '212', status: 'blocked' },
    { num: '214', status: 'vacant' },
  ];

  return (
    <div className="floor-plan card">
      <div className="card-header">
        <h2 className="card-title text-lg">Floor Layout & Status</h2>
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
        <div className="legend-item"><span className="dot bg-expected-dot"></span> Today Expected</div>
        <div className="legend-item"><span className="dot bg-vacant-dot"></span> Blank / Vacant</div>
        <div className="legend-item"><span className="dot bg-confirmed-dot"></span> Confirmed</div>
        <div className="legend-item"><span className="dot bg-blocked-dot"></span> Blocked</div>
      </div>
    </div>
  );
};

export default FloorPlan;

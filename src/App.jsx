import React, { useEffect, useState } from 'react';
import TopNavigation from './components/TopNavigation';
import StatCards from './components/StatCards';
import RoomOverview from './components/RoomOverview';
import ExpectedArrivalsList from './components/ExpectedArrivalsList';
import FloorPlan from './components/FloorPlan';
import RoomStatus from './components/RoomStatus';
import MonthlyOverview from './components/MonthlyOverview';
import TodaysSummary from './components/TodaysSummary';
import CalendarWidget from './components/CalendarWidget';
import Notifications from './components/Notifications';
import ExpectedArrivalsMini from './components/ExpectedArrivalsMini';
import { Calendar, ChevronDown, Edit3 } from 'lucide-react';
import './App.css';

function App() {
  const [currentDate, setCurrentDate] = useState('');
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    // Set dynamic current date
    const today = new Date();
    const options = { day: 'numeric', month: 'short', year: 'numeric', weekday: 'long' };
    setCurrentDate(today.toLocaleDateString('en-GB', options)); // e.g., "15 Mar 2024, Friday"
  }, []);

  useEffect(() => {
    // Enable or disable global content editing
    document.designMode = isEditable ? 'on' : 'off';
  }, [isEditable]);

  return (
    <div className="dashboard-container">
      <TopNavigation />
      
      <div className="dashboard-content">
        <div className="main-column">
          <StatCards />
          <RoomOverview />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <ExpectedArrivalsList />
            <FloorPlan />
            <RoomStatus />
          </div>
          
          <MonthlyOverview />
        </div>
        
        <div className="sidebar-column">
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <div 
              className="card" 
              onClick={() => setIsEditable(!isEditable)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', backgroundColor: isEditable ? '#48BB78' : 'var(--card-bg)', color: isEditable ? 'white' : 'var(--text-main)' }}
              title="Toggle Admin Edit Mode"
            >
              <Edit3 size={14} className={isEditable ? 'text-white' : 'text-muted'} />
              {isEditable ? 'Edit Mode On' : 'Edit Mode Off'}
            </div>
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>
              <Calendar size={14} className="text-muted" />
              {currentDate}
              <ChevronDown size={14} className="text-muted" />
            </div>
          </div>
          <TodaysSummary />
          <CalendarWidget />
          <Notifications />
          <ExpectedArrivalsMini />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { Search, Home, CalendarDays, BedDouble, Users, Receipt, SprayCan, Utensils, Box, LineChart, Settings, ChevronDown } from 'lucide-react';
import './TopNavigation.css';

const TopNavigation = () => {
  const navItems = [
    { name: 'Dashboard', icon: Home, active: true },
    { name: 'Reservations', icon: CalendarDays },
    { name: 'Rooms', icon: BedDouble },
    { name: 'Guests', icon: Users },
    { name: 'Billing', icon: Receipt },
    { name: 'Housekeeping', icon: SprayCan },
    { name: 'Restaurant', icon: Utensils },
    { name: 'Inventory', icon: Box },
    { name: 'Reports', icon: LineChart },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className="top-nav">
      <div className="top-nav-left">
        <img src="/logo.png" alt="iHotel" className="logo" />
        
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search anything..." />
        </div>
      </div>

      <div className="top-nav-center">
        {navItems.map((item) => (
          <div key={item.name} className={`nav-item ${item.active ? 'active' : ''}`}>
            <item.icon size={20} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div className="top-nav-right">
        <div className="user-profile">
          <img src="https://ui-avatars.com/api/?name=Sagnik+Adhikary&background=random" alt="User" className="avatar" />
          <div className="user-info">
            <span className="user-name">Sagnik Adhikary</span>
            <span className="user-role">Admin</span>
          </div>
          <ChevronDown size={16} className="text-muted" />
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;

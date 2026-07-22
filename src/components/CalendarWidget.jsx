import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CalendarWidget.css';

const CalendarWidget = () => {
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [allDays, setAllDays] = useState([]);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
    const firstDay = new Date(year, month, 1).getDay();
    
    // Get the number of days in the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Get the number of days in the previous month
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    const prevMonthDays = [];
    for (let i = firstDay - 1; i >= 0; i--) {
      prevMonthDays.push({ date: daysInPrevMonth - i, type: 'prev' });
    }
    
    const currentMonthDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      currentMonthDays.push({ date: i, type: 'current' });
    }
    
    // Calculate how many next month days are needed to fill the 6x7 grid (or 5x7)
    // Actually, a simple 42 grid is standard.
    const totalCurrentAndPrev = prevMonthDays.length + currentMonthDays.length;
    const nextMonthDaysCount = 42 - totalCurrentAndPrev;
    const nextMonthDays = [];
    for (let i = 1; i <= nextMonthDaysCount; i++) {
      nextMonthDays.push({ date: i, type: 'next' });
    }
    
    setAllDays([...prevMonthDays, ...currentMonthDays, ...nextMonthDays]);
  }, [currentDate]);

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isToday = (dayDate) => {
    const today = new Date();
    return (
      dayDate === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const yearName = currentDate.getFullYear();

  return (
    <div className="calendar-widget card">
      <div className="calendar-header">
        <h3 className="calendar-title">{monthName} {yearName}</h3>
        <div className="calendar-nav">
          <ChevronLeft size={16} className="cursor-pointer text-muted" onClick={prevMonth} />
          <ChevronRight size={16} className="cursor-pointer text-muted" onClick={nextMonth} />
        </div>
      </div>
      
      <div className="calendar-grid">
        {days.map(day => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}
        
        {allDays.map((dayObj, index) => {
          let className = "calendar-day";
          if (dayObj.type !== 'current') className += " inactive";
          if (dayObj.type === 'current' && isToday(dayObj.date)) className += " active";
          
          return (
            <div key={index} className={className}>
              {dayObj.date}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarWidget;

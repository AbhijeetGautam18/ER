import React, { useState } from 'react';
import './CalendarView.css'; // Importing styling for calendar component

const CalendarView = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

   // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Function to calculate the number of days in a given month
  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };
  // Function to determine the day of the week for the first day of the month
  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };
  // Function to handle click event on a calendar day
  const handleDayClick = (day) => {
    setSelectedDate(day);
    toggleModal();
  };
  // Function to render calendar grid
  const renderCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(currentMonth.getMonth(), currentMonth.getFullYear());
    const firstDayIndex = firstDayOfMonth(currentMonth.getMonth(), currentMonth.getFullYear());

    // Add disabled days for previous month
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(<div key={`disabled_${i}`} className="calendar-day disabled"></div>);
    }

    // Add days of the current month
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      const pendingOrders = getPendingOrders(date);
      days.push(
        <div key={i} className={`calendar-day ${pendingOrders.length > 0 ? 'pending' : ''}`} onClick={() => handleDayClick(date)}>
          {i}
          {pendingOrders.length > 0 && <span className="delivery-icon"></span>}
        </div>
      );
    }

    return days;
  };

  const getPendingOrders = (date) => {
    // Mock data for orders pending
    const pendingOrders = {
      "2024-03-14": ["Order 123", "Order 456"],
      "2024-03-17": ["Order 789"],
      "2024-03-21": ["Order 012"],
    };
    const formattedDate = date.toISOString().split('T')[0];
    return pendingOrders[formattedDate] || [];
  };

  return (
    <div className="calendar-container">
             <h2>View Pending Orders</h2>
      <div className="calendar-header">
        <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}>&lt;</button>
        <h2>{`${currentMonth.toLocaleString('default', { month: 'long' })} ${currentMonth.getFullYear()}`}</h2>
        <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}>&gt;</button>
      </div>
      <div className="calendar-body">
        {renderCalendar()}
      </div>

      {showModal &&
        <div id="orderDetailsModal" className="modal">
          <div className="modal-content">
          <span className="close1" onClick={toggleModal}>&times;</span>
            <h2>{selectedDate.toDateString()}</h2>
            <ul>
              {getPendingOrders(selectedDate).map((order, index) => (
                <li key={index}>{order}</li>
              ))}
            </ul>
          </div>
        </div>
      }
    </div>
  );
}

export default CalendarView;

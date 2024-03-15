// Importing relevant components

import React, { useState, useEffect, useRef } from 'react';
import './Dashboard.css';
import { Chart } from 'chart.js/auto';
import Watch from './Watch';
import Header from './Header';
import Footer from './Footer';
import CalendarView from './CalendarView';
import TodoList from './TodoList';

const Dashboard = () => {
  // Ref for chart canvas and chart instance
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // useEffect hook to create the chart on component mount
  useEffect(() => {
    // Mock data for line chart
    const labels = ['Smart Bulb', 'Table Lamp', 'Strip Light', 'Wall Light', 'Emergency Light'];
    const data = [10000, 20000, 15000, 30000, 25000];

    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Sales (in ₹)',
            data: data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, []);


  return (
    <div className="dashboard">
        <Header />

    {/* Tiles displaying various metrics */}
    <div className = "tileContainer">
      <div className="tile square light-red">
        <h3>No. of Different Products</h3>
        <p>15</p>
      </div>
      <div className="tile square light-red">
        <h3>Total Sales</h3>
        <p>₹1,00,000</p>
      </div>
      <div className="tile square light-red">
        <h3>Total Customers</h3>
        <p>1500</p>
      </div>
      <div className="tile square light-red1">
        <h3>Alert/Notification</h3>
        <p>Low Inventory: Strip Light Inventory Low</p>
        <button onClick={() => alert("Message sent to Inventory Management Team")}>Send alert</button>
      </div>
      </div>
    {/* Section for chart and watch */}
    <div className='ChartWatchContainer'>
      <div className="chart">
        <h2>Top 5 Products by Sales</h2>
        <canvas ref={chartRef} id="lineChart" width="1000" height="200"></canvas>
      </div>

      <div className="watch">
        <Watch />
      </div>
      </div>
      <div className='calendar_todo_container'>
      <div className='calendar'>
        <CalendarView />
      </div>
      <div className='todo'>
          <TodoList />
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
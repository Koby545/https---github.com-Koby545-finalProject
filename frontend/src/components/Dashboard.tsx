// src/components/Dashboard.tsx
import React from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="container">
      <div className="mt-5 p-4 bg-light rounded shadow-sm">
        <h2>User Dashboard</h2>
        <p className="lead">This is your dashboard page.</p>
        <p>Add widgets, charts, or any specific user information here.</p>
      </div>
    </div>
  );
};

export default Dashboard;

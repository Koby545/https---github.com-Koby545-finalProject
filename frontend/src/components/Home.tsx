// src/components/Home.tsx
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="mt-5 p-4 bg-light rounded shadow-sm">
        <h2>Welcome to Your Dashboard</h2>
        <p className="lead">This is your home page after logging in.</p>
        <p>Customize this page as per your application needs.</p>
      </div>
    </div>
  );
};

export default Home;

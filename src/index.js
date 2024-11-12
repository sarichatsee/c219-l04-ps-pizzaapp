// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './menu';

const Header = () => {
  return (
        <header className='header'>
      <img src="/img/logo.png" alt="Pizza Logo" className="logo" />
      <h1 style={{ color: 'orange', fontSize: '36px', textTransform: 'uppercase', textAlign: 'center' }}>
        Saricha's Pizza Co.
      </h1>
    </header>
  );
};

const Footer = () => {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;
  return (
    <footer className="footer">
      {isOpen ? (
        <div>
          <p>We're currently open</p>
          <button className="order-button">Order</button>
        </div>
      ) : (
        <p>Sorry, we're closed</p>
      )}
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

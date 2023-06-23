import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
import DashboardLayout from './layout/DashboardLayout';

function App() {
  return (
    <div className="">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <DashboardLayout />
    </div>
  );
}

export default App;

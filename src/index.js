import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Mode from './context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mode>
      <App/>
    </Mode>
  </React.StrictMode>
);


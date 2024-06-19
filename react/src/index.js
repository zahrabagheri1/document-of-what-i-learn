import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>


  // in StrictMode (development) UseEffect render tow age 
  // یوز افکت در استریک مود دوبار رندر میشود که اگر ارورر و مشکلی وجود داشت جلوی ان گرفته شود
);

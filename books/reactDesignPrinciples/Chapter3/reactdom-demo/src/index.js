import React from 'react'
// import CustomRender from './customRender';
import ReactDOM from 'react-dom/client';
import App from './App.js';
// 替换 ReactDOM
// CustomRender.render(<App />, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

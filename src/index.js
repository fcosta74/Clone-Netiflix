import React from 'react';
import createRoot from 'react-dom';
import App from './App';


createRoot.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createAppStore, createAsyncAppStore } from './store/config/storeConfig';
import { Provider } from 'react-redux';
import AppSagas from './AppSagas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={createAppStore()}>
  <Provider store={createAsyncAppStore()}>
    <React.StrictMode>
      {/* <App /> */}
      <AppSagas/>
    </React.StrictMode>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

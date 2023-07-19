import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
// import { UserProvider } from './Context/UserProvider';
import { AuthProvider } from './AuthContext/AuthContext';
import { UserProvider } from './Context/UserProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);
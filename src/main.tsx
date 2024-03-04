import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './satoshi.css';
import AuthProvider from './context/AuthContext.tsx'
// Add this to your main stylesheet or component
import '@fortawesome/fontawesome-free/css/all.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)

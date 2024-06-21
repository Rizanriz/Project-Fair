import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import ContextAPI from './context/ContextAPI.jsx'
import AuthContext from './context/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext>
    <ContextAPI>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextAPI>
  </AuthContext>
)

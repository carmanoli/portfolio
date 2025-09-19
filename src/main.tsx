import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. E muda o componente aqui */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { I18nextProvider } from "react-i18next";
import i18n from './configuration/i18n.js'

createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
      <App />
  </I18nextProvider>
)

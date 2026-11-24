import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// @ts-ignore CSS files are loaded by the bundler.
import './style.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

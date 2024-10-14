import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MyContextProvider } from './context/context.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <MyContextProvider>
      <App />
    </MyContextProvider>
  </StrictMode>,
)

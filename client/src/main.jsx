import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer,Slide } from 'react-toastify';
import App from './App.jsx'
import { AuthProvider } from './store/auth.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
     <StrictMode>
    <App />
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
bodyClassName="toastBody"
pauseOnFocusLoss
draggable
pauseOnHover={false}
theme="colored"
transition={Slide}
/>
  </StrictMode>
  </AuthProvider>
 ,
)

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Logout from './components/Logout'
import RegistrationForm from './components/RegistrationForm'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login/>
      <Logout/>
      <RegistrationForm/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm/>}>
          {/* <Route index element={<Home />} /> */}
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="register" element={<RegistrationForm/>} />

          
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

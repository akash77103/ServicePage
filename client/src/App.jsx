import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Service } from './pages/Service';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Error } from './pages/Error';
import { Logout } from './pages/Logout';
import { AdminLayout } from './components/layouts/AdminLayout';
import { AdminUsers } from './pages/AdminUsers';
import { AdminContacts } from './pages/AdminContacts';
import { AdminServices } from './pages/AdminServices';
import { AdminUpdate } from './pages/AdminUpdate';
 const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Logout/>}></Route>
          <Route path='*' element={<Error/>}/>
          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='users' element={<AdminUsers/>}/>
            <Route path='contacts' element={<AdminContacts/>}/>
            <Route path='services' element={<AdminServices/>}/>
            <Route path='users/:id/edit' element={<AdminUpdate/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App;

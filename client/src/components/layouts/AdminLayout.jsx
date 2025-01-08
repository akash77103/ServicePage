import React from 'react'
import { useAuth } from '../../store/auth';
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { TbUserSquare  } from "react-icons/tb";
import { MdOutlineContacts } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
export const AdminLayout = () => {
  const {user,isLoading}=useAuth()
  console.log("admin layoit",user);
  if(isLoading){
    return <h1>Loading.....</h1>
  }
  if(!user.isAdmin){
    return <Navigate to="/"></Navigate>
  }
  
  return (
    <>
      <header>
        <div className='container'>
          <ul>
            <li> <NavLink to="/admin/users" > <TbUserSquare /> users</NavLink> </li>
            <li> <NavLink to="/admin/contacts" > <MdOutlineContacts /> contacts</NavLink></li>
            <li><NavLink to="/admin/services" > <GrServices /> services</NavLink></li>
            <li><NavLink to="/" > <FaHome /> Home</NavLink></li>
          </ul>
        </div>
      </header>
      <Outlet></Outlet>
    </>
  )
}


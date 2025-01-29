import React, { useEffect,useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
export const AdminContacts = () => {
  const [contacts, setcontacts] = useState([])
  const { authorizationToken } = useAuth()
  const getAllContacts=async()=>{
    try {
      const response=await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/admin/contact`,{
        method:"GET",
        headers:{
          Authorization:authorizationToken,
        },

      })
      const data=await response.json()
      console.log(data)
      if(response.ok){
        setcontacts(data)
      }
      else{
        console.log("no contacts");
        
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  const deleteContacts=async(id)=>{
    alert("Are you sure you want to delete this contact")
    try {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/admin/contacts/delete/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: authorizationToken,
            }
        })
       const data=await response.json()
       if(response.ok)
       {
        toast.success("Contact deleted successfully")
        getAllContacts()
       }
       else{
        toast.error("Failed to delete contact")
       }
       console.log(`contacts after delete ${data}`)
    } catch (error) {
        console.log(error);
        
    }
    
  }
 useEffect(()=>{
  getAllContacts()
 },[])
  return (
    <>
      <section className='admin-users-panel'>
            <div className='container'>
                <h1>Admin Contacts data</h1>
            </div>
            <div className='container admin-users'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>message</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {contacts.map((contact,index)=>{
                      const {username,email,message}=contact
                        return(
                             <tr key={index}>
               <td >{username}</td>
               <td>{email}</td>
               <td>{message}</td>
               {/* <td>
               
               <Link to={`/admin/users/${user._id}/edit`}>Edit</Link>
               </td> */}
               <td><button onClick={()=>deleteContacts(contact._id)}> <MdDelete />Delete</button></td>
                </tr>
                        )
                       
                    })
                    }
                    </tbody>
                </table>
            </div>
        </section>
    </>
  )
}

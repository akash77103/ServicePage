import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { MdDelete } from "react-icons/md";
export const AdminUsers = () => {
    const [users, setUsers] = useState([])
    const { authorizationToken } = useAuth()

    const getAllUsersData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            if (Array.isArray(data)) {
                setUsers(data)
            } else {
                setUsers([])
                console.error('Data is not an array:', data)
            }
        } catch (error) {
            console.error('Fetch error:', error)
            setUsers([])
        }
    }
    const deleteUsers=async (id)=>{
        alert("Are you sure you want to delete this user")
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                }
            })
           const data=await response.json()
           if(response.ok)
           {
            getAllUsersData()
           }
           console.log(`users after delete ${data}`)
        } catch (error) {
            console.log(error);
            
        }
        
        
    }
    useEffect(() => {
        getAllUsersData()
    }, [])

    return (
        <>
        <section className='admin-users-panel'>
            <div className='container'>
                <h1>Admin Users data</h1>
            </div>
            <div className='container admin-users'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((user,index)=>{
                        return(
                             <tr key={index}>
               <td >{user.username}</td>
               <td>{user.email}</td>
               <td>{user.phone}</td>
               <td>
               
               <Link to={`/admin/users/${user._id}/edit`}>Edit</Link>
               </td>
               <td><button onClick={()=>deleteUsers(user._id)}> <MdDelete />Delete</button></td>
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
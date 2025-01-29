import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'
export const AdminUpdate = () => {
    const {authorizationToken} = useAuth();
    const [data, setdata] = useState({
        username:"",
        email:"",
        phone:""
    })
const params=useParams();
console.log("params",params)
    const getSingleUserData=async ()=>{
       
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                  
                    Authorization: authorizationToken,
                }
            })
           const data=await response.json()
          
           console.log(`users single data ${data}`)
           setdata(data)
        } catch (error) {
            console.log(error);
            
        }
        
        
    }
    useEffect(() => {
      getSingleUserData()
    }, [])
    

    const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setdata({
        ...data,
        [name]:value
      })
    }

    const handleSubmit=async(e)=>{
      e.preventDefault()

      try {
        const response=await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/admin/users/update/${params.id}`,
          {
            method:"PATCH",
            headers:{
              Authorization:authorizationToken,
              "Content-Type": "application/json",
            },
            body:JSON.stringify(data), 
          }
          
        )
        console.log("handle submit",response);
        
        if(response.ok){
          toast.success("User data updated")
        }
        else{
          toast.error("User data not updated")
        }
        
      } catch (error) {
        console.log(error);
        
      }
    }
    
  return (
    <>
        <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Update User data</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
         
        <form onSubmit={handleSubmit}>
          {/* contact form content actual  */}
          <section className="section-form">
            
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={data.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Phone</label>
                
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={data.phone}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <button type="submit">Update</button>
              </div>
           </section>
           </form>
        </div>

      </section>
    </>
  )
}

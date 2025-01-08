import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'
export const Login = () => {
  const {storetokeninLS}=useAuth()
  const navigate=useNavigate()

  const [user, setuser] = useState({
  
    email:"",
    password:"",
  })

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setuser({
      ...user,
      [name]:value,
    })
  }
  const handleSubmit= async (e)=> {
    e.preventDefault();
    try {
      const response= await fetch(`http://localhost:5000/api/auth/login`,{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(user)
      })

      console.log("login form",response)
       const res_data=await response.json()
      if(response.ok){
       
        storetokeninLS(res_data.token)
        alert("login sucecssfull")
        setuser({
          
          email:"",
      
          password:""
        })
       navigate("/")
      }
      else{
        toast(res_data.extraDetails?res_data.extraDetails:res_data.message)
      }
      console.log(response)
      
    } catch (error) {
      console.log("login",error)
    }
    
  }

  return (
    <>
      <section>
        <main>
          <div className='section-login'>
            <div className='container grid grid-two-cols'>
              <div className='login-image'>
                <img src='https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?t=st=1733157513~exp=1733161113~hmac=f9f335970d987fbde8704b4f2d19027a7284362b8096bf39253672bed7c23e29&w=740'  alt=''
                  width="500" height="500"
                />
              </div>
              <div className='login-form'>
                <h1 className='main-heading mb-3'>Login form</h1>
                <br/>
                <form onSubmit={handleSubmit}>
                  
                  <div>
                    <label htmlFor='email'>email</label>
                    <input type='text' id='email' name='email' placeholder="Enter your email" required autoComplete='off'
                    value={user.email} onChange={handleInput} />
                  </div>
                  
                  <div>
                    <label htmlFor='password'>password</label>
                    <input type='password' id='password' name='password' placeholder="Enter your password" required autoComplete='off'
                    value={user.password} onChange={handleInput}
                     />
                  </div>
                  <br/>
                  <button type='submit'className='btn btn-submit'>Login Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

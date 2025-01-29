import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'

export const Register = () => {
  const [user, setuser] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  })
  const {storetokeninLS}=useAuth()
const navigate = useNavigate()

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;


    setuser({
      ...user,
      [name]:value,
    })
  }
  const handleSubmit= async (e)=>{
    e.preventDefault();
    try {
      const response= await fetch(`http://localhost:5000/api/auth/register`,{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(user)
      })
      const res_data=await response.json()
      console.log("res_data",res_data.extraDetails);
      
      if(response.ok){
     
       storetokeninLS(res_data.token)
        setuser({
          username:"",
          email:"",
          phone:"",
          password:""
        })
        navigate('/')
      }
      else{
        alert(res_data.extraDetails?res_data.extraDetails:res_data.message)
      }
      console.log(response)
      
    } catch (error) {
      console.log("register",error)
    }
    
    
  }

  return (
    <>
      <section>
        <main>
          <div className='section-registration'>
            <div className='container grid grid-two-cols'>
              <div className='registration-image'>
                <img src='https://img.freepik.com/premium-vector/register-access-login-password-internet-online-website-concept-flat-illustration_385073-108.jpg?w=740'  alt=''
                  width="500" height="500"
                />
              </div>
              <div className='registration-form'>
                <h1 className='main-heading mb-3'>Registration form</h1>
                <br/>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor='username'>username</label>
                    <input type='text' id='username' name='username' placeholder="Enter your username" required autoComplete='off' value={user.username} onChange={handleInput} />
                  </div>
                  <div>
                    <label htmlFor='email'>email</label>
                    <input type='text' id='email' name='email' placeholder="Enter your email" required autoComplete='off'
                    value={user.email} onChange={handleInput} />
                  </div>
                  <div>
                    <label htmlFor='phone'>phone</label>
                    <input type='number' id='phone' name='phone' placeholder="Enter your phone" required autoComplete='off' value={user.phone} onChange={handleInput} />
                  </div>
                  <div>
                    <label htmlFor='password'>password</label>
                    <input type='password' id='password' name='password' placeholder="Enter your password" required autoComplete='off'
                    value={user.password} onChange={handleInput}
                     />
                  </div>
                  <br/>
                  <button type='submit'className='btn btn-submit'>Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

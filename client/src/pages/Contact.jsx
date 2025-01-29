import React,{useState} from 'react'
import { useAuth } from '../store/auth'

const defaultContactForm={
  username:"",
  email:"",
  message:"",
}

export const Contact = () => {
  const [data, setdata] = useState(defaultContactForm)
   
const {user}=useAuth()
  const [userData, setuserData] = useState(true)

  if(userData && user){
    setdata({
      username:user.username,
      email:user.email,
      message:"",
    })
    setuserData(false)
  }
 
  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setdata((prev) => ({ ...prev, [name]: value }));
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      const response=await fetch(`http://localhost:5000/api/form/contact`
        ,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(data),
        }
          
      )
      if(response.ok){
        setdata(defaultContactForm)
        alert("Message sent succesfully")
      }
      console.log(response)
    } catch (error) {
      console.log(error)
    }
   

  }

  
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1733220751~exp=1733224351~hmac=96088398824d93d313894be685f1eed0204898a988cf2ed5678afa6d451cffd5&w=740" alt="we are always ready to help" 
             
            />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={data.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  )
}

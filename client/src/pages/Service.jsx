import React from 'react'
import { useAuth } from '../store/auth';

export const Service = () => {
  const {services}= useAuth();
  return (
   <section className='section-services'>
    <div className='container'>
      <h1  className='main-heading'>Services</h1>
    </div>
    <div  className='container grid grid-three-cols'>
   {services.map((currEle,index)=>{
      const {price,description,provider,service}=currEle;
      return(
        <div className='card' key={index}>
        <div className='card-img'>
          <img src='https://img.freepik.com/free-vector/businessman-office-with-e-mail-marketing-icons_24877-51262.jpg?ga=GA1.1.563696715.1733155901&semt=ais_hybrid' alt='' width="200" height="200" ></img>
        </div>
        <div className='card-details'>
          <div className='grid grid-two-cols'>
            <p>{provider}</p>
            <p>{price}</p>
          </div>
          <h2>{service}</h2>
          <p>{description}</p>
        </div>
      </div>
      )
    })
   }
     
    </div>
   </section>
  )
}

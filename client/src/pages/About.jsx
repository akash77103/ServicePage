import React from 'react'
import { Analytics } from '../components/Analytics'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/auth'
export const About = () => {
  const { user } = useAuth()
  return (
    <>
      <main>
      <section className='section-hero'>
        <div className='container grid grid-two-cols'>
          <div className='hero-content'>
            <p>We are the workd best It company</p>
            <p>Welcome,{user?`${user.username} to our website`:`to our website`}
            
            </p>
            <h1>Why Choose Us?</h1>
            <p>
            Expertise: Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.
            <br/>
            <br/>
            Customization: We understand that every business is unique. That's why we create solutions that are tailored to your specific needs and goals.
            <br/>
            <br/>
            Customer-Centric Approach: We prioritize your satisfaction and provide top-notch support to address your IT concerns.
            <br/>
            <br/>
            Affordability: We offer competitive pricing without compromising on the quality of our services.
            <br/>
            <br/>
            Reliability: Count on us to be there when you need us. We're committed to ensuring your IT environment is reliable and available 24/7.
            </p>
            
            <div className='btn btn-group'>
              <NavLink to='/contact'>
                <button className='btn'>Connect Now</button>
              </NavLink>
              <NavLink to='/service'>
                <button className='btn secondary-btn'>Learn More</button>
              </NavLink>
            </div>
          </div>
          {/* hero images */}
          <div className='hero-image'>
            <img src='https://alaricsoft.com/wp-content/uploads/2023/02/canva-MAEmwBhGCeg.png' alt='' width="500" height="500" />
          </div>
        </div>
      </section>
      </main>
      <Analytics/>
    </>
  )
}

import React from 'react'
import { Analytics } from '../components/Analytics'

export const Home = () => {
  return (
    <>
     <main>
      <section className='section-hero'>
        <div className='container grid grid-two-cols'>
          <div className='hero-content'>
            <p>We are the workd best It company</p>
            <h1>Welcom to company</h1>
            <p>
            Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Thapa Technical,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
            </p>
            <div className='btn btn-group'>
              <a href='/contact'>
                <button className='btn'>Connect Now</button>
              </a>
              <a href='/service'>
                <button className='btn secondary-btn'>Learn More</button>
              </a>
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
     <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="https://www.research4life.org/wp-content/uploads/2023/08/Pubmed-Webinar-R4l-Capdev-1-e1690960288301.png"
              alt="coding together"
             width="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

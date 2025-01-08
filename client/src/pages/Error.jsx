import React from 'react'
import { NavLink } from 'react-router-dom'

export const Error = () => {
  return (
    <>
        <div id='error-page'>
            <div className='content'>
                <h2 className='header'>404</h2>
                <h4>Sorry! Page not found</h4>
                <p>
                    Oops! it seems like page you'r trying to access doesn't exist
                </p>
                <div className='btns'>
                    <NavLink to='/'>Return Home</NavLink>
                    <NavLink to='/contact'>Report problem</NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

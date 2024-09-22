import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            Product App
        </div>
        <div className="about">
            <ul>
                <li>
                <a href="#">About</a>
                </li>
                <li>
                <a href="#">Contact Us</a>
                </li>
            </ul>
            
        </div>
        
    </div>
  )
}

export default Header
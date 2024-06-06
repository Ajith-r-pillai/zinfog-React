import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-main'>
      <div className='Header-container'>
        <div className='Header-logo'>
          <img src="https://i.postimg.cc/Ssfj76mz/Screenshot-8-removebg-preview.png" alt="" />
        </div>
        <div className='header-user'>
          <div className='header-username'>
            <p>Username</p>
          </div>
          <div className='header-userphoto'>
          <img src="https://i.postimg.cc/FKk3SNq1/Screenshot-10.png" alt="" />
          </div>
          <div className='header-userlogout'>
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
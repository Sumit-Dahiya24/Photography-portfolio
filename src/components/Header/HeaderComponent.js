import React from 'react'
import './HeaderComponent.css'
function HeaderComponent() {
  return (
    <header className='main-header'>
      <div className='header'>
        <div className='header-Title'>
          <h2 style={{ marginTop: '0' }}>SarahLab</h2>
        </div>
        <div className='header-content'>
          <div className='header-item'>Home</div>
          <div className='header-item'>Gallery</div>
          <div className='header-item'>Blog</div>
          <div className='header-item'>Contact</div>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent

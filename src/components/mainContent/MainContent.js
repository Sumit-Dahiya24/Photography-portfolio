import React from 'react'
import './MainContent.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
// //  import {facebook} from '@'
// import { faSprayCan } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter } from '@fortawesome/free-brand-svg-icons'
function MainContent() {
  return (
    <main className='main-content-container'>
      <div className='profile-image-container'>
        {/* here a image will be placed */}
        <img
          src='https://images.pexels.com/photos/302355/pexels-photo-302355.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          alt=''
        />
      </div>
      <div className='profile-title'>
        {/* here heading will be placed */}
        <h1>I'm Sarah Doe</h1>
      </div>
      <div className='description-container'>
        <div className='description'>
          {/* description will be placed */}
          Photographer | Traveller
        </div>
      </div>
      <div className='description2'>
        "photography is a way feeling of touching, of loving. What you have
        caught in film is captured forever... it remembers little things, long
        after you have forgotten everything."
      </div>
      <div className='social-media-icons'>
        {/* here links to social media sites will be placed */}
        {/* <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon='fa-brands fa-facebook-f' />
        <FontAwesomeIcon icon='fa-brands fa-instagram-square' /> */}
        {/* <FontAwesomeIcon icon='fa-brands fa-facebook-f' /> */}
        <span className='social-media-icons-item'>
          <FontAwesomeIcon icon={faFacebook} />
        </span>
        <span className='social-media-icons-item'>
          <FontAwesomeIcon icon={faInstagram} />
        </span>
        <span className='social-media-icons-item'>
          <FontAwesomeIcon icon={faTwitter} />
        </span>
        <span className='social-media-icons-item'>
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
      </div>
    </main>
  )
}

export default MainContent

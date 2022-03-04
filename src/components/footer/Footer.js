import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <section className='footer'>
      <article className='footer-container'>
        <div className='footer-image-container'>
          {/* photo will be here */}
          <img
            src='https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
          />
        </div>
        <div className='footer-form'>
          {/* form will be made here */}
          <h1>Send Me Message</h1>
          <p>
            {' '}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ut
            est impedit labore possimus voluptate quibusdam illo dicta,
            deserunt, aut mollitia aliquam cumque id at, quae facilis maxime. A,
            aliquam.
          </p>
          <div>
            <input type='text' className='form-name' placeholder='Your Name' />
          </div>
          <div>
            <input
              type='email'
              className='form-name'
              placeholder='Enter Your Email'
            />
          </div>
          <div>
            <textarea
              // name='message'
              id=''
              className='form-textarea'
              placeholder='Message'
              cols='53'
              rows='12'
            ></textarea>
          </div>
          <div className='submit-form-button'>Send</div>
        </div>
      </article>
    </section>
  )
}

export default Footer

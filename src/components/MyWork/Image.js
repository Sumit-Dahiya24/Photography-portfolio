import {
  faMagnifyingGlassPlus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Image.css'
// import {font}
function Image({ src, number, imageViewState }) {
  const overlayEffect1 = () => {
    const id = `overlay${number}`
    const overlayElement = document.getElementById(id)
    overlayElement.style.visibility = 'visible'
  }
  const overlayEffect2 = () => {
    const id = `overlay${number}`
    const overlayElement = document.getElementById(id)
    overlayElement.style.visibility = 'hidden'
  }

  const onClickHelper = (e) => {
    // console.log(e.target)
    imageViewState(number)
  }

  return (
    <section
      className='particular-image'
      style={{ backgroundImage: `url(${src})` }}
      onMouseOver={overlayEffect1}
    >
      <div
        className='overlay'
        id={`overlay${number}`}
        onMouseLeave={overlayEffect2}
        onClick={onClickHelper}
      >
        <span className='search'>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </div>
      {/* <img src={src} alt='image' /> */}
    </section>
  )
}

export default Image

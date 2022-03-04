import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './ImageView.css'
function ImageView({ src, toggleState, number, numberFunction }) {
  // console.log(src)
  // console.log(toggleState)

  const previousImage = () => {
    if (number >= 1) {
      numberFunction(number - 1)
    } else {
      numberFunction(5)
    }
  }
  const nextImage = () => {
    if (number == 5) {
      numberFunction(0)
    } else {
      numberFunction(number + 1)
    }
  }
  return (
    <section className='image-view-container'>
      <div className='image-view-container-helper'></div>
      <div className='image-holder'>
        <img src={src} alt='image' />
        {/* <button>close</button> */}
        <div
          className='close-button'
          onClick={() => {
            toggleState()
          }}
        >
          {' '}
          Close
        </div>
      </div>
      <span className='left-arrow' onClick={previousImage}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </span>
      <span className='right-arrow' onClick={nextImage}>
        <FontAwesomeIcon icon={faAngleRight} />
      </span>
    </section>
  )
}

export default ImageView

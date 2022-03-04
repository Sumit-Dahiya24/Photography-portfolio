import React from 'react'
import './MyWork.css'
import Image from './Image'
function MyWork({ imageViewState }) {
  return (
    <section className='my-works-container'>
      <h2>My Works!!</h2>
      <article className='image-container'>
        <Image
          src='https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          number={0}
          imageViewState={imageViewState}
        />
        <Image
          src='https://images.pexels.com/photos/594226/pexels-photo-594226.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          number={1}
          imageViewState={imageViewState}
        />
        <Image
          src='https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          number={2}
          imageViewState={imageViewState}
        />
        <Image
          src='https://images.pexels.com/photos/3255543/pexels-photo-3255543.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          number={3}
          imageViewState={imageViewState}
        />
        <Image
          src='https://images.pexels.com/photos/9468923/pexels-photo-9468923.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          number={4}
          imageViewState={imageViewState}
        />
        <Image
          src='https://images.pexels.com/photos/8822178/pexels-photo-8822178.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          number={5}
          imageViewState={imageViewState}
        />
      </article>
    </section>
  )
}

export default MyWork

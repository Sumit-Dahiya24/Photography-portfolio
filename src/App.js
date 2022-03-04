import { useEffect, useState } from 'react'
import './App.css'
import MainComponent from './components/main/MainComponent'
import MyWork from './components/MyWork/MyWork'
import ImageView from './components/main/ImageView'
import Footer from './components/footer/Footer'
function App() {
  const [imageViewState, setImageViewState] = useState(false)
  const [particularImage, setparticularImage] = useState(0)
  const [imageArray, setImageArray] = useState('')

  useEffect(() => {
    let array = []
    array.push(
      'https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    )
    array.push(
      'https://images.pexels.com/photos/594226/pexels-photo-594226.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    )
    array.push(
      'https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    )
    array.push(
      'https://images.pexels.com/photos/3255543/pexels-photo-3255543.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    )
    array.push(
      'https://images.pexels.com/photos/9468923/pexels-photo-9468923.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    )
    array.push(
      'https://images.pexels.com/photos/8822178/pexels-photo-8822178.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    )
    setImageArray(array)
  }, [])
  const imageViewSetter = (number) => {
    setImageViewState(!imageViewState)
    // console.log(src)
    setparticularImage(number)
  }

  return (
    <main>
      <MainComponent />
      <MyWork imageViewState={(src) => imageViewSetter(src)} />
      {imageViewState ? (
        <ImageView
          src={imageArray[particularImage]}
          toggleState={() => setImageViewState(!imageViewState)}
          number={particularImage}
          numberFunction={(num) => {
            setparticularImage(num)
          }}
        />
      ) : (
        <></>
      )}
      <Footer />
    </main>
  )
}

export default App

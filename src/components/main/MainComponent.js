import React from 'react'
import './MainComponent.css'
import HeaderComponent from '../Header/HeaderComponent'
import MainContent from '../mainContent/MainContent'
function MainComponent() {
  return (
    <main className='main-div'>
      <HeaderComponent />
      <MainContent />
    </main>
  )
}

export default MainComponent

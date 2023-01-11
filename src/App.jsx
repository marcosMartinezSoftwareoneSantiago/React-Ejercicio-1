import {Card} from './Components/Card'
import MenuNavegacion from './Components/MenuNavegacion'
import React from 'react'

const textCard = "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.";
const textButton = "GO SOMEWHERE"
const paco = "vale"

function App() {
  
  return (
    <>
      <MenuNavegacion />
      <div className='m-auto d-flex w-75'>
        {Card(textCard, textButton)}
        {Card(textCard, textButton)}
        {Card(textCard, textButton)}
        {Card(textCard, paco)}
      </div>
      <div className='d-flex m-auto w-75'>
        {Card(textCard, textButton)}
        {Card(textCard, textButton)}
        {Card(textCard, textButton)}
        {Card(textCard, textButton)}
      </div>
    </>
  )
}

export default App

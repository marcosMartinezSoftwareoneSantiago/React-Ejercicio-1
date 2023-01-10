import {Card} from './Components/Card'
import MenuNavegacion from './Components/MenuNavegacion'
import React from 'react'

const textCard = "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.";
const textButton = "GO SOMEWHERE"

function App() {
  
  return (
    <div>
      <MenuNavegacion />
      <main className='row d-flex flex-wrap align-items-center justify-content-center'>
        {Card(textCard, textButton)}
        {Card(textCard, textButton)}
        {Card(textCard, textButton)}
        {Card(textCard, textButton)}
        {Card(textCard, textButton)}
        {Card(textCard, textButton)}
        {Card(textCard, textButton)}
        {Card(textCard, textButton)}
      </main>
    </div>
  )
}

export default App


import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/navbar/navbar'
import React from 'react'
function App() {
 

  return (
    <>
    <Navbar />
    
    <ItemListContainer greeting={'Bienvenidos'} />
    
    </>
  )
}

export default App

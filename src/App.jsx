import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Home'
import Singup from './singup'
import Singin from './assets/singin'
function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          
        </Route>
        <Route path='/singup' element={<Singup/>}/>
        <Route path='/singin' element={<Singin/>}/>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

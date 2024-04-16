import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import About from './Pages/About'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Dashboard from './Pages/Dashboard'
import Header from './Components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/sign-up' element={<Signup/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
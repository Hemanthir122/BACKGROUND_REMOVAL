
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import BuyCredit from './pages/BuyCredit'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import  Result  from './pages/Result'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar/>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/buyCredit' element={<BuyCredit/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

import React from 'react'
import {BrowserRouter, Routes, Route,NavLink} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Packages from './pages/Packages'
import Header from './components/header/Header'
import PackageDetail from './pages/PackageDetail'
import Footer from './components/Footer'
import Signup from './pages/Signup'
import Login from './pages/Login'
import SearchResultByList from './pages/SearchResultByList'
import { AuthContextProvider } from './context/AuthContext';
import { ThankYou } from './pages/ThankYou'

export const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/packages' element={<Packages/>} />
          <Route path='/packages/:_id' element={<PackageDetail />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='packages/search' element={<SearchResultByList/>} />
          <Route path='/thank-you' element={<ThankYou/>} />
        </Routes>
       <Footer/> 
    </div>
      </BrowserRouter>
      </AuthContextProvider>
  )
}

export default App
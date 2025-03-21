
import './App.css'
import { useState } from 'react'
import { Route,Routes } from 'react-router'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import Create from './components/create/Create.jsx'
import Catalog from './components/catalog/Catalog.jsx'
import { UserContext } from './context/userContext.js'
import Logout from './components/logout/Logout.jsx'

function App() {
  const [authData,setAuthData] = useState({})

  const userLoginHandeler = (resultData) =>{
    
    setAuthData(resultData)
  }

  const userLogoutHandeler = () =>{
    setAuthData({})
  }

  return (
    <>
    <UserContext.Provider value={{...authData,userLoginHandeler,userLogoutHandeler}}>
    <Header />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/create' element={<Create />}/>
    <Route path='/catalog' element={<Catalog />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/logout' element={<Logout />}/>
    <Route path='/register' element={<Register />}/>
    </Routes>
    </UserContext.Provider>
    </>
  )
}

export default App

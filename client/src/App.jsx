
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
import Details from './components/details/Details.jsx'
import Edit from './components/edit/Edit.jsx'

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
    <Route path='/cars/create' element={<Create />}/>
    <Route path='/cars/catalog' element={<Catalog />}/>
    <Route path='/cars/:carId/details' element={<Details />}/>
    <Route path='/cars/:carId/edit' element={<Edit />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/logout' element={<Logout />}/>
    <Route path='/register' element={<Register />}/>
    </Routes>
    </UserContext.Provider>
    </>
  )
}

export default App

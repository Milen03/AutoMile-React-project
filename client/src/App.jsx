
import './App.css'
import { Route,Routes } from 'react-router'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import Create from './components/create/Create.jsx'

function App() {
  

  return (
    <>
    <Header />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/create' element={<Create />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/register' element={<Register />}/>
    </Routes>
    </>
  )
}

export default App

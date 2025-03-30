
import './App.css'
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
import usePersistedState from './hooks/usePersistedState.js'
import AuthGuard from './components/guards/Authguard.jsx'
import GuestGuard from './components/guards/GuestGuard.jsx'
import Footer from './components/footer/Footer.jsx'
import Page404 from './components/404/Page404.jsx'


function App() {
  const [authData,setAuthData] = usePersistedState('auth',{})

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
    <Route path='*' element={<Page404/>}/>
    <Route path='/' element={<Home />}/>
    <Route path='/cars/catalog' element={<Catalog />}/>
    <Route path='/cars/:carId/details' element={<Details />}/>
    <Route element={<AuthGuard />}>
    <Route path='/cars/create' element={<Create />}/>
    <Route path='/cars/:carId/edit' element={<Edit />}/>
    <Route path='/logout' element={<Logout />}/>
    </Route>
    <Route element={<GuestGuard/>}>
    <Route path='/login' element={<Login />}/>
    <Route path='/register' element={<Register />}/>
    </Route>
    </Routes>
    <Footer/>
    </UserContext.Provider>
    </>
  )
}

export default App

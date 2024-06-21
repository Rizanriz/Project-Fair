
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Footer from './Componenets/Footer'
import { useContext } from 'react'
import { tokenAuthContext } from './context/AuthContext'

function App() {

  const  [isAutherised, setIsAutherised] = useContext(tokenAuthContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>   
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
        <Route path='/projects' element={isAutherised ? <Projects/> : <Navigate to={"/login"}/>}/>
        <Route path='/dashboard' element={isAutherised ? <Dashboard/> : <Navigate to={"/login"}/> }/>
      </Routes>
  
      <Footer/>
    </>
  )
}

export default App

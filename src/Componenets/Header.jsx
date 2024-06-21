import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../context/AuthContext'

function Header({ insideDashboard }) {

  const [isAutherised, setIsAutherised] = useContext(tokenAuthContext)
  const navigate = useNavigate()
  
  const handleLogout = () => {
    sessionStorage.clear()
    setIsAutherised(false)
    navigate('/')
  }
  return (
    <div>
      <Navbar className="bg-dark position-fixed w-100 top-0" style={{ zIndex: "10" }}>
        <Container>
          <Navbar.Brand   >
            <Link to={'/'} style={{ textDecoration: "none" }}><h5><i class="fa-brands fa-opencart">
            </i>  Project Fair</h5></Link>
          </Navbar.Brand>
          {
            insideDashboard &&
            <div>
              <button onClick={handleLogout} style={{ textDecoration: "none" }} className='btn btn-link fw-bolder'>Logout <i className='fa-solid fa-from-bracket'></i> </button>
            </div>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
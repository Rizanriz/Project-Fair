import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
       <Navbar className="bg-dark position-fixed w-100 top-0" style={{zIndex:"10"}}>
        <Container>
          <Navbar.Brand   >
            <Link to={'/'} style={{textDecoration:"none"}}><h5><i class="fa-brands fa-opencart">
              </i>  Project Fair</h5></Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
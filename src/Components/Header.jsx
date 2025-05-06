import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Navbar className="bg-black text-light">
        <Container>
          <Navbar.Brand className='text-light '>
            <Link to={'/'} style={{textDecoration:"none"}}>
            <i className="fa-solid fa-play fa-beat-fade fa-2xl m-4" style={{color:"white"}}></i>
             MEDIA-PLAYER
            </Link>          
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

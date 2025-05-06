import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer bg-black">
          <Row className='m-3'>
            <a href="" style={{textDecoration:"none"}}><h4  style={{color:"blueviolet"}}><i className="fa-solid fa-play fa-beat-fade fa-2xl m-5" ></i>
            MEDIA-PLAYER</h4></a>
            
          </Row>
          <Row className='m-3'>
            <Col>
            <p className='fs-6 '>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora alias pariatur ut a magni quasi possimus aliquid quae, libero excepturi quam totam! Ea beatae consequatur ut perspiciatis fugiat dolores doloribus?
            </p>
            </Col>
            <Col>
            <h5 className="my-3">Links</h5>
            <p><a href="">Landing Page</a></p>
            <p><a href="">Home Page</a></p>
            <p><a href="">Watch History</a></p>
            </Col>
            <Col>
            <h5 className="my-3">Guides</h5>
            <p><a href="">React</a></p>
            <p><a href="">React Bootstrap</a></p>
            <p><a href="">Bootswatch</a></p>
            </Col>
            <Col>
            <h5 className="my-3">Contact Us</h5>
            <input type="text" placeholder='Enter your Email ID' /> <Button variant='warning'className='m-3'>Subscribe</Button>
            <div className="icon text-center text-light m-5">
            <a href=""><i className="fa-brands fa-instagram fa-2xl m-3"></i></a>
            <a href=""><i className="fa-brands fa-twitter fa-2xl m-3"></i></a>
            <a href=""><i className="fa-brands fa-linkedin fa-2xl m-3"></i></a>
            <a href=""><i className="fa-brands fa-facebook fa-2xl m-3"></i></a>
            </div>
            </Col>
          </Row>
          
        </div>
      </footer>
    </div>
  )
}

export default Footer

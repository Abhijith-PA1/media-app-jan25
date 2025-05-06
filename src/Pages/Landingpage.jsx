import React from 'react'
import { Row,Col, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landingpage() {

  const navigateByUrl =useNavigate()


  return (
    <div>
        <Row className='my-5 align-item-center justify-content-between w-100'>
            <Col></Col>
            <Col lg={5}>
            <h1 style={{color:"blueviolet",fontSize:"40px"}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, corporis quidem? Tempore eveniet et esse placeat modi at ab ex, error nemo nesciunt deserunt eum soluta nihil nam eius saepe.
            Magni, exercitationem, sed asperiores ipsam error ratione soluta itaque, quas voluptate provident facilis incidunt quod? Ipsum velit, facilis, quam architecto laborum omnis magnam excepturi odit numquam ad cum voluptatem mollitia.</p>
            <Button onClick={()=>navigateByUrl('/home')} variant="success">GET STARTED</Button>
            </Col>
            <Col lg={5}>
            <img className='m-3' style={{width:"100%", height:"100%"}} src="https://media.tenor.com/r7LADqyXxkcAAAAM/music.gif" alt="" />
            </Col>
            <Col></Col>
        </Row>


        <div className="container mb-5 mt-5 d-flex-column align-items-center justify-content-center w-100">
          <h5 className='text-warning' style={{fontSize:"40px"}}>Features</h5>

          <div className='cards mb-5 mt-5 d-flex align-item-center justify-content-between w-100'>
          <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="https://images.steamusercontent.com/ugc/789753588663340202/3A577E4B5AED98E18C8193DB6AE2A9BDB8F0794B/?imw=512&imh=384&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" />
           <Card.Body>
           <Card.Title style={{color:"blueviolet"}}>Manageing Videos</Card.Title>
           <Card.Text>
            Some quick example text to build on the card title and make up the
             bulk of the card's content.
            </Card.Text>
        
           </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="https://i.gifer.com/Mr3W.gif" />
           <Card.Body>
           <Card.Title style={{color:"blueviolet"}}>Categoryized Video</Card.Title>
           <Card.Text>
            Some quick example text to build on the card title and make up the
             bulk of the card's content.
            </Card.Text>
        
           </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="https://media.tenor.com/YoFLcGT38dYAAAAM/dj-mix.gif" />
           <Card.Body>
           <Card.Title style={{color:"blueviolet"}}>Watch History</Card.Title>
           <Card.Text>
            Some quick example text to build on the card title and make up the
             bulk of the card's content.
            </Card.Text>
        
           </Card.Body>
          </Card>

          </div>
        </div>

        <div className="containe border rounded p-4 border-light mt-5 d-flex justify-content-center align-items-center overflow-auto">
          <div className="col-lg-5">
            <h4 className='text-warning'>Simple,powerfull &Fast</h4>
            <h6 className='mb-5 mt-4'>
              <span className='text-warning'>Play Everything</span>:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, corporis quidem? Tempore eveniet et esse placeat modi at ab ex, error nemo nesciunt deserunt eum soluta nihil nam eius saepe.
            </h6>

            <h6 className='mb-5 mt-4'>
              <span className='text-warning'>Categoryized Video</span>:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, corporis quidem? Tempore eveniet et esse placeat modi at ab ex, error nemo nesciunt deserunt eum soluta nihil nam eius saepe.
            </h6>

            <h6 className='mb-5 mt-4'>
              <span className='text-warning'>Watch History</span>:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, corporis quidem? Tempore eveniet et esse placeat modi at ab ex, error nemo nesciunt deserunt eum soluta nihil nam eius saepe.
            </h6>

          </div>
          <div className="col-lg-5 ms-5">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vHPae4sZbu8?si=MvkjaRZ2rCzPlfP7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>

        </div>
    </div>
  )
}

export default Landingpage

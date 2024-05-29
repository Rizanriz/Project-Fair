import React, { useState } from 'react'
import { Modal, Button, Card } from 'react-bootstrap';
// import './ProjectCard.css'

function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <div className="wrapper">
        <div className="item item1"></div>
        <div className="item item2"></div>
        <div className="item item3"></div>
        <div className="item item4"></div>
        <div className="item item5"></div>
        <div className="item item6"></div>
        <div className="item item7"></div>
        <div className="item item8"></div>
      </div> */}

      <Card onClick={handleShow} classname="shadow btn"  >
        <Card.Img variant="top" height={"200px"} src="holder.js/100px180"  />
        <Card.Body>
          <Card.Title >Card Title</Card.Title>
        </Card.Body>
      </Card>

      <Modal className='mt-5' size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src="" alt="" />
            </div>
            <div className="col-lg-6">
              <h3>Title</h3>
              <h5>Language used : <span className='text-warning'>React ,Redux toolkit</span></h5>
              <p>Project overview: <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, veritatis dolores deserunt suscipit ex cumque eius cupiditate iusto ad. Officia officiis neque error excepturi quia non earum aliquid quo culpa!</span></p>
            </div>
          </div>
          <div>
            <a href="https://github.com/Rizanriz/Spotify-Clone" target='_blank' className='btn me-3 btn-primary'><i className="fa-brands fa-github"></i></a>
            <a href="" target='_blank' className='btn btn-primary'><i className="fa-solid fa-link"></i></a>
          </div>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default ProjectCard
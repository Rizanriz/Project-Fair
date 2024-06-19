import React, { useState } from 'react'
import { Modal, Button, Card } from 'react-bootstrap';
import './ProjectCard.css'
import SERVERURL from '../../services/serverUrl';

function ProjectCard({displayData}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <div className="wrapper">
        <div className="item item1">
          <Card onClick={handleShow} classname="shadow btn"  >
            <Card.Img variant="top" height={"200px"} src="holder.js/100px180" />
            <Card.Body>
              <Card.Title >Card Title</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="item item2">
        <Card onClick={handleShow} classname="shadow btn"  >
            <Card.Img variant="top" height={"200px"} src="holder.js/100px180" />
            <Card.Body>
              <Card.Title >Card Title</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="item item3">
        <Card onClick={handleShow} classname="shadow btn"  >
            <Card.Img variant="top" height={"200px"} src="holder.js/100px180" />
            <Card.Body>
              <Card.Title >Card Title</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="item item4">
        <Card onClick={handleShow} classname="shadow btn"  >
            <Card.Img variant="top" height={"200px"} src="holder.js/100px180" />
            <Card.Body>
              <Card.Title >Card Title</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="item item5">
        <Card onClick={handleShow} classname="shadow btn"  >
            <Card.Img variant="top" height={"200px"} src="holder.js/100px180" />
            <Card.Body>
              <Card.Title >Card Title</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div> */}

      <Card onClick={handleShow} classname="shadow btn" style={{width:"300px"}}  >
        <Card.Img variant="top" height={"200px"}  src={`${SERVERURL}/uploads/${displayData?.projectImg}`}  />
        <Card.Body>
          <Card.Title >{displayData?.title}</Card.Title>
        </Card.Body>
      </Card>
     

      <Modal className='mt-5' size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src={`${SERVERURL}/uploads/${displayData?.projectImg}`} alt="" />
            </div>
            <div className="col-lg-6">
              <h3>{displayData?.title}</h3>
              <h5>Language used : <span className='text-warning'>{displayData?.languages}</span></h5>
              <p>Project overview: <span>{displayData?.overview}</span></p>
            </div>
          </div>
          <div className='mt-3'>
            <a href={displayData?.github} target='_blank' className='btn me-3 btn-primary'><i className="fa-brands fa-github"></i></a>
            <a href={displayData?.website} target='_blank' className='btn btn-primary'><i className="fa-solid fa-link"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard
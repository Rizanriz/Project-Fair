import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className='btn btn-primary m-3'><i className="fa-solid fa-plus"></i>Add Project</button>
      <Modal size='lg' show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>New project details !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
              <div className="col lg-4">
                <label>
                  <input type="text" style={{display:"none"}} />
                  <img height={"200px`"} className='img-fluid' src="https://content.hostgator.com/img/weebly_image_sample.png " alt="" />
                </label>
              </div>
              <div className="col lg-8">
                <div className="m-4">
                  <input type="text" className='form-control' placeholder='Project title'/>
                </div>
                <div className="m-4">
                  <input type="text" className='form-control' placeholder='Langusge used in the project'/>
                </div>
                <div className="m-4">
                  <input type="text" className='form-control' placeholder='project Github link'/>
                </div>
                <div className="m-4">
                  <input type="text" className='form-control' placeholder='Project website link'/>
                </div>
              </div>
          </div>
          <div>
            <input type="text" className='form-control m-2' placeholder='Project overview' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import uploadImg from '../assets/upload.png'

function Add() {

  const [imgStatus, setImgStatus] = useState(false);
  const [preview,setPreview] = useState(uploadImg)
  const [projectdetail, setProjectdetail] = useState({
    title: "", languages: "", githuib: "", website: "", overview: "", projectImg:""
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (projectdetail.projectImg && (
      projectdetail.projectImg.type === "image/jpeg" ||
      projectdetail.projectImg.type === "image/jpg" ||
      projectdetail.projectImg.type === "image/png"
    )) {
      setImgStatus(true);
      setPreview(URL.createObjectURL(projectdetail.projectImg))
    } else {
      setImgStatus(false);
      setProjectdetail({ ...projectdetail, projectImg:"" });
    }
  }, [projectdetail.projectImg]);

  return (
    <>
      <button onClick={handleShow} className='btn btn-primary m-3'>
        <i className="fa-solid fa-plus"></i> Add Project
      </button>

      <Modal size='lg' show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>New project details !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col lg-4">
              <label>
                <input type="file" style={{ display: "none" }} onChange={e => setProjectdetail({ ...projectdetail, projectImg: e.target.files[0] })} />
                <img height={"200px"} width={"400px"} className='img-fluid' src={preview} alt="" />
              </label>
              {!imgStatus &&
                <div className='text-warning fw-bolder m-2'>
                  Upload only the following file types (jpeg, jpg, png) here !!
                </div>
              }
            </div>
            <div className="col lg-8">
              <div className="m-4">
                <input type="text" className='form-control' placeholder='Project title'
                  value={projectdetail.title} onChange={e => setProjectdetail({ ...projectdetail, title: e.target.value })} />
              </div>
              <div className="m-4">
                <input type="text" className='form-control' placeholder='Language used in the project'
                  value={projectdetail.languages} onChange={e => setProjectdetail({ ...projectdetail, languages: e.target.value })} />
              </div>
              <div className="m-4">
                <input type="text" className='form-control' placeholder='Project Github link'
                  value={projectdetail.githuib} onChange={e => setProjectdetail({ ...projectdetail, githuib: e.target.value })} />
              </div>
              <div className="m-4">
                <input type="text" className='form-control' placeholder='Project website link'
                  value={projectdetail.website} onChange={e => setProjectdetail({ ...projectdetail, website: e.target.value })} />
              </div>
            </div>
          </div>
          <div>
            <input type="text" className='form-control m-2' placeholder='Project overview'
              value={projectdetail.overview} onChange={e => setProjectdetail({ ...projectdetail, overview: e.target.value })} />
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
  );
}

export default Add;

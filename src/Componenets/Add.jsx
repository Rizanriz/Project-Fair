import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import uploadImg from '../assets/upload.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../../services/allAPI';

function Add() {

  const [imgStatus, setImgStatus] = useState(false);
  const [preview, setPreview] = useState(uploadImg)
  const [projectdetail, setProjectdetail] = useState({
    title: "", languages: "", github: "", website: "", overview: "", projectImg: ""
  });
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setProjectdetail({ title: "", languages: "", github: "", website: "", overview: "", projectImg: "" })
  };
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
      setProjectdetail({ ...projectdetail, projectImg: "" });
    }
  }, [projectdetail.projectImg]);

  const handleAddProject = async () => {
    const { title, languages, github, website, overview, projectImg } = projectdetail

    if (projectdetail.title && projectdetail.languages && projectdetail.github && projectdetail.website &&
      projectdetail.overview && projectdetail.projectImg) {
      //ai call

      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("languages", languages)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("overview", overview)
      reqBody.append("projectImg", projectImg)

      const token = sessionStorage.getItem("token")
      console.log(token);
      if (token) {
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        try {
          const result = await addProjectAPI(reqBody,reqHeader)
          if (result.status==200) {
            handleClose();
            toast.success("Project added successfully");
          } else {
            toast.warning(result.response.data)
          }
        } catch (err) {
          console.log(err);
        }
      } 
    } else {
      toast.warning("Please fill the form complitily")
    }
  }

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
                  value={projectdetail.github} onChange={e => setProjectdetail({ ...projectdetail, github: e.target.value })} />
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
          <Button variant="primary" onClick={handleAddProject}>Add</Button>
          <ToastContainer position='top-center' theme='colored' autoClose={3000} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;

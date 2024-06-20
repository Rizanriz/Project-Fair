import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import SERVERURL from '../../services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Edit({ projects }) {

  const [projectdetail, setProjectdetail] = useState({
    id: projects?._id, title: projects?.title, languages: projects?.languages, github: projects?.github,
    website: projects?.website, overview: projects?.overview, projectImg: ""
  });

  const [imgStatus, setImgStatus] = useState(true);
  const [preview, setPreview] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false) //when cancel make values to defualt values
    setProjectdetail({
      id: projects?._id, title: projects?.title, languages: projects?.languages, github: projects?.github,
      website: projects?.website, overview: projects?.overview, projectImg: ""
    })
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (projectdetail.projectImg) {
      setPreview(URL.createObjectURL(projectdetail.projectImg))
      setImgStatus(true);
    } else {
      setImgStatus(false);
      setPreview("")
      setProjectdetail({ ...projectdetail, projectImg: "" })
    }
  }, [projectdetail.projectImg])

  const hamdleUpdateProject = () =>{
    const { title, languages, github, website, overview, projectImg } = projectdetail

    if (title && languages && github && website && overview) {
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("languages", languages)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("overview", overview)
      preview?reqBody.append("projectImg",projectImg) : reqBody.append("projectImg",projects.projectImg)
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": preview ? "multipart/form-data" : "application/json",
          "Authorization":`Bearer ${token}`
        }
      }
    } else {
      toast.warning("Please fill the form completely!!!")
    } 
  }

  return (
    <div>
      <button onClick={handleShow} className='btn'><i className='fa-solid fa-edit'></i></button>

      <Modal size='lg' show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>New project details !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col lg-4">
              <label>
                <input type="file" style={{ display: "none" }} onChange={e => setProjectdetail({ ...projectdetail, projectImg: e.target.files[0] })} />
                <img height={"200px"} width={"400px"} className='img-fluid' src={preview ? preview : `${SERVERURL}/uploads/${projects?.projectImg}`} alt="" />
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
          <Button onClick={hamdleUpdateProject} variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </div>
    
  )
}

export default Edit
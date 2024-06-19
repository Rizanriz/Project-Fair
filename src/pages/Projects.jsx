import React, { useEffect, useState } from 'react'
import Header from '../Componenets/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Componenets/ProjectCard'
import { allProjectAPI } from '../../services/allAPI'

function Project() {

  const [allProjects, setAllprojects] = useState([])

  console.log(allProjects);

  useEffect(() => {
    getAllProjects()
  }, [])


  const getAllProjects = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await allProjectAPI(reqHeader)
        console.log(result);
        if (result.status == 200) {
          setAllprojects(result.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <>
      <Header />
      <div style={{ marginTop: "150px" }} className='container-fluid'>
        <div className='d-flex justify-content-between align-items-center'>
          <h1>All Projects</h1>
          <input type="text" className='form-control w-25' placeholder='Search projects...' />
        </div>
        <Row>
          {
            allProjects?.length > 0 ?
              allProjects?.map(projects => (
                <Col key={projects._id} className='mb-5' sm={12} md={6} lg={3}>
                  <ProjectCard  displayData={projects}/>
                </Col>
              ))

              :
              <div className="tect-danger text-center m-5">Project not found</div>
          }
        </Row>
      </div>
    </>
  )
}

export default Project
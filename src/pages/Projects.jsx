import React from 'react'
import Header from '../Componenets/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Componenets/ProjectCard'

function Project() {
  return (
    <>
      <Header />
      <div style={{marginTop:"150px"}} className='container-fluid'>
        <div className='d-flex justify-content-between align-items-center'>
          <h1>All Projects</h1>
          <input type="text" className='form-control w-25' placeholder='Search projects...' />
        </div>
        <Row>
          <Col className='mb-3' sm={12} md={6} lg={4}>
            <ProjectCard/>
          </Col>
          <Col className='mb-3' sm={12} md={6} lg={4}>
            <ProjectCard/>
          </Col>
          <Col className='mb-3' sm={12} md={6} lg={4}>
            <ProjectCard/>
          </Col>
          <Col className='mb-3' sm={12} md={6} lg={4}>
            <ProjectCard/>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Project
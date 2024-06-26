import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img1 from '../assets/img1.png'
import ProjectCard from '../Componenets/ProjectCard'
import { Card } from 'react-bootstrap'
import { homeProjectAPI } from '../../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {

  const [homeProjects, setHomeProjects] = useState([])
  const navigate = useNavigate()

  console.log(homeProjects);
  useEffect(() => {
    getHomeProjects()
  }, [])

  const getHomeProjects = async () => {
    try {
      const result = await homeProjectAPI()
      // console.log(result);

      if (result.status == 200) {
        setHomeProjects(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleProject = ()=>{
    if (sessionStorage.getItem('token')) {
      navigate('projects')
    } else {
      toast.warning("Please login to get full access to our projects")
    }
  }
  return (
    <>
      <div style={{ minHeight: "100vh" }} className="d-flex justify-content-center align-items-center rounded shadow w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: "70px" }}><i class="fa-solid fa-diagram-project"></i> Project Fair</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab voluptatum in excepturi amet eaque aspernatur, nisi sint et expedita aliquid esse! Ea beatae quo perferendis est at. Hic, porro?</p>
              {sessionStorage.getItem("token") ?
                <Link to={'/dashboard'} className='btn btn-warning mt-3'>MANAGE YOUR PROJECTS</Link> :
                <Link to={'/login'} className='btn btn-warning mt-3'>START TO EXPLORE</Link>}
            </div>
            <div className="col-lg-6">
              <img className='img-fluid' src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5 text-center'>
        <h2>Explore out project</h2>
        <marquee>
        <div className="d-flex">
          {
            homeProjects?.length > 0 &&
            homeProjects?.map((project) => (
              <div key={project?._id} className=" w-100">
                <ProjectCard displayData={project} />
              </div>
            ))
          }
        </div>
        </marquee>
        <button onClick={handleProject} className='btn btn-link mt-3'>CLICK HERE TO VIEW MORE PROJECTS</button>
      </div>
      <div className="d-flex align-items-center flex-column mt-5">
        <h2>Our Testimonials </h2>
        <div className='d-flex align-items-center justify-content-center mt-3 gap-3 w-100'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex align-items-center justify-content-center flex-column'>Card Title
                <img width={"60px"} height={"60px"} className='rounded-circle img-fluid m-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrGr88ctnkI1eXvOc6CuertlmNH6ihhkyqnmyNtsuaFaIYGGrvBglHljTNGC_LHFL-su0&usqp=CAU" alt="img" />
                <span>Max</span>
              </Card.Title>
              <Card.Text>
                <div className='d-flex justify-content-center'>
                  <div className='fa-solid fa-star text-warning'></div>
                  <div className='fa-solid fa-star text-warning'></div>
                  <div className='fa-solid fa-star text-warning'></div>
                  <div className='fa-solid fa-star text-warning'></div>
                  <div className='fa-solid fa-star text-warning'></div>
                </div>
                <p>Some quick example text to build on the card title and make up the
                  bulk of the card's content.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex align-items-center justify-content-center flex-column'>Card Title
                <img width={"60px"} height={"60px"} className='rounded-circle img-fluid m-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA0suthznJBY8lm4EcdA-lLPTX5nN5DxvA6w&s" alt="img" />
                <span>Billie</span>
              </Card.Title>
              <Card.Text>
                <div className='d-flex justify-content-center'>
                  <div className='fa-solid fa-star text-warning'></div>
                  <div className='fa-solid fa-star text-warning'></div>
                  <div className='fa-solid fa-star text-warning'></div>
                  <div className='fa-solid fa-star text-warning'></div>
                  <div className='fa-solid fa-star text-warning'></div>
                </div>
                <p>Some quick example text to build on the card title and make up the
                  bulk of the card's content.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex align-items-center justify-content-center flex-column'>Card Title
                <img width={"60px"} height={"60px"} className='rounded-circle img-fluid m-3' src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="img" />
                <span>John</span>
              </Card.Title>
              <Card.Text>
                <div className='d-flex justify-content-center'>
                  <div className='fa-solid fa-star text-warning'></div>
                  <div className='fa-solid fa-star text-warning'></div>
                  <div className='fa-solid fa-star text-warning'></div>
                  <div className='fa-solid fa-star text-warning'></div>
                  <div className='fa-solid fa-star text-warning'></div>
                </div>
                <p>Some quick example text to build on the card title and make up the
                  bulk of the card's content.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Home
import React, { useContext, useEffect, useState } from 'react'
import Add from './Add'
import Edit from './Edit'
import { deleteProjectAPI, userProjectAPI } from '../../services/allAPI'
import { addResponceContext, editResponseContext } from '../context/ContextAPI'

function View() {

  const [editResponse, setEditResponse] = useContext(editResponseContext)
  const [userProjects, setUserProjects] = useState([])
  const [addResponce, setAddresponce] = useContext(addResponceContext)

  console.log(userProjects);
  useEffect(() => {
    getUserProjects()
  }, [addResponce, editResponse])


  const getUserProjects = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await userProjectAPI(reqHeader)
        // console.log(result);
        if (result.status == 200) {
          setUserProjects(result.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  const handleDeletProject = async (pid) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await deleteProjectAPI(pid,reqHeader)
        if (result.status==200) {
          getUserProjects()
        } else {
          console.log(result);
        }
      } catch (error) {
        console.log(err);
      }
    }
  }
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <h3>All projects</h3>
        <div><Add /> </div>
      </div>
      <div className='mt-3'>
        {
          userProjects?.length > 0 ?
            userProjects?.map(projects => (
              <div key={projects?._id} className='border rounded p-2 d-flex justify-content-between mb-3'>
                <h5 className='m-3 '>{projects?.title}</h5>
                <div className='d-flex align-items-center justify-content-center'>
                  <div className='me-3'><Edit projects={projects} /></div>
                  <button className='btn btn-warning me-3'><a href={projects?.github}><i className="fa-brands fa-github"></i></a></button>
                  <button onClick={() => handleDeletProject(projects?._id)} className='btn btn-warning me-3'><i className="fa-solid fa-trash"></i></button></div>
              </div>
            ))
            :
            <div className="text-danger text-center">No projects uploaded</div>
        }
      </div>
    </div>
  )
}

export default View
import React from 'react'
import Add from './Add'
import Edit from './Edit'

function View() {
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <h3>All projects</h3>
        <div><Add /> </div>
      </div>
      <div className='mt-3'>
        <div className='border rounded p-2 d-flex justify-content-between mb-3'>
          <h5 className='m-3 '>Title</h5>
          <div className='d-flex align-items-center justify-content-center'>
            <div className='me-3'><Edit /></div>
            <button className='btn btn-warning me-3'><a href="#"><i className="fa-brands fa-github"></i></a></button>
            <button className='btn btn-warning me-3'><i className="fa-solid fa-trash"></i></button></div>
        </div>
      </div>
    </div>
  )
}

export default View
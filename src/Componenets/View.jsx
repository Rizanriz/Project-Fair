import React from 'react'
import Add from './Add'
import Edit from './Edit'

function View() {
  return (
    <div>
      <div>
        <h2>All projects</h2>
        <div><Add /> </div>
      </div>
      <div className='mt-3'>
        <div className='border rounded p-2 d-flex justify-content-between mb-3'>
          <h4 className='m-3 '>Title</h4>
          <div>
            <div><Edit /></div>
            <div className='btn btn-warning me-3'><a href="#"><i className="fa-brands fa-github"></i></a></div>
            <button className='btn btn-warning me-2'><i className="fa-solid fa-trash"></i></button></div>
        </div>
      </div>
    </div>
  )
}

export default View
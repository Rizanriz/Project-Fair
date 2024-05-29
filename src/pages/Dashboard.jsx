import React from 'react'
import Header from '../Componenets/Header'
import View from '../Componenets/View'
import Profile from '../Componenets/Profile'

function Dashboard() {
  return (
    <div>
      <Header insideDashboard={true}/>
      <div className='container-fluid' style={{marginTop:"100px"}}>
        <div className='row mt-3'>
            <div className="col-lg-8">
              <h1>Welcom <span>User</span></h1>
              <View/>
            </div>
            <div className="col-lg-4">
              <Profile/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
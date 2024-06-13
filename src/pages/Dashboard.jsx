import React, { useEffect, useState } from 'react'
import Header from '../Componenets/Header'
import View from '../Componenets/View'
import Profile from '../Componenets/Profile'

function Dashboard() {

  const [username,setUsername] = useState()

  useEffect(()=>{
    if (sessionStorage.getItem("user")) {
      setUsername(JSON.parse(sessionStorage.getItem("user")).username)
    }else{
      setUsername("")
    }
  },[])

  return (
    <div style={{height:"100vh"}}>
      <Header insideDashboard={true}/>
      <div className='container-fluid' style={{marginTop:"100px"}}>
        <div className='row mt-3'>
            <div className="col-lg-8">
              <h1>Welcom <span>{username}</span></h1>
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
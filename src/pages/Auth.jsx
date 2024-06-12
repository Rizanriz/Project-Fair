import React, { useState } from 'react'
import { FloatingLabel, Form, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../../services/allAPI';

const Auth = ({ insideRegister }) => {

  const navigate = useNavigate()
  const [isLoading,setIsLoading] = useState(false)
  const [userData, setUserData] = useState({
    username: "", email: "", password: ""
  })
  console.log(userData);

  const handleRegister = async (e) => {
    e.preventDefault()
    if (userData.username && userData.email && userData.password) {
      try {
        const result = await registerAPI(userData)
        console.log(result);
        if (result.status == 200) {
          toast.success(`Welcome ${result?.data?.username} `)
          setUserData({ username: "", email: "", password: "" })
          navigate('/login')
        } else {
          if (result.response.status == 406) {
            toast.error(result.response.data)
            // setUserData({username:"",email:"",password:""})
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.warning("Please fill the form complitily")
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    if (userData.email && userData.password) {
      try {
        const result = await loginAPI(userData)
        console.log(result);
        if (result.status == 200) {
          setIsLoading(true)
          sessionStorage.setItem("user", JSON.stringify(result.data.user)) //to keep userdata
          sessionStorage.setItem("token",result.data.tocken)
          // toast.warning(`welcome ${result.data.user.username}`)
          setUserData({username:"",email:"",password:""})
          setTimeout(() => {
            setIsLoading(false)
            navigate('/')
          }, 2000);
        } else {
          if (result.response.status == 400) {
            toast.warning(result.response.data)
          }
        }
      }catch(err) {
        console.log(err);
      }
    } else {
      toast.warning("Please fill the form complitily")
    }
  }

  return (
    <>
      <div style={{ width: "100%", height: "100vh" }} className='d-flex align-items-center justify-content-center'>
        <div className="container w-75">
          <div className="card shadow p-2">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img className='w-100' src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png?f=webp" alt="" />
              </div>
              <div className="col-lg-6">
                <h1 className='fw-bolder mt-2'><i class="fa-brands fa-opencart"></i>  Project Fair</h1>
                <h5 className='fw-bolder mt-2 mb-4'>Sign {insideRegister ? "Up" : "In"} to your account</h5>
                <form>
                  {
                    insideRegister &&
                    <>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                        className="mb-3">
                        <Form.Control type="text" placeholder="Username" value={userData.username}
                          onChange={e => setUserData({ ...userData, username: e.target.value })} />
                      </FloatingLabel>
                    </>
                  }
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3">

                    <Form.Control type="email" placeholder="name@example.com" value={userData.email}
                      onChange={e => setUserData({ ...userData, email: e.target.value })} />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" value={userData.password}
                      onChange={e => setUserData({ ...userData, password: e.target.value })} />
                  </FloatingLabel>
                  {
                    insideRegister ?
                      <div className='mt-3'>
                        <button onClick={handleRegister} className='btn btn-primary mb-2'>Register</button>
                        <p>Already have an account ? Click here to <Link to={'/login'}>Login</Link></p>
                      </div>
                      :
                      <div className='mt-3'>
                        <button onClick={handleLogin} className='btn btn-primary mb-2 '>Login....
                           {isLoading && <Spinner animation="border" variant="light" />}</button>
                        
                        <p>New user ? Click here to <Link to={'/register'}>Register</Link></p>
                      </div>
                  }
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={3000} />
      </div>
    </>
  )
}

export default Auth
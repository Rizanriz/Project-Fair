import React, { useEffect, useState } from 'react';
import { Collapse } from 'react-bootstrap';
import SERVERURL from '../../services/serverUrl';
import { toast } from 'react-toastify'; 
import { editUserAPI } from '../../services/allAPI';

function Profile() {

  const [preview, setPreview] = useState("")
  const [existingImg, setExistingImg] = useState("")
  const [userDetails, setUserDetails] = useState({
    username: "", email: "", password: "", github: "", linkedin: "", profilePic: ""
  })
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const existingUserDetails = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({
        ...userDetails, username: existingUserDetails.username, email: existingUserDetails.email, password: existingUserDetails.password,
        github: existingUserDetails.github, linkedin: existingUserDetails.linkedin,
      })
      setExistingImg(existingUserDetails.profilePic)
    }
  }, [open])

  useEffect(() => {
    if (userDetails.profilePic) {
      setPreview(URL.createObjectURL(userDetails.profilePic))
    } else {
      setPreview("")
    }
  }, [userDetails.profilePic])

  const handleUpdateProfile = async ()=>{
    const {username,email,password,github,linkedin,profilePic} = userDetails
    if(github && linkedin){
      const reqBody = new FormData()
      reqBody.append("username", username)
      reqBody.append("email", email)
      reqBody.append("password", password)   
      reqBody.append("github",github)
      reqBody.append("linkedin",linkedin)
      preview ? reqBody.append("profilePic",profilePic) : reqBody.append("profilePic",existingImg)

      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": preview ? "multipart/form-data" : "application/json",
          "Authorization":`Bearer ${token}`
        }
        // api call
        try {
          const result = await editUserAPI(reqBody,reqHeader)
          if (result.status==200) {
            setOpen(!open)
            sessionStorage.setItem("user",JSON.stringify(result.data))
          }else{
            console.log(result);
          }
        } catch (err) {
          console.log(err);
        }
      }

    }else{
      toast.error("Please fill the form completely")
    }
  }

  return (
    <>
      <div className="d-flex justify-content-evenly">
        <h3>Profile</h3>
        <button onClick={() => setOpen(!open)} className="btn btn-warning">
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>

      <Collapse in={open} >
        <div>
          <div className="row shadow p-3 mt-3">
            <label className="text-center mb-3">
              <input type="file" style={{ display: 'none' }} onChange={e => setUserDetails({
                ...userDetails,
                profilePic: e.target.files[0] })} />
              {
                existingImg == "" ?
                  <img width="300px" height="300px" className="rounded-circle" src={preview ? preview : "https://static.vecteezy.com/system/resources/previews/020/213/738/original/add-profile-picture-icon-upload-photo-of-social-media-user-vector.jpg"} alt="Profile" />
                  :
                  <img width="250px" height="250px" className="rounded-circle" src={preview ? preview : `${SERVERURL}/uploads/${existingImg}`} alt="Profile" />
              }
            </label>
            <div className="mb-2">
              <input value={userDetails.github} onChange={e => setUserDetails({ ...userDetails, github: e.target.value })}
                type="text" placeholder="GITHUB URL" className="form-control" />
            </div>
            <div className="mb-2">
              <input value={userDetails.linkedin} onChange={e => setUserDetails({ ...userDetails, linkedin: e.target.value })}
                type="text" placeholder="LINKEDIN URL" className="form-control" />
            </div>
            <div className="d-grid">
              <button onClick={handleUpdateProfile} className="btn btn-warning">Update profile</button>
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
}

export default Profile;

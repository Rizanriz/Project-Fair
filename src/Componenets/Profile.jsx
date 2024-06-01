import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

function Profile() {
  const [open, setOpen] = useState(false);

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
              <input type="file" style={{ display: 'none' }} />
              <img width="200px" height="200px" className="rounded-circle" src="https://static.vecteezy.com/system/resources/previews/020/213/738/original/add-profile-picture-icon-upload-photo-of-social-media-user-vector.jpg" alt="Profile"
              />
            </label>
            <div className="mb-2">
              <input type="text" placeholder="GITHUB URL" className="form-control" />
            </div>
            <div className="mb-2">
              <input type="text" placeholder="LINKEDIN URL" className="form-control" />
            </div>
            <div className="d-grid">
              <button className="btn btn-warning">Update profile</button>
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
}

export default Profile;

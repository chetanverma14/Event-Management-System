import React from 'react'
import { Link } from 'react-router-dom'
function Signuppage() {
  return (
    <div className='Home'> <h1 className='title'>Event Management System-Admin Signup Page</h1> <br></br><br></br><br></br><br></br>
      <div class="col-auto d-flex">
        <label for="text">Name</label>
        <input type="text" readonly class="form-control" id="username" placeholder='Vendor' />
      </div>
      <br></br>

      <div class="col-auto d-flex">
        <label for="text">Email</label>
        <input type="text" readonly class="form-control" id="username" placeholder='Vendor' />
      </div>
      <br></br>

      <div class="col-auto d-flex">
        <label for="inputPassword2">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Vendor" />
      </div>
      <br></br>

      <div>
        <lable>Category </lable>
        <select name="" id="">
          <option>Catering</option>
          <option>Florist</option>
          <option>Decoration</option>
          <option>Lighting</option>
        </select>
      </div>
      <br></br>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3"><label for="text">Signup</label><Link to='/setreminder'>Signup</Link></button>
      </div>
    </div>
  )
}

export default Signuppage
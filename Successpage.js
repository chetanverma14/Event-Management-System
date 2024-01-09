import React from 'react'
import { Link } from 'react-router-dom'
function Successpage() {
  return (
    <div className='Home'>  Pop Up 
    <p>Thank You</p>
     <h3 className='title'>Total Ammount</h3> <br></br><br></br>
      <div class="col-auto d-flex">
        <label for="text">Name</label>
        <input type="text" readonly class="form-control" id="username" placeholder='your name' />
      </div>
      <br></br>

      <div class="col-auto d-flex">
        <label for="text">Email</label>
        <input type="text" readonly class="form-control" id="username" placeholder='your email' />
      </div>
      <br></br>

      <div class="col-auto d-flex">
        <label for="inputPassword2">Address</label>
        <input type="text" class="form-control" id="password" placeholder="your address" />
      </div>
      <br></br>

      <div class="col-auto d-flex">
        <label for="inputPassword2">City</label>
        <input type="text" class="form-control" id="password" placeholder="your city" />
      </div>
      <br></br>

      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3"><label for="text">Continue Shoping</label><Link to='/addnewitem'>Signup</Link></button>
      </div>
    </div>
  )
}

export default Successpage
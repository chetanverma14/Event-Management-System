import React from 'react'
import { Link } from 'react-router-dom'
function Disablereminder() {
  return (
    <div className='Home'> <h1 className='title'>Event Management System-User Page</h1> <br></br><br></br><br></br><br></br>
            
                <div class="col-auto d-flex">
                    <label for="text">UserId</label>
                    <input type="text" readonly class="form-control" id="username" placeholder='User Id' />
                </div>
                <br></br>
                <div class="col-auto d-flex">
                    <label for="inputPassword2">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="User Password" />
                </div>
                <br></br>
                <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Login</label><Link to='/userpage'>Login</Link></button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Signup</label><Link to='/usersignuppage'>Signup</Link></button>
                </div>
            </form>
        </div>
  )
}

export default Disablereminder
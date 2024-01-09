import React from 'react'
import { Link } from 'react-router-dom'
function Deletereminder() {
  return (
    <div className='Home'>
    
            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Home</label><Link to='/homepage'>Home</Link></button>
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Logout</label><Link to='/logoutpage'>logout</Link></button>
            </form>

            <h1 className='title'>Welcome Admin</h1> <br></br><br></br>

            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Maintain User</label><Link to='/enablereminder'>Login</Link></button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Maintain Vendor</label><Link to='/viewyourreminder'>Cancel</Link></button>
                </div>
            </form>
        </div>
  )
}

export default Deletereminder
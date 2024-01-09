import React from 'react'
import { Link } from 'react-router-dom'
function Enablereminder() {
  return (
    <div className='Home'>
            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Home</label><Link to='/homepage'>Home</Link></button>
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Logout</label><Link to='/logoutpage'>logout</Link></button>
            </form>

            <h1 className='title'>Maintain User</h1> <br></br><br></br>

            
                <h3>Membership</h3>
                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Add</label><Link to='/enablereminder'>Add</Link></button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Update</label><Link to='/updatepage'></Link></button>
                </div>
           
                <h3>User Management</h3>
                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Add</label><Link to='/enablereminder'>Add</Link></button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Update</label><Link to='/updatepage'>Update</Link></button>
                </div>
        </div>
  )
}

export default Enablereminder
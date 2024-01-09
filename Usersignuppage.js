import React from 'react'
import { Link } from 'react-router-dom'
function Usersignuppage() {
    return (
        <div className='Home'>
            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Chart</label><Link to='/chartpage'>Chart</Link></button>
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Back</label><Link to='/homepage'>Back</Link></button>
            </form>

            <h1 className='title'>Event Management System-User Signup Page</h1> <br></br><br></br>
            <div class="col-auto d-flex">
                <label for="text">Name</label>
                <input type="text" readonly class="form-control" id="username" placeholder='User' />
            </div>
            <br></br>

            <div class="col-auto d-flex">
                <label for="text">Email</label>
                <input type="text" readonly class="form-control" id="username" placeholder='User' />
            </div>
            <br></br>

            <div class="col-auto d-flex">
                <label for="inputPassword2">Password</label>
                <input type="password" class="form-control" id="password" placeholder="User" />
            </div>
            <br></br>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Signup</label><Link to='/disablereminder'>Signup</Link></button>
            </div>
        </div>
    )
}

export default Usersignuppage
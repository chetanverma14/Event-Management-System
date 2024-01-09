import React from 'react'
import { Link } from 'react-router-dom'
function Modifyreminder() {
    return (
        <div className='Home'>
            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Chart</label><Link to='/chartpage'>Chart</Link></button>
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Back</label><Link to='/homepage'>Back</Link></button>
            </form>

            <h1 className='title'>Event Management System-Vendor Page</h1> <br></br><br></br>

            <div class="col-auto d-flex">
                <label for="text">UserId</label>
                <input type="text" readonly class="form-control" id="username" placeholder='Vender User Id' />
            </div>
            <br></br>
            <div class="col-auto d-flex">
                <label for="inputPassword2">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Vendor Password" />
            </div>
            <br></br>
            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Login</label><Link to='/vendorpage'>Login</Link></button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Cancel</label><Link to='/logoutpage'>Cancel</Link></button>
                </div>
            </form>
        </div>
    )
}

export default Modifyreminder
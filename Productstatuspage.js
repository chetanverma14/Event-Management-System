import React from 'react'
import { Link } from 'react-router-dom'
function Productstatuspage() {
    return (
        <div className='Home'>
            <h1 className='title'>Product Status</h1> <br></br><br></br>
            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Home</label><Link to='/homepage'>Home</Link></button>

                <button type="submit" class="btn btn-primary mb-3"><label for="text">Logout</label><Link to='/logoutpage'>logout</Link></button>
            </form>

            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Name</label></button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Email</label></button>
                </div>
                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Address</label></button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Status</label></button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Update</label><Link to='/updatepage'>Cancel</Link></button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Delete</label></button>
                </div>
            </form>
        </div>
    )
}

export default Productstatuspage
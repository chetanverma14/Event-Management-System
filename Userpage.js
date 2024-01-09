import React from 'react'
import { Link } from 'react-router-dom'
function Userpage() {
    return (
        <div className='Home'>

            <h1 className='title'>Welcome User</h1> <br></br><br></br>

            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Vendor</label><Link to='/vendor'>Vendor</Link></button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Cart</label><Link to='/cartpage'>cart</Link></button>
                </div>
                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Guest List</label><Link to='/guestlist'>Guest</Link></button>
                </div>
                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Order Status</label><Link to='/orderstatus'>Order</Link></button>
                </div>
            </form> 
            <br></br><br></br>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Logout</label><Link to='/logoutpage'>logout</Link></button>
            </div>
        </div>
    )
}

export default Userpage
import React from 'react'
import { Link } from 'react-router-dom'
function Cartpage() {
    return (
        <div className='Home'>

            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Home</label><Link to='/homepage'>Home</Link></button>
                <button type="submit" class="btn btn-primary mb-3"><label for="text">View Product</label><Link to='/chartpage'>View</Link></button>
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Product Status</label><Link to='/productstatuspage'>Product</Link></button>
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Request Item</label><Link to='/requestitempage'>Request</Link></button>
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Logout</label><Link to='/logoutpage'>logout</Link></button>
            </form>
            <h2 className='title'>Shoping Cart</h2> <br></br><br></br>
            <br></br>

            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Proceed to CheckOut</label><Link to='/successpage'>add</Link></button>
            </div>
        </div>
    )
}

export default Cartpage
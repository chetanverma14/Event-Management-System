import React from 'react'
import { Link } from 'react-router-dom'
function Addnewitem() {
    return (
        <div className='Home'>

            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <p>Welcome : 'Vendor Name',,,,,,,,,,,,,,</p>
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Product Status</label><Link to='/productstatuspage'>Product</Link></button>
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Request Item</label><Link to='/requestitempage'>Request</Link></button>
                <button type="submit" class="btn btn-primary mb-3"><label for="text">View Product</label><Link to='/viewproductpage'>View</Link></button>
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Logout</label><Link to='/logoutpage'>logout</Link></button>
            </form>

            <div class="col-auto d-flex">
                <label for="text">Product Name</label>
                <input type="text" readonly class="form-control" id="username" placeholder='Name' />
            </div>
            <br></br>
            <div class="col-auto d-flex">
                <label for="text">Product Price</label>
                <input type="number" readonly class="form-control" id="username" placeholder='Type price' />
            </div>
            <br></br>
            <div class="col-auto d-flex">
                <label for="inputPassword2">Product Iamge</label>
                <img src='' class="form-control" id="password"/>
            </div>
            <br></br>

            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Add The Product</label><Link to='/successpage'>add</Link></button>
            </div>
        </div>
    )
}

export default Addnewitem
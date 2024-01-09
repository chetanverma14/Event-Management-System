import React from 'react'
import { Link } from 'react-router-dom'
function Vendorpage() {
  return (
    <div className='Home'>

            <h1 className='title'>Welcome Vendor</h1> <br></br><br></br>

            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Your Item</label><Link to='/youritem'>Your Item</Link></button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Add New Item</label><Link to='/addnewitem'>Add Item</Link></button>
                </div>
                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Transaction</label><Link to='/transacton'>Transaction</Link></button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Logout</label><Link to='/logoutpage'>logout</Link></button>
                </div>
            </form>
        </div>
  )
}

export default Vendorpage
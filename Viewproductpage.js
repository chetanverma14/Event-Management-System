import React from 'react'
import { Link } from 'react-router-dom'
function Viewproductpage() {
  return (
    <div className='Home'>
            
            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Home</label><Link to='/homepage'>Home</Link></button>
            
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Logout</label><Link to='/logoutpage'>logout</Link></button>
            </form>
            <button type="submit" class="btn btn-primary mb-3"><label for="text">Vendor Name</label></button>
            <button type="submit" class="btn btn-primary mb-3"><label for="text">Products</label></button>

            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Product 1</label></button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Product 2</label></button>
                </div>
                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Product 3</label></button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Product 4</label></button>
                </div>
            </form>
        </div>
  )
}

export default Viewproductpage
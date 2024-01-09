import React from 'react'
import { Link } from 'react-router-dom'
function Requestitempage() {
  return (
    <div className='Home'>
            Vendor
            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Home</label><Link to='/homepage'>Home</Link></button>
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Request items</label></button>
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Logout</label><Link to='/logoutpage'>logout</Link></button>
            </form>

            

            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Item 1</label></button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Item 2</label></button>
                </div>
                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Item 3</label></button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Item 4</label></button>
                </div>
            </form>
        </div>
  )
}

export default Requestitempage
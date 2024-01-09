import React from 'react'
import { Link } from 'react-router-dom'
function Updatepage() {
  return (
    <div className='Home'>
            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Home</label><Link to='/homepage'>Home</Link></button>
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Logout</label><Link to='/logoutpage'>logout</Link></button>
            </form>


            <div className='update'>
            <h3>Update</h3> <br></br>
            
            <input type='radio' name='one'/>Received
            <input type='radio' name='one'/>Ready for Shipping
            <input type='radio' name='one'/>Out of Delivery

            </div> 
            <br></br>
            <h3 className='title'>Update</h3>
        </div>
  )
}

export default Updatepage
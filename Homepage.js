import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
function Homepage() {
    return (
        <div>

            <div className='Home'>
            <h1 className='title'>Event Management System - Home Page</h1> <br></br><br></br><br></br><br></br>
                <button><Link to='/setreminder'>ADMIN LOGIN PAGE</Link></button> <br></br>
                <button><Link to='/modifyreminder'>VENDER LOGIN PAGE</Link></button> <br></br>
                <button><Link to='/disablereminder'>USER LOGIN PAGE</Link></button> <br></br>

                <button type="submit" class="btn btn-primary mb-3"><label for="text">Back</label><Link to='/'>Back</Link></button>
                <Link to='/logoutpage'>Logout</Link>
            </div>

        </div>
    )
}

export default Homepage
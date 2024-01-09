import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Loginpage from './Loginpage'
import Logoutpage from './Logoutpage'
import Setreminder from './Setreminder'
import Modifyreminder from './Modifyreminder'
import Disablereminder from './Disablereminder'
import Deletereminder from './Deletereminder'
import Enablereminder from './Enablereminder'
import Viewyourreminder from './Viewyourreminder'
import Signuppage from './Signuppage'
import Updatepage from './Updatepage'
import Vendorpage from './Vendorpage'
import Usersignuppage from './Usersignuppage'
import Addnewitem from './Addnewitem'
import Userpage from './Userpage'
import Vendor from './Vendor'
import Cartpage from './Cartpage'
import Successpage from './Successpage'
import Productstatuspage from './Productstatuspage'
import Requestitempage from './Requestitempage'
import Viewproductpage from './Viewproductpage'
import Orderstatus from './Orderstatus'
function App() {
  return (
    <div>
        <Routes>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='/logoutpage' element={<Logoutpage/>}/>
        <Route path='/setreminder' element={<Setreminder/>}/>
        <Route path='/modifyreminder' element={<Modifyreminder/>}/>
        <Route path='/disablereminder' element={<Disablereminder/>}/>
        <Route path='/deletereminder' element={<Deletereminder/>}/>
        <Route path='/enablereminder' element={<Enablereminder/>}/>
        <Route path='/viewyourreminder' element={<Viewyourreminder/>}/>
        <Route path='/signuppage' element={<Signuppage/>}/>
        <Route path='/updatepage' element={<Updatepage/>}/>
        <Route path='/vendorpage' element={<Vendorpage/>}/>
        <Route path='/userpage' element={<Userpage/>}/>
        <Route path='/usersignuppage' element={<Usersignuppage/>}/>
        <Route path='/addnewitem' element={<Addnewitem/>}/>
        <Route path='/vendor' element={<Vendor/>}/>
        <Route path='/cartpage' element={<Cartpage/>}/>
        <Route path='/successpage' element={<Successpage/>}/>
        <Route path='/viewproductpage' element={<Viewproductpage/>}/>
        <Route path='/requestitempage' element={<Requestitempage/>}/>
        <Route path='/productstatuspage' element={<Productstatuspage/>}/>
        <Route path='/orderstatus' element={<Orderstatus/>}/>
      </Routes>
    </div>
  )
}

export default App

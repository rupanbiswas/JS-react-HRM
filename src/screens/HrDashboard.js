import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from "react-redux"
import {logout} from "../actions/HrActions"
function HrDashboard() {
    const dispatch = useDispatch()
    const Logout = ()=>{
    dispatch(logout())
    }
    return (
        <div>
            <h1>HR dash board</h1>
          <p>  <Link to={'/invite-employee'}>Invite Employee</Link></p>
         <button onClick={Logout}>Logout</button>
        </div>
    )
}

export default HrDashboard

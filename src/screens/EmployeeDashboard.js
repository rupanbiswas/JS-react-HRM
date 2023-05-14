import React from 'react'
import {Link} from 'react-router-dom'
function EmployeeDashboard() {
    return (
        <div>
            <h1>Employee Dashboard</h1>
            <p><Link to='/employee-profile'>My profile</Link></p>
        </div>
    )
}

export default EmployeeDashboard

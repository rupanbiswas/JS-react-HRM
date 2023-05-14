import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'


function EmployeeProfile() {
const employeeLogin = useSelector(state => state.employeeLogin)
const {employeeInfo} = employeeLogin
console.log(employeeInfo)
if(employeeInfo){
    return (
        <div>
    <h1>{employeeInfo.firstName}</h1>
        </div>
    )}
}

export default EmployeeProfile

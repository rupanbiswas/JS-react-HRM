import React,{useEffect} from 'react'
// import queryString from 'query-string'
import {useDispatch,useSelector} from 'react-redux'
import {employeeVerificationAction} from '../actions/EmployeeActions'


function Invite({location,history}) {
const dispatch = useDispatch()
const employeeVerification =  useSelector(state => state.employeeVerification)
    const {status} = employeeVerification
    const query = new URLSearchParams(location.search);
    const token = query.get('token')
    const email = query.get('email')
    useEffect(()=>{
        dispatch(employeeVerificationAction(token,email))
    },[])
    if(status === true) {
        return (
            <div>
           user verified
           {history.push(`/register-employee?token=${token}&email=${email}`)}
            </div>
        )
    }else{
        return (
            <div>
            verifing user
            </div>
        )
    }
   
}

export default Invite

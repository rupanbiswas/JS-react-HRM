import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
function EmployeeProtect({Show}) {
    // const Show = props.Show
    const history = useHistory()
    const employeeLogin = useSelector(state => state.employeeLogin)
    const {employeeInfo}=employeeLogin
    useEffect(()=>{
                    // history.push('/hr-login')
        if(employeeInfo == null){
            history.push('/')
        }

    },[employeeInfo,history])
    return (
        <>
        { employeeInfo ? <Show /> : history.push('/')}
        </>
    )
}

export default EmployeeProtect

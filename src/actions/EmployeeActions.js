import axios from 'axios'
import { EMPLOYEE_LOGIN_FAIL, EMPLOYEE_LOGIN_REQUEST, EMPLOYEE_LOGIN_SUCCESS, EMPLOYEE_LOGOUT, EMPLOYEE_REGISTER_FAIL, EMPLOYEE_REGISTER_REQUEST, EMPLOYEE_REGISTER_SUCCESS, EMPLOYEE_VERIFICATION_FAIL, EMPLOYEE_VERIFICATION_REQUEST, EMPLOYEE_VERIFICATION_SUCCESS } from '../constants/hrApp'


export const login = (email, password)=> async (dispatch)=>{
    try {
        dispatch({
            type:EMPLOYEE_LOGIN_REQUEST
        })
        const config= {
            headers:{
                'content-type': 'application/json'
            },
        }
        const {data} = await axios.post('employee/login-employee',{email,password},config)
        dispatch({
            type: EMPLOYEE_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('employeeInfo',JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: EMPLOYEE_LOGIN_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const logout =()=>(dispatch)=>{
    localStorage.removeItem('employeeInfo')
    dispatch({type: EMPLOYEE_LOGOUT})
}


export const employeeVerificationAction =(token,email)=>async(dispatch)=>{
    try {
        dispatch({
            type:EMPLOYEE_VERIFICATION_REQUEST
        })
        const config= {
            headers:{
                'content-type': 'application/json'
            },
        }
        const {data} = await axios.get(`employee/invite-employee?token=${token}&email=${email}`,config)
        dispatch({
            type: EMPLOYEE_VERIFICATION_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: EMPLOYEE_VERIFICATION_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }

}

export const EmployeeRegisterAction = (token,email,password,gender,phone_number,address,country)=> async (dispatch)=>{
    try {
        dispatch({
            type:EMPLOYEE_REGISTER_REQUEST
        })
        const config= {
            headers:{
                'content-type': 'application/json'
            },
        }
        const {data} = await axios.post('employee/register-employee',{token,email,password,gender,phone_number,address,country},config)
        dispatch({
            type: EMPLOYEE_REGISTER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: EMPLOYEE_REGISTER_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
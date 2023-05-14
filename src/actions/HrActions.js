import axios from 'axios'
import { HR_LOGIN_FAIL, HR_LOGIN_REQUEST, HR_LOGIN_SUCCESS, HR_LOGOUT, INVITE_FAIL, INVITE_REQUEST, INVITE_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, VERIFICATION_FAIL, VERIFICATION_REQUEST, VERIFICATION_SUCCESS } from '../constants/hrApp'


export const login = (email, password)=> async (dispatch)=>{
    try {
        dispatch({
            type:HR_LOGIN_REQUEST
        })
        const config= {
            headers:{
                'content-type': 'application/json'
            },
        }
        const {data} = await axios.post('hr/login',{email,password},config)
        dispatch({
            type: HR_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('hrInfo',JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: HR_LOGIN_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const logout =()=>(dispatch)=>{
    localStorage.removeItem('hrInfo')
    dispatch({type: HR_LOGOUT})

}


export const registerAction = (first_name,last_name,password,email,gender,phone_number,organisation_name,websiteURL,address,country,number_of_employees)=> async (dispatch)=>{
    try {
        dispatch({
            type:REGISTER_REQUEST
        })
        const config= {
            headers:{
                'content-type': 'application/json'
            },
        }
        const {data} = await axios.post('hr/register',{first_name,last_name,password,email,gender,phone_number,organisation_name,websiteURL,address,country,number_of_employees},config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const verify = (token,email)=> async (dispatch)=>{
    try {
        dispatch({
            type:VERIFICATION_REQUEST
        })
        const config= {
            headers:{
                'content-type': 'application/json'
            },
        }
        const {data} = await axios.put('hr/register',{token,email},config)
        dispatch({
            type: VERIFICATION_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: VERIFICATION_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const invite = (datas)=> async (dispatch,getState)=>{
    try {
        dispatch({
            type:INVITE_REQUEST
        })
        const {hrLogin:{hrInfo}}=getState()
        const config= {
            headers:{
                'content-type': 'application/json',
                Authorization: `Bearer ${hrInfo.token}`
            },
        }
        const {data} = await axios.post('employee/invite-employee',{datas},config)
        dispatch({
            type: INVITE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: INVITE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
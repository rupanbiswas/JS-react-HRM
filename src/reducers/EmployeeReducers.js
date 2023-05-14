import { EMPLOYEE_LOGIN_FAIL, EMPLOYEE_LOGIN_REQUEST, EMPLOYEE_LOGIN_SUCCESS, EMPLOYEE_LOGOUT, EMPLOYEE_REGISTER_FAIL, EMPLOYEE_REGISTER_REQUEST, EMPLOYEE_REGISTER_SUCCESS, EMPLOYEE_VERIFICATION_FAIL, EMPLOYEE_VERIFICATION_REQUEST, EMPLOYEE_VERIFICATION_SUCCESS } from "../constants/hrApp"


export const EmployeeLoginReducer = (state = {},action)=>{
    switch(action.type){
        case EMPLOYEE_LOGIN_REQUEST:
            return {loading : true}
        case EMPLOYEE_LOGIN_SUCCESS:
            return {loading : false ,employeeInfo:action.payload}
        case EMPLOYEE_LOGIN_FAIL:
            return {loading : false ,error:action.payload}
        case EMPLOYEE_LOGOUT:
            return {}
        default:
            return state
    }
}


export const employeeVerificationReducer = (state = {},action)=>{
    switch(action.type){
        case EMPLOYEE_VERIFICATION_REQUEST:
            return {loading : true}
        case EMPLOYEE_VERIFICATION_SUCCESS:
            return {loading : false ,status:true}
        case EMPLOYEE_VERIFICATION_FAIL:
            return {loading : false ,status:false}
        default:
            return state
    }
}
export const employeeRegisterReducer = (state = {},action)=>{
    switch(action.type){
        case EMPLOYEE_REGISTER_REQUEST:
            return {loading : true}
        case EMPLOYEE_REGISTER_SUCCESS:
            return {loading : false ,registered:action.payload}
        case EMPLOYEE_REGISTER_FAIL:
            return {loading : false ,error:action.payload}
        default:
            return state
    }
}
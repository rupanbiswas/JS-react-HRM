import { HR_LOGIN_FAIL, HR_LOGIN_REQUEST, HR_LOGIN_SUCCESS, HR_LOGOUT, INVITE_FAIL, INVITE_REQUEST, INVITE_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, VERIFICATION_FAIL, VERIFICATION_REQUEST, VERIFICATION_SUCCESS } from "../constants/hrApp"


export const hrLoginReducer = (state = {},action)=>{
    switch(action.type){
        case HR_LOGIN_REQUEST:
            return {loading : true}
        case HR_LOGIN_SUCCESS:
            return {loading : false ,hrInfo:action.payload}
        case HR_LOGIN_FAIL:
            return {loading : false ,error:action.payload}
        case HR_LOGOUT:
            return {}
        default:
            return state
    }
}

export const registerReducer = (state = {},action)=>{
    switch(action.type){
        case REGISTER_REQUEST:
            return {loading : true}
        case REGISTER_SUCCESS:
            return {loading : false ,registered:action.payload}
        case REGISTER_FAIL:
            return {loading : false ,error:action.payload}
        default:
            return state
    }
}


export const verificationReducer = (state = {},action)=>{
    switch(action.type){
        case VERIFICATION_REQUEST:
            return {loading : true}
        case VERIFICATION_SUCCESS:
            return {loading : false ,status:true}
        case VERIFICATION_FAIL:
            return {loading : false ,status:false}
        default:
            return state
    }
}


export const inviteReducer = (state = {},action)=>{
    switch(action.type){
        case INVITE_REQUEST:
            return {loading : true}
        case INVITE_SUCCESS:
            return {loading : false ,status:action.payload}
        case INVITE_FAIL:
            return {loading : false ,status:action.payload}
        default:
            return state
    }
}
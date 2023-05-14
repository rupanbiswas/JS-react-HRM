import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { hrLoginReducer, inviteReducer, registerReducer, verificationReducer } from './reducers/HrReducers';
import { EmployeeLoginReducer, employeeVerificationReducer ,employeeRegisterReducer} from './reducers/EmployeeReducers';

const reducer = combineReducers({
 hrLogin: hrLoginReducer,
 employeeLogin:EmployeeLoginReducer,
 register :registerReducer,
 verification : verificationReducer,
 inviteEmployee:inviteReducer,
 employeeVerification:employeeVerificationReducer,
 employeeRegister:employeeRegisterReducer
})

const hrInfoFromStorage = localStorage.getItem('hrInfo') ? JSON.parse(localStorage.getItem('hrInfo')) : null
const employeeInfoFromStorage = localStorage.getItem('employeeInfo') ? JSON.parse(localStorage.getItem('employeeInfo')) : null

const initialState = {
hrLogin : {hrInfo:hrInfoFromStorage},
employeeLogin:{employeeInfo:employeeInfoFromStorage}
}

const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store;
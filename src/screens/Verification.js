import React,{useEffect} from 'react'
// import queryString from 'query-string'
import {useDispatch,useSelector} from 'react-redux'
import {verify} from '../actions/HrActions'


function Verification({location,history}) {
const dispatch = useDispatch()
const verification =  useSelector(state => state.verification)
    const {status} = verification
    const query = new URLSearchParams(location.search);
    const token = query.get('token')
    const email = query.get('email')
    useEffect(()=>{
        dispatch(verify(token,email))
    },[])
    if(status === true) {
        return (
            <div>
           user verified
           {history.push('/hr-login')}
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

export default Verification

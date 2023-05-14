import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
function HrProtect({Show}) {
    // const Show = props.Show
    const history = useHistory()
    const hrLogin = useSelector(state => state.hrLogin)
    const {hrInfo}=hrLogin
    useEffect(()=>{
                    // history.push('/hr-login')
        if(hrInfo == null){
            history.push('/hr-login')
        }

    },[hrInfo,history])
    return (
        <>
           <Show /> 
        </>
    )
}

export default HrProtect

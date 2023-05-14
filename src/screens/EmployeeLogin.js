import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {login} from '../actions/EmployeeActions' 
import {Form,Col,Row,Button} from 'react-bootstrap'
import {logout} from '../actions/HrActions'
const EmployeeLogin = ({location,history}) =>{
    const [email, setEmail]= useState('')
    const [password,setPassword]= useState('')

    const dispatch  = useDispatch()
    const employeeLogin = useSelector(state => state.employeeLogin)
    const {error,employeeInfo} = employeeLogin
    useEffect(()=>{
        if(employeeInfo){
          dispatch(logout())
            history.push('/employee-dashboard')
        }
    },[history,employeeInfo])
    const submitHandler =(e)=>{
        e.preventDefault()
        dispatch(login(email,password))
    }
    return(
        <>
<Form onSubmit={submitHandler}>
<h1>EMPLOYEE login</h1>
<p><Link to={'/hr-login'}>click here to login as an HR</Link></p>
{error && <h1 variant='danger'>{error}</h1>}

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext defaultValue="email@example.com" onChange={(e)=> setEmail(e.target.value)}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
    </Col>
  </Form.Group>
   <Button type="submit" variant="dark">Employee Login</Button>{' '}
   
</Form>
<Link to={'/Register'}>NEW HERE? 
                        Register</Link>
        </>
    )
}
export default EmployeeLogin
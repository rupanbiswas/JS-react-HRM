import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {login} from '../actions/HrActions' 
import {Form,Col,Row,Button} from 'react-bootstrap'
import {logout} from '../actions/EmployeeActions'
const HrLogin = ({history}) =>{
    const [email, setEmail]= useState('')
    const [password,setPassword]= useState('')

    const dispatch  = useDispatch()
    const hrLogin = useSelector(state => state.hrLogin)
    const {error,hrInfo} = hrLogin
    useEffect(()=>{
        if(hrInfo){
          dispatch(logout())
            history.push('/hr-dashboard')
        }
    },[history,hrInfo])
    const submitHandler =(e)=>{
        e.preventDefault()
        dispatch(login(email,password))
    }
    return(
        <>
<Form onSubmit={submitHandler}>
<h1>HR login</h1>
<p><Link to={'/'}>click here to login as an employee</Link></p>
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
   <Button type="submit" variant="dark">Hr Login</Button>{' '}

</Form>
<Link to={'/Register'}>NEW HERE? 
                        Register</Link>
        </>
    )
}
export default HrLogin
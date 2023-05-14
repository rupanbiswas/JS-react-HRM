import React,{useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {registerAction} from '../actions/HrActions'


function Register({history}) {


const [firstName,setFirstName] = useState('')
const [lastName,setLastName] = useState('')
const [password,setPassword] = useState('')
const [email,setEmail] = useState('')
const [gender,setGender] = useState('')
const [phone,setPhone] = useState('')
const [organisation,setOrganisation]= useState('')
const [website,setWebsite] = useState('')
const [address,setAddress] = useState('')
const [country,setCountry]= useState('')
const [employeeNumber,setEmployeeNumber] = useState('')
const dispatch= useDispatch()
const hrLogin = useSelector(state => state.hrLogin)
const {hrInfo}=  hrLogin
const register = useSelector(state =>state.register)
const {error,registered} = register
useEffect(() => {
if(hrInfo){
    history.push('/hr-dashboard')
}

},[history,hrInfo,registered])

function submitHandler(e){
e.preventDefault()
dispatch(registerAction(firstName,lastName,password,email,gender,phone,organisation,website,address,country,employeeNumber))
}
    return (
        <div>
        {registered && <h1 variant='danger'>please check your email</h1>}
        {error && <h1 variant='danger'>{error}</h1>}

            <Form onSubmit={submitHandler}>
            <h1>Register as a HR and your Organisation</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Last Name" onChange={(e) =>setLastName(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

 

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e) =>setPassword(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="mail" placeholder="Email" onChange={(e) =>setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
 
  <Form.Select size="lg" onChange={(e)=>setGender(e.target.value)}>
  <option disabled="true">select gender</option>
    <option>Male</option>
    <option>Female</option>
    <option>Others</option>
  </Form.Select>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Organisation Name</Form.Label>
    <Form.Control type="text" placeholder="Organisation Name" onChange={(e)=>setOrganisation(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="number" placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Website URL</Form.Label>
    <Form.Control type="text" placeholder="Website URl" onChange={(e)=>setWebsite(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Country</Form.Label>
    <Form.Control type="text" placeholder="Country" onChange={(e)=>setCountry(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Number Of Employee</Form.Label>
    <Form.Control type="number" placeholder="Number Of Employees" onChange={(e)=>setEmployeeNumber(e.target.value)} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
  {registered && <h1 variant='danger'>please check your email</h1>}
  {error && <h1 variant='danger'>{error}</h1>}

</Form>
        </div>
    )
}

export default Register

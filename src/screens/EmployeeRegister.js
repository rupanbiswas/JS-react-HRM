import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Form,Button} from 'react-bootstrap'
import { EmployeeRegisterAction } from '../actions/EmployeeActions';
import {Link} from 'react-router-dom'
function EmployeeRegister({location}) {
     const dispatch = useDispatch()
    const query = new URLSearchParams(location.search);
    const token = query.get('token')
    const email = query.get('email')
    const [password, setPassword] = useState('')
    const [gender,setGender] = useState('')
    const [phone_number,setPhone_number] = useState('')
    const [address,setAddress] = useState('')
    const [country,setCountry] = useState('')
    console.log(email)
    const employeeRegister = useSelector(state => state.employeeRegister)
    const {registered,error} = employeeRegister
    const submitHandler=(e) => {
        e.preventDefault()
dispatch(EmployeeRegisterAction(token,email,password,gender,phone_number,address,country))
    }
    return (
        <div>
            <h1>Employee Reistration Page</h1>
            {registered && <h1 variant='danger'>registration completed</h1>}
            {error && <h1 variant='danger'>{error}</h1>}

<Form onSubmit={submitHandler}>
<h1>Register as a HR and your Organisation</h1>
{/* <Form.Group className="mb-3" controlId="formBasicEmail"> */}
{/* <Form.Label>First Name</Form.Label>
<Form.Control type="text" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}/>
<Form.Text className="text-muted">
</Form.Text>
</Form.Group> */}
{/* <Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Last Name</Form.Label>
<Form.Control type="text" placeholder="Last Name" onChange={(e) =>setLastName(e.target.value)}/>
<Form.Text className="text-muted">
</Form.Text>
</Form.Group> */}



<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" onChange={(e) =>setPassword(e.target.value)}/>
</Form.Group>

{/* <Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email</Form.Label>
<Form.Control type="mail" placeholder="Email" onChange={(e) =>setEmail(e.target.value)}/>
<Form.Text className="text-muted">
</Form.Text>
</Form.Group> */}

<Form.Select size="lg" onChange={(e)=>setGender(e.target.value)}>
<option disabled="true">select gender</option>
<option>Male</option>
<option>Female</option>
<option>Others</option>
</Form.Select>

{/* <Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Organisation Name</Form.Label>
<Form.Control type="text" placeholder="Organisation Name" onChange={(e)=>setOrganisation(e.target.value)}/>
<Form.Text className="text-muted">
</Form.Text>
</Form.Group> */}

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Phone Number</Form.Label>
<Form.Control type="number" placeholder="Phone Number" onChange={(e)=>setPhone_number(e.target.value)}/>
<Form.Text className="text-muted">
</Form.Text>
</Form.Group>

{/* <Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Website URL</Form.Label>
<Form.Control type="text" placeholder="Website URl" onChange={(e)=>setWebsite(e.target.value)}/>
<Form.Text className="text-muted">
</Form.Text>
</Form.Group> */}

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

{/* <Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Number Of Employee</Form.Label>
<Form.Control type="number" placeholder="Number Of Employees" onChange={(e)=>setEmployeeNumber(e.target.value)} />
<Form.Text className="text-muted">
</Form.Text>
</Form.Group> */}

<Button variant="primary" type="submit">
Submit
</Button>
{registered && <h1 variant='danger'><Link to={"/"}>you are registered click here to login</Link></h1>}
{error && <h1 variant='danger'>{error}</h1>}

</Form>
        </div>
    )
}

export default EmployeeRegister

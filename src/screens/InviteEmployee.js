import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { invite } from "../actions/HrActions";
import { useDispatch, useSelector } from "react-redux";

function InviteEmployee() {
  const [employees, setEmployees] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const ADD = (e) => {
    const data =[ {
      first_name: firstName,
      last_name: lastName,
      email: email,
    }];
    setEmployees(employees.concat(data));
  };
  const inviteEmployee = useSelector((state) => state.inviteEmployee);
  const { status } = inviteEmployee;
  useEffect(() => {
    console.log(employees);
  }, [employees]);

  const SUBMIT = (e) => {
    e.preventDefault();
    dispatch(invite(employees));
  };

  return (
    <div>
      <h1>invite employee</h1>
      <br></br>
<h2>mails to be sent</h2>
      {employees.map((employee) => (
        <h4>{employee.email}</h4>
      ))}
      {status && <h1 variant="danger">Employees Invited</h1>}

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>email</Form.Label>
          <Form.Control
            type="mail"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="reset" onClick={ADD}>
          ADD
        </Button>
        <Button variant="primary" type="submit" onClick={SUBMIT}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default InviteEmployee;

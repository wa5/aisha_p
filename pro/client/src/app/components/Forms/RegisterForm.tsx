import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export interface IRegisterFormProps{};

const  RegisterForm:React.FC<IRegisterFormProps>=(props)=>{
    const navigate = useNavigate();
    var [fname, setFname] = useState("")
    var [lname, setLname] = useState("")
    var [email, setEmail] = useState("")
    var [password, setPassword] = useState("")
    var [dob, setDob] = useState("")
    var [phonno, setPhonno] = useState("")
    let items={fname,lname,phonno,password,dob,email}

    let handleSubmit = async (e:any) => {
        e.preventDefault();
       
          let res = await fetch(`http://localhost:8001/api/gmail/register`, {
            method: "POST",
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json',
            },
            body: JSON.stringify(items),
          });
          let resJson = await res.json();
          console.log("lop",res.status,resJson.status)
          
          if (resJson.status === "409") {
           alert("email alreay exits");
           console.log(resJson)
           //navigate('/login');
          } else if (resJson.status === "309"){
            alert("user not registred try again");
          }else if(resJson.status === "201"){
            alert("u registred");
            navigate('/dashboard');
          }
       
      };
    return (<>
    <Row>
        <Col>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Fisrst Name</Form.Label>
        <Form.Control type="text"  onChange={(e) => setFname(e.target.value)} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text"  onChange={(e) => setLname(e.target.value)} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>password</Form.Label>
        <Form.Control type="password"  onChange={(e) => setPassword(e.target.value)} placeholder="Enter email" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>DATE</Form.Label>
        <Form.Control type="date" onChange={(e) => setDob(e.target.value)} placeholder="Enter email" />
  
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>phon no</Form.Label>
        <Form.Control type="number" onChange={(e) => setPhonno(e.target.value)} placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      
        </Col>
    </Row>
    
    </>);
};

export default RegisterForm;
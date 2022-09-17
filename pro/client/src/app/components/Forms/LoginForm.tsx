import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export interface ILoginFormProps{};

const  LoginForm:React.FC<ILoginFormProps>=(props)=>{
    const navigate = useNavigate();
  
    var [email, setEmail] = useState("")
    var [password, setPassword] = useState("")
    
    let items={password,email}
    let handleSubmit = async (e:any) => {
        e.preventDefault();
       
          let res = await fetch(`http://localhost:8001/api/gmail/login`, {
            method: "POST",
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json',
            },
            body: JSON.stringify(items),
          });
          let resJson = await res.json();
          console.log("lop",res.status,resJson)
          
          if (resJson.status === "409") {
           alert("email alreay exits");
           console.log(resJson)
           //navigate('/login');
          } else if (resJson.status === "309"){
            alert("user not registred try again");
          }else if(resJson.status === "201"){
            alert("u registred");
            navigate('/login');
          }
       
      };
    return (<>
       <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
    </>);
};

export default LoginForm;
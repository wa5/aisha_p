import React, { useEffect, useState } from 'react';
import { Button, Form, Row,Col } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

export interface IGoogleMoreInfoForm{};

const  GoogleMoreInfoForm:React.FC<IGoogleMoreInfoForm>=(props)=>{
    const navigate = useNavigate();
    var [email, setEmail] = useState("")
    var [id, setId] = useState("")
    var [dob, setDob] = useState("")
    var [phonno, setPhonno] = useState("")
    let items={id,phonno,dob,email}
    const params = useParams();
    
    useEffect(()=>{
        setId(params.id!)
    },[])

    let handleSubmit = async (e:any) => {
        e.preventDefault();
       
          let res = await fetch(`http://localhost:8001/api/extrainfocheckgoogle/${id}`, {
            method: "POST",
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json',
            },
            body: JSON.stringify(items),
          });
          let resJson = await res.json();
          console.log("lop",res.status,resJson)
          
          if (res.status === 200) {
           alert("User created successfully");
           navigate('/dashboard');
          } else {
            alert("Some error occured");
          }
       
      };
function test(){
   
  console.log(id)
}

    return (<>
    <Row>
        <Col>

        </Col>
        <Col>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>DATE</Form.Label>
        <Form.Control type="date" onChange={(e) => setDob(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
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
        <Col></Col>
    </Row>
    
    </>);
};

export default GoogleMoreInfoForm;
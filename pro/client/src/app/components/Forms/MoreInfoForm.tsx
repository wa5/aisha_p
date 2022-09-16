import React from 'react';
import { Button, Form, Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export interface IMoreInfoFormProps{};

const  MoreInfoForm:React.FC<IMoreInfoFormProps>=(props)=>{
    return (<>
    <Row>
        <Col>

        </Col>
        <Col>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type="date" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>phon no</Form.Label>
        <Form.Control type="number" placeholder="Password" />
      </Form.Group>
      <Link to='/dashbord'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Link>
    </Form>
        </Col>
        <Col></Col>
    </Row>
    
    </>);
};

export default MoreInfoForm;
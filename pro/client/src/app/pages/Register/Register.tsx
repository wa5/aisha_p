import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import RegisterForm from '../../components/Forms/RegisterForm';
import Navbers1 from '../../components/navbar/Navbers1';
export interface IRegister{};

const  Register:React.FC<IRegister>=(props)=>{
    return (<>
    <Container>
      <Row>
        <Col><Navbers1/></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
        <h1>Register page</h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
      <Col></Col>
        <Col>
        <RegisterForm/>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    </>);
};

export default Register;
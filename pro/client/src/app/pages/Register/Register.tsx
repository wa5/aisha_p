import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Navbers1 from '../../components/navbar/Navbers1';
export interface IRegister{};

const  Register:React.FC<IRegister>=(props)=>{
    return (<>
    <Container>
      <Row>
        <Col><Navbers1/></Col>
      </Row>
    </Container>
    </>);
};

export default Register;
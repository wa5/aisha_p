import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Navbers1 from '../../components/navbar/Navbers1';

export interface IDashbord{};

const  Dashbord:React.FC<IDashbord>=(props)=>{
    return (<>
     <Container>
      <Row>
        <Col><Navbers1/></Col>
      </Row>
      <Row>
      <Col></Col>
        <Col>
        <h1>welcome to desh bord</h1>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    
    </>);
};

export default Dashbord;
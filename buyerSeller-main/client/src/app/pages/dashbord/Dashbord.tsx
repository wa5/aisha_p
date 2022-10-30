import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Navbers1 from '../../components/navbar/Navbers1';
import { ProductistContainer } from '../../components/productsuploaded';

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
        <h1>welcome to dashboard</h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
        <ProductistContainer/>
        </Col>
      </Row>
    </Container>
    
    </>);
};

export default Dashbord;
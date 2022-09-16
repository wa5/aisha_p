import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import MoreInfoForm from '../../components/Forms/MoreInfoForm';
import Navbers1 from '../../components/navbar/Navbers1';
export interface IMoreinfo{};

const  Moreinfo:React.FC<IMoreinfo>=(props)=>{
    return (<>
    <Container>
      <Row>
        <Col><Navbers1/></Col>
      </Row>
      <Row>
      <Col></Col>
        <Col><h1>give more info to register</h1></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col><MoreInfoForm/></Col>
      </Row>
      
    </Container>
    </>);
};

export default Moreinfo;
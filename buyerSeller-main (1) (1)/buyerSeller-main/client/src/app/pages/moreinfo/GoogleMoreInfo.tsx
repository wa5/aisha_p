
import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import GoogleMoreInfoForm from '../../components/Forms/GoogleMoreInfoForm';

import Navbers1 from '../../components/navbar/Navbers1';
export interface IGoogleMoreInfo{};
const  GoogleMoreInfo:React.FC<IGoogleMoreInfo>=(props)=>{
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
        <Col><GoogleMoreInfoForm/></Col>
      </Row>
      
    </Container>
    </>);
};

export default GoogleMoreInfo;
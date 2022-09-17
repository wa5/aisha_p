import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Navbers1 from '../../components/navbar/Navbers1';
import Google from '../../img/google.png'
import Facebook from '../../img/facebook.png'
import LoginForm from '../../components/Forms/LoginForm';
import { Link } from 'react-router-dom';
export interface ILogin{};

const  Login:React.FC<ILogin>=(props)=>{
    const google = () => {
        window.open("http://localhost:8001/api/google", "_self");
      };
    
      const github = () => {
        window.open("http://localhost:5000/auth/github", "_self");
      };
    
      const facebook = () => {
        window.open("http://localhost:8001/api/facebook", "_self");
      };
    return (<>
  <Container>
      <Row>
        <Col><Navbers1/></Col>
      </Row>
      <Row>
        
        <Col>
        
        <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Facebook} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
         <LoginForm/>
        </div>
      </div>
    </div>
        </Col>
      </Row>
      <Row>
       
      </Row>
    </Container>
    </>);
};

export default Login;
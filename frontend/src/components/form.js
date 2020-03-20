import React ,{ useState } from "react";
import Results from './results'
import { Form, Container, Button ,Row, Col } from "react-bootstrap";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from 'axios';
import "./form.css";

function Forms() {
  const [ emails, setEmails ]= useState([]);
  const [ phones, setPhones ]= useState([]);
  let responseFacebook; 
  
    responseFacebook = response => {
    let apiData = {
      url: document.getElementById('urltext').value,
      access_token: response.accessToken
    }
    axios.post('https://web-02.darwinsoto.tech/catch', apiData)
      .then(res => {
        setPhones(res.data.data.phones)
        setEmails(res.data.data.emails)
      })
    };
 
  

  return (
    <Container className="form" fluid id="home">
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <h2><i className="fas fa-angle-double-down"></i>Place your URL</h2>
              </Form.Label>
              <Form.Control  id="urltext" type="url" placeholder="https://www.facebook.com" />
            </Form.Group>
            <FacebookLogin
              appId="2269795789988854"
              callback={responseFacebook}
              render={renderProps => (
                <Button onClick={renderProps.onClick}>
                  Get Data
                </Button>
              )}
            />
          </Form>
        </Col>
        <Col md={4}></Col>
      </Row>
      <Row>
        <Results phones={phones} emails={emails}/>
      </Row>
    </Container>
  );
}

export default Forms;

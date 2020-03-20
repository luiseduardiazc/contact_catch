import React from "react";
import Results from './results'
import { Form, Container, Button ,Row, Col } from "react-bootstrap";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from 'axios';
import "./form.css";

function Forms() {
  let resp = {};
  const responseFacebook = response => {
    console.log('entro')
    let apiData = {
      url: document.getElementById('urltext').value,
      access_token: response.accessToken
    }
    axios.post('https://web-02.darwinsoto.tech/catch', apiData)
      .then(res => {
        resp = res;
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
                <Button lg onClick={renderProps.onClick}>
                  Get Data
                </Button>
              )}
            />
          </Form>
        </Col>
        <Col md={4}></Col>
      </Row>
      <Row>
        <Results data={resp}/>
      </Row>
    </Container>
  );
}

export default Forms;

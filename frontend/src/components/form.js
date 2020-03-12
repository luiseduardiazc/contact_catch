import React from "react";
//import Loader from './loader';
import Clip from "./clip";
//import Results from './results'
import { Form, Container, Button ,Row, Col } from "react-bootstrap";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from 'axios';
import "./form.css";

function Forms() {
  const responseFacebook = response => {
    let apiData = {
      url: document.getElementById('urltext').value,
      access_token: response.accessToken
    }
    axios.post('https://web-02.darwinsoto.tech/catch', apiData)
      .then(res => {
        console.log(res);
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
                <h3>Place your url</h3>
              </Form.Label>
              <Form.Control id="urltext" type="url" placeholder="https://www.facebook.com" />
            </Form.Group>

            <FacebookLogin
              appId="2269795789988854"
              callback={responseFacebook}
              render={renderProps => (
                <Button lg onClick={renderProps.onClick}>
                  Aunthenticate
                </Button>
              )}
            />
          </Form>
        </Col>
        <Col md={4}>
          <Clip />
        </Col>
      </Row>

      <Row></Row>
    </Container>
  );
}

export default Forms;

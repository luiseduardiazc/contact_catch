import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loader() {
    return (
      <div className="load">
        <Spinner animation="grow" variant="primary" />
			  <Spinner animation="grow" variant="secondary" />
			  <Spinner animation="grow" variant="success" />
			  <Spinner animation="grow" variant="danger" />
			  <Spinner animation="grow" variant="warning" />
			  <Spinner animation="grow" variant="info" />
      </div>
    );
  }
  
  export default Loader;
  
import React , { useState, useEffect } from 'react';
import { Table, Container ,Row, Col } from 'react-bootstrap';
import './results.css';

function Results(props) {
	const [phones, setPhones] = useState({});
	const [emails, setEmail] = useState({});

	useEffect(()=>{
		setPhones(props);
		setEmail(props);
	},[props])

  return (
    	<Container className="results" fluid id="about">
    		<Row>
    			<Col md={2}></Col>
    			<Col md={3}>
    				{ emails.length > 0 &&
    					<Table striped bordered hover responsive variant="dark" size="sm">
							  <thead>
							    <tr>
							      <th>#</th>
							      <th>Emails</th>
							    </tr>
							  </thead>
							  <tbody>
							  	{
							  		props.data.data.emails.map((email, index)=>{
							  			return (
							  				<tr key={index}>
										      <td>{index}</td>
										      <td>{email}</td>
										    </tr>
							  			)
							  		})
							  	} 
							  </tbody>
							</Table>
    				}
    			</Col>
    			<Col md={2}></Col>
    			<Col md={3}>
    				{ phones.length > 0 &&
    					<Table striped bordered hover responsive variant="dark" size="sm">
							  <thead>
							    <tr>
							      <th>#</th>
							      <th>Phones</th>
							    </tr>
							  </thead>
							  <tbody>
							  	{
							  		props.data.data.phones.map((phone, index)=>{
							  			return (
							  				<tr key={index}>
										      <td>{index}</td>
										      <td>{phone}</td>
										    </tr>
							  			)
							  		})
							  	}   
							  </tbody>
							</Table>
    				}
    			</Col>
    			<Col md={2}></Col>
    		</Row>
    	</Container>
  );
}
  
export default Results;
  
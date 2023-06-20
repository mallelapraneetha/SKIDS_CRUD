
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './Array';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Edit() {

	
  const [UsersName, setUsersName] = useState('');
    const [email, setemail] = useState('');
    const [ PhoneNumber, setPhoneNumber] = useState('');
    const checkInput = (e) => {
      const onlyDigits = e.target.value.replace(/\D/g, "");
      setPhoneNumber(onlyDigits);
    };
	
	const [id, setid] = useState('');

	
	let history = useNavigate()

	
	var index = array.map(function (e) {
		return e.id; }).indexOf(id);

	
	const handelSubmit = (e) => {

		
		e.preventDefault();

		let a = array[index]

		
		a.UsersName = UsersName
		a.email = email
    a.PhoneNumber = PhoneNumber

		
		history('/')
	}


	
	useEffect(() => {
		setUsersName(localStorage.getItem('UsersName'))
		setemail(localStorage.getItem('email'))
    setPhoneNumber(localStorage.getItem('PhoneNumber'))
    
		setid(localStorage.getItem('id'))
	}, [])
  

	return (
		<div>
			<Form className="d-grid gap-2"
				style={{ margin: '15rem' }}>

				
				<Form.Group className="mb-3"
					controlId="formBasicEmail">
					<Form.Control value={UsersName}
						onChange={e => setUsersName(e.target.value)}
						type="text" placeholder="Enter Name" />
				</Form.Group>

				
				<Form.Group className="mb-3"
					controlId="formBasicPassword">
					<Form.Control value={email}
						onChange={e => setemail(e.target.value)}
						type="email" placeholder="email" />
				</Form.Group>
        <Form.Group className="mb-3"
					controlId="formBasicnumber">
					<Form.Control value={PhoneNumber}
          onChange={(e) => checkInput(e)}
						
						type="tel"
            maxLength="10" placeholder="phonenumber" />
				</Form.Group>
				
				<Button
					onClick={e => handelSubmit(e)}
					variant="primary" type="submit" size="lg">
					Update
				</Button>

				
				<Link className="d-grid gap-2" to='/'>
					<Button variant="warning"
						size="lg">
						Home
					</Button>
				</Link>
			</Form>
		</div>
	)
}

export default Edit

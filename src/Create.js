import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './Array';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
  
function Create() {
  
    
    
    const [UsersName, setUsersName] = useState('');
    const [email, setemail] = useState('');
    const [ PhoneNumber, setPhoneNumber] = useState('');
    const checkInput = (e) => {
        const onlyDigits = e.target.value.replace(/\D/g, "");
        setPhoneNumber(onlyDigits);
      };
    
    

  
   
    let history = useNavigate();
  
    
    const handelSubmit = (e) => {
        e.preventDefault();  
  
        const ids = uuid() 
        let uni = ids.slice(0, 8) 
        let a = UsersName, b =  email, c =  PhoneNumber
        array.push({ id: uni, UsersName: a, email: b ,  PhoneNumber:c })
  
       
        history('/')
    }
  
    return (
        <div >
            <Form className="d-grid gap-2" 
                style={{ margin: '15rem' }}>
  
                
                
                <Form.Group className="mb-3" 
                    controlId="formBasicName">
                    <Form.Control onChange=
                        {e => setUsersName(e.target.value)}
                        type="text"
                        placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" 
                    controlId="formBasicemail">
                    <Form.Control onChange=
                        {e => setemail(e.target.value)}
                        type="email"
                        placeholder="email" required />
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
                    variant="primary" type="submit">
                    Submit
                </Button>
  
               
                <Link className="d-grid gap-2" to='/'>
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    )
}
  
export default Create

import React from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './Array';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

	let history = useNavigate()

	
	function setID(id,UsersName, email,PhoneNumber) {
		localStorage.setItem('id', id);
    localStorage.setItem('usersName', UsersName);
		localStorage.setItem('Email',email);
		
    localStorage.setItem('Phonenumber', PhoneNumber);

	}

	
	function deleted(id) {

		var index = array.map(function (e) {
			return e.id; }).indexOf(id);

		
		array.splice(index, 1)

		
		history('/')
	}

	return (
		<div style={{ margin: '10rem' }}>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
          <th>usersName</th>
						<th>Email</th>
						
            <th>Phonenumber</th>
					</tr>
				</thead>
				<tbody>

					
					{array.map((item) => {
						return (
							<tr>
                <td>{item.UsersName}</td>
                <td>{item.email}</td>
								
								<td>{item.PhoneNumber}</td>

								
								<td><Link to={`/edit`}>
									<Button onClick={(e) =>
									setID(item.id, item.UsersName ,item.email,  item.PhoneNumber)}
									variant="info">
									Update</Button></Link>
								</td>

								
								<td><Button onClick={e => deleted(item.id)}
									variant="danger">Delete</Button></td>
							</tr>
						)
					})}
				</tbody>
			</Table>

			
			<Link className="d-grid gap-2" to='/create'>
				<Button variant="warning" size="lg">Create</Button>
			</Link>
		</div>
	)
}

export default Home

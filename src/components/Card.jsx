
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardd() {
  return (
    
    <Card style={{ width: '30rem' }} >
      <Card.Body>
        <Card.Title>Employees Rules</Card.Title>
        <Card.Text>
         1. Every staff will be bound to obey all the regulations set by the official authority. 
         </Card.Text>
         <Card.Text>
         2. Office attending time is exactly 9:00 A.M and departure time 6.00 P.M.
         </Card.Text>
         <Card.Text>
         3. Every Assigned work must be completed on time before leaving the office.
        </Card.Text>
        <Button variant="primary">Thank You</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardd;
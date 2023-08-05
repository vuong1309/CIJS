import './AddExpense.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const AddExpense = ({ closeAddExpenseForm }) => {
    return (
        <div className="form-wrapper">
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2" className="form-label">
                        Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Enter name here..." />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2" className="form-label">
                        Amount
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="number" placeholder="Enter amount here..." />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2" className="form-label">
                        Date
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="date" />
                    </Col>
                </Form.Group>
                <div gap={2} className="form-button">
                    <Button
                        variant="primary"
                        onClick={() => closeAddExpenseForm(false)}>
                        ADD
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => closeAddExpenseForm(false)}>
                        CANCEL
                    </Button>
                </div>
            </Form >
        </div >
    );
};

export default AddExpense;
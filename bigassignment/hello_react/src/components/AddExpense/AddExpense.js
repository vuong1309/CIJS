import './AddExpense.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const AddExpense = (props) => {
    const { addItemFromApp, closeAddExpenseForm } = props;
    const [init, setInit] = useState({ expenseName: "", amount: "", date: "" })
    const addExpenseData = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInit({ ...init, [name]: value });
        console.log(addExpenseData);
    }

    return (
        <div className="form-wrapper">
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2" className="form-label">
                        Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="expenseName"
                            placeholder="Enter name here..." />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2" className="form-label">
                        Amount
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="number"
                            name="amount"
                            placeholder="Enter amount here..." />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2" className="form-label">
                        Date
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="date"
                            name="date" />
                    </Col>
                </Form.Group>
                <div gap={2} className="form-button">
                    <Button
                        variant="primary"
                        addExpenseData={addExpenseData}>
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
import Form from 'react-bootstrap/Form';
import './Filter.css';

const Filter = () => {
    return (
        <div className="filter-wrapper">
            <h5>Filter by year</h5>
            <Form.Select aria-label="Default select example" className="select-year">
                <option>Open this select menu</option>
                <option value="1">2021</option>
                <option value="2">2022</option>
                <option value="3">2023</option>
                <option value="4">2024</option>
            </Form.Select>
        </div>
    );
};

export default Filter;
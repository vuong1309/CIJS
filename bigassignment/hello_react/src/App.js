import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './App.css';
import Filter from './components/Filter/Filter.js';
import Chart from './components/Chart/Chart.js';
import ExpensesList from './components/ExpensesList/ExpensesList.js'
import AddExpense from './components/AddExpense/AddExpense.js';
import { data } from './mockData.js'
import { useState } from 'react';


const App = () => {

  const [addExpenseForm, setAddExpenseForm] = useState(false);
  const addItemFromApp = (ExpenseItem) => {
    data.push(ExpenseItem);
  }



  return (
    <>
      <Container className="app-container">
        <div gap={2} className="col-md-5 mx-auto my-4">
          <Button
            variant="primary"
            onClick={() => setAddExpenseForm(true)}>
            ADD NEW EXPENSE
          </Button>
        </div>
        {addExpenseForm && <AddExpense closeAddExpenseForm={setAddExpenseForm} addItemFromApp={addItemFromApp} />}
        <Filter />
        <Chart />
        <ExpensesList data={data} />
      </Container>
    </>

  );
}
export default App;

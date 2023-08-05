import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpensesList.css'


const ExpensesList = (props) => {
    return (
        <div className="expenseslist-wrapper">
            {props.data.map((item => <ExpenseItem key={props.data.id} item={item} />))}
        </div>
    );
};

export default ExpensesList;
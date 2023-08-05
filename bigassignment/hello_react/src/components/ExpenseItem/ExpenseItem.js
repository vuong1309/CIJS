import './ExpenseItem.css';
import moment from 'moment';
import { currencyFormatter } from '../../utils.js';

const ExpenseItem = (props) => {
    const { item } = props;
    return (
        <div className="expense-item">
            <div className="item-description">
                <div className="item-date">
                    <div>{moment(item.date).format("MMMM")}</div>
                    <div>{moment(item.date).format("YYYY")}</div>
                    <div className='item-day'>{moment(item.date).format("D")}</div>
                </div>
                <div className="item-title">{item.name}</div>
            </div>
            <div className="item-price">
                <span>{currencyFormatter.format(item.price)}</span>
            </div>
        </div>
    );
};

export default ExpenseItem;
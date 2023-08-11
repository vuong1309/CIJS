import React from 'react';
import './Ticket.css';

const Ticket = () => {

    const ticketData = [
        {
            id: 1,
            name: "October",
            ticketRemain: 0,
            isSoldOut: true,
        },
        {
            id: 2,
            name: "November",
            ticketRemain: 0,
            isSoldOut: true,
        },
        {
            id: 3,
            name: "December",
            ticketRemain: 13,
            isSoldOut: false,
        }
    ];
    return (
        <div className='ticket-wrapper'>
            {ticketData.map(item => {
                return (
                    <div className='ticket-item' key={item.id}>
                        <div className='ticket-month'>
                            <p>{item.name}</p>
                            {item.isSoldOut && <span className='item-isSoldOut'>Sold Out</span>}
                        </div>
                        {item.ticketRemain !== 0 ? <div className='ticket-number'>{item.ticketRemain}</div> : undefined}
                    </div>
                )
            })}
        </div>
    )
};

export default Ticket;
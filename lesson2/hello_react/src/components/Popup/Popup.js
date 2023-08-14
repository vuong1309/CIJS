import { useState } from 'react';
import './Popup.css';
import { useContext } from 'react';
import { TicketContext } from '../../TicketContext.js';

const Popup = () => {

    const { showPopup, handlePopup, ticketInfo, setTicketInfo, countTicket, setCountTicket, loading, setLoading } = useContext(TicketContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTicketInfo({ ...ticketInfo, [name]: value });
        console.log('check ticket num, email:', e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePopup(false);
    }

    if (!showPopup) {
        return undefined;
    }

    return (
        <>
            <div className='popup'>
                <div className='popup-inner'>
                    <div className='popup-header'>
                        <h2>Ticket</h2>
                    </div>
                    <div className="close-btn" onClick={() => handlePopup(false)}>
                        &times; </div>
                    <form onSubmit={handleSubmit}>
                        <label>Tickets, $3 per one</label><br />
                        <input
                            type="text"
                            name="number"
                            value={ticketInfo.number}
                            onChange={handleChange}
                            placeholder='Enter number you want' />
                        <br />
                        <label>Send to</label>
                        <br />
                        <input
                            type="text"
                            name="email"
                            value={ticketInfo.email}
                            onChange={handleChange}
                            placeholder='Enter your email' />
                        <br /><br />
                        <button type="submit"> PAY </button>
                    </form>
                </div>
            </div >
        </>
    );
};

export default Popup;
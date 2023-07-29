import { useState } from 'react';
import './Popup.css';

const Popup = ({ closePopup }) => {

    const [init, setInit] = useState({ ticketNumber: "", email: "" });
    const handleEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInit({ ...init, [name]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Đã đăng ký ${init.ticketNumber} vé, tin nhắn sẽ được gửi tới ${init.email}`);
    }
    return (
        <>
            <div className='popup'>
                <div className='popup-inner'>
                    <div className='popup-header'>
                        <h2>Ticket</h2>
                    </div>
                    <div className="close-btn" onClick={() => closePopup(false)}> &times; </div>
                    <form method='post' onSubmit={handleSubmit}>
                        <label>Tickets, $3 per one</label><br />
                        <input type="text" name="ticketNumber" value={init.ticketNumber} onChange={handleEvent} placeholder='Enter number you want' /><br />
                        <label>Send to</label><br />
                        <input type="text" name="email" value={init.email} onChange={handleEvent} placeholder='Enter your email' /><br /><br />
                        <button type="submit">PAY</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Popup;
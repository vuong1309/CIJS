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
                    <h2>Ticket</h2>
                    <div className="close-btn" onClick={() => closePopup(false)}> X </div>
                    <form method='post' onSubmit={handleSubmit}>
                        <label>Tickets, $3 per one</label><br />
                        <input type="text" name="ticketNumber" value={init.ticketNumber} onChange={handleEvent} /><br />
                        <label>Send to</label><br />
                        <input type="text" name="email" value={init.email} onChange={handleEvent} /><br /><br />
                        <button type="submit">PAY</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Popup;
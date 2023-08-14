import { createContext, useState } from 'react';

//tao context
const TicketContext = createContext();

//tao provider
function TicketProvider({ children }) {

    //tao state cho viec showPopup    
    const [showPopup, setShowPopup] = useState(false);
    //tao state cho gia tri ticket form
    const [ticketInfo, setTicketInfo] = useState({ number: "", email: "" });
    //tao state cho viec so luong ticket con lai
    const [countTicket, setCountTicket] = useState(13);
    //tao state cho loading
    const [loading, setLoading] = useState(false);

    //function handle modal
    const handlePopup = (status) => { setShowPopup(status) };

    const ContextValue = {
        showPopup,
        setShowPopup,
        handlePopup,
        ticketInfo,
        setTicketInfo,
        countTicket,
        setCountTicket,
        loading,
        setLoading,
    };

    return (
        <TicketContext.Provider value={ContextValue}>
            {children}
        </TicketContext.Provider>
    )
}

export { TicketContext, TicketProvider };
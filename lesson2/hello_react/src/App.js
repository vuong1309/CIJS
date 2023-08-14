import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useContext } from 'react';
import { TicketContext, TicketProvider } from './TicketContext.js';
import { useEffect } from 'react';
import Ticket from './components/Ticket/Ticket.js';
import Item from './components/Item/Item.js';
import Popup from './components/Popup/Popup.js';


function App() {

  return (
    <>
      <TicketProvider>
        <Ticket />
        <Item />
        <Popup />
      </TicketProvider>
    </>
  );
}

export default App;

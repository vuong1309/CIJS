import './App.css';
import Header from './components/Header.js';
import Item from './components/Item.js';
import Popup from './components/Popup.js';
import SearchList from './components/SearchList.js';
import { useState } from 'react';


function App() {
  const [popupOpen, setPopupOpen] = useState(false);


  return (
    <>
      <div className='myApp'>
        <div className='myHeader'>
          <Header></Header>
          <Header></Header>
          <Header></Header>
        </div>

        <div className='myItem'>
          <Item onClick={() => { setPopupOpen(true); }}></Item>
          <Item onClick={() => { setPopupOpen(true); }}></Item>
          <Item onClick={() => { setPopupOpen(true); }}></Item>
        </div>

        {popupOpen && <Popup closePopup={setPopupOpen} />}

        <SearchList />
      </div>
    </>
  );
}

export default App;

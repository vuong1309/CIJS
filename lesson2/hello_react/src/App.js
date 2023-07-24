import './App.css';
import './components/Header.css'
import './components/Item.css'
import Header from './components/Header.js';
import Item from './components/Item.js';
import Modal from './components/Modal.js';
import { useState } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className='myApp'>
        <div className='myHeader'>
          <Header></Header>
          <Header></Header>
          <Header></Header>
        </div>

        <div className='myItem'>
          <Item onClick={() => {
            setOpenModal(true);
          }}>
          </Item>
          <Item onClick={() => {
            setOpenModal(true);
          }}>
          </Item>
          <Item onClick={() => {
            setOpenModal(true);
          }}>
          </Item>
        </div>

        {openModal && <Modal closeModal={setOpenModal} />}
      </div>
    </>
  );
}

export default App;

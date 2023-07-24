import './App.css';
import './components/Header.css'
import './components/Item.css'
import Header from './components/Header.js';
import Item from './components/Item.js';
import Modal from './components/Modal.js';
import { useState } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
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
            setModalOpen(true);
          }}>
          </Item>
          <Item onClick={() => {
            setModalOpen(true);
          }}>
          </Item>
          <Item onClick={() => {
            setModalOpen(true);
          }}>
          </Item>
        </div>

        {modalOpen && <Modal closeModal={setModalOpen} />}
      </div>
    </>
  );
}

export default App;

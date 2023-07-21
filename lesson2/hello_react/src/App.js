import './App.css';
import Header from './components/Header.js';
import Item from './components/Item.js';

function App() {
  return (
    <>
      <div className='myHeader'>
        <Header></Header>
        <Header></Header>
        <Header></Header>
      </div>

      <div className='myItem'>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>


    </>
  );
}

export default App;

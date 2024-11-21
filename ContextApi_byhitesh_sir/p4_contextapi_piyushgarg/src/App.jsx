import './App.css'
import Item from './component/Item';
import Cart from './component/Cart'

function App() {
 

  return (
    <div className='app'>
      {/* <h1>Hello ji to kaise ho aap log</h1> */}
      <Item name="MacBook Pro" price={100000}/>
      <Item name="Pendrive" price={4000} />
      <Item name="Mobile" price={35000} />
      {/* <Item name="Bluetooth" price={4500} /> */}
      <Cart />
    </div>
  )
}

export default App

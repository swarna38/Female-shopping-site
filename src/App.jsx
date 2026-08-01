import { useState } from 'react';

import Hero from './all-components/hero/Hero'
import Navbar from './all-components/navbar/Navbar'
import './App.css'
import Products from './all-components/products/Products';

function App() {
  const [coins, setCoins] = useState(0);
  const handelSetCoins = () => {
    setCoins(coins + 60000);
  }


  return (
    <>
      
        <Navbar coins={coins}></Navbar>
        <Hero handelSetCoins={handelSetCoins}></Hero>
        <Products></Products>
              
    </>
  )
}

export default App

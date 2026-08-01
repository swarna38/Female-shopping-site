import { useState } from 'react';

import Hero from './all-components/hero/Hero'
import Navbar from './all-components/navbar/Navbar'
import './App.css'

function App() {
  const [coins, setCoins] = useState(0);
  const handelSetCoins = () => {
    setCoins(coins + 60000);
  }


  return (
    <>
      
        <Navbar coins={coins}></Navbar>
        <Hero handelSetCoins={handelSetCoins}></Hero>
              
    </>
  )
}

export default App

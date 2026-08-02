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
    const[showSelected, setShowSelected]= useState(false)


    //all selected product
    const [selectedProduct, setSelectedProduct] = useState([  ]);
    const handelSelectedProduct = product => {
      //check coin available or not 
        if(coins < product.price){
          alert('not enough mony');
          return;
        }
        //check product already selected or not 
        const isSelectedProducts = selectedProduct.find(p => p.id === product.id)
        if(isSelectedProducts){
          alert('product is already selected');
          return ;
        }
        setSelectedProduct([ ...selectedProduct, product]);

        //coins cut
        setCoins(coins - product.price);
        alert(`${product.name} is successfully added`);
    }

    const handelRemoveProduct = id => {
      const productToRemove = selectedProduct.find(p => p.id === id) ;
      const updateSelectedProduct = selectedProduct.filter(p => p.id !== id);
      setSelectedProduct(updateSelectedProduct);


      if(productToRemove){
        setCoins(coins + productToRemove.price);
      }

    }


  return (
    <>
      
        <Navbar coins={coins}></Navbar>
        <Hero handelSetCoins={handelSetCoins}></Hero>
        <Products 
        selectedProduct={selectedProduct}
        handelSelectedProduct={handelSelectedProduct}
        showSelected={showSelected}
        setShowSelected={setShowSelected}
        handelRemoveProduct={handelRemoveProduct}
        ></Products>
              
    </>
  )
}

export default App

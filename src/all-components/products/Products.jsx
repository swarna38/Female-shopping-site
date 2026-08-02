import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Selected from "../selected-products/Selected";

const Products = ({ handelSelectedProduct, selectedProduct, showSelected, setShowSelected }) => {
    //all product
    const [products, setProducts] = useState([]);
     useEffect(() => {
        fetch('allProducts.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    //all category
    const[selectedCategory, setSelectedCategory] = useState('Saree');

    //check products category = selectedCategory filtering
    const filterProduct = products.filter(item => 
        item.category.toLowerCase() === selectedCategory.toLocaleLowerCase())

    return (
        <div className="container mx-auto my-12">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="font-bold text-2xl">{!showSelected ? (' Choose Your Products') : ('Selected Your product') }</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                    <button 
                        onClick={() => setSelectedCategory('Saree')}
                        className={`px-9 py-2 rounded-lg font-semibold tracking-wider transition duration-300 ${
                            selectedCategory === 'Saree' 
                                ? "bg-indigo-500 text-white" 
                                : "bg-transparent border border-indigo-500 text-black"
                        }`}
                    >
                        Saree
                    </button>

                    <button 
                        onClick={() => setSelectedCategory('Jama')}
                        className={`px-9 py-2 rounded-lg font-semibold tracking-wider transition duration-300 ${
                            selectedCategory === 'Jama' 
                                ? "bg-indigo-500 text-white" 
                                : "bg-transparent border border-indigo-500 text-black"
                        }`}
                    >
                        Jama
                    </button>

                    <button
                        onClick={() => setSelectedCategory('Jewelry')}
                        className={`px-9 py-2 rounded-lg font-semibold tracking-wider ${
                                selectedCategory === 'Jewelry' 
                                ? "bg-indigo-500 text-white" 
                                : "bg-transparent border border-indigo-500 text-black"

                                }`}>
                        Jewelry
                    </button>

                    <button 
                    
                     onClick={() => setSelectedCategory('Shoes')}
                        className={`px-9 py-2 rounded-lg font-semibold tracking-wider ${
                                    selectedCategory === 'Shoes'
                                     ? "bg-indigo-500 text-white" 
                                     : "bg-transparent border border-indigo-500 text-black"
                                }`}>
                        Shoes
                    </button>

                    <button 
                        onClick={() => setSelectedCategory('Kids')}
                        className={`px-9 py-2 rounded-lg font-semibold tracking-wider ${
                                    selectedCategory === 'Kids'
                                    ? "bg-indigo-500 text-white" 
                                    : "bg-transparent border border-indigo-500 text-black"
                                }`}>
                        Kids
                    </button>

                    <button
                    // btn toggle if selected btn initially false then btn click it is working true and double click selected btn working flase
                    onClick={() => setShowSelected(!showSelected)}

                    className="px-9 py-2 rounded-lg font-semibold tracking-wider ml-6 bg-indigo-500 text-white shadow">Selected Product {selectedProduct.length}                      
                    </button>
                </div>
            </div>
             

             {/* //conditional rendaring if showSelected true or false  */}

             {!showSelected ? (
                  <div className="grid grid-cols-3 gap-8 mt-8">
                 {
                    filterProduct.map(product => <Product
                        key={product.id}
                        product={product}
                        handelSelectedProduct={handelSelectedProduct}
                        ></Product>)
                }
               </div>
             ): (
                <Selected selectedProduct = {selectedProduct} setShowSelected ={setShowSelected}  ></Selected>
             )}
        </div>
    );
};

export default Products;
import { useEffect, useState } from "react";
import Product from "../Product/Product";


const Products = () => {
    const [products, setProducts] = useState([]);
    const[selectedCategory, setSelectedCategory] = useState('Saree')

    useEffect(() => {
        fetch('allProducts.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    //check products category = selectedCategory filtering
    const filterProduct = products.filter(item => item.category.toLowerCase() === selectedCategory.toLocaleLowerCase())

    return (
        <div className="container mx-auto my-12">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="font-bold text-2xl">Choose Your Products</h2>
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
                    <button className="px-9 py-2 rounded-lg font-semibold tracking-wider ml-6 bg-indigo-500 text-white shadow">Selected Product</button>
                </div>
            </div>
             

               <div className="grid grid-cols-3 gap-8 mt-8">
                 {
                    filterProduct.map(product => <Product key={product.id} product={product}></Product>)
                }
               </div>
        </div>
    );
};

export default Products;
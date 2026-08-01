import { useEffect, useState } from "react";
import Product from "../Product/Product";


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('allProducts.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])


    return (
        <div className="container mx-auto my-12">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="font-bold text-2xl">Choose Your Products</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                    <button className="px-9 py-2 rounded-lg bg-indigo-500 text-white font-semibold tracking-wider">
                    Sari
                    </button>

                    <button className="px-9 py-2 rounded-lg border border-blue-600 text-black font-semibold tracking-wider">
                        Jama
                    </button>

                    <button className="px-9 py-2 rounded-lg border border-blue-600 text-black font-semibold tracking-wider">
                        Jewelry
                    </button>

                    <button className="px-9 py-2 rounded-lg border border-blue-600 text-black font-semibold tracking-wider">
                        Shoes
                    </button>

                    <button className="px-9 py-2 rounded-lg border border-blue-600 text-black font-semibold tracking-wider">
                        Kids
                    </button>
                </div>
            </div>
             

               <div className="grid grid-cols-3 gap-8 mt-8">
                 {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
               </div>
        </div>
    );
};

export default Products;
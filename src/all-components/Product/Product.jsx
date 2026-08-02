import { FaStar } from "react-icons/fa"; 
const Product = ({ product, handelSelectedProduct }) => {
    const {name, category, price, quantity, image, rating, description} = product;
    return (
         <div className="border border-gray-200 rounded-2xl p-4 shadow-sm bg-white space-y-3">
            <img className="w-full h-48 object-cover rounded-xl" src={image} alt={name} />
                <h2 className="font-bold text-lg">{name}</h2>
                <div className="flex items-center">
                    <p className="text-gray-600 mr-10 font-medium">Category : {category}</p>
                    <p className="text-gray-600 font-semibold">Price : {price} TK</p>
                </div>
                    <p className="text-gray-600 font-medium">Quantity : {quantity}</p>
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="text-gray-600  font-medium">Rating: {rating} </p>
                        </div>
                        <div className="flex items-center text-indigo-500 gap-0.5">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        </div>
                    </div>
                    <p className="text-gray-600 font-medium">Description: {description}</p>
                   <button 
                   onClick={() => handelSelectedProduct(product)}
                   className="px-9 py-2 rounded-lg border border-indigo-500 text-black font-semibold tracking-wider hover:bg-indigo-500 hover:text-white transition duration-300">
                        Purchase
                    </button>          
        </div>
    );
};

export default Product;
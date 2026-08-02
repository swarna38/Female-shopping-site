 

const Selected = ({ selectedProduct, setShowSelected }) => {
    return (
        <div>
            {
                selectedProduct.length ===  0 ? (
                    <div className="text-center py-10 border-2 border-dashed border-gray-300 rounded-2xl">
                        <p className="text-gray-500 text-lg font-medium">No Product selected yet!</p>
                    </div>
                ):(
                    selectedProduct.map(sp => (<div key={sp.id} className="flex items-center gap-4 border p-3 my-2 rounded-lg">
                            
                            <img src={sp.image} alt={sp.name} className="w-16 h-16 rounded-lg" />
                            
                            <div>
                                <h3 className="font-bold">{sp.name}</h3>
                                <p className="text-gray-500">{sp.price}</p>
                            </div>
                        </div>))
                )
            }
        </div>
    );
};

export default Selected;
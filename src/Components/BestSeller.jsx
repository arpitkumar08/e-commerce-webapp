import React, { useState, useEffect } from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; // Adjust path if needed
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function BestSeller() {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const isAuthenticated = useSelector((state) => {
        console.log(state);
        return state.auth.isAuthenticated
        
    });

    const navigate = useNavigate();


    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        if (!isAuthenticated) {
            toast("Please login to continue");
            navigate("/auth"); // redirect to login page
            return;
        }

        dispatch(addToCart(product));
        toast.success("Item added to cart");
    };

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();

                const formatted = data.map((product) => ({
                    id: product.id,
                    product_title: product.title,
                    product_price: `$${product.price.toFixed(2)}`,
                    product_original_price: `$${(product.price * 1.2).toFixed(2)}`,
                    product_photo: product.image,
                    product_star_rating: product.rating.rate,
                    product_num_ratings: product.rating.count,
                }));

                setAllProducts(formatted);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllProducts();
    }, []);

    return (
        <div className="px-4 py-6 sm:px-6 bg-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">🔥Best Sellers</h2>

            {loading ? (
                <p className="text-center text-gray-500">Loading products...</p>
            ) : allProducts.length === 0 ? (
                <p className="text-center text-red-500">No products available.</p>
            ) : (
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-4 w-max px-1">
                        {allProducts.map((product) => (
                            <div
                                key={product.id}
                                className="w-60 sm:w-64 bg-white rounded-xl shadow-md p-4"
                            >
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <img
                                            src={product.product_photo}
                                            alt={product.product_title}
                                            className="w-full h-40 sm:h-48 object-contain mb-3"
                                        />
                                        <h3 className="text-sm sm:text-base font-semibold line-clamp-2 mb-2">
                                            {product.product_title}
                                        </h3>
                                        <p className="text-green-600 font-bold text-sm sm:text-base">
                                            {product.product_price}
                                        </p>
                                        <p className="text-xs sm:text-sm text-gray-500 line-through">
                                            {product.product_original_price}
                                        </p>
                                        <p className="text-yellow-500 text-xs sm:text-sm mb-3">
                                            ⭐ {product.product_star_rating} (
                                            {product.product_num_ratings})
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-2 mt-auto">
                                        <Button
                                            onClick={() => handleAddToCart(product)}
                                            text="Add to Cart"
                                            className={`${!isAuthenticated ? 'opacity-60' : 'hover:scale-105'}
      bg-black text-white text-sm sm:text-base font-medium px-4 py-2 rounded-md shadow transition duration-300 ease-in-out w-full`}
                                            title={!isAuthenticated ? 'Login to add items to cart' : ''}

                                        />
                                        <Button
                                            text="Buy Now"
                                            className="bg-yellow-500 cursor-pointer text-white text-sm sm:text-base font-medium px-4 py-2 rounded-md shadow hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out w-full"
                                        />

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default BestSeller;

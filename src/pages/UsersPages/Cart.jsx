import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    incrementItem,
    decrementItem,
    removeItem,
    resetCart
} from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { items, totalPrice, cartCount } = useSelector((state) => state.cart);

    const handleBackHome = () => {
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                🛒 Your Cart ({cartCount} items)
            </h1>

            {items.length === 0 ? (
                <div className="text-center space-y-4">
                    <p className="text-gray-600 text-lg">Your cart is empty.</p>
                    <button
                        onClick={handleBackHome}
                        className="bg-black text-white px-4 py-2 rounded hover:bg-black"
                    >
                        Back to Home
                    </button>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-3 gap-6">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white shadow rounded-md p-4 flex items-center justify-between"
                            >
                                <img
                                    src={item.product_photo}
                                    alt={item.product_title}
                                    className="w-20 h-20 object-contain"
                                />
                                <div className="flex-1 ml-4">
                                    <h2 className="font-semibold">{item.product_title}</h2>
                                    <p className="text-green-600">{item.product_price}</p>
                                    <div className="flex items-center mt-2 space-x-2">
                                        <button
                                            onClick={() => dispatch(decrementItem(item.id))}
                                            className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => dispatch(incrementItem(item.id))}
                                            className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => dispatch(removeItem(item.id))}
                                    className="text-red-600 hover:underline ml-4"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-700">
                            Grand Total: <span className="text-green-700">${totalPrice.toFixed(2)}</span>
                        </h2>
                        <div className="flex space-x-4 mt-4 sm:mt-0">
                            <button
                                onClick={() => dispatch(resetCart())}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Clear Cart
                            </button>
                            <button
                                onClick={handleBackHome}
                                className="bg-black text-white px-4 py-2 rounded hover:bg-black"
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;

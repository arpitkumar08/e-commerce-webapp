// src/pages/Checkout.jsx
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import OrderSuccess from "./OrderSuccess";

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.totalPrice);
    const navigate = useNavigate();

    const handleGoHome = () => navigate("/");

    const handlePayment = () => {
        // Simulate successful payment
        toast.success("Payment Successful!");
        navigate("/success");
    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow mt-6">
            <h1 className="text-2xl font-bold mb-4">🛒 Checkout</h1>

            {cartItems.length === 0 ? (
                <p>Your cart is empty. Add something!</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border-b py-4"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.product_photo}
                                    alt={item.product_title}
                                    className="w-16 h-16 object-contain"
                                />
                                <div>
                                    <h2 className="font-semibold">{item.product_title}</h2>
                                    <p className="text-sm text-gray-600">
                                        Qty: {item.quantity}
                                    </p>
                                </div>
                            </div>
                            <p className="font-semibold text-green-600">
                                ${(parseFloat(item.product_price.replace("$", "")) * item.quantity).toFixed(2)}
                            </p>
                        </div>
                    ))}

                    <div className="flex justify-between mt-6 text-lg font-bold">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>

                    <div className="mt-6 flex justify-between">
                        <button
                            onClick={handleGoHome}
                            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                        >
                            Go to Home
                        </button>
                        <button
                            onClick={handlePayment}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;

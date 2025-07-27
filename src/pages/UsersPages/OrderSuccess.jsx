import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetCart } from '../../redux/cartSlice'; // Update path as needed

const OrderSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoHome = () => {
    dispatch(resetCart()); // Optional: clears cart after success
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="text-green-600 text-5xl mb-4">✔️</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for shopping with us. Your order has been placed and is being processed.
        </p>
        <button
          onClick={handleGoHome}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;

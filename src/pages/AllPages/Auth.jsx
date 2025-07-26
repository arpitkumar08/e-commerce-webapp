import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import { AnimatePresence, motion } from 'framer-motion';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#2c2c2c] px-4">
      <div className="flex flex-col justify-center items-center h-[38rem] gap-4 p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm bg-[#D9D9D9]">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={isSignup ? 'signup' : 'login'}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col items-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 italic mb-4">
              {isSignup ? 'Create an Account' : 'Welcome Back!!'}
            </h2>

            {isSignup ? <Signup /> : <Login />}
          </motion.div>
        </AnimatePresence>

        <p className="text-sm text-gray-700 mt-4">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? 'Login' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;

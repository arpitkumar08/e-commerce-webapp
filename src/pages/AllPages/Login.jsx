import React, { useState } from 'react';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';
import { account } from '../../app/config';
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { loginSuccess } from '../../redux/authSlice';
import { resetCart } from '../../redux/cartSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // 1. Authenticate user with your SDK
      await account.createEmailPasswordSession(userData.email, userData.password);

      // 2. Fetch current user info after login
      const user = await account.get();

      // 3. Dispatch login success with real user data
      dispatch(loginSuccess(user));
       dispatch(resetCart());

      toast.success("Login Successful!", {
        position: "top-right",
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      setError("Login failed. Please check your credentials.");
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col justify-center items-center gap-4 w-full"
    >
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={userData.email}
        onChange={handleChange}
        required
        disabled={loading}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={userData.password}
        onChange={handleChange}
        required
        disabled={loading}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button
        text={loading ? "Logging in..." : "Login"}
        disabled={loading}
        className="bg-black text-white text-lg sm:text-xl font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-md hover:shadow-lg transition cursor-pointer duration-300 ease-in-out w-full"
      />
    </form>
  );
};

export default Login;

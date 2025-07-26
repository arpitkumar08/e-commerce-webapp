import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { PiUserCircleLight } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";
import { account } from '../app/config';
import toast from 'react-hot-toast';
import Loading from './Loading';
import { useSelector } from 'react-redux';

function Header() {
    const [profileBtn, setProfileBtn] = useState(false);
    const [userName, setUserName] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const cartCount = useSelector((state) => state.cart.cartCount)
    useEffect(() => {
        const getUser = async () => {
            try {
                const user = await account.get();
                setUserName(user.name);
            } catch (error) {
                setUserName(null);
            }
        };

        getUser();

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleProfile = () => {
        setProfileBtn(prev => !prev);
    };

    const handleLogout = async () => {
        try {
            await account.deleteSession("current");
            toast.success("Logout Successful!", {
                position: "top-right",
            });
            setUserName(null);
            setProfileBtn(false);
            navigate("/auth");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    if (loading) return <Loading />;

    return (
        <header className='flex flex-wrap items-center justify-between gap-4 p-4 bg-white shadow-md'>
            {/* Logo */}
            <NavLink to='/' className='w-full sm:w-auto'>
                <img
                    src="/image/shopping-logo-ecommerce-logotype-shooping-260nw-1978607771.webp"
                    alt="logo"
                    className='w-40 sm:w-48'
                />
            </NavLink>

            {/* Search Input */}
            <div className='w-full sm:w-1/2'>
                <input
                    type="search"
                    placeholder='Search Items...'
                    className='border border-gray-400 rounded-xl p-2 w-full text-sm sm:text-base'
                />
            </div>

            {/* Profile & Cart Section */}
            <div className='w-full sm:w-auto flex items-center gap-3 relative justify-end'>
                {/* Cart */}
                <div className="relative cursor-pointer">
                    <FaCartShopping className='h-6 w-6 sm:h-8 sm:w-8' />
                    <span className="absolute -top-1.5 -right-2 bg-red-500 text-white rounded-full text-xs px-1.5">
                        {cartCount}
                    </span>
                </div>

                {/* Profile Info */}
                <div className='hidden sm:block text-right'>
                    <p className='text-sm font-medium'>Hello,</p>
                    <p className='text-base font-semibold'>{userName || 'User'}</p>
                </div>

                {/* Profile Icon */}
                <PiUserCircleLight
                    className='h-10 w-10 sm:h-12 sm:w-12 cursor-pointer'
                    onClick={handleProfile}
                    aria-haspopup="true"
                    aria-expanded={profileBtn}
                    aria-label="User profile"
                />

                {/* Dropdown */}
                {profileBtn && (
                    <div className="absolute top-14 right-0 bg-white border shadow-md p-4 rounded-xl z-50 w-32 sm:w-36">
                        {userName ? (
                            <button
                                onClick={handleLogout}
                                className="w-full text-left text-sm cursor-pointer font-medium text-red-500 hover:underline"
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    setProfileBtn(false);
                                    navigate("/auth");
                                }}
                                className="w-full text-left text-sm font-medium text-green-600 hover:underline"
                            >
                                Login
                            </button>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;

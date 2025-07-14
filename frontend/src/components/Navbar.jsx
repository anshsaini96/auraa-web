import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      {/* Logo + Text */}
      <Link to="/" className="flex items-center gap-2">
        <img src={assets.auraa_logo} className="w-10 sm:w-14" alt="Auraa Logo" />
        <span className="text-xl sm:text-2xl font-semibold text-gray-800 tracking-wide hover:text-[#B088F9] transition-colors duration-200">Auraa</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="hover:text-[#B088F9] transition-colors">HOME</NavLink>
        <NavLink to="/collection" className="hover:text-[#B088F9] transition-colors">COLLECTION</NavLink>
        <NavLink to="/about" className="hover:text-[#B088F9] transition-colors">ABOUT</NavLink>
        <NavLink to="/contact" className="hover:text-[#B088F9] transition-colors">CONTACT</NavLink>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />

        {/* Profile */}
        <div className="group relative">
          <img onClick={() => token ? null : navigate('/login')} className="w-5 cursor-pointer" src={assets.profile_icon} alt="Profile" />
          {token &&
            <div className="group-hover:block hidden absolute right-0 pt-4 z-10">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
                <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          }
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
          <p className="absolute right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
        </Link>

        {/* Mobile Menu Icon */}
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="Menu" />
      </div>

      {/* Sidebar Menu (Mobile) */}
      <div className={`fixed top-0 right-0 bottom-0 z-50 bg-white transition-all duration-300 ease-in-out ${visible ? 'w-full' : 'w-0 overflow-hidden'}`}>
        <div className="flex flex-col text-gray-600 pt-4">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-4 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 border hover:bg-gray-100" to="/">HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 border hover:bg-gray-100" to="/collection">COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 border hover:bg-gray-100" to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 border hover:bg-gray-100" to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

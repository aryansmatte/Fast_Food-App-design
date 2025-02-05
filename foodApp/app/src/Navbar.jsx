import React from 'react';
import { Link } from 'react-router-dom';  // Corrected import

const Navbar = ({cartItems}) => {
  const cartItemCount = Array.isArray(cartItems) ? cartItems.reduce((acc,item)=> acc+item.quantity,0):0;
  return (
    <header className='flex justify-between items-center px-8 py-4'>
      <div className='flex items-center space-x-4'>
        <span className='text-xl font-bold '>FigiFood</span>
      </div>
      <nav className='space-x-8 md:flex'>
        <Link to="/" className='hover:text-yellow-500 font-bold'>Home</Link>  
        <Link to="/menu" className='hover:text-yellow-500 font-bold'>Menu</Link>  
        {/* <Link to="/" className='hover:text-yellow-500 font-bold'>Home</Link>   */}
      </nav>
      <div className='space-x-4 md:flex relative'>
        <span className='font-bold'>9047-102-125</span>
          <Link to="/cart"><i className='fas fa-shopping-cart'></i>
          {cartItemCount>0 && (
            <span className='absolute -top-2 right-2 bg-yellow-500 text-white rounded-full px-2 py-1 text-xs'>
              {cartItemCount}
            </span>
          )}
          </Link> {/* Corrected syntax */}
        
      </div>
    </header>
  );
}

export default Navbar;

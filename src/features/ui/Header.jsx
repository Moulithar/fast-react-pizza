import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../order/SearchOrder';
import UserName from '../user/UserName';

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-lime-500 px-4 py-3 border-b-2 border-stone-200'>
      <Link to="/"className='uppercase  tracking-wider ' >Fast React Pizza Co.</Link>

      <SearchOrder />
      <UserName />

    </header>
  );
};


export default Header;
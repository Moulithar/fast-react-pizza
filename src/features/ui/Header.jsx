import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../order/SearchOrder';

const Header = () => {
  return (
    <header className='bg-lime-500'>
      <Link to="/">Fast React Pizza Co.</Link>

      <SearchOrder />

    </header>
  );
};


export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="mx-auto px-10 py-5">
      <Link to="/" className="inline-flex items-center space-x-3 hover:opacity-80 transition duration-150">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="w-14" alt="Github" />
        <h1 className="text-xl font-bold text-gray-800">Github Search Users</h1>
      </Link>
    </header>
  );
};

export default Header;
import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useUsers } from '../../hooks';

const Header = () => {
  const { search, setSearch, handleSubmit } = useUsers();

  return (
    <div className="flex pt-8 mx-auto justify-center w-3/4">
      <form onSubmit={handleSubmit} className="w-full lg:w-1/2">
        <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
          <input
            className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 w-full"
            type="text"
            placeholder="Search user"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <MagnifyingGlassIcon
            className="inline-flex mx-3 w-8 bg-gray-900 text-white rounded-full p-1 cursor-pointer"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default Header;
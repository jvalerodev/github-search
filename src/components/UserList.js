import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../features';
import { Link } from 'react-router-dom';
import { EyeIcon } from '@heroicons/react/24/outline'

const UserList = () => {
  const users = useSelector(selectUsers);
  console.log(users);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {users.map((user) => (
        <div key={user.id} className="flex mt-10 bg-gray-100 p-5 rounded-md space-x-4">
          <div className="">
            <img src={user.avatar_url} alt="Profile" className="h-28 rounded-full" />
          </div>
          <div className="relative flex-grow">
            <p className="text-xl text-blue-600 font-bold pt-5 hover:text-blue-500 transition duration-100 cursor-pointer">{user.login}</p>
            <div className="absolute bottom-0 right-0">

              <Link to={`/user/${user.login}`} className="flex items-center justify-center bg-blue-600 text-white text-sm py-2 px-5 rounded-md hover:bg-blue-500 transition duration-100">
                <EyeIcon className="h-5 mr-1" />
                View Profile
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
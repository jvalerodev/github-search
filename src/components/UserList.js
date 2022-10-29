import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../features';
import { Link } from 'react-router-dom';
import { EyeIcon } from '@heroicons/react/24/outline'

const UserList = () => {
  const users = useSelector(selectUsers);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
      {users.map(({ id, avatar_url, login }) => (
        <div key={id} className="flex items-center mt-10 bg-gray-100 p-5 rounded-md space-x-10">
          <div className="w-1/3">
            <img src={avatar_url} alt="Profile" className="w-full rounded-full" />
          </div>

          <div className="flex flex-col flex-grow justify-between w-2/3">
            <Link to={`/user/${login}`} className="text-xl text-blue-600 font-bold pt-5 hover:text-blue-500 transition duration-100 cursor-pointer">
              {login}
            </Link>

            <div className="flex justify-end pt-3 md:pt-5">
              <Link to={`/user/${login}`} className="flex items-center justify-center bg-blue-600 text-white text-xs py-2 px-4 rounded-md hover:bg-blue-500 transition duration-100">
                <EyeIcon className="h-5 mr-1" />
                <p>View</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
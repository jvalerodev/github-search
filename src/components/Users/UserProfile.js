import React from 'react';
import { UsersIcon, MapPinIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const UserProfile = ({ user, organizations }) => {
  const { avatar_url, name, login, bio, followers, following, company, location } = user;

  return (
    <div className="flex flex-col xl:w-1/4 items-center xl:items-start">
      <div className="xl:w-3/4 flex justify-center">
        <img src={avatar_url} alt="Avatar" className="w-1/2 xl:w-full rounded-full" />
      </div>

      <p className="mt-3 text-3xl text-gray-900 font-bold">{name}</p>

      <p className="mt-1 text-lg text-gray-700">{login}</p>

      <button className="mt-3 bg-gray-900 text-white py-2 px-5 w-3/4 rounded-md hover:bg-gray-800 transiton duration-100">Follow</button>

      <p className="mt-4 text-gray-900">{bio}</p>

      <div className="flex items-center space-x-2 mt-5">
        <UsersIcon className="h-5 text-gray-900" />
        <p className="text-gray-800 text-sm">
          <span className="font-bold">{followers}</span> followers -
          <span className="font-bold"> {following}</span> following
        </p>
      </div>

      {company && (
        <div className="flex items-center space-x-2 mt-3">
          <BriefcaseIcon className="h-5 text-gray-800" />
          <p className="text-gray-900 text-sm">{company}</p>
        </div>
      )}

      {location && (
        <div className="flex items-center space-x-2 mt-3">
          <MapPinIcon className="h-5 text-gray-800" />
          <p className="text-gray-900 text-sm">{location}</p>
        </div>
      )}

      {organizations?.length > 0 && (
        <>
          <p className="mt-10 text-xl font-bold text-gray-800">Organizations</p>

          <div className="flex space-x-3 mt-5">
            {organizations.map(({ id, avatar_url }) => (
              <div key={id}>
                <img src={avatar_url} alt="Organization" className="h-10 rounded-md cursor-pointer hover:opacity-80" />
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
};

export default UserProfile;
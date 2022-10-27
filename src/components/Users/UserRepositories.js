import React from 'react';
import { StarIcon } from '@heroicons/react/24/outline';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const UserRepositories = ({ repos }) => {
  return (
    <div className="flex flex-col flex-grow space-y-5 mt-16 lg:mt-0">
      <h1 className="font-bold text-3xl text-gray-800 mb-3">Repositories</h1>

      {repos.length === 0 && <p>This user doesn't have any repository yet.</p>}

      {repos.map(({ id, name, description, visibility, html_url, language, stargazers_count, updated_at }) => (
        <div key={id} className="py-5 px-10 bg-gray-100">
          <div className="flex justify-between">
            <div className="flex items-center space-x-3">
              <a href={html_url} target="_blank" rel="noreferrer" className="text-xl font-bold text-blue-600 hover:text-blue-500 transition duration-100">{name}</a>

              <span className="text-xs capitalize text-gray-500 py-1 px-3 border-2 rounded-full border-gray-300">{visibility}</span>
            </div>

            <button className="flex items-center bg-gray-800 py-2 px-4 text-sm text-white rounded-md space-x-2 hover:bg-gray-700 transition duration-100">
              <StarIcon className="h-5" />

              <p>Star</p>
            </button>
          </div>

          <p className="text-sm text-gray-600 mt-3">{description}</p>

          <div className="mt-4 flex items-center text-gray-600 space-x-5">
            <div className="flex items-center space-x-1">
              <InformationCircleIcon className="h-4" />

              <p className="text-sm">{language}</p>
            </div>

            <div className="flex items-center space-x-1">
              <StarIcon className="h-4" />

              <p className="text-sm">{stargazers_count}</p>
            </div>

            <p className="text-xs text-gray-600">Updated on {new Date(updated_at).toLocaleDateString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserRepositories;
import React from 'react';
import UserList from '../components/UserList';
import { useSelector } from 'react-redux';
import { selectUsers, selectCount } from '../features';

const UsersListContainer = () => {
  const users = useSelector(selectUsers);
  const count = useSelector(selectCount);

  if (count === 0) {
    return <p className="mt-10 text-center text-gray-800">Users not found.</p>;
  }

  return (
    <>

      {users.length === 0 ? (
        <p className="mt-10 text-center text-gray-800">Type the user you want to search for.</p>
      ) : (
        <div className="px-10">
          <h1 className="mt-14 text-lg text-gray-600">Results:</h1>
          <UserList />
        </div>
      )}
    </>
  );
};

export default UsersListContainer;
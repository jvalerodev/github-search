import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../features';
import Layout from '../components/Layout/Layout';
import UserList from '../components/UserList';

const Home = () => {
  const users = useSelector(selectUsers);

  return (
    <Layout>
      <div className="w-3/4 mx-auto">
        {(users.length > 0) && (
          <>
            <h1 className="mt-14 text-lg text-gray-600">Results:</h1>
            <UserList />
          </>
        )}
      </div>
    </Layout>
  );
};

export default Home;
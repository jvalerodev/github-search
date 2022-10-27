import React from 'react';
import Layout from '../components/Layout/Layout';
import InputSearch from '../components/Users/InputSearch';
import UsersListContainer from '../components/UsersListContainer';

const Home = () => {
  return (
    <Layout>
      <InputSearch />

      <UsersListContainer />
    </Layout>
  );
};

export default Home;
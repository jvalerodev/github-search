import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import UserProfile from '../components/Users/UserProfile';
import UserRepositories from '../components/Users/UserRepositories';
import { useUsers } from '../hooks';

const User = () => {
  const { id } = useParams();
  const { user, getUser, repositories, getRepositories, organizations, getOrganizations } = useUsers();

  useEffect(() => {
    const getUserData = async () => {
      if (id) {
        await getUser(id);
        await getRepositories(id);
        await getOrganizations(id);
      }
    };

    getUserData();
  }, [id]);

  return (
    <Layout>
      <div className="flex flex-col xl:flex-row p-10 rounded-md justify-between mt-10">
        {user && <UserProfile user={user} organizations={organizations} />}

        {repositories && <UserRepositories repos={repositories} />}
      </div>
    </Layout>
  );
};

export default User;
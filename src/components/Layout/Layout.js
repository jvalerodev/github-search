import React from 'react';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../features';
import InputSearch from '../Users/InputSearch';
import Spinner from '../Shared/Spinner';

const Layout = ({ children }) => {
  const loading = useSelector(selectLoading);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto">

        <InputSearch />

        {loading && <Spinner loading={loading} />}

        <main className="mt-20">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
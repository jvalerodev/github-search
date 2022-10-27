import React from 'react';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../features';
import Spinner from '../Shared/Spinner';
import Header from './Header';

const Layout = ({ children }) => {
  const loading = useSelector(selectLoading);

  return (
    <div className="min-h-screen">

      <div className="container w-3/4 md:w-full mx-auto">
        <Header />

        {loading && <Spinner loading={loading} />}

        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
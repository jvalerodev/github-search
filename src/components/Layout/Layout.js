import React from 'react';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../features';
import Spinner from '../Shared/Spinner';
import Header from './Header';

const Layout = ({ children }) => {
  const loading = useSelector(selectLoading);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
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
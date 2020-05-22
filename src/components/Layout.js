import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import AuthContext, { userQuery } from './AuthContext';
import Footer from './Footer';
import Header from './Header';
import './styles.scss';

const pages = [
  { displayName: 'Collect Data', url: '/collect-data' },
  { displayName: 'Explore Data', url: '/explore-data' },
  { displayName: 'Build Apps', url: '/build-apps' },
  { displayName: 'Automate Workflows', url: '/automate-workflows' },
  { displayName: 'Developer Docs', url: '/docs' },
];

const Layout = ({ children }) => {
  const { loading, error, data } = useQuery(userQuery);

  const authDetails =
    !loading && !error
      ? {
          isAuthenticated: !!data?.actor?.user?.id,
          user: { ...data?.actor?.user },
        }
      : { isAuthenticated: false, user: null };

  return (
    <AuthContext.Provider value={authDetails}>
      <div className="Layout">
        <Header pages={pages} />
        <main>{children}</main>
        <Footer pages={pages} />
      </div>
    </AuthContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

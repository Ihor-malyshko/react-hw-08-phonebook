import React from 'react';
import AppBar from './AppBar';

const styles = {
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 15px',
  },
};

const Layout = ({ children }) => (
  <div style={styles.container}>
    <AppBar />
    {children}
  </div>
);

export default Layout;

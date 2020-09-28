import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = ({ isAuthenticated }) => (
  <nav>
    {routes.map(
      route =>
        ((!isAuthenticated && !route.private) ||
          (isAuthenticated && !route.restricted)) && (
          <NavLink
            exact={route.exact}
            key={route.label}
            to={route.path}
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            {route.label}
          </NavLink>
        ),
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
